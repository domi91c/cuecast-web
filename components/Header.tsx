import * as React from "react";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header: React.FC = ({}) => (
    <Navbar>
        <Navbar.Brand href="#home">Cuecast</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="">
                <NavDropdown title="Dominic N" id="basic-nav-dropdown" alignRight>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="/home">Register</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/users/sign-in">Sign In</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header
