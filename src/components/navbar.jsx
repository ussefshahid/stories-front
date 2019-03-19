import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavbarPage = () => {
    return ( 
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Project Managment</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/teams">Teams</Nav.Link>
                <Nav.Link href="/userStories">User stories</Nav.Link>
                <Nav.Link href="/roles">Roles</Nav.Link>
                <Nav.Link href="#link">Sprints</Nav.Link>
                <NavDropdown title="Settings" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Se déconnecter</NavDropdown.Item>
                </NavDropdown>
                </Nav>

                <Nav>
                    <Nav.Link href="#login">Se connecter</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
}
 
export default NavbarPage;