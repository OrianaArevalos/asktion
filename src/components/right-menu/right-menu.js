import React from 'react';
import { Form, Col, Table } from 'react-bootstrap';
import { MdLooksTwo, MdLooksOne, MdLooks3, MdLooks4, MdLooks5 } from 'react-icons/md'
import './right-menu.css'

function RightMenuComponent() {
    return (
        <Col className="column" md={2}>
            <Form.Group className="form">
                <Form.Control placeholder="Large text" />
            </Form.Group>
            <Table responsive variant="secondary">
                <thead align="center">
                    <tr>
                        <th>Ranking</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <MdLooksOne />
                            Usuario 1
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <MdLooksTwo />
                            Usuario 2
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <MdLooks3 />
                            Usuario 3
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <MdLooks4 />
                            Usuario 4
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <MdLooks5 />
                            Usuario 5
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Col>
    )
}

export default RightMenuComponent;