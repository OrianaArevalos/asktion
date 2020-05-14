import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function AddQuestionModalComponent(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Agregar pregunta
                </Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group controlId="correctInput">
                        <Form.Label>Pregunta</Form.Label>
                        <Form.Control value={props.correct} />
                    </Form.Group>
                    <Form.Group controlId="correctInput">
                        <Form.Label>Respuesta correcta</Form.Label>
                        <Form.Control value={props.correct} />
                    </Form.Group>
                    <Form.Group controlId="wrongInput1">
                        <Form.Label>Respuesta incorrecta</Form.Label>
                        <Form.Control value={props.wrong1} />
                    </Form.Group>
                    <Form.Group controlId="wrongInput2">
                        <Form.Label>Respuesta incorrecta</Form.Label>
                        <Form.Control value={props.wrong2} />
                    </Form.Group>
                    <Form.Group controlId="wrongInput2">
                        <Form.Label>Respuesta incorrecta</Form.Label>
                        <Form.Control value={props.wrong3} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
                    <Button variant="primary" onClick={props.onHide}>Guardar</Button>
                    {/* url para agregar la pregunta */}
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default AddQuestionModalComponent;