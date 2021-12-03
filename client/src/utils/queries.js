import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      pictures {
        _id
        text
        title
        imagelink
        createdAt
        comments{
          commentText
          commnentAuthor
          createdAt
        }
      }
    }
  },
 
`;


