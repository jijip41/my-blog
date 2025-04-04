import FeaturedPosts from "@/components/posts/FeaturedPosts";
import SuggestedPosts from "@/components/posts/SuggestedPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Jihye's blog - home page with featured posts",
};

export default function Home() {
  return (
    <section className="flex flex-col gap-y-8">
      <FeaturedPosts />
      <SuggestedPosts />
    </section>
  );
}
