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

export const addPicture = gql`
mutation addPicture($text:String!, $pictureAuthor:String!,$imagelink:String!, $title:String!){
  addPicture(text:$text, imagelink:$imagelink,title:$title){
      _id
      text
      title
      imagelink
    }
  }


`;
export const addFavorite = gql`
mutation addFavorite($_id:ID!){
  addFavorite(_id:$_id){
    user{
      favroites{
        _id
      }
    }
  }
}
`

