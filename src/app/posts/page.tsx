"use client";

import React, { useContext } from "react";
import { CategoryContext } from "../context/categoryContext";
import { getPostsByCategory } from "../services/getPostsByCategory";
import Post from "./components/Post";

export default function postsPage() {
  const { state } = useContext(CategoryContext);
  const posts = getPostsByCategory(state);

  return (
    <div className="flex flex-col gap-y-2">
      Posts
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
