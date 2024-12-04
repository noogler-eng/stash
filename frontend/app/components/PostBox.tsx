import { currentUser } from "@/hooks/user";
import { DialogDemo } from "./DialogBox";

export default function PostBox() {
  const user = currentUser();

  return (
    <DialogDemo>
      <div>
        {user && (
          <div className="p-2 flex gap-2 items-center bg-gray-100">
            {user.user?.profileImg && (
              <img
                src={user.user?.profileImg}
                className="rounded-full"
                width={50}
              />
            )}
            <input
              type="text"
              className="w-full border-b focus:outline-none rounded-lg py-2 p-3"
              placeholder="what's happening?"
              onClick={() => {}}
            />
          </div>
        )}
      </div>
    </DialogDemo>
  );
}
