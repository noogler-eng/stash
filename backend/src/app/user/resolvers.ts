import axios from "axios";
import prisma from "../../clients/db/db";
import generateToken from "../../services/jwtToken";
import { graphql_context } from "../interfaces";

// when we fetch somthing then resolver contains the logic of returning data
const resolvers = {
  // here we are getting token
  verifyGoogleToken: async (parent: any, { token }: { token: string }) => {
    const googleToken = token;
    try {
      const googleOuthURL = new URL("https://oauth2.googleapis.com/tokeninfo");
      googleOuthURL.searchParams.set("id_token", googleToken);

      const { data } = await axios.get(googleOuthURL.toString(), {
        responseType: "json",
      });

      let user = await prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });

      if (!user || !user?.email) {
        user = await prisma.user.create({
          data: {
            name: data.name,
            email: data.email,
            profileImg: data.picture,
          },
        });
      }

      const payload = {
        id: user.id,
        email: user.email,
      };
      const jwt_token = generateToken(payload);
      return jwt_token;
    } catch (error) {
      console.log(error);
      return "Verification Failed!";
    }
  },

  // parent, argument, context
  getCurrentUser: async (
    parent: any,
    {},
    context: graphql_context | undefined
  ) => {
    if (context == undefined) return null;
    const email = context.email;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        profileImg: true,
      },
    });

    return user;
  },
};

export default resolvers;
