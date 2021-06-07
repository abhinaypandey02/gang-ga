import "./navigation_bar.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useUser } from "../../contexts/user_context";
import { Link } from "react-router-dom";
import { signOut } from "../../utils/firebase/auth";
export default function NavigationBar() {
    const [user] = useUser();
    return (
        <Navbar
            id="nav1"
            className="pt-md-5 px-md-5"
            bg="dark"
            variant="dark"
            expand="lg"
        >
            <Navbar.Brand href="#"><span className="h2">Gang-ga</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/search">
                        Gyms
                    </Nav.Link>
                    {user.name === "" && (
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>
                    )}
                    {user.name === "" && (
                        <Nav.Link as={Link} to="/signup">
                            Signup
                        </Nav.Link>
                    )}
                    {user.name !== "" && (
                        <Nav.Link as={Link} to="/user">
                            {user.name}
                        </Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
