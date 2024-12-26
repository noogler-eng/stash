"use client";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import FeedCard from "../../components/FeedCard";
import { userById } from "@/hooks/user";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Profile() {
  const params = useParams<{ id: string }>();
  const user = userById({ id: params.id });

  return (
    <div className="col-span-3 h-full border-r">
      <div className="w-full flex gap-2 items-center p-2">
        <Link href="/" className="hover:bg-gray-200 p-2 rounded-xl">
          <MoveLeft />
        </Link>
        <div className="flex flex-col">
          <h3 className="text-2xl underline font-extrabold">
            {user.data?.getUserById.name}
          </h3>
          <p className="text-sm text-gray-500">{100} tweets</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 items-center p-2">
        <div className="h-32 bg-gradient-to-r from-cyan-500 to-blue-500 w-full p-8 rounded-xl">
          {user.data?.getUserById.profileImg && (
            <Image
              src={user.data?.getUserById.profileImg}
              className="rounded-full border-8 border-white"
              width={150}
              height={150}
              alt="profile-image"
            />
          )}
        </div>
        <div className="w-full flex flex-col items-start mt-12 px-12">
          <h2 className="text-3xl font-extrabold" id="name">
            {user.data?.getUserById.name}
          </h2>
          <p className="text-lg text-gray-400" id="email">
            {user.data?.getUserById.email}
          </p>
          <p className="w-1/2" id="bio">
            Coming back to India and staying with your parents heals you in ways
            you never knew you needed 🥹❤️ 1 month in India gives you strength
            for those 11 months in pardesh 🫶
          </p>
        </div>
        <div className="flex flex-col h-screen overflow-y-scroll">
          <FeedCard
            data={{
              author: "Virat Kohli",
              authorImg:
                "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              content:
                "Coming back to India and staying with your parents heals you in ways you never knew you needed 🥹❤️ 1 month in India gives you strength for those 11 months in pardesh 🫶",
              contentImg: "",
              username: "@viratkholi",
              createdAt: new Date(),
            }}
          />
          <FeedCard
            data={{
              author: "Virat Kohli",
              authorImg:
                "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              content:
                "Coming back to India and staying with your parents heals you in ways you never knew you needed 🥹❤️ 1 month in India gives you strength for those 11 months in pardesh 🫶",
              contentImg: "",
              username: "@viratkholi",
              createdAt: new Date(),
            }}
          />
          <FeedCard
            data={{
              author: "Virat Kohli",
              authorImg:
                "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              content:
                "Coming back to India and staying with your parents heals you in ways you never knew you needed 🥹❤️ 1 month in India gives you strength for those 11 months in pardesh 🫶",
              contentImg: "",
              username: "@viratkholi",
              createdAt: new Date(),
            }}
          />
          <FeedCard
            data={{
              author: "Virat Kohli",
              authorImg:
                "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              content:
                "Coming back to India and staying with your parents heals you in ways you never knew you needed 🥹❤️ 1 month in India gives you strength for those 11 months in pardesh 🫶",
              contentImg: "",
              username: "@viratkholi",
              createdAt: new Date(),
            }}
          />
          <FeedCard
            data={{
              author: "Virat Kohli",
              authorImg:
                "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              content:
                "Coming back to India and staying with your parents heals you in ways you never knew you needed 🥹❤️ 1 month in India gives you strength for those 11 months in pardesh 🫶",
              contentImg: "",
              username: "@viratkholi",
              createdAt: new Date(),
            }}
          />
          <FeedCard
            data={{
              author: "Virat Kohli",
              authorImg:
                "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              content:
                "Coming back to India and staying with your parents heals you in ways you never knew you needed 🥹❤️ 1 month in India gives you strength for those 11 months in pardesh 🫶",
              contentImg: "",
              username: "@viratkholi",
              createdAt: new Date(),
            }}
          />
          <FeedCard
            data={{
              author: "Virat Kohli",
              authorImg:
                "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              content:
                "Coming back to India and staying with your parents heals you in ways you never knew you needed 🥹❤️ 1 month in India gives you strength for those 11 months in pardesh 🫶",
              contentImg: "",
              username: "@viratkholi",
              createdAt: new Date(),
            }}
          />
          <FeedCard
            data={{
              author: "Virat Kohli",
              authorImg:
                "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              content:
                "Coming back to India and staying with your parents heals you in ways you never knew you needed 🥹❤️ 1 month in India gives you strength for those 11 months in pardesh 🫶",
              contentImg: "",
              username: "@viratkholi",
              createdAt: new Date(),
            }}
          />
          <FeedCard
            data={{
              author: "Virat Kohli",
              authorImg:
                "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              content:
                "Coming back to India and staying with your parents heals you in ways you never knew you needed 🥹❤️ 1 month in India gives you strength for those 11 months in pardesh 🫶",
              contentImg: "",
              username: "@viratkholi",
              createdAt: new Date(),
            }}
          />
          <FeedCard
            data={{
              author: "Virat Kohli",
              authorImg:
                "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              content:
                "Coming back to India and staying with your parents heals you in ways you never knew you needed 🥹❤️ 1 month in India gives you strength for those 11 months in pardesh 🫶",
              contentImg: "",
              username: "@viratkholi",
              createdAt: new Date(),
            }}
          />
          <FeedCard
            data={{
              author: "Virat Kohli",
              authorImg:
                "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              content:
                "Coming back to India and staying with your parents heals you in ways you never knew you needed 🥹❤️ 1 month in India gives you strength for those 11 months in pardesh 🫶",
              contentImg: "",
              username: "@viratkholi",
              createdAt: new Date(),
            }}
          />
        </div>
      </div>
    </div>
  );
}
