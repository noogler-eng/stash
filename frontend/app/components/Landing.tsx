"use client";
import { Container } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import graphQLClient from "@/clients/api";
import { GoogleLogin } from "@react-oauth/google";
import { userQueries } from "@/graphql/query/user";
import { useQueryClient } from "@tanstack/react-query";
import { CarouselSpacing } from "./Cards";

export default function Landing() {
  const navigate = useRouter();
  const queryClient = useQueryClient();

  return (
    <div className="min-h-screen flex flex-col items-center">
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
      <div className="flex flex-col items-center flex-grow p-10">
        <div className="flex flex-col w-3/4 gap-2 justify-center mb-12">
          <p className="text-center">
            <i className="font-extrabold">Stash</i> is a modern, scalable, and
            feature-rich Twitter clone built with the latest web technologies.
            The platform provides users with the ability to post{" "}
            <b className="underline">short messages</b> (tweets), follow other
            users, interact with tweets through likes, retweets, and replies,
            and more. Designed for high scalability and performance, Stash uses
            a microservices architecture and modern tech stack to ensure it can
            handle a large number of users and real-time interactions.
          </p>
          <img src="elon.webp" className="rounded-xl w-full" />
          <div className="flex w-full gap-2">
            <img src="love.jpg" className="rounded-xl w-1/4" />
            <img
              src="elon1.webp"
              className="rounded-xl w-3/4 overflow-hidden"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="text-sm text-center">
            <i>companies support this product. as a proof of trust</i>
          </p>
          <CarouselSpacing />
        </div>
      </div>
    </div>
  );
}
