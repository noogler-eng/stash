"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { currentUser } from "@/hooks/user";
import { useState } from "react";

export function DialogDemo({ children }: { children: React.ReactNode }) {
  const user = currentUser();
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>();
  const [imageUrl, setImageUrl] = useState("");

  const handelPost = async () => {};

  const handelGenerateWithAi = async () => {};

  console.log(imageUrl);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader onSubmit={handelPost}>
          <DialogTitle>Tweet</DialogTitle>
          <DialogDescription>
            Make sure this is available to everyone. Click post when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex gap-2 items-center">
            {user.user?.profileImg && (
              <img
                src={user.user?.profileImg}
                width={50}
                className="rounded-full"
              />
            )}
            <div className="flex flex-col bg-gray-100 hover:bg-gray-200 justify-center p-2 rounded-xl">
              <p className="text-sm font-extrabold">{user.user?.name}</p>
              <p className="text-sm">{user.user?.email}</p>
            </div>
          </div>
          <div className="w-full items-center gap-4">
            <Textarea
              id="name"
              placeholder="What's happening?"
              className="col-span-3"
              rows={10}
            />
          </div>
          <div className="w-full items-center gap-4">
            <Input
              type="file"
              id="image"
              className="col-span-3"
              onChange={async (e) => {
                const incommingFile = e?.target?.files?.[0];
                if (!incommingFile) return;
                setFile(incommingFile);
                const arrayBuffer = await incommingFile?.arrayBuffer();
                const blob = new Blob([arrayBuffer], { type: file?.type });
                const objectURL = URL.createObjectURL(blob);
                setImageUrl(objectURL);
              }}
              accept="image/*"
            />
          </div>
          {imageUrl && (
            <div className="w-full">
              <img src={imageUrl} className="w-1/2" />
            </div>
          )}
          <div className="w-full items-center gap-4">
            <Button id="name" className="w-full" onClick={handelGenerateWithAi}>
              generate with ai
            </Button>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
