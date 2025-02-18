import path from "path";
import getCategory, { Category } from "@/lib/category";
import { readFile } from "fs/promises";

export async function getAllPostData(): Promise<PostProps[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8").then(JSON.parse);
}

export interface PostProps {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export interface PostDataProps extends PostProps {
  content: string;
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

export async function getPostData(postPath: string) {
  const filePath = path.join(process.cwd(), "data", "posts", `${postPath}.md`);
  const content = await readFile(filePath, "utf-8");

  const allPosts = await getAllPostData();
  const metadata = allPosts.find((post) => post.path === postPath);

  if (!metadata) throw new Error(`Data for ${postPath} not found.`);
  return { ...metadata, content };
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
