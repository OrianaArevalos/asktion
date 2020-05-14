import React from 'react';
import { Card } from 'react-bootstrap';

function CardComponent(props) {

    return (
        <Card style={{ width: props.width}}>
            <Card.Header as="h5">{props.title}</Card.Header>
            <Card.Body>
                {props.body}
            </Card.Body>
        </Card>
    )
}

export default CardComponent