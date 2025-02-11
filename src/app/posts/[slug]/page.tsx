// "use client";

import { getPostById } from "@/app/services/getPostById";
import { getPostData } from "@/app/services/getPostData";
import { getPostsByCategory } from "@/app/services/getPostsByCategory";
import React from "react";
import Markdown from "react-markdown";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostById(slug);
  console.log({ slug });
  if (!post) return <div>hi</div>;

  const markdown = await getPostData(post.path);

  return (
    <main>
      <Markdown>{markdown}</Markdown>
      <h1>{post?.title}</h1>
      <p>{post?.description}</p>
    </main>
  );
}

export async function generateStaticParam() {
  const posts = getPostsByCategory([]);
  return posts.map((post) => ({
    slug: post.id,
  }));
}
