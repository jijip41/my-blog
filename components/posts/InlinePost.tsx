import getCategory from "@/lib/category";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Chip from "../Chip";
import { PostProps } from "@/lib/post";

export default function InlinePost({ post }: { post: PostProps }) {
  const { title, description, date, category, path } = post;

  return (
    <Link
      href={`/posts/${path}`}
      className="w-[180px] rounded-md border shadow-md md:w-[60svw]"
    >
      <article className="flex flex-col gap-x-2 md:flex-row">
        <Image
          src={`/images/${path}.png`}
          alt={`image of ${title}`}
          width={180}
          height={80}
          className="rounded-t-sm md:rounded-l-sm"
        />
        <div className="flex w-[180px] flex-col gap-y-2 truncate p-4 text-sm md:w-[60svw] md:text-base">
          <h3 className="text-md truncate font-semibold text-gray-500">
            {title}
          </h3>
          <p className="truncate">
            {description} ({date})
          </p>
          <Chip category={getCategory(category)} />
        </div>
      </article>
    </Link>
  );
}
