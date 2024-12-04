import Link from "next/link";
import { Container } from "lucide-react";
import { House } from "lucide-react";
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Hash } from "lucide-react";
import { Book } from "lucide-react";
import { DialogDemo } from "./DialogBox";

export default function Sidebar() {
  const routes: {
    title: string;
    component: React.ReactNode;
    link: string;
  }[] = [
    {
      title: "Home",
      component: <House size={20} strokeWidth={3} />,
      link: "/",
    },
    {
      title: "Profile",
      component: <User size={20} strokeWidth={3} />,
      link: "/profile",
    },
    {
      title: "Messages",
      component: <Mail size={20} strokeWidth={3} />,
      link: "/messages",
    },
    {
      title: "Jobs",
      component: <BriefcaseBusiness size={20} strokeWidth={3} />,
      link: "/jobs",
    },
    {
      title: "Explore",
      component: <Hash size={20} strokeWidth={3} />,
      link: "/explore",
    },
    {
      title: "About",
      component: <Book size={20} strokeWidth={3} />,
      link: "/about",
    },
  ];

  return (
    <div className="flex flex-col h-full md:p-5 gap-10">
      <div className="flex gap-2 items-center">
        <Container size={36} strokeWidth={3} />
        <h1 className="text-4xl font-extrabold">
          <i>STASH</i>
        </h1>
      </div>
      <div className="mx-4 px-2 border-l-2">
        <div className="flex flex-col gap-2">
          {routes.map((item, index) => {
            return (
              <Link href={item.link} key={index} className="text-xl">
                <div className="flex gap-1 items-center hover:bg-gray-100 w-fit p-2 rounded-full cursor:pointer font-semibold">
                  {item.component}
                  {item.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <DialogDemo>
        <div className="flex gap-1 items-center hover:bg-gray-200 w-full p-2 rounded-full cursor:pointer font-semibold text-center justify-center bg-gray-100 drop-shadow-xl">
          Tweet
        </div>
      </DialogDemo>
    </div>
  );
}
