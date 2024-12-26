import { graphql_context } from "../interfaces";
import prisma from "../../clients/db/db";

const mutations = {
  usePostPost: async (
    parent: any,
    {
      payload,
    }: {
      payload: {
        content: string;
        image: string;
      };
    },
    context: graphql_context | undefined
  ) => {
    if (!context) return "Invalid User!";
    try {
      const { id } = context;
      const post = await prisma.post.create({
        data: {
          content: payload.content,
          userId: id,
          contentImg: payload.image,
          likes: 0,
        },
      });
      return `succesfully created ${post.id}`;
    } catch (error) {
      console.log(error);
      return "error in server side!";
    }
  },
};

export default mutations;
