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

export function getAllPosts(): PostProps[] {
  return jsonData;
}
