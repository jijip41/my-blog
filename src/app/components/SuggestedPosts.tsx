import React from "react";
import { getPostsByFeature } from "../services/getPostsByFeature";
import Post from "./Post";

export default function SuggestedPosts() {
  const posts = getPostsByFeature(false);
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </section>
  );
}
