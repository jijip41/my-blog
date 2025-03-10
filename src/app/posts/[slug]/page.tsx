import PostMarkdown from "@/components/posts/MarkdownViewer";
import PostNavigator from "@/components/posts/PostNavigator";
import {
  getAllPostData,
  getNextPost,
  getPostData,
  getPrevPost,
} from "@/lib/post";
import { CalendarRange } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  const { content, title, description, path, date } = postData;

  const prevPost = await getPrevPost(slug);
  const nextPost = await getNextPost(slug);

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
        <section className="flex flex-col p-4">
          <time className="flex gap-x-2 self-end text-sky-500">
            <CalendarRange />
            <p className="font-semibold"> {date.toString()}</p>
          </time>
          <h2 className="text-2xl font-semibold text-sky-700">{title}</h2>
          <p className="text-lg text-sky-600">{description}</p>
          <div className="mb-8 mt-4 w-44 border border-sky-600" />
          <PostMarkdown content={content} />
        </section>
      </article>
      <section className="flex justify-between">
        {prevPost && (
          <PostNavigator post={prevPost} className="mr-auto">
            Previous Post
          </PostNavigator>
        )}
        {nextPost && (
          <PostNavigator post={nextPost} className="ml-auto">
            Next Post
          </PostNavigator>
        )}
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
