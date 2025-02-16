"use client";

import React, { useContext } from "react";
import { CategoryContext } from "../context/categoryContext";
import { getPostsByCategory } from "../services/getPostsByCategory";
import InlinePost from "@/components/posts/InlinePost";

export default function postsPage() {
  const { state } = useContext(CategoryContext);
  const posts = getPostsByCategory(state);

  return (
    <div className="flex flex-col gap-y-2">
      Posts
      {posts.map((post) => (
        <InlinePost key={post.id} post={post} />
      ))}
    </div>
  );
}
