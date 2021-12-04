import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations.js";
import Auth from "../../utils/auth.js";
// bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import SignupForm from "./Signup.js";
import { UserID } from "../../App";

const SignupScreen = ({ show, handleClose, isModal }) => {
  const { setUserID } = useContext(UserID);
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  // eslint-disable-next-line
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

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      setUserID(data.login.user._id);
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
              onClick={handleFormSubmit}
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

          <Button
            variant="primary"
            style={{ cursor: "pointer" }}
            type="submit" onClick={handleFormSubmit}
          >
            Login
          </Button>
        </Container>
      )}
    </>
  );
};

export default SignupScreen;
