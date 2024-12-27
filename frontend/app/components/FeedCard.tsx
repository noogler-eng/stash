import { Repeat2 } from "lucide-react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Share } from "lucide-react";
import Image from "next/image";

export default function FeedCard({
  data,
}: {
  data: {
    userId: string;
    author: string;
    authorImg: string;
    content: string;
    contentImg?: string;
    username: string;
    createdAt: string;
  };
}) {
  console.log(new Date(data.createdAt));

  return (
    <div className="flex rounded-xl border-b p-4 cursor-pointer w-full border-2">
      <div>
        <Link href={`/profile/${data.userId}`}>
          {data.authorImg && (
            <Image
              src={data.authorImg}
              className="rounded-full p-1"
              width={100}
              height={100}
              alt="author-img"
            />
          )}
        </Link>
      </div>
      <div className="px-1">
        <div className="flex flex-col">
          <p className="">
            <span className="text-lg font-extrabold">{data.author}</span>.
            <span className="text-gray-500">{data.username}</span>.
            <span className="text-gray-500">{data.createdAt}</span>
          </p>
          {data.contentImg && (
            <img src={data.contentImg} className="w-full rounded-xl mt-4" />
          )}
          <p className="min-h-5">{data.content}</p>
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
