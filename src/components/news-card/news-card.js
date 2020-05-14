import React from 'react';
import { Card } from 'react-bootstrap';
import CardComponent from '../card/card'

function NewsCardComponent(props) {
    const cardBody =
        <React.Fragment>
            < Card.Text >
                {props.content}
            </Card.Text >
            {showImage()}
        </React.Fragment>
    function showImage() {
        if (props.img != null) {
            return <Card.Img src={props.img} />
        }
    }

    return (
        <CardComponent
            title={props.title}
            body={cardBody}
            width={"18rem"}
        />
    )
}

export default NewsCardComponent