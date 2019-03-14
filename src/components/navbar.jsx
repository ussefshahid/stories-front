import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

const NavbarPage = () => {
    return ( 
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Project Managment</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/teams">Teams</Nav.Link>
                <Nav.Link href="/members">Membres</Nav.Link>
                <Nav.Link href="#link">Sprints</Nav.Link>
                <Nav.Link href="#link">User stories</Nav.Link>
                <NavDropdown title="Settings" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Se déconnecter</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        );
}
 
export default NavbarPage;