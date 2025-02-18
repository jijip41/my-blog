import { CategoryProvider } from "@/src/app/context/categoryContext";
import React from "react";
import Category from "./Category";
import { PostProps } from "@/lib/post";
import FilteredPosts from "./FilteredPosts";

interface Props {
  posts: PostProps[];
}

export default function Posts({ posts }: Props) {
  return (
    <CategoryProvider>
      <section className="m-auto grid grid-cols-1 gap-2 md:grid-cols-2">
        <FilteredPosts posts={posts} />
      </section>
      <section className="flex-0 flex h-fit flex-col space-y-4 rounded-md border p-4 shadow-md">
        <Category />
      </section>
    </CategoryProvider>
  );
}
