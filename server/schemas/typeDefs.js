const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    pictures: [Picture]!
    comments: [Comment]!
    favorites: [Favorite]!
  }
  type Picture {
    _id: ID
    userId: ID
    text: String
    title: String
    imagelink: String
    createdAt: String
    comments: [Comment]!
  }
  type Favorite {
    _id: ID
    user: [User]!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    allPictures(offset:Int,limit:Int): [Picture]!
    pictures: [Picture]!
    picture(PictureId: ID!): Picture
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    addPicture(title: String!, text: String!, imagelink: String!): Picture

    addComment(
    commentText: String!
    pictureId: ID!
    ): Picture

    addFavorite(pictureId: ID!, userId: ID!): Picture

    removeComment(pictureId: ID!, commentId: ID!): Picture

    removePicture(pictureId: ID!): Picture

    removeFavorite(favId: ID!): Favorite
  }
`;

module.exports = typeDefs;
