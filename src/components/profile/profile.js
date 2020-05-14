import React from 'react';
import { Button } from 'react-bootstrap';
import StructureComponent from '../structure/structure'
import QuestionCardComponent from '../question-card/question-card'
import CarouselComponent from '../carousel/carousel';
import './profile.css'

function ProfileComponent() {
    // CONSTS
    const data = [
        { id: 1, title: "Cómo se llama mi gatite?", answers:{"correct": "Micho", "wrong1": "Michulin", "wrong2": "Pepe", "wrong3": "Marta"} },
        { id: 2, title: "Cuántas tortuguites tengo?", answers:{"correct": "1", "wrong1": "0", "wrong2": "2", "wrong3": "3"} },
        // { id: 3, title: "Cuántos años tengo?", answers:[{correct: "21 años"}, {wrong1: "19 años"}, {wrong2: "20 años"}, {wrong3: "22 años"}] }
    ]
    const images = [
        "https://images.unsplash.com/photo-1543427191-42639c95b596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80"
    ]
    const listOfCards =
        data.map((info) =>
            <div key={info.id}>
                <QuestionCardComponent
                    title={info.title}
                    answers = {info.answers}
                    id = {info.id}
                />
            </div>)
    const body = <div className="container">
        <CarouselComponent
            images={images}
        />
        <div className="edit-information">
            <img
                className="profile-image"
                src="https://images.unsplash.com/photo-1542108226-9130e1e83cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=688&q=80"
                alt="Foro de perfil."
            />
            <Button variant="outline-primary">Editar</Button>
        </div>
        <div className="personal-information">
            <h5 className="string-format"> Oriana Florencia Arévalos </h5>
            <p className="string-format">19 de septiembre de 1998</p>
            <p className="string-format">Berisso</p>
        </div>
        <div>{listOfCards}</div>
    </div>

    // RETURN
    return (
        <StructureComponent
            body={body}
        />
    )
}

export default ProfileComponent