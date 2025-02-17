import React from "react";
import CardPost from "./CardPost";
import { getPostsByFeature } from "@/lib/post";

export default async function SuggestedPosts() {
  const posts = await getPostsByFeature(false);
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <CardPost post={post} key={post.id} />
      ))}
    </section>
  );
}
