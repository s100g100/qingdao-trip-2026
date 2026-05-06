import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { supabaseAnonKey, supabaseConfigured, supabaseUrl } from './config'

let client: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  if (!supabaseConfigured) return null
  if (!client) client = createClient(supabaseUrl!, supabaseAnonKey!)
  return client
}
