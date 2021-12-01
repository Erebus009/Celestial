import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container  from 'react-bootstrap/Container';
import Nav from  'react-bootstrap/Nav';
import './styles/navbar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function NavBar() {
  return (
  
    <Navbar className="nav-right" bg="dark" variant="dark" id="navItem" expand="lg">
    <Container id="navbar-container">
    <Row>
    <Col md={8}>
      <Navbar.Brand id="alignSelf" href="#home">(logo)</Navbar.Brand>
      </Col>
      <Col md={4}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="ml-auto justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#signup">Signup</Nav.Link>
          <Nav.Link href="#logout">Logout</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
      </Col>
      </Row>
    </Container>
  </Navbar>
 
  )
  }
  export default NavBar;

