import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nkujsraxertssgrmttjd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rdWpzcmF4ZXJ0c3Nncm10dGpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NDg4NjksImV4cCI6MjAyNzIyNDg2OX0.KyfSVFKCwIeI5zYw9hd4rX7ZFEZ7VibzJhIkT-jnO18";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
