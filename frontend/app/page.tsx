"use client";
import Feeds from "./components/Feeds";
import PostBox from "./components/PostBox";

export default function Home() {
  return (
    <div className="col-span-3 h-full border-r">
      <PostBox />
      <Feeds />
    </div>
  );
}
