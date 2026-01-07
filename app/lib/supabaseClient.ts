import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// We pass the <Database> generic here so the client knows your table structure
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);