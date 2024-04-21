import React, { useState, useEffect } from 'react';
import './App.css';
import { getTeams } from './supabaseClient.js';
import { getPlayers } from './supabaseClient';

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
          <li key={index}>{player.ppg_leader}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;