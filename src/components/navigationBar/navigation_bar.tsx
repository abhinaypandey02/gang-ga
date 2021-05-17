import './navigation_bar.css';
import React from "react";
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar id='nav1' className='pt-md-5 px-md-5' bg="dark" variant='dark' expand="lg">
      <Navbar.Brand href="#home" >Gang-ga</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav className='ms-auto'>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link2">Login</Nav.Link>
          <Nav.Link href="#link22">Signup</Nav.Link>

        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}