import jsonData from "../../../data/posts.json";

export function getPostById(postId: String) {
  return jsonData.find(({ id }) => postId === id);
}
