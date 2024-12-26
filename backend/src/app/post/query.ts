const queries = `
    usePostPost(payload: {
        content: String
        image: File
        likes: 0
    }): String
    getPostAccToPagination(): Post[]
`;
export default queries;
