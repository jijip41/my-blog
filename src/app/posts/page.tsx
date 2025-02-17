import { getAllPostData } from "@/lib/post";
import PostsWithCategory from "@/components/posts/PostsWithCategory";

export default async function postsPage() {
  const posts = await getAllPostData();

  return (
    <main className="flex flex-col gap-y-2">
      Posts
      <PostsWithCategory posts={posts} />
    </main>
  );
}
