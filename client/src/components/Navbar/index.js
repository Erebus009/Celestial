import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Nav from  'react-bootstrap/Nav';
import "./styles/navbar.css";
import ImageBrand from "react-bootstrap/Image";
import Logo from "../Navbar/styles/logo123.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import LoginScreen from "../Login";
import SignupScreen from "../Signup";
import Auth from '../../utils/auth'


function NavBar() {
  const [loginShow, setShowLogin] = useState(false);
  const hideLogin = () => setShowLogin(false);
  const showLogin = () => setShowLogin(true);

  const [signUpShow, setSignUpShow] = useState(false);
  const hideSignUp = () => setSignUpShow(false);
  const showSignUp = () => setSignUpShow(true);

  return (
    <Navbar
      className="navRight"
      bg="dark"
      variant="dark"
      id="navItem"
      expand="lg"
    >
      <Container>
          <Navbar.Brand id="brandName" href="/">
          <ImageBrand
            src={Logo}
            rounded
            className="nasa-nav"
            width="100"
            height="88"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end ml-3"
          id="basic-navbar-nav"
        >
          {!Auth.loggedIn() ? (
            <>
              <LoginScreen
                show={loginShow}
                handleClose={hideLogin}
                isModal={true}
              />
              <Link className="text-dark" onClick={showLogin} to="">
                <h1 className="signupNav">Login</h1>
              </Link>
              <SignupScreen
                show={signUpShow}
                handleClose={hideSignUp}
                isModal={true}
              />
              <Link className="text-dark" onClick={showSignUp} to="">
                <h1 className="signupNav">Signup</h1>
              </Link>
            </>
          ) : (
            <>
              <Link className="text-dark" to="">
                <h1 className="logoutNav">Post a Photo</h1>
              </Link>
              <Link className="text-dark" to="/profile">
                <h1 className="logoutNav">Profile</h1>
              </Link>
              <Link className="text-dark" to="/logout">
                <h1 className="logoutNav">Logout</h1>
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
