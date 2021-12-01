const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  postAuthor: {
    type: String,
    trim: true,
    required: true,
  },

  text: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
      type: Date,
      default: Date.now()
  },
  
  comments : [{
    commentText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    commentAuthor: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },]
});

const Post = model("Post", postSchema);

module.exports = Post;
