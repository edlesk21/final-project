import React, { useState, useEffect } from 'react';
import './App.css';
import { getTeams } from './supabaseClient.js';
import { getPlayers } from './supabaseClient';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

function App() {
  const [teams, setTeams] = useState([]);
  const [leaderIds, setLeaderIds] = useState([]);

  // Fetch teams
  useEffect(() => {
    getTeams().then(fetchedTeams => {
      setTeams(fetchedTeams);
    });
  }, []);

  // Fetch leader IDs
  useEffect(() => {
    getPlayers().then(fetchedIds => {
      setLeaderIds(fetchedIds);
    });
  }, []);

  return (
    <div className="App">
      <button onClick={() => getTeams().then(setTeams)}>Generate NBA Team</button>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>{team.full_name} - {team.conference} - {team.division}</li>
        ))}
      </ul>
      <h2>Leader IDs</h2>
      <ul>
        {leaderIds.map((player, index) => (
          <li key={index}>{player.ppg_leader} - {player.ppg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;