import express from "express";
import prisma from "../clients/db/db";
import user from "./user/index";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';

async function initServer() {
  const app = express();

  app.use(express.json());
  const graphqlServer = new ApolloServer({
    typeDefs: `
        ${user.types}
        type Query {
            ${user.queries}
        }
    `,
    resolvers: {
      // resolution of queries
      Query: {
        ...user.resolvers,
      },
    //   Mutation: {
    //     // Define your mutations resolvers here (if needed)
    //   },
    },
  });

  await graphqlServer.start();
  // middleware to the `/graphql` route
  // @ts-ignore
  app.use("/graphql", expressMiddleware(graphqlServer as any));
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
