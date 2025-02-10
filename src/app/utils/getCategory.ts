export enum Category {
  Review = "review",
  NextJs = "nextJs",
}
export default function getCategory(category: string) {
  switch (category) {
    case "review":
      return Category.Review;
    case "nextJs":
      return Category.NextJs;
    default:
      return undefined;
  }
}
