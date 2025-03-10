import { PostProps } from "@/lib/post";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  post: PostProps;
  type: "next" | "prev";
};
export default function PostNavigator({ post, type }: Props) {
  const { path, title, description } = post;

  return (
    <Link href={`/posts/${path}`} className="max-h-78 relative w-full bg-black">
      <Image
        src={`/images/${path}.png`}
        alt={title}
        width={150}
        height={80}
        className="w-full opacity-40"
      />
      <div className="group absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-around text-white">
        {type === "next" && (
          <ChevronLeft
            size={80}
            className="text-yellow-300 transition-all group-hover:size-24"
          />
        )}
        <div className="flex w-2/3 flex-col">
          <h3 className="text-3xl font-bold ">{title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === "prev" && (
          <ChevronRight
            size={80}
            className="text-yellow-300 transition-all group-hover:size-24"
          />
        )}
      </div>
    </Link>
  );
}
