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

export type PostDataProps = PostProps & {
  content: string;
  nextPost: PostProps | null;
  prevPost: PostProps | null;
};

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

export async function getPostData(postPath: string): Promise<PostDataProps> {
  const filePath = path.join(process.cwd(), "data", "posts", `${postPath}.md`);
  const content = await readFile(filePath, "utf-8");

  const posts = await getAllPostData();
  const post = posts.find((post) => post.path === postPath);

  if (!post) throw new Error(`Data for ${postPath} not found.`);

  const index = posts.indexOf(post);

  const nextPost = index > 0 ? posts[index - 1] : null;
  const prevPost = index < posts.length ? posts[index + 1] : null;

  return { ...post, content, nextPost, prevPost };
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
