import React from 'react';
import { Nav, Col } from 'react-bootstrap';
import { Link, NavLink, BrowserRouter as Router, withRouter } from 'react-router-dom';
import Media from 'react-media';
import ProfileComponent from '../profile/profile';
import HomeComponent from '../home/home';
import { FaHome, FaVoteYea, FaClipboardList, FaSearch } from 'react-icons/fa';
import { MdNotificationsActive } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import './menu.css'

function MenuComponent() {
    return (
        <div>
            <Media query="(min-width: 768px)" render={() =>
                (
                    <Col className="col" md={3}>
                        <Nav className="flex-column">
                            <Router>
                                <React.Fragment>
                                    <Link className="large-option" to="/"> Asking </Link>
                                    <Nav.Link className="large-option" to="/"><FaHome /> Inicio</Nav.Link>
                                    <Nav.Link className="large-option"><MdNotificationsActive /> Notificaciones</Nav.Link>
                                    <Nav.Link className="large-option"><FaVoteYea /> Guardados </Nav.Link>
                                    <Nav.Link className="large-option"><FaClipboardList /> Recomendaciones</Nav.Link>
                                    <Link className="large-option" to="/profile"><BsPersonFill /> Perfil</Link>
                                    <Nav.Link className="large-option"><AiFillSetting /> Configuraciones</Nav.Link>
                                </React.Fragment>
                            </Router>
                        </Nav>
                    </Col>
                )}
            />
            <Media query="(max-width: 768px)" render={() =>
                (
                    <Col className="col" xs={1}>
                        <Nav defaultActiveKey="/" className="flex-column">
                            <Nav.Link className="small-option" eventKey="/"> A </Nav.Link>
                            <Nav.Link className="small-option" eventKey="/"><FaHome /></Nav.Link>
                            <Nav.Link className="small-option" eventKey="link-1"><MdNotificationsActive /></Nav.Link>
                            <Nav.Link className="small-option" eventKey="link-2"><FaVoteYea /></Nav.Link>
                            <Nav.Link className="small-option" eventKey="link-3"><FaClipboardList /></Nav.Link>
                            <Nav.Link className="small-option" eventKey="link-5"><FaSearch /></Nav.Link>
                            <Nav.Link className="small-option" eventKey="link-4"><BsPersonFill /></Nav.Link>
                            <Nav.Link className="small-option" eventKey="link-5"><AiFillSetting /></Nav.Link>
                        </Nav>
                    </Col>
                )}
            />
        </div >
    )
}

export default MenuComponent