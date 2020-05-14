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
                    <Col className="col" md={2}>
                        <Nav className="flex-column">
                            <Link className="large-option" to={`/`}> Asking </Link>
                            <Link className="large-option" to={`/`}><FaHome /> Inicio</Link>
                            <Link className="large-option" to={`/`}><MdNotificationsActive /> Notificaciones</Link>
                            <Link className="large-option" to={`/`}><FaVoteYea /> Guardados </Link>
                            <Link className="large-option" to={`/`}><FaClipboardList /> Recomendaciones</Link>
                            <Link className="large-option" to={`/profile`}><BsPersonFill /> Perfil</Link>
                            <Link className="large-option" to={`/`}><AiFillSetting /> Configuraciones</Link>
                        </Nav>
                    </Col>
                )}
            />
            <Media query="(max-width: 768px)" render={() =>
                (
                    <Col className="col" xs={1}>
                        <Nav defaultActiveKey="/" className="flex-column">
                            <Link className="small-option" eventKey="/"> A </Link>
                            <Link className="small-option" eventKey="/"><FaHome /></Link>
                            <Link className="small-option" eventKey="link-1"><MdNotificationsActive /></Link>
                            <Link className="small-option" eventKey="link-2"><FaVoteYea /></Link>
                            <Link className="small-option" eventKey="link-3"><FaClipboardList /></Link>
                            <Link className="small-option" eventKey="link-5"><FaSearch /></Link>
                            <Link className="small-option" eventKey="link-4"><BsPersonFill /></Link>
                            <Link className="small-option" eventKey="link-5"><AiFillSetting /></Link>
                        </Nav>
                    </Col>
                )}
            />
        </div >
    )
}

export default MenuComponent