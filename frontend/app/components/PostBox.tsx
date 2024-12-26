'use client'
import { currentUser } from "@/hooks/user";
import { DialogDemo } from "./DialogBox";
import { Image } from "lucide-react";

export default function PostBox() {
  const user = currentUser();

  return (
    <DialogDemo>
      <div>
        {user.user?.name && (
          <div className="p-2 flex gap-4 items-start bg-gray-100 rounded-lg ">
            {user.user?.profileImg && (
              <img
                src={user.user?.profileImg}
                className="rounded-full"
                width={40}
              />
            )}
            <div className="flex flex-col gap-1 justify-center w-full">
              <div className="text-gray-500 font-extrabold border border-2 border-gray-500 rounded-xl px-2 w-fit">
                everyone
              </div>
              <input
                type="text"
                className="w-full border-b focus:outline-none rounded-lg py-2 bg-transparent w-full"
                placeholder="what's happening?"
                onClick={() => {}}
              />
              <div>
                <Image size={18}/>
              </div>
            </div>
          </div>
        )}
      </div>
    </DialogDemo>
  );
}
