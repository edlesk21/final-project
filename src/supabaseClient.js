import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wjnqkzmmtlctjpkdwldo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqbnFrem1tdGxjdGpwa2R3bGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NjA1NTAsImV4cCI6MjAyOTEzNjU1MH0.0woPXQQGqa3IY223dbzaP-sp6HK8p25ttObTcbUUnJc'
const supabase = createClient(supabaseUrl, supabaseKey)