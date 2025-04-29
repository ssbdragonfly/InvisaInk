import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.37.0';
import { processImage } from "./utils/imageProcessor.ts";
import { processVideo } from "./utils/videoProcessor.ts";
import { uploadToStorage } from "./utils/storageUtils.ts";
import { validateRequest } from "./utils/validation.ts";
import type { RequestBody } from "./types.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { user, requestBody } = await validateRequest(req, supabaseClient);

    const filename = `${crypto.randomUUID()}.${requestBody.mediaType === 'video' ? 'mp4' : 'png'}`;
    const uploadPath = `protected/${user.id}/${filename}`;
    
    console.log(`Starting ${requestBody.mediaType} protection process...`);
    let protectedContent = requestBody.mediaData;

    if (requestBody.mediaType === 'video') {
      protectedContent = await processVideo(protectedContent, requestBody);
    } else {
      protectedContent = await processImage(protectedContent, requestBody);
    }

    const { protectedUrl } = await uploadToStorage(protectedContent, uploadPath, requestBody.mediaType, supabaseClient);

    const { data: dbData, error: dbError } = await supabaseClient
      .from('protected_content')
      .insert([{
        user_id: user.id,
        title: requestBody.title,
        description: requestBody.description,
        media_type: requestBody.mediaType,
        original_url: 'user_upload',
        protected_url: protectedUrl,
        status: 'completed',
        protection_settings: {
          ...(requestBody.mediaType === 'video' 
            ? { frameProtectionStrength: requestBody.frameProtectionStrength }
            : {
                aiDisruptionStrength: requestBody.aiDisruptionStrength,
                styleProtectionStrength: requestBody.styleProtectionStrength,
              }),
          addWatermark: requestBody.addWatermark,
          watermarkText: requestBody.addWatermark ? requestBody.watermarkText : null,
          watermarkVisible: requestBody.watermarkVisible,
          addMetadata: requestBody.addMetadata,
          version: '1.0.1'
        }
      }])
      .select()
      .single();

    if (dbError) throw new Error(`Database operation failed: ${dbError.message}`);

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          id: dbData.id,
          protected_url: protectedUrl,
          protection_settings: dbData.protection_settings
        }
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );
  } catch (error) {
    console.error('Error in protect-content function:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400
      }
    );
  }
});
