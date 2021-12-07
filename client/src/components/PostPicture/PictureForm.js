import React from "react";
import Form from "react-bootstrap/Form";

function PictureForm({ formState, handleChange, handleFormSubmit }) {
  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
           
            type="text"
            placeholder="Title"
            name="title"
            value={formState.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Picture description</Form.Label>
          <Form.Control
            type="text"
            placeholder="description"
            name="text"
            value={formState.text}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Must be 20 characters or more
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImageLink">
          <Form.Label>Imagelink</Form.Label>
          <Form.Control
            type="text"
            placeholder="Link to image here"
            name="imagelink"
            value={formState.imagelink}
            onChange={handleChange}
          />
        </Form.Group>
        
      </Form>
    </>
  );
}

export default PictureForm;
