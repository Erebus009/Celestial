import React from "react";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { ADD_COMMENT, DELETE_COMMENT } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";
import './styles/comments.css';
const Comments = ({ currentComments, pictureId }) => {
    console.log(currentComments);
  const [backendComments, setBackendComments] = useState([]);

//   const [deletingComment, { loading, error, data }] =
//     useMutation(DELETE_COMMENT);

  const [addingComment, { loading, error, data }] = useMutation(ADD_COMMENT);
  const addComment = async (text) => {
    try {
      const data = await addingComment({
        variables: { commentText: text, pictureId: pictureId },
      });
      setBackendComments([data, ...backendComments]);
    } catch (e) {}
  };

//   const deleteComment = (commentId) => {
//     try {
//       const data = await deletingComment({
//         variables: { commentId: commentId },
//       });
//       const updatedBackendComments = backendComments.filter(
//         (comment) => comment._id !== commentId
//       );

//       setBackendComments(updatedBackendComments);
//     } catch (e) {}
//   };

  useEffect(() => {
    setBackendComments(currentComments);
  }, []);

  return (
    <Container fluid="md">
      <Row>
        <div className="comments">
          <h3 className="comments-title">Comments</h3>
          <div className="comment-form-title">Write comment</div>
          <CommentForm submitLabel="Write" handleSubmit={addComment} />
          <div className="comments-container">
            {backendComments.map((comment) => (
              <Comment
                key={comment._id}
                comment={comment}
                addComment={addComment}
                // deleteComment={deleteComment}
              />
            ))}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Comments;
