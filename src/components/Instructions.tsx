import React, { useState } from 'react';
import { Card, Button, ButtonGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

interface PanelName {
    title: string;
    callback:Function;
}

function Instructions(props: PanelName) {
    const [instructions, setInstruct] = useState('')

    function instruct(val: string) {
        setInstruct(instructions + val)
    }
    function deleteAll() {
        setInstruct('')
    }
    function deleteLast() {
        setInstruct(instructions.slice(0, -1))
    }
    function add() {
        if(instructions===''){
            alert('Please enter valid instructions')
        } else if(instructions.length>50){
            alert('Instructions cannot exceed 100 characters!')
        } else {
            props.callback(instructions)
        }
    }
    return (
        <div>
            <Card style={{ color: "#000" }}>
                <Card.Body>
                    <Card.Title>
                        {props.title}
                    </Card.Title>
                    <ButtonGroup>
                        <Button className="mx-2" variant="info" size="sm" onClick={() => instruct("L")}>Left</Button>
                        <Button className="mx-2" variant="info" size="sm" onClick={() => instruct("R")}>Right</Button>
                        <Button className="mx-2" variant="info" size="sm" onClick={() => instruct("F")}>Forward</Button>
                    </ButtonGroup><br />
                    <Form.Group className="mt-1" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} value={instructions} disabled={true}/>
                    </Form.Group>
                    <ButtonGroup>
                        <Button className="mx-1" variant="secondary" size="sm" onClick={() => deleteAll()}>Delete All</Button>
                        <Button className="mx-1" variant="secondary" size="sm" onClick={() => deleteLast()}>Delete</Button>
                        <Button className="mx-1" variant="primary" size="sm" onClick={() => add()}>Set</Button>
                    </ButtonGroup><br/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Instructions