import React, { useState, useEffect } from 'react';
import './App.css';
import { getTeams } from './supabaseClient.js';
import { getPlayers } from './supabaseClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup, Container, Row, Col, Card } from 'react-bootstrap';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

function App() {
  const [teams, setTeams] = useState([]);
  const [leaderIds, setLeaderIds] = useState([]);

  useEffect(() => {
    getTeams().then(fetchedTeams => setTeams(fetchedTeams));
    getPlayers().then(fetchedIds => setLeaderIds(fetchedIds));
  }, []);

  return (
    <Container className="p-3">
      <Row className="mb-3">
        <Col>
          <Button variant="primary" onClick={() => getTeams().then(setTeams)}>Generate NBA Team</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Card.Header as="h5">NBA Teams</Card.Header>
            <ListGroup variant="flush">
              {teams.map((team, index) => (
                <ListGroup.Item key={index}>
                  {team.full_name} - {team.conference} - {team.division}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Header as="h5">Leader IDs</Card.Header>
            <ListGroup variant="flush">
              {leaderIds.map((player, index) => (
                <ListGroup.Item key={index}>{player.ppg_leader} - {player.ppg}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;