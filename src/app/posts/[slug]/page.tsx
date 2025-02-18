import { getPostData, getAllPostData } from "@/lib/post";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  params: { slug: string };
}

export default async function PostPage({ params: { slug } }: Props) {
  const postData = await getPostData(slug);
  const { content, title, description } = postData;

  return (
    <section className="flex flex-col space-y-4 border p-4">
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <p className="text-grey-700 text-lg">{description}</p>
      <Markdown
        remarkPlugins={[remarkGfm]}
        className="rounded-md bg-gray-100 p-4"
      >
        {content}
      </Markdown>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPostData();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
