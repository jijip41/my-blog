import getCategory from "@/lib/category";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PostProps } from "../../src/app/services/getPostsByFeature";
import Chip from "../Chip";

export default function InlinePost({ post }: { post: PostProps }) {
  const { title, description, date, category, path, id } = post;

  return (
    <Link href={`/posts/${id}`}>
      <article className="flex gap-x-2 border rounded-md shadow-md">
        <Image
          src={`/images/${path}.png`}
          alt={`image of ${title}`}
          width={180}
          height={80}
          className="rounded-l-sm"
        />
        <div className="flex flex-col gap-y-2 p-4">
          <h3 className="text-md font-semibold text-gray-500">{title}</h3>
          <p>
            {description} ({date})
          </p>
          <Chip category={getCategory(category)} />
        </div>
      </article>
    </Link>
  );
}
