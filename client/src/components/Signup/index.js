import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth.js';
import { Form, Button, Modal } from 'react-bootstrap';
const Signup = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("submitting form with", formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data);

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Create New Account</Modal.Title>
    </Modal.Header>
    <Modal.Body>

    
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
          name="username"
            type="text"
            placeholder="Enter username"
            value={formState.username}
            onChange={handleChange}
          />
          <Form.Text className="">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        name="email"
          type="email"
          placeholder="Enter email"
          value={formState.email}
          onChange={handleChange}
        />
        <Form.Text className="">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          name="password"
            type="password"
            placeholder="Password"
            value={formState.password}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button 
      variant="primary"
      onClick={handleFormSubmit}
      style={{ cursor: "pointer" }} 
      type="submit">
        Sign Up
      </Button>
    </Modal.Footer>
  </Modal>
  );
}

export default Signup;