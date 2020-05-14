import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function FormComponent(props) {
    const [data, setData] = useState(props.inputs)
    const handleInputChange = (event) => {
        console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value
        })
    }
    const info =
        Object.entries(props.inputs).map((answer) =>
            <Form.Group controlId={props.id + answer[0]}>
                <Form.Label>{answer[0]}</Form.Label>
                <Form.Control defaultValue={answer[1]} name={answer[0]} onChange={handleInputChange} />
            </Form.Group>
        )
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data)
    }
    return (
        <Form onSubmit={handleSubmit}>
            {info}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default FormComponent