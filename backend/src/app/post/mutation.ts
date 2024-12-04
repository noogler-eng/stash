import { graphql_context } from "../interfaces";
import prisma from "../../clients/db/db";

const mutations = {
  // @ts-ignore
  usePostPost: async (
    parent: any,
    {
      payload,
    }: {
      payload: {
        content: string;
        image: File;
        likes: Number;
      };
    },
    context: graphql_context | undefined
  ) => {
    if (!context) return "Invalid User!";
    try {
      const { id, email } = context;
      const post = await prisma.post.create({
        data: {
          content: payload.content,
          userId: id,
          contentImg: "",
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
