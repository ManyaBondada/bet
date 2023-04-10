import { createClient } from '@supabase/supabase-js'

const URL = 'https://fpoewewsrbkdsepcwlvh.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwb2V3ZXdzcmJrZHNlcGN3bHZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNDEyNzcsImV4cCI6MTk5NjcxNzI3N30.5ivUbtN8Yhtgl-5AEvkdZF5GxvqS70Go3zuHAdvagnU';
export const supabase = createClient(URL, API_KEY);



