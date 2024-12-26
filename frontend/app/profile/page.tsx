"use client";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { currentUser } from "@/hooks/user";

export default function Profile() {
  const user = currentUser();
  return (
    <div className="col-span-3 h-full border-r">
      <div className="w-full flex gap-2 items-center p-2">
        <Link href="/" className="hover:bg-gray-200 p-2 rounded-xl">
          <MoveLeft />
        </Link>
        <div className="flex flex-col">
          <h3 className="text-2xl underline font-extrabold">
            {user.data?.getCurrentUser.name}
          </h3>
          <p className="text-sm text-gray-500">{100} tweets</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 items-center p-2">
        <div className="h-32 bg-gradient-to-r from-cyan-500 to-blue-500 w-full p-8 rounded-xl">
          <img
            src={user.data?.getCurrentUser.profileImg || ""}
            className="rounded-full border-8 border-white"
            width={150}
          />
        </div>
        <div className="w-full flex flex-col items-start mt-12 px-12">
          <h2 className="text-3xl font-extrabold" id="name">
            {user.data?.getCurrentUser.name}
          </h2>
          <p className="text-lg text-gray-400" id="email">
            {user.data?.getCurrentUser.email}
          </p>
          <p className="w-1/2" id="bio">
            Coming back to India and staying with your parents heals you in ways
            you never knew you needed 🥹❤️ 1 month in India gives you strength
            for those 11 months in pardesh 🫶
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
