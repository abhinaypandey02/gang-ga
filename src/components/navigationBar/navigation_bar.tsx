import "./navigation_bar.css";
import React from "react";

import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useUser } from "../../contexts/user_context";
import { Link, NavLink } from "react-router-dom";
import { signOut } from "../../utils/firebase/auth";
import logo from "./logo.png";

interface NavProps {
  home?: boolean;
  vision?: boolean;
  login?: boolean;
  signup?: boolean;
}

export default function NavigationBar({
  home = false,
  vision = false,
  login = false,
  signup = false,
}: NavProps) {
  const [user] = useUser();
  return (
    <Navbar id="nav1" className="nav" bg="light" variant="light" expand="lg">
      <Navbar.Toggle aria-controls="1" />
      <Navbar.Collapse id="2">
        <Nav className="main-nav">
          <Navbar.Brand href="/">
            <div className="logo">
              <img height={80} src={logo} />
            </div>
          </Navbar.Brand>
          <div className="box">
            <Nav.Link as={Link} to="/">
              <span className={home ? "current" : ""}>Home</span>
            </Nav.Link>
            <NavDropdown title="Services" id="drop-down">
              <NavDropdown.Item href="#/search">Gyms</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Yoga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Meditation</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">Happiness</NavDropdown.Item>
            </NavDropdown>
            {!user && (
              <Nav.Link as={Link} to="/aboutUs">
                <span className={vision ? "current" : ""}>Vision</span>
              </Nav.Link>
            )}
            {!user && (
              <Nav.Link as={Link} to="/login">
                <span className={login ? "current" : ""}>Login</span>
              </Nav.Link>
            )}
            {!user && (
              <Nav.Link as={Link} to="/signup">
                <span className={signup ? "current" : ""}>Signup</span>
              </Nav.Link>
            )}

            {user && (
              <Nav.Link as={Link} to="/user">
                {user.name}
              </Nav.Link>
            )}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
