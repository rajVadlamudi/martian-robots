import React, { useState } from 'react';
import './App.css';
import { Row, Col, Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Grid from './components/Grid'
import Position from './components/Position'
import Instructions from './components/Instructions'
import Inputs from './components/Inputs'

function App() {
  const [rectGrid, setGrid] = useState({ x: [0], y: [0] })
  const [pos, setPos] = useState({ x: 0, y: 0, d: "N" })
  const [instructions, setInstructions] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <Card className="mt-2 mb-2" style={{ color: "#000" }}>
          <Card.Body>
            <Card.Title>
              Martian Robots
            </Card.Title>
          </Card.Body>
        </Card>
        <Row>
          <Col><Grid callback={setGrid} title="1. Enter Robot's Rectangular Grid" /></Col>
          <Col><Position callback={setPos} title="2. Enter Robot's Initial Position" gridX={rectGrid.x} gridY={rectGrid.y} /><br /></Col>
        </Row>

        <Row className="mt-4">
          <Col><Instructions callback={setInstructions} title="3. Enter Robot's Instructions" /></Col>
          <Col><Inputs title="4. Final Inputs" commands={instructions} gridX={rectGrid.x} gridY={rectGrid.y} posX={pos.x} posY={pos.y} posD={pos.d} /></Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
