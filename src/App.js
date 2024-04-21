import React, { useState, useEffect } from 'react';
import './App.css';
import { getTeams } from './supabaseClient.js';
import { getPlayers } from './supabaseClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Container, Row, Col, Card } from 'react-bootstrap';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

function TeamCard({ team, player }) {
  return (
    <Col xs={12} md={4} className="mb-3">
      <Card style={{ backgroundColor: '#D2B48C', borderColor: 'black', borderWidth: '2px', borderStyle: 'solid'}}>
        <Card.Header className="text-center" style={{ fontWeight: 'bold', backgroundColor:'#E5D3B3'}}>{`${team.full_name} | ${team.conference} | ${team.division}`}</Card.Header>
        <ListGroup variant="flush">
          {player ? (
            <ListGroup.Item>
              Points: {player.ppg_leader} - {player.ppg} PPG
            </ListGroup.Item>
          ) : (
            <ListGroup.Item>No Player Data</ListGroup.Item>
          )}
        </ListGroup>
        <ListGroup variant="flush">
          {player ? (
            <ListGroup.Item>
              Rebounds: {player.rpg_leader} - {player.rpg} RPG
            </ListGroup.Item>
          ) : (
            <ListGroup.Item>No Player Data</ListGroup.Item>
          )}
        </ListGroup>
        <ListGroup variant="flush">
          {player ? (
            <ListGroup.Item>
              Assists: {player.apg_leader} - {player.apg} APG
            </ListGroup.Item>
          ) : (
            <ListGroup.Item>No Player Data</ListGroup.Item>
          )}
        </ListGroup>
        <ListGroup variant="flush">
          {player ? (
            <ListGroup.Item>
              Steals: {player.spg_leader} - {player.apg} SPG
            </ListGroup.Item>
          ) : (
            <ListGroup.Item>No Player Data</ListGroup.Item>
          )}
        </ListGroup>
        <ListGroup variant="flush">
          {player ? (
            <ListGroup.Item>
              Blocks: {player.bpg_leader} - {player.apg} BPG
            </ListGroup.Item>
          ) : (
            <ListGroup.Item>No Player Data</ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    </Col>
  );
}

function App() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getTeams().then(fetchedTeams => {
      setTeams(fetchedTeams);
      getPlayers().then(fetchedPlayers => {
        setPlayers(fetchedPlayers);
      });
    });
  }, []);

  return (
    <Container className="p-3">
      <Row className="mb-4">
          <Col>
            <h1 className="text-center">NBA Stat Leaders for the 2023-2024 Season</h1>
            <hr />
          </Col>
      </Row>
      <Row>
        {teams.map((team, index) => (
          <TeamCard team={team} player={players[index]} key={team.id} />
        ))}
      </Row>
    </Container>
  );
}

export default App;