import FeaturedPosts from "@/components/posts/FeaturedPosts";
import Hero from "@/components/posts/Hero";
import SuggestedPosts from "@/components/posts/SuggestedPosts";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-8">
      <Hero />
      <FeaturedPosts />
      <SuggestedPosts />
    </main>
  );
}
