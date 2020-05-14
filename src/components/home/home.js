import React from 'react';
import { Button } from 'react-bootstrap';
import StructureComponent from '../structure/structure'
import ModalComponent from '../modal/modal'
import FormComponent from '../form/form'
import NewsCardComponent from '../news-card/news-card'
import './home.css'

import Masonry from 'react-masonry-css'


function HomeComponent() {
    // CONSTS
    const data = { id: 1, answers: {"Pregunta":"", "Respuesta correcta": "", "Respuesta incorrecta 1": "", "Respuesta incorrecta 2": "", "Respuesta incorrecta 3": ""} }
    const info = [
        { id: 1, title: "Candela", content: "Candela quiere aparecer en mi inicio", img: "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s150x150/33432045_221740021967521_4712036288620920832_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=kxZcarL8jxEAX9sZwYl&oh=d077ca6e628c1834006bfa4e2fd79e07&oe=5EAC30F1" },
        { id: 2, title: "Bober", content: "Bober puso que está en proceso", img: "" },
        { id: 3, title: "Agus", content: "Agus duerme mucho", img: "" },
        { id: 4, title: "Agus", content: "Agus duerme mucho", img: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" },
        { id: 5, title: "Bober", content: "Bober puso que está en proceso", img: "" },
        { id: 6, title: "Agus", content: "Agus duerme mucho", img: "" },
        { id: 7, title: "Duki", content: "Hace muy mala música", img: "https://i.ytimg.com/vi/8LSVS8_jlx0/hqdefault.jpg" },
    ]
    const [addModalShow, setAddModalShow] = React.useState(false);
    const modalBody =
        <FormComponent
            inputs={data.answers}
            id={data.id}
        />
    const listOfCards =
        //...

        <Masonry
            breakpointCols={2}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {info.map((data) =>
                <React.Fragment key={data.id}>
                    <NewsCardComponent
                        id={data.id}
                        title={data.title}
                        content={data.content}
                        img={data.img}
                    />
                </React.Fragment>)}
        </Masonry>

    const body =
        <div>
            <Button className="button" variant="outline-primary" size="lg" block onClick={() => setAddModalShow(true)}>Agregar</Button>
            <ModalComponent
                title="Agregar pregunta"
                body={modalBody}
                url=""
                show={addModalShow}
                onHide={() => setAddModalShow(false)}
            />
            {listOfCards}
        </div>

    // RETURN
    return (
        <StructureComponent
            body={body}
        />
    )
}

export default HomeComponent