import { getAllPostData } from "@/service/post";
import Posts from "@/components/posts/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Things Jihye's learned as a developer",
};

export default async function PostsPage() {
  const posts = await getAllPostData();

  return (
    <section className="flex flex-col-reverse gap-y-4 p-4 sm:flex-row sm:space-x-4">
      <Posts posts={posts} />
    </section>
  );
}
