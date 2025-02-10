import jsonData from "../../../data/posts.json";

export interface PostProps {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export function getPostsByFeature(featured: boolean): PostProps[] {
  if (featured) {
    return jsonData.filter((post) => post.featured);
  }
  return jsonData.filter((post) => !post.featured);
}
