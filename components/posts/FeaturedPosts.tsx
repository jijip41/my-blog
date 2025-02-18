import React from "react";
import { getPostsByFeature } from "@/lib/post";
import PostGrid from "./PostGrid";

export default async function FeaturedPosts() {
  const posts = await getPostsByFeature(true);
  return (
    <section className="flex flex-col space-y-4">
      <h2 className="text-lg font-semibold text-gray-500">Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
