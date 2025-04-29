
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();

    if (!prompt) {
      throw new Error('Missing prompt parameter');
    }

    console.log("Received prompt:", prompt);

    const systemContext = `You are an AI advisor specializing in digital content protection. 
    You provide advice on how creators can protect their visual content from unauthorized AI scraping and training.
    Focus on practical advice about visual perturbations, metadata tagging, watermarking, and legal considerations 
    for content protection. Keep responses focused on currently implemented features.`;

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: systemContext }]
          },
          {
            role: 'model',
            parts: [{ text: 'I understand. I am an AI advisor specializing in digital content protection. How can I help you today?' }]
          },
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.4,
          topK: 32,
          topP: 0.95,
          maxOutputTokens: 800,
        }
      })
    });

    const data = await response.json();
    
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error('No response generated from Gemini API');
    }

    const advisorResponse = data.candidates[0].content.parts[0].text;
    
    console.log("AI response generated successfully");

    return new Response(
      JSON.stringify({ 
        success: true, 
        response: advisorResponse 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Error in AI-advisor function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'An error occurred while processing your request' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
