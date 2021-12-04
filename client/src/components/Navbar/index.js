import React, { useState } from 'react';
// import Container  from 'react-bootstrap/Container';
import './styles/navbar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageBrand from 'react-bootstrap/Image';
import Logo from'../Navbar/styles/logo123.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
function GlobalNavBar() {
  const [showModal, setShowModal] = useState(false);
  return (
  
    <Navbar className="navRight" bg="dark" variant="dark" id="navItem" expand="lg">
    <Container id="navbar-container">
    <Row>
    <Col md={8}>
    <Container>
  <Row>
    <Col xs={6} md={4}>
    <Navbar.Brand id="brandName" href="/"><ImageBrand src={Logo} rounded className="nasa-nav"
     width="100"
    height="88"
  />
      </Navbar.Brand>
    </Col>
  </Row>
</Container>
    
      </Col>
      <Col md={4}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end ml-3" id="basic-navbar-nav">
  
        <Link className="text-dark" to="/"> 
        <span className="homeLogo"></span>
        </Link>
        <Link className="text-dark" to="/login"> 
        <h1 className="loginNav">Login</h1>
        </Link>
        <Link className="text-dark" to="/signup"> 
        <h1 className="signupNav">Signup</h1>
        </Link> 
        <Link className="text-dark" onClick={Auth.logout}> 
        <h1 className="signupNav">Logout</h1>
        </Link>
       
    
      </Navbar.Collapse>
      </Col>
      </Row>
    </Container>
  </Navbar>
 
  )
  }
  export default GlobalNavBar;

