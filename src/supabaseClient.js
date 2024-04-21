import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js@2.7.1'
const supabaseUrl = 'https://wjnqkzmmtlctjpkdwldo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqbnFrem1tdGxjdGpwa2R3bGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NjA1NTAsImV4cCI6MjAyOTEzNjU1MH0.0woPXQQGqa3IY223dbzaP-sp6HK8p25ttObTcbUUnJc'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getTeams(){
    let { data: teams, error } = await supabase
    .from('teams')
    .select('*')
    
    for (let team of teams) {
        let teamList = document.getElementById('teams');
        teamList.innerHTML += `<li>${team.full_name} - ${team.confrence} - ${team.division}</li>`;
      }
}

getTeams();