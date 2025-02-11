import { readFile } from "fs/promises";
import path from "path";

export async function getPostData(fileName: string) {
  const filePath = path.join(process.cwd(), "data/posts", `${fileName}.md`);
  const content = readFile(filePath, "utf-8");
  return content;
}
