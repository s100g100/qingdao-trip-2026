export const ACCESS_PASSWORD = 'sina2026'
export const PHOTOS_BUCKET = 'photos'
export const MAX_IMAGE_DIM = 1600
export const IMAGE_QUALITY = 0.82

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as
  | string
  | undefined
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined
export const supabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)
