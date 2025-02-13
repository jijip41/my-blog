import React from "react";
import { PostProps } from "../services/getPostsByFeature";
import Image from "next/image";
import getCategory from "../utils/getCategory";
import Chip from "./Chip";

export default function Post({ post }: { post: PostProps }) {
  const { title, description, date, category, path } = post;
  return (
    <article className="flex flex-col gap-y-2 border shadow-sm rounded-t-md p-4">
      <h3 className="font-semibold text-gray-500">{title}</h3>
      <Image
        src={`/images/${path}.png`}
        alt={`image of ${description}`}
        width={420}
        height={340}
        className="m-auto"
      />
      <p>✨ {description}</p>
      <p className="text-sm ml-auto">{date}</p>
      <Chip category={getCategory(category)} />
    </article>
  );
}
