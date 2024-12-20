import { Repeat2 } from "lucide-react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Share } from 'lucide-react';


export default function FeedCard({
  data,
}: {
  data: {
    author: string;
    authorImg: string;
    content: string;
    contentImg?: string;
    username: string;
    createdAt: Date;
  };
}) {
  return (
    <div className="flex rounded-xl border-b p-4 cursor-pointer">
      <div>
        <Link href={`/profile/${data.username}`}>
          <img src={data.authorImg} className="rounded-full p-1" width={100} />
        </Link>
      </div>
      <div className="px-1">
        <div className="flex flex-col">
          <p className="">
            <span className="text-lg font-extrabold">{data.author}</span>.
            <span className="text-gray-500">{data.username}</span>.
            <span className="text-gray-500">
              {data.createdAt.toLocaleDateString()}
            </span>
          </p>
          {data.contentImg && <img src={data.contentImg} />}
          <p>{data.content}</p>
        </div>
        <div className="flex justify-between items-center px-16 mt-1">
          <MessageCircle size={18} />
          <Heart size={18} />
          <Repeat2 size={20} />
          <Share size={18} />
        </div>
      </div>
    </div>
  );
}
