import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations.js";
import Auth from "../../utils/auth.js";
// bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import SignupForm from "./Signup.js";

const SignupScreen = ({ show, handleClose, isModal }) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
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
            <SignupForm
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
            >
              Sign Up
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Container className="w-25">
          <SignupForm
            formState={formState}
            handleChange={handleChange}
            handleFormSubmit={handleFormSubmit}
          />

          <Button variant="primary" style={{ cursor: "pointer" }} type="submit">
            Login
          </Button>
        </Container>
      )}
    </>
  );
};

export default SignupScreen;
