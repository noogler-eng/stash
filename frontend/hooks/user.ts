"use client";
import graphQLClient from "@/clients/api";
import { getCurrentUser } from "@/graphql/query/user";
import { getUserById } from "@/graphql/query/user";
import { useQuery } from "@tanstack/react-query";

export const currentUser = () => {
  const query = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => await graphQLClient.request(getCurrentUser),
  });

  return { ...query, user: query.data?.getCurrentUser };
};

export const userById = ({ id }: { id: string }) => {
  console.log(id, "reached here");
  const query = useQuery({
    queryKey: ["getUserById", id],
    queryFn: async () => await graphQLClient.request(getUserById, { id }),
  });

  return { ...query, user: query.data?.getUserById };
};
