import PostContent from "@/components/posts/PostContent";
import PostNavigator from "@/components/posts/PostNavigator";
import { getAllPostData, getPostData } from "@/service/post";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  const { path, nextPost, prevPost } = postData;

  return (
    <section className="mx-auto w-3/4 overflow-hidden rounded-t-xl">
      <Image
        className="h-content max-h-[500px] w-full"
        src={`/images/${path}.png`}
        alt={`image for ${path}`}
        width={400}
        height={300}
      />
      <PostContent postData={postData} />
      <div className="m-8 flex flex-col md:flex-row">
        {nextPost && <PostNavigator post={nextPost} type="next" />}
        {prevPost && <PostNavigator post={prevPost} type="prev" />}
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPostData();
  return posts.map((post) => ({
    slug: post.path,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { title, description } = await getPostData(slug);

  return {
    title,
    description,
  };
}

export const dynamicParams = false;
