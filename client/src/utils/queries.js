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

export const QUERY_PICTURES = gql`
query getPictures($offset:Int,$limit:Int){
  allPictures(offset:$offset, limit:$limit){
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

}`

export const QUERY_PICTURE = gql`
query picture($pictureId:ID!){
  picture(pictureId:$pictureId){
    _id
    postedBy
    text
    title
    imagelink
    createdAt
    comments{
      commentText
      commentAuthor{
        username
      }
      createdAt
    }
    commentcount
    favcount
  }

}`


