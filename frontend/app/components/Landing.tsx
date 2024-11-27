"use client";
import { Container } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Landing() {
  const navigate = useRouter();

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
        <div className="flex gap-2">
          <Button onClick={() => navigate.replace("/signin")}>Button</Button>
        </div>
      </div>
    </div>
  );
}
