import PostContent from "@/components/posts/PostContent";
import PostNavigator from "@/components/posts/PostNavigator";
import { getAllPostData, getPostData } from "@/lib/post";
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
    <div className="flex flex-col gap-y-4">
      <article className="overflow-hidden rounded-2xl bg-gray-100">
        <Image
          className="h-1/5 max-h-[450px] w-full"
          src={`/images/${path}.png`}
          alt={`image for ${path}`}
          width={760}
          height={400}
        />
        <PostContent postData={postData} />
      </article>
      <section className="flex flex-col md:flex-row">
        {nextPost && <PostNavigator post={nextPost} type="next" />}
        {prevPost && <PostNavigator post={prevPost} type="prev" />}
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPostData();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
