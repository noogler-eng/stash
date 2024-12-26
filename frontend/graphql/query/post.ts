import { graphql } from "../../gql";
// import { graphql } from "graphql";

export const userPostMutation = graphql(`
  mutation UsePostPost($payload: postCreationPayload!) {
    usePostPost(payload: $payload)
  }
`);

export const getPosts = graphql(`
  query GetAllPost {
    getAllPost {
      id
      contentImg
      content
      likes
      comments
      createdAt
    }
  }
`);
