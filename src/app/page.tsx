import FeaturedPosts from "./components/FeaturedPosts";

export default function Home() {
  return (
    <main className="p-4">
      <section>
        <h2 className="font-semibold text-gray-500">Featured Posts</h2>
        <FeaturedPosts />
      </section>
      <section>
        <h2 className="font-semibold text-gray-500">You may like</h2>
      </section>
    </main>
  );
}
