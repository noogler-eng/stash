import graphQLClient from "@/clients/api";
import { getCurrentUser } from "@/graphql/query/user";
import { useQuery } from "@tanstack/react-query";

export const currentUser = () => {
  const query = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => await graphQLClient.request(getCurrentUser),
  });

  return { ...query, user: query.data?.getCurrentUser };
};
