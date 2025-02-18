import React from "react";
import { getPostsByFeature } from "@/lib/post";
import PostsCarousel from "./PostsCarousel";

export default async function SuggestedPosts() {
  const posts = await getPostsByFeature(false);
  return (
    <section className="">
      <PostsCarousel posts={posts} />
    </section>
  );
}
