import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Elcheff from '../img/elcheff.png'

const Menu = () => {
    return (
        <Navbar  expand="lg" className="bg-cream">
            <Container>
                <Navbar.Brand as={Link} to="/" href="/">
                    <img src={Elcheff} className="width-img-portada" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-0">
                        <NavLink className="nav-item nav-link" end to="/">
                            Inicio
                        </NavLink>
                        <NavLink
                            className="nav-item nav-link"
                            end
                            to="/administrar"
                        >
                            Administrar
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
