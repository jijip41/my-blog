import React from "react";
import PostCard from "./PostCard";
import Link from "next/link";
import { PostProps } from "@/lib/post";

interface Props {
  posts: PostProps[];
}
export default function PostGrid({ posts }: Props) {
  return (
    <div className="grid-col-1 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  );
}
