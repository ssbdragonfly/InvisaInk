import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zcwpridzfddntfomcctd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpjd3ByaWR6ZmRkbnRmb21jY3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwOTM1NjUsImV4cCI6MjA2MDY2OTU2NX0.kDmxSM65eI9rzdBWx2wTU_eQcXtEa3KFC7kgGxU_JCU";


export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);