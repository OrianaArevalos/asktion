import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComponent(props) {
    // CONST
    const images = props.images
    const listOfImages =
        images.map((img) => 
            <Carousel.Item key={img}>
                <img
                    className="carousel-image"
                    src={img}
                    alt="Foto de portada"
                />
            </Carousel.Item>
        )

    // RETURN
    return (
        <Carousel indicators={false}>
            {listOfImages}
        </Carousel>
    )
}

export default CarouselComponent

