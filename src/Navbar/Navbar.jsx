// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function CustomNavbar(props) {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#">
                <img src={props.logo} alt="logo" height="40" width="40" className="d-inline-block align-top" id="brand-logo"/>
                <span id="brand-text">Rayhan Kimi</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
                <Nav className="ml-auto">
                    <Nav.Link href="https://github.com/rayhankimi">GitHub</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/rayhan-kimi-nabiel-athallah-897721245/">LinkedIn</Nav.Link>
                    <Nav.Link href="https://open.spotify.com/user/5prfrj9o5sga74t50nzigx4ps">Spotify</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
