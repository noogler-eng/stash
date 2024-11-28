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
