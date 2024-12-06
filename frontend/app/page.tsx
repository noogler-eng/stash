"use client";
import BottomBar from "./components/BottomBar";
import Landing from "./components/Landing";
import Main from "./components/Main";
import Features from "./components/Features";

export default function Home() {
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
