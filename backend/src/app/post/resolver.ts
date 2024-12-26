import prisma from "../../clients/db/db";
import { graphql_context } from "../interfaces";

const resolvers = {
  getAllPost: async (
    parent: any,
    payload: any,
    context: graphql_context | undefined
  ) => {
    try {
      const posts = await prisma.post.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw new Error("Failed to fetch posts");
    }
  },
};

export default resolvers;
