import { getAllPostData } from "@/lib/post";
import Posts from "@/components/posts/Posts";

export default async function PostsPage() {
  const posts = await getAllPostData();

  return (
    <div className="flex flex-col-reverse gap-y-4 p-4 sm:flex-row sm:space-x-4">
      <Posts posts={posts} />
    </div>
  );
}
