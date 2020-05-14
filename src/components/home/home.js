import React, {Fragment} from 'react';
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
        { id: 1, title: "Candela", content: "Candela quiere aparecer en mi inicio", img: "" },
        { id: 2, title: "Bober", content: "Bober puso que está en proceso", img: "" },
        { id: 3, title: "Agus", content: "Agus duerme mucho", img: "" },
        { id: 4, title: "Agus", content: "Agus duerme mucho", img: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" },
        { id: 5, title: "Bober", content: "Bober puso que está en proceso", img: "" },
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
            breakpointCols={3}
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
        <Fragment>
            <Button className="button" variant="outline-primary" size="lg" block onClick={() => setAddModalShow(true)}>Agregar</Button>
            <ModalComponent
                title="Agregar pregunta"
                body={modalBody}
                url=""
                show={addModalShow}
                onHide={() => setAddModalShow(false)}
            />
            {listOfCards}
        </Fragment>

    // RETURN
    return (
        <StructureComponent
            body={body}
        />
    )
}

export default HomeComponent