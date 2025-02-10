export enum Category {
  Review = "review",
  NextJs = "nextJs",
  React = "react",
  TailwindCss = "tailwindCss",
}
export default function getCategory(category: string) {
  switch (category) {
    case "review":
      return Category.Review;
    case "nextJs":
      return Category.NextJs;
    case "react":
      return Category.React;
    case "tailwindCss":
      return Category.TailwindCss;
    default:
      return undefined;
  }
}
