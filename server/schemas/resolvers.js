const { AuthenticationError } = require("apollo-server-express");
const { User, Picture, Favorite, Comments } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("pictures");
    },
    user: async (parent, { userID }, context) => {
      
      return User.findOne({ _id: userID}).populate("pictures");
      
    },
    allPictures: async() =>{
      return Picture.find().sort({createdAt: -1});
    },
  
    pictures: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Picture.find(params).sort({ createdAt: -1 }).populate("Comments")
    },
    picture: async (parent, { pictureId }) => {
      return Picture.findOne({ _id: pictureId }).populate("Comments")
    },
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

    addPicture: async (parent, { imagelink,text,title }, context) => {
      console.log(imagelink,title,text)
      if (context.userID) {
        const picture = await Picture.create({
          imagelink: imagelink,
          title: title,
          text: text,
          postedBy: context.userID,
        });

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.userID},
          {
            $push: { pictures: picture._id},
          },
          {
            new: true,
          }
        );
        return { updatedUser, picture };
      }
      

        throw new AuthenticationError("Need to be logged in to post pictures");
    },

    addComment: async (parent, {pictureId, commentText}, context) => {
      const comment = await Comments.create({
        commentText
       
      })
      
      return Picture.findByIdAndUpdate(
        { _id: pictureId },
        {
          $push: { comments: { comment } },
        },
        {
          new: true,
          runValidators: true,
          
        }
        
      );
      
    },
  
  

    addFavorite: async (parent, { userId,pictureId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { favorites: { _id: pictureId } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeFavorite: async (parent, { favId }) => {
      return Favorite.findOneAndUpdate(
        { _id: favId },
        { $pull: { favorites: { _id: favId } } },
        { new: true }
      );
    },

    removeComment: async (parent, {pictureId, commentId }) => {
      return Picture.findOneAndUpdate(
        { _id:pictureId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
    removePicture: async (parent, {pictureId }) => {
      return Picture.deleteOne(
        { _id: pictureId },
        { $pull: { Pictures: { _id: pictureId } } },
        { new: true }
      );
    },
  },
};
module.exports = resolvers;
