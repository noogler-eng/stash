import BottomBar from "./components/BottomBar";
import Landing from "./components/Landing";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Landing />
      <div className="md:px-32">
        <Main />
      </div>
      <BottomBar />
    </div>
  );
}
