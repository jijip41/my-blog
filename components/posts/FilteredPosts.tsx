"use client";

import getCategory from "@/lib/category";
import React, { useContext } from "react";
import { PostProps } from "@/service/post";
import { CategoryContext } from "@/src/app/context/categoryContext";
import PostCard from "./PostCard";

export default function FilteredPosts({ posts }: { posts: PostProps[] }) {
  const { state } = useContext(CategoryContext);

  const filteredPosts = posts.filter(({ category }) => {
    const categoryValue = getCategory(category);
    if (!categoryValue) return false;
    return state.includes(categoryValue);
  });
  return (
    <>
      {filteredPosts.map((post) => {
        return <PostCard post={post} key={post.path} />;
      })}
    </>
  );
}
