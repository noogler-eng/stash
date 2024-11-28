"use client";
import { Container } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";

export default function Landing() {
  const navigate = useRouter();

  // it will gives us short love token which will be valid for short period of time
  // we have to decode that token to fetch the information, decode using jwt.io
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

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
          <Button onClick={() => login()} variant={"default"}>
            sign in with google 🚀🚀
          </Button>
          <Button onClick={() => googleLogout()} variant={"default"}>
            logout 🚀🚀
          </Button>
          <Button onClick={() => navigate.replace("/signin")}>Button</Button>
        </div>
      </div>
    </div>
  );
}
