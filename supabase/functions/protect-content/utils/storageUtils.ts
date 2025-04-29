
import { createClient } from '@supabase/supabase-js';
export async function uploadToStorage(
  protectedContent: string,
  uploadPath: string,
  mediaType: string,
  supabaseClient: ReturnType<typeof createClient>
) {
  const base64Data = protectedContent.split(',')[1];
  const binaryData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));

  console.log('Uploading protected content to storage...');
  const { error: uploadError } = await supabaseClient
    .storage
    .from('content')
    .upload(uploadPath, binaryData, {
      contentType: mediaType === 'video' ? 'video/mp4' : 'image/png',
      upsert: true
    });

  if (uploadError) {
    throw new Error(`Upload failed: ${uploadError.message}`);
  }

  const { data: urlData } = supabaseClient
    .storage
    .from('content')
    .getPublicUrl(uploadPath);

  return { protectedUrl: urlData.publicUrl };
}
