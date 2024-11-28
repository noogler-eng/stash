// query is used to define the structure of schema of our api using graphql 
// without any variable it commes diertly without '()'
const queries = `
    verifyGoogleToken(token: String): String!
    getCurrentUser: User!
`

export default queries;