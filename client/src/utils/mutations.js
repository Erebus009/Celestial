import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
       
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      
      }
    }
  }
`;

export const ADD_PICTURE = gql`
mutation addPicture($text:String!,$imagelink:String!, $title:String!){
  addPicture(text:$text, imagelink:$imagelink,title:$title){
      _id
      text
      title
      imagelink
    }
  }


`;
export const addFavorite = gql`
mutation addFavorite($picID:ID!){
  addFavorite(pictureId:$picID){
    _id
    text
    title
    imagelink
    createdAt
    comments{
      commentText
    }
    commentcount
    favcount
  }
  
}
`;

export const ADD_COMMENT = gql`
mutation addComment($pictureId: ID!, $commentText: String){
  addComment(pictureId: $pictureId, commentText: $commentText){
    commentAuthor{
      _id
      username
    }
    commentText
    createdAt
  }
}
`;

export const DELETE_COMMENT = gql`
mutation deleteComment($pictureId: ID!, $commentId: ID!){
  removeComment(pictureId: $pictureId, commentId: $commentId)
}`;
