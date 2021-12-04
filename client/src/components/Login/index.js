import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations.js";
import Auth from "../../utils/auth.js";
// bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import LoginForm from "./Login";
import { UserID } from "../../App";
import { Redirect } from "react-router";

const LoginScreen = ({ show, handleClose, isModal }) => {
  const { userID, setUserID } = useContext(UserID);
  const [formState, setFormState] = useState({ email: "", password: "" });

  // eslint-disable-next-line
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      console.log(data);

      Auth.login(data.login.token); 
      setUserID(data.login.user._id);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    
    <>
    {!userID ? (
      <>
      {isModal ? (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Celestial ⭐</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm
              formState={formState}
              handleChange={handleChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              style={{ cursor: "pointer" }}
              type="submit"
              onClick={handleFormSubmit}
            >
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Container className="w-25">
          <LoginForm
            formState={formState}
            handleChange={handleChange}
            handleFormSubmit={handleFormSubmit}
          />

          <Button
            variant="primary"
            style={{ cursor: "pointer" }}
            type="submit"
            onClick={handleFormSubmit}
          >
            Login
          </Button>
        </Container>
      )}
      </>
    )
    :
    (<Redirect to="/" />)
    }
    </>
  );
};

export default LoginScreen;
