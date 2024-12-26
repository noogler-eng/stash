import { graphql } from "../../gql";
// import { graphql } from "graphql";

export const userQueries = graphql(`
  query verifyUser($token: String) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUser = graphql(`
  query GetCurrentUser {
    getCurrentUser {
      id
      name
      email
      profileImg
    }
  }
`);

export const getUserById = graphql(`
  query GetUserById($id: String!) {
    getUserById(id: $id) {
      id
      name
      email
      profileImg
      posts {
        id
        contentImg
        content
        likes
        comments
        createdAt
      }
    }
  }
`);
