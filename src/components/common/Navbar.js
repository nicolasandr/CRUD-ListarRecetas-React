import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" href="/">
                    Recetas de cocina
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-0">
                        <NavLink className="nav-item nav-link" end to="/">
                            Home
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
