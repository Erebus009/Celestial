const { AuthenticationError } = require("apollo-server-express");
const { User,Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    posts: async ( parent, {username}) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({createdAt: -1});
    },
    post: async (parent,{postId}) => { 
      return Post.findOne({_id: postId})

    }
  },
//  User AUTH mutation

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async(parent,{text,postAuthor}) => {
      const post = await Post.create({ text, postAuthor });
      
      await User.findOneAndUpdate(
        {username: postAuthor},
        {$addToSet:{posts: post._id}}
      )
      return post
    }
  },
};
module.exports = resolvers;
