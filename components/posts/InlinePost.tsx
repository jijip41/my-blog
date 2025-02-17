import getCategory from "@/lib/category";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Chip from "../Chip";
import { PostProps } from "@/lib/post";

export default function InlinePost({ post }: { post: PostProps }) {
  const { title, description, date, category, path, id } = post;

  return (
    <Link
      href={`/posts/${id}`}
      className="border rounded-md shadow-md w-[180px] md:w-[60svw]"
    >
      <article className="flex flex-col md:flex-row gap-x-2">
        <Image
          src={`/images/${path}.png`}
          alt={`image of ${title}`}
          width={180}
          height={80}
          className="rounded-t-sm md:rounded-l-sm"
        />
        <div className="flex flex-col gap-y-2 p-4 w-[180px] md:w-[60svw] text-sm md:text-base truncate">
          <h3 className="text-md font-semibold text-gray-500 truncate">
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
