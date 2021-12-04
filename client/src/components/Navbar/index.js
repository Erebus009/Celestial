import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container  from 'react-bootstrap/Container';
// import Nav from  'react-bootstrap/Nav';
import './styles/navbar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageBrand from 'react-bootstrap/Image';
import Logo from'../Navbar/styles/logo123.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import LoginScreen from '../Login';
import SignupScreen from '../Signup'

function NavBar() {
  const [loginShow, setShowLogin] = useState(false)
  const hideLogin = () => setShowLogin(false)
  const showLogin = () => setShowLogin(true)

  const [signUpShow, setSignUpShow] = useState(false)
  const hideSignUp = () => setSignUpShow(false)
  const showSignUp = () => setSignUpShow(true)


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
        <h1 className="homeLogo"></h1>
        </Link>
        <LoginScreen show={loginShow} handleClose={hideLogin} isModal={true}/>
        <Link className="text-dark" onClick={showLogin} to="">
        <h1 className="signupNav">Login</h1>
        </Link>
        <SignupScreen show={signUpShow} handleClose={hideSignUp} isModal={true} />
        <Link className="text-dark" onClick={showSignUp} to=""> 
        <h1 className="signupNav">Signup</h1>
        </Link> 
        <Link className="text-dark" to="/logout"> 
        <h1 className="logoutNav">Logout</h1>
        </Link>
      
    
      </Navbar.Collapse>
      </Col>
      </Row>
    </Container>
  </Navbar>
 
  )
  }
  export default NavBar;

