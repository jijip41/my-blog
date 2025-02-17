"use client";

import React, { useContext } from "react";
import InlinePost from "@/components/posts/InlinePost";
import { PostProps } from "@/lib/post";
import { CategoryContext } from "@/src/app/context/categoryContext";
import getCategory from "@/lib/category";

export default function PostsWithCategory({ posts }: { posts: PostProps[] }) {
  const { state } = useContext(CategoryContext);

  const filteredPosts = posts.filter(({ category }) => {
    const categoryValue = getCategory(category);
    if (!categoryValue) return false;
    return state.includes(categoryValue);
  });
  return (
    <div>
      {filteredPosts.map((post) => (
        <InlinePost key={post.id} post={post} />
      ))}{" "}
    </div>
  );
}
