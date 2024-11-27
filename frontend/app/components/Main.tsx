import Feeds from "./Feeds";
import Sidebar from "./Sidebar";

export default function Main() {
  return (
    <div className="grid grid-cols-5 min-h-screen">
      <div className="col-span-1 h-full border-r">
        <Sidebar />
      </div>
      <div className="col-span-3 h-full border-r">
        <Feeds />
      </div>
      <div className="col-span-1 h-full"></div>
    </div>
  );
}
