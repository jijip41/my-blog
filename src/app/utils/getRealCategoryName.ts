import { Category } from "./getCategory";

export function getRealCategoryName(name: Category | undefined) {
  switch (name) {
    case Category.Review:
      return "Review";
    case Category.NextJs:
      return "Next.js";
    default:
      return undefined;
  }
}
