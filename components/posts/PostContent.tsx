import { CalendarRange } from "lucide-react";

import React from "react";
import { PostDataProps } from "@/service/post";

export default async function PostContent({
  postData,
}: {
  postData: PostDataProps;
}) {
  const { title, description, date, path } = postData;
  const { default: Post } = await import(`@/src/app/content/${path}.mdx`);

  return (
    <article className="flex flex-col p-4">
      <time className="flex gap-x-2 self-end text-sky-500">
        <CalendarRange />
        <p className="font-semibold"> {date.toString()}</p>
      </time>
      <h2 className="text-2xl font-semibold text-sky-700">{title}</h2>
      <p className="text-lg text-sky-600">{description}</p>
      <div className="mb-8 mt-4 w-44 border border-sky-600" />
      <Post />
    </article>
  );
}
