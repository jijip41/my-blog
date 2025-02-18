import React from "react";
import CardPost from "./CardPost";
import { getPostsByFeature } from "@/lib/post";
import Link from "next/link";

export default async function FeaturedPosts() {
  const posts = await getPostsByFeature(true);
  return (
    <section className="flex flex-col space-y-4">
      <h2 className="text-lg font-semibold text-gray-500">Featured Posts</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <CardPost post={post} />
          </Link>
        ))}
      </div>
    </section>
  );
}
