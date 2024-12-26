import type { Metadata } from "next";
import "./globals.css";
import Provider from "./components/provider";
import Landing from "./components/Landing";
import Features from "./components/Features";
import BottomBar from "./components/BottomBar";
import Sidebar from "./components/Sidebar";
import RightBar from "./components/RightBar";

export const metadata: Metadata = {
  title: "🎃 stash",
  description: "share your post now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="min-h-screen max-w-screen border overflow-x-hidden">
            <Landing />
            <div className="md:px-32">
              <div className="grid grid-cols-5 min-h-screen" id="arena">
                <div className="col-span-1 h-full border-r">
                  <Sidebar />
                </div>
                {children}
                <div className="col-span-1 h-full">
                  <RightBar />
                </div>
              </div>
            </div>
            <Features />
            <BottomBar />
          </div>
        </Provider>
      </body>
    </html>
  );
}
