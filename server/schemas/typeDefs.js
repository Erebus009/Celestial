const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    pictures: [Picture]!
    comments: [Comment]!
    favorites: [Picture]!
  }
  type Picture {
    _id: ID
    postedBy: ID
    text: String
    title: String
    imagelink: String
    createdAt: String
    comments: [Comment]!
    commentcount: String
    favcount: String
  }
  type Favorite {
    _id: ID
    user: [Picture]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: User
    post: Picture
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userID: ID!): User
    allPictures(offset:Int,limit:Int): [Picture]!
    pictures: [Picture]!
    picture(pictureId: ID!): Picture
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    addPicture(title: String!, text: String!, imagelink: String!): Picture
    addComment(pictureId: ID!, commentText: String): Comment

    addFavorite(pictureId: ID!): Picture

    removeComment(pictureId: ID!, commentId: ID!): Picture

    removePicture(pictureId: ID!): Picture

    removeFavorite(favId: ID!): Favorite
  }
`;

module.exports = typeDefs;
