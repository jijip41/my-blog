import React from "react";
import { getPostsByFeature } from "@/lib/post";
import PostsCarousel from "./PostsCarousel";

export default async function SuggestedPosts() {
  const posts = await getPostsByFeature(false);
  return (
    <section className="flex flex-col space-y-4">
      <h2 className="text-lg font-semibold text-gray-500">You may like</h2>
      <PostsCarousel posts={posts} />
    </section>
  );
}
