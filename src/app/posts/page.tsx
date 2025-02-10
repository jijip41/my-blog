"use client";

import React, { useContext } from "react";
import { CategoryContext } from "../context/categoryContext";
import { getPostsByCategory } from "../services/getPostsByCategory";

export default function postsPage() {
  const { state } = useContext(CategoryContext);
  const posts = getPostsByCategory(state);

  return (
    <div>
      Posts
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
