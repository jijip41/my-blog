import Chip from "@/app/components/Chip";
import { PostProps } from "@/app/services/getPostsByFeature";
import getCategory from "@/app/utils/getCategory";
import Image from "next/image";
import React from "react";

export default function Post({ post }: { post: PostProps }) {
  const { title, description, date, category, path } = post;

  return (
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
  );
}
