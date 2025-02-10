import React from "react";
import { getAllPosts } from "../services/getPosts";
import Post from "./Post";

export default async function FeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.featured);
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {featuredPosts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </section>
  );
}
