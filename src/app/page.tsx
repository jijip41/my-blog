import FeaturedPosts from "@/components/posts/FeaturedPosts";
import SuggestedPosts from "@/components/posts/SuggestedPosts";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-8 p-4">
      <section className="flex flex-col gap-y-4">
        <h2 className="text-lg font-semibold text-gray-500">Featured Posts</h2>
        <FeaturedPosts />
      </section>
      <section className="flex flex-col gap-y-4">
        <h2 className="text-lg font-semibold text-gray-500">You may like</h2>
        <SuggestedPosts />
      </section>
    </main>
  );
}
