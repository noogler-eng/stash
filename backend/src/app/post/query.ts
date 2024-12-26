const queries = `
    getAllPost: [Post!]!
`;


const muta = `
    usePostPost(payload: postCreationPayload): String!
`;

export default {queries, muta};
