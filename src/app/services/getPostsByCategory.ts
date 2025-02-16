import getCategory, { Category } from "@/lib/category";
import jsonData from "../../../data/posts.json";

export function getPostsByCategory(categories: Category[]) {
  if (categories.length === 0) {
    return jsonData;
  }
  return jsonData.filter((post) => {
    const postCategory = getCategory(post.category);
    return postCategory && categories.includes(postCategory);
  });
}
