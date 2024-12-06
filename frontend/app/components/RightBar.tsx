'use client'
import { currentUser } from "@/hooks/user";

export default function RightBar() {
  const user = currentUser();

  return (
    <div className="p-2">
      <div className="flex">
        {user && (
          <div className="p-3 border bg-gray-100 rounded-xl drop-shadow-xl">
            {user.user?.profileImg && (
              <img
                src={user.user?.profileImg}
                className="rounded-full"
                width={70}
              />
            )}
            <div>
              <div className="flex items-center">
                <p className="font-extrabold">{user.user?.name}</p>.
                <p className="text-sm text-gray-500">
                  {user.user?.id.slice(0, 4)}....{user.user?.id.slice(-4)}
                </p>
              </div>
              <p className="font-extrabold text-sm">{user.user?.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
