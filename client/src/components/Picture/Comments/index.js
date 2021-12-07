import React from "react";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { ADD_COMMENT, DELETE_COMMENT } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";
import "./styles/comments.css";
import Auth from "../../../utils/auth";

const Comments = ({ currentComments, pictureId }) => {
  const [backendComments, setBackendComments] = useState([]);

  const [addingComment, { }] = useMutation(ADD_COMMENT);
  const [deletingComment, { }] = useMutation(DELETE_COMMENT);

  const addComment = async (text) => {
    
    try {
      const { data } = await addingComment({
        variables: { commentText: text, pictureId: pictureId },
      });
      setBackendComments([...backendComments, data.addComment]);
    } catch (e) {}
  };

  const deleteComment = async (commentId) => {
    

    try {
      const { data } = await deletingComment({
        variables: { commentId: commentId, pictureId: pictureId },
      });
      const updatedBackendComments = backendComments.filter(
        (comment) => comment._id !== commentId
      );

      setBackendComments(updatedBackendComments);
    } catch (e) {}
  };

  useEffect(() => {
    console.log(currentComments);
    setBackendComments(currentComments);
  }, []);

  return (
    <Container fluid="md">
      <Row>
        <div className="comments">
          <h3 className="comments-title">Comments</h3>
          {Auth.loggedIn() ? (
            <>
              <div className="comment-form-title">Write comment</div>
              <CommentForm submitLabel="Post" handleSubmit={addComment} />
            </>
          ) : (
            <></>
          )}
          <div className="comments-container">
            {backendComments.map((comment) => (
              <Comment
                key={comment._id}
                comment={comment}
                addComment={addComment}
                deleteComment={deleteComment}
              />
            ))}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Comments;
