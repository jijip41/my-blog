import { getPostData, getPostById, getAllPostData } from "@/lib/post";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostById(slug);

  if (!post) return <div>hi</div>;

  const markdown = await getPostData(post.path);
  return (
    <main className="border p-4 flex flex-col space-y-2">
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
      <h1>{post?.title}</h1>
      <p>{post?.description}</p>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPostData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}
