import React, { useState } from 'react';
import { Card, Button, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Output from '../engine.js'
import Instructions from './Instructions.js';

interface InputData {
    title: string;
    gridX: number[];
    gridY: number[];
    posX: number;
    posY: number;
    posD: string;
    commands: string;
}
let positionsData: [number, number, string][] = []
let instructionsData: string[] = []

function Inputs(props: InputData) {
    const [instructions, setInstruct] = useState('')
    const [result, setResult] = useState('')
    const [finalInput, setFinalInput] = useState('')



    function add() {
        setFinalInput('')
        positionsData.push([Number(props.posX), Number(props.posY), props.posD])
        instructionsData.push(props.commands)
        setFinalInput(getFinalInput())
    }
    function deleteAll(){
        positionsData = []
        instructionsData = []
        setFinalInput('')
        setResult('')
    }
    function output() {
        const outputResult = Output([props.gridX[props.gridX.length - 1], props.gridY[props.gridY.length - 1]], positionsData, instructionsData)
        setResult(outputResult)
    }
    function getFinalInput(){
        let result = ""
        for(let i in positionsData){
            result += positionsData[i][0]+" "+positionsData[i][1]+" "+positionsData[i][2]+"\n"+instructionsData[i]+"\n"
        }
        return result
    }
    return (
        <div>
            <Card style={{ color: "#000" }}>
                <Card.Body>
                    <Card.Title>
                        {props.title}
                    </Card.Title>
                    <p style={{fontSize:'20px'}}>Grid:{props.gridX[props.gridX.length - 1]} {props.gridY[props.gridY.length - 1]}</p>
                            <span style={{fontSize:'15px'}}>Current Input:</span>
                            <Form.Group controlId="exampleForm.CurrentInput">
                                <Form.Control as="textarea" rows={2} value={props.posX + ' ' + props.posY + ' ' + props.posD + '\n' + props.commands} disabled={true} />
                            </Form.Group>
                            <Button className="mt-2 mb-2" variant="primary" size="sm" onClick={() => add()}>Add</Button>
                        <Row>
                            <span style={{fontSize:'15px'}}>Final Input:</span>
                            <Form.Group className="mt-1" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} value={finalInput} disabled={true} />
                            </Form.Group>
                        </Row>
                    <Button className="mx-2 mt-3" variant="secondary" size="sm" onClick={() => deleteAll()}>Delete Final Input</Button>
                    <Button className="mx-2 mt-3" variant="success" size="sm" onClick={() => output()}>Output</Button><br/>
                    <span className="mb-1" style={{fontSize:'15px'}}>The Output:</span>
                    <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} value={result} disabled={true} />
                    </Form.Group>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Inputs