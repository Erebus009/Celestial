import React from "react";
import CommentForm from "./CommentForm";
import Auth from "../../../utils/auth";
const Comment = ({ comment, deleteComment, addComment }) => {
  
  const canDelete = 
    Auth.loggedIn() &&
    Auth.getProfile().data._id === comment.commentAuthor._id;

  const createdAt = new Date(comment.createdAt).toLocaleDateString();
console.log(comment)
  return (
  <div key={comment._id} className="comment">
    <div className="comment-image-container">
      <img
        src="https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
      />
    </div>
    <div className="comment-right-part">
      <div className="comment-content">
        <div className="comment-author">{comment.commentAuthor.username}</div>

        <div>{createdAt}</div>
      </div>
      <div className="comment-actions">
        {canDelete && (
          <div
            className="comment-action"
            onClick={() => deleteComment(comment._id)}
          >
            Delete
          </div>
        )}
      </div>
    </div>
  </div>
  )
};

export default Comment;
