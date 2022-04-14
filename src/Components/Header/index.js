import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import './style.css'

const Header = () =>{
    return(
        <Navbar collapseOnSelect expand="lg"  variant="dark" className="header-color">
            <Container>

            <Link to="/" className="text-decoration-none">
                <Navbar.Brand className="text-logo">MatheusAlvarez</Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                        <Link to="/about" className="text-decoration-none">
                            <Nav.Link href="#about" className="text-header">About</Nav.Link>
                        </Link>

                        <Link to="/portfolio" className="text-decoration-none">
                            <Nav.Link href="#port" className="text-header">Portfolio</Nav.Link>
                        </Link>

                        <Link to="/knowledge" className="text-decoration-none">
                            <Nav.Link href="#kno" className="text-header">Knowledge</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to="/certificates" className="text-decoration-none">
                            <Nav.Link href="#cert" className="text-header">Certificates</Nav.Link>
                        </Link>

                        <Link to="/contact" className="text-decoration-none">
                            <Nav.Link href="#cont" className="text-header">Contact</Nav.Link>
                        </Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;