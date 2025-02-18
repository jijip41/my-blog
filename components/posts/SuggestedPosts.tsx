import React from "react";
import { getPostsByFeature } from "@/lib/post";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

export default async function SuggestedPosts() {
  const posts = await getPostsByFeature(false);
  return (
    <section className="flex flex-col space-y-4">
      <h2 className="text-lg font-semibold text-gray-500">You may like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </MultiCarousel>
    </section>
  );
}
