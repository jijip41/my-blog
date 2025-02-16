import React from "react";
import { getPostsByFeature } from "../../src/app/services/getPostsByFeature";
import CardPost from "./CardPost";

export default async function FeaturedPosts() {
  const posts = getPostsByFeature(true);
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <CardPost post={post} key={post.id} />
      ))}
    </section>
  );
}
