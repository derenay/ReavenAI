import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/ReavenAI_Logo_Black_Purple.png';
import './navbarse.css';

const navbarse = () => {
  return (
    <Navbar expand="lg" className="navbar-custom fixed-top">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            alt="Company Logo"
          />
          <span className="brand-text">Reaven AI</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="/clients" className="nav-link-custom">Clients</Nav.Link>
            <NavDropdown 
              title="Products" 
              id="basic-nav-dropdown"
              className="nav-dropdown-custom"
            >
              <NavDropdown.Item href="/products/ai-solutions">AI Solutions</NavDropdown.Item>
              <NavDropdown.Item href="/products/automation">Process Automation</NavDropdown.Item>
              <NavDropdown.Item href="/products/analytics">Data Analytics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products/custom">Custom Solutions</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/career" className="nav-link-custom">Career</Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>

          <Nav className="social-links">
            <Nav.Link href="https://linkedin.com" target="_blank" className="social-link">
              <FaLinkedin size={20} />
            </Nav.Link>
            <Nav.Link href="https://github.com" target="_blank" className="social-link">
              <FaGithub size={20} />
            </Nav.Link>
            <Nav.Link href="https://twitter.com" target="_blank" className="social-link">
              <FaTwitter size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbarse;