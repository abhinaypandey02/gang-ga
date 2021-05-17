import './navigation_bar.css';
import React from "react";
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar id='nav1' bg="dark" variant='light' expand="lg">
      <Navbar.Brand href="#home" className='mx-3'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-2">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Login</Nav.Link>

        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}