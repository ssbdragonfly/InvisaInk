
import { createClient } from '@supabase/supabase-js';
import type { RequestBody } from '../types.ts';

export async function validateRequest(req: Request, supabaseClient: ReturnType<typeof createClient>) {
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) {
    throw new Error('Missing Authorization header');
  }
  
  const token = authHeader.replace('Bearer ', '');
  const { data: { user }, error: userError } = await supabaseClient.auth.getUser(token);
  
  if (userError || !user) {
    throw new Error('Invalid token or user not found');
  }

  const requestBody = await req.json() as RequestBody;
  if (!requestBody.mediaData || !requestBody.title) {
    throw new Error('Missing required fields');
  }

  return { user, requestBody };
}
