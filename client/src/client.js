import { createClient } from '@supabase/supabase-js'

const URL = 'https://ozkifsofxewketdnbjqj.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96a2lmc29meGV3a2V0ZG5ianFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTY2MjcsImV4cCI6MTk5NjIzMjYyN30.Qci-QpuzFhDLjewfLzRE17V2Fc0dLCUPstQf0WkdguA';
export const supabase = createClient(URL, API_KEY);



