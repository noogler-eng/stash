import Feeds from "./Feeds";
import PostBox from "./PostBox";
import RightBar from "./RightBar";
import Sidebar from "./Sidebar";

export default function Main() {
  return (
    <div className="grid grid-cols-5 min-h-screen">
      <div className="col-span-1 h-full border-r">
        <Sidebar />
      </div>
      <div className="col-span-3 h-full border-r">
        <PostBox />
        <Feeds />
      </div>
      <div className="col-span-1 h-full">
        <RightBar />
      </div>
    </div>
  );
}
