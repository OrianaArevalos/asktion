import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalComponent(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.body}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
                <Button variant="primary" onClick={props.onHide}>Confirmar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent;