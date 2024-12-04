"use client";
import { useEffect } from "react";
import BottomBar from "./components/BottomBar";
import Landing from "./components/Landing";
import Main from "./components/Main";
import graphQLClient from "@/clients/api";
import { getCurrentUser } from "@/graphql/query/user";
import Features from "./components/Features";

export default function Home() {
  const getUser = async () => {
    const data = await graphQLClient.request(getCurrentUser);
    console.log(data);
  };

  useEffect(() => {
    localStorage.getItem("stash_token") && getUser();
  }, []);

  return (
    <div className="min-h-screen max-w-screen border overflow-x-hidden">
      <Landing />
      <div className="md:px-32">
        <Main />
      </div>
      <Features />
      <BottomBar />
    </div>
  );
}
