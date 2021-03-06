import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MenuComponent from '../menu/menu'
import RightMenuComponent from '../right-menu/right-menu'

function StructureComponent(props) {
    return (
        <div>
            <Row>
                <Col xs={1} md={2}>
                    <MenuComponent />
                </Col>
                <Col xs={11} md={8} style={{position:"relative"}}>
                    {props.body}
                </Col>
                <Col md={2}>
                    <RightMenuComponent />
                </Col>
            </Row>
        </div>
    )
}

export default StructureComponent