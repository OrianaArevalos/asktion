import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import ModalComponent from '../modal/modal'
import FormComponent from '../form/form'
import HookFormComponent from '../hook-form/hook-form'
import CardComponent from '../card/card'

function QuestionCardComponent(props) {
    // CONSTS
    const [editModalShow, setEditModalShow] = React.useState(false);
    const [confirmModalShow, setConfirmModalShow] = React.useState(false);
    const inputs = {}
    const modalBody =
        <React.Fragment>
            {Object.entries(props.answers).map((element) => {
                { inputs[(element[0] === 'correct') ? 'Respuesta correcta' : `Respuesta incorrecta ${element[0].substr(-1)}`] = element[1] }

            })}
            {/* <FormComponent
                inputs={inputs}
                id={props.id}
            /> */}
            < HookFormComponent
                inputs={inputs}
                id={props.id}
            />
        </React.Fragment>
    const deleteBody =
        <React.Fragment>
            <p>
                ¿Seguro que quiere eliminar la pregunta?
            </p>
        </React.Fragment>
    const answers =
        Object.entries(props.answers).map((answer) =>
            <Alert key={props.id + answer[0]} variant={(answer[0] === 'correct') ? 'success' : 'danger'}>
                {answer[1]}
            </Alert>
        )
    const cardBody =
        <React.Fragment>
            {answers}
            < Button variant="outline-danger" onClick={() => setConfirmModalShow(true)}> Eliminar</Button >
            <ModalComponent
                title="Confirmación"
                body={deleteBody}
                url=""
                show={confirmModalShow}
                onHide={() => setConfirmModalShow(false)}
            />
            <Button variant="outline-primary" onClick={() => setEditModalShow(true)}>Editar</Button>
            <ModalComponent
                title={props.title}
                body={modalBody}
                url=""
                show={editModalShow}
                onHide={() => setEditModalShow(false)}
            />
        </React.Fragment>

    // RETURN
    return (
        <CardComponent
            title={props.title}
            body={cardBody}
            width={""}
        />
    )
}

export default QuestionCardComponent