import jsonData from "../data/posts.json";
import { readFile } from "fs/promises";
import path from "path";
import getCategory, { Category } from "@/lib/category";

export function getPostsByCategory(categories: Category[]) {
  if (categories.length === 0) {
    return jsonData;
  }
  return jsonData.filter((post) => {
    const postCategory = getCategory(post.category);
    return postCategory && categories.includes(postCategory);
  });
}

export async function getPostData(fileName: string) {
  const filePath = path.join(process.cwd(), "data/posts", `${fileName}.md`);
  const content = readFile(filePath, "utf-8");
  return content;
}

export function getPostById(postId: String) {
  return jsonData.find(({ id }) => postId === id);
}

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
