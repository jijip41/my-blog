import React from "react";
import PostCard from "./PostCard";
import { PostProps } from "@/service/post";

interface Props {
  posts: PostProps[];
}
export default function PostGrid({ posts }: Props) {
  return (
    <div className="grid-col-1 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <PostCard post={post} key={post.path} />
      ))}
    </div>
  );
}
