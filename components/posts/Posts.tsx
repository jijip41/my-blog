import { CategoryProvider } from "@/src/app/context/categoryContext";
import React from "react";
import Category from "./Category";
import { PostProps } from "@/service/post";
import FilteredPosts from "./FilteredPosts";

interface Props {
  posts: PostProps[];
}

export default function Posts({ posts }: Props) {
  return (
    <CategoryProvider>
      <div className="flex flex-col gap-y-8">
        <Category />
        <section className="m-auto grid grid-cols-1 gap-2 md:grid-cols-3">
          <FilteredPosts posts={posts} />
        </section>
      </div>
    </CategoryProvider>
  );
}
