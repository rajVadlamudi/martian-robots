import React, { useState } from 'react';
import { Card, Form, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

interface PositionData {
    title: string;
    gridX: number[];
    gridY: number[];
    callback: Function;
}

function Position(props: PositionData) {
    const [directionList, setDirectionList] = useState(["N", "S", "E", "W"])
    const [direction, setDirection] = useState("N")
    const [positionX, setPositionX] = useState("0")
    const [positionY, setPositionY] = useState("0")
    const [continueBtn, setContinue] = useState(false)

    function continuePos(){
        props.callback({x:positionX, y:positionY, d:direction})
    }
    return (
        <div>
            <Card style={{ color: "#000" }}>
                <Card.Body>
                    <Card.Title>
                        {props.title}
                    </Card.Title>
                    <Form.Label className="ml-3">X:</Form.Label><span> </span>
                    <select onChange={(e) => {
                        setPositionX(e.target.value)
                    }
                    }>
                        {
                            props.gridX.map(x =>
                                <option value={x}>{x}</option>
                            )
                        }
                    </select>
                    <span> </span>
                    <Form.Label className="ml-3">Y:</Form.Label><span> </span>
                    <select onChange={(e) => {
                        setPositionY(e.target.value.toString())
                    }
                    }>
                        {
                            props.gridY.map(x =>
                                <option value={x}>{x}</option>
                            )
                        }
                    </select>
                    <br/>
                    <Form.Label className="mx-2">Direction:</Form.Label>
                    <select onChange={(e) => {
                        console.log("[handleDChange]:" + e.target.value)
                        setDirection(e.target.value)
                    }
                    }>
                        {
                            directionList.map(x =>
                                <option value={x}>{x}</option>
                            )
                        }
                    </select>
                </Card.Body>
                <Row>
                    <Form.Group>
                        <Form.Label>Position:</Form.Label>
                        <span> {positionX} {positionY} {direction}</span><br/>
                        <Button className="mx-3 mb-4" variant="primary" size="sm" disabled={continueBtn} onClick={continuePos}>Set</Button>
                    </Form.Group>
                    
                </Row>
            </Card>
        </div>
    );
}

export default Position