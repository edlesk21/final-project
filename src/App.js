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
      </Row>
      <Row>
        {teams.map((team, index) => (
          <Col xs={12} md={4} key={index} className="mb-3">
            <Card>
              <Card.Header>{`${team.full_name}  |  ${team.conference}  |  ${team.division}`}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Conference: {team.conference}</ListGroup.Item>
                <ListGroup.Item>Division: {team.division}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12}>
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