import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, FormControl, InputGroup, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface PanelName {
    title: string;
    callback: Function;
}

function Grid(props:PanelName) {
    const [xValue, setX] = useState(0)
    const [yValue, setY] = useState(0)
    const [continueBtn, setContinue] = useState(true)

    function reset() {
        setX(0)
        setY(0)
        setContinue(true)
    }
    function continueNext(){
        if(xValue>50 || yValue>50){
            alert("Max Coordinate allowed is 50.")
        } else if(xValue === yValue){
            alert("X and Y Coordinates are equal. Please enter a valid Rectangular Coordinates.")
        } else if(isNaN(xValue) || isNaN(yValue)){
            alert("Invalid Coordinates. Please enter a valid Coordinates.")
        } else {
            props.callback({x:Array.from(Array(xValue+1).keys()), y:Array.from(Array(yValue+1).keys())})
        }
        
    }
    return (
        <div>
            <Container>
                <Card style={{ color: "#000" }}>
                    <Card.Body>
                        <Card.Title>
                            {props.title}
                        </Card.Title>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">X:</InputGroup.Text>
                                        <FormControl
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            type="text"
                                            pattern="[0-9]*"
                                            value={xValue}
                                            onChange={(e) => {
                                                console.log("[input]:" + e.target.value)
                                                const x: number = Number(e.target.value)
                                                setX(x)
                                            }
                                            }
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">Y:</InputGroup.Text>
                                        <FormControl
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            type="text"
                                            pattern="[0-9]*"
                                            value={yValue}
                                            onChange={(e) => {
                                                const y: number = Number(e.target.value)
                                                setY(y)
                                                setContinue(false)
                                            }
                                            }
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group>
                                    <Form.Label>Selected Rectangular Grid:</Form.Label>
                                    <br />
                                    <span>({xValue} : {yValue})</span>
                                </Form.Group>
                            </Row>
                            <ButtonGroup>
                                <Button variant="secondary" size="sm" onClick={reset}>Reset</Button>
                                <Button className="mx-3" variant="primary" size="sm" disabled={continueBtn} onClick={continueNext}>Set</Button>
                            </ButtonGroup>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Grid