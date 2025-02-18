import path from "path";
import getCategory, { Category } from "@/lib/category";
import { readFile } from "fs/promises";

export async function getAllPostData(): Promise<PostProps[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8").then(JSON.parse);
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

export async function getPostsByCategory(categories: Category[]) {
  const postData = await getAllPostData();
  if (categories.length === 0) {
    return postData;
  }
  return postData.filter((post) => {
    const postCategory = getCategory(post.category);
    return postCategory && categories.includes(postCategory);
  });
}

export async function getPostData(fileName: string) {
  const filePath = path.join(process.cwd(), "data/posts", `${fileName}.md`);
  const postData = await readFile(filePath, "utf-8");
  return postData;
}

export async function getPostById(postId: string) {
  const postData = await getAllPostData();

  return postData.find(({ id }) => postId === id);
}

export async function getPostsByFeature(
  featured: boolean
): Promise<PostProps[]> {
  const postData = await getAllPostData();

  if (featured) {
    return postData.filter((post) => post.featured);
  }
  return postData.filter((post) => !post.featured);
}
