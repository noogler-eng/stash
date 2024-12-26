import express from "express";
import user from "./user/index";
import post from "./post/index";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { graphql_context } from "./interfaces";
import decodeToken from "../services/decodeToken";

async function initServer() {
  const app = express();

  // adding the cors for allowing our client to react with it
  // npm i @types/cors cors
  app.use(cors());

  app.use(express.json());
  const graphqlServer = new ApolloServer<graphql_context>({
    typeDefs: `
        ${user.types}
        ${post.types}
        type Query {
            ${user.queries}
            ${post.simple_query}
        }
        type Mutation {
        ${post.muta}
        }
        
    `,
    resolvers: {
      // resolution of queries
      Query: {
        ...user.resolvers,
        ...post.resolvers,
      },
      Mutation: {
        ...post.mutations,
      },
    },
  });

  await graphqlServer.start();
  // middleware to the `/graphql` route
  app.use(
    "/graphql",
    // @ts-ignore
    expressMiddleware(graphqlServer as any, {
      context: async ({ req, res }) => {
        const token = req.headers.authorization;
        if (!token)
          return {
            id: "",
            email: "",
          };
        const user = await decodeToken(token.split(" ")[1]);
        return user;
      },
    })
  );

  app.listen("8000", () => {
    console.log("express server listening at: ", 8000);
  });
}

initServer()
  .then(() => {
    console.log("server is working fine!");
  })
  .catch((error) => {
    console.log(error);
  });
