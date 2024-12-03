"use client";
import { Container } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import graphQLClient from "@/clients/api";
import { GoogleLogin } from "@react-oauth/google";
import { userQueries } from "@/graphql/query/user";
import { useQueryClient } from "@tanstack/react-query";

export default function Landing() {
  const navigate = useRouter();
  const queryClient = useQueryClient();

  return (
    <div className="min-h-screen">
      <div className=" w-screen border-2 p-4 flex justify-between w-full items-center border">
        <div className="w-fit">
          <Container
            size={42}
            strokeWidth={3}
            className="hover:shadow-xl hover:shadow-indigo-500/100 rounded-full p-1"
          />
          <h1 className="text-4xl font-extrabold">
            <i className="hover:drop-shadow-2xl shadow-indigo-500/100">STASH</i>
          </h1>
        </div>
        <div className="flex gap-2 items-center">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              // it will gives us short love token which will be valid for short period of time
              // we have to decode that token to fetch the information, decode using jwt.io
              const google_token = credentialResponse.credential;
              if (!google_token) {
                alert("google authorisation failed");
                return;
              }

              // this token is formed by google token and jwt combination
              const { verifyGoogleToken } = await graphQLClient.request(
                userQueries,
                { token: google_token }
              );

              if (verifyGoogleToken) {
                localStorage.setItem("stash_token", verifyGoogleToken);
                await queryClient.invalidateQueries({
                  queryKey: ["currentUser"],
                });
              } else {
                throw new Error("token not received!");
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          <Button onClick={() => navigate.replace("/signin")}>Button</Button>
        </div>
      </div>
    </div>
  );
}
