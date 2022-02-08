import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
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
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($nftId: ID!, $commentBody: String!) {
    addComment(nftId: $nftId, commentBody: $commentBody) {
      _id
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_LIKES = gql`
mutation addLike($id: ID!) {
  addLike(nftId: $id) {
    _id
  }
}`;

export const ADD_NONLIKE = gql`
  mutation addNonLike($id: ID!) {
    addNonLike(nftId: $id) {
      _id
      likes
      nonLikes
    }
  }
`