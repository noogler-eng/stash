import { graphql } from "../../gql";

export const userQueries = graphql(`
  query verifyUser($token: String) {
    verifyGoogleToken(token: $token)
  }
`);
