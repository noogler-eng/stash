const types = `
    type User {
        id: ID!
        name: String
        email: String
        profileImg: String
    }

    type Post {
        id: ID!
        contentImg: String
        content: String
        likes: Int
        comments: Int
        createdAt: String
    }

    type UserWithPosts {
        id: ID!
        name: String
        email: String
        profileImg: String
        posts: [Post!]!
    }
`;

export default types;
