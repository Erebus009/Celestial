import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container  from 'react-bootstrap/Container';
import Nav from  'react-bootstrap/Nav';
import './styles/navbar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageBrand from 'react-bootstrap/Image';
import Logo from'../Navbar/styles/logo123.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
  
    <Navbar className="navRight" bg="dark" variant="dark" id="navItem" expand="lg">
    <Container id="navbar-container">
    <Row>
    <Col md={8}>
    <Container>
  <Row>
    <Col xs={6} md={4}>
    <Navbar.Brand id="brandName" href="#home"><ImageBrand src={Logo} rounded className="nasa-nav"
     width="100"
    height="88"
    className="ml-auto justify-content-end"/>
      </Navbar.Brand>
    </Col>
  </Row>
</Container>
    
      </Col>
      <Col md={4}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="ml-auto justify-content-end">
          <Nav.Link href="#home"></Nav.Link>
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

