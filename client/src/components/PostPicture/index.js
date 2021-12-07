import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PICTURE } from "../../utils/mutations.js";

// bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import PictureForm from "./PictureForm.js";

const PictureScreen = ({ show, handleClose, isModal }) => {
  const [formState, setFormState] = useState({
    title: "",
    text: "",
    imagelink: "",
  });

  // eslint-disable-next-line
  const [addPicture, { error, data }] = useMutation(ADD_PICTURE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    window.location.reload();

    try {
      const { data } = await addPicture({
        variables: { ...formState },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Modal
        style={{ opacity: 1 }}
        show={show}
        onClick={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Celestial ⭐</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PictureForm
            formState={formState}
            handleChange={handleChange}
            handleFormSubmit={handleFormSubmit}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            style={{ cursor: "pointer" }}
            typeof="submit"
            onClick={handleFormSubmit}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PictureScreen;
