'use client'
import { GraphQLClient } from "graphql-request";

// check whether the code is being executed on the client-side (in the browser) or 
// on the server-side (in Node.js)
// const token = typeof window !== "undefined" ? localStorage.getItem('stash_token') : null;

// we can connect our clinet to graphql server on http://localhost:8000/graphql
// we can aslo set the headers for all the req, so that every req must be authorisied
const graphQLClient = new GraphQLClient('http://localhost:8000/graphql', {
    headers: {
        Authorization: localStorage.getItem('stash_token') ? `Bearer ${localStorage.getItem('stash_token')}` : ""
    }
});
export default graphQLClient;
