import React from "react";
import Image from "next/image";
import Chip from "../Chip";
import getCategory from "@/lib/category";
import { PostProps } from "@/lib/post";
import Link from "next/link";

export default function PostCard({ post }: { post: PostProps }) {
  const { title, description, date, category, path } = post;
  return (
    <Link href={`/posts/${path}`}>
      <article className="flex flex-col gap-y-2 overflow-hidden rounded-t-md border p-4 shadow-sm hover:shadow-md">
        <time className="self-end text-sm">{date}</time>
        <h3 className="w-full truncate font-semibold text-gray-500">{title}</h3>
        <Image
          src={`/images/${path}.png`}
          alt={`image of ${description}`}
          width={360}
          height={280}
          className="m-auto"
        />
        <p className="w-full truncate">✨ {description}</p>
        <Chip category={getCategory(category)} />
      </article>
    </Link>
  );
}
