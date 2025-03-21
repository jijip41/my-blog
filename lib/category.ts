export enum Category {
  Review = "review",
  NextJs = "nextJs",
  React = "react",
  TailwindCss = "tailwindCss",
  TypeScript = "typeScript",
  Frontend = "frontend",
}

export const categories = Object.values(Category);

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
    case "typeScript":
      return Category.TypeScript;
    case "frontend":
      return Category.Frontend;
    default:
      return undefined;
  }
}

export function getRealCategoryName(name: Category | undefined) {
  switch (name) {
    case Category.Review:
      return "Review";
    case Category.NextJs:
      return "Next.js";
    case Category.React:
      return "React";
    case Category.TailwindCss:
      return "Tailwind CSS";
    case Category.TypeScript:
      return "TypeScript";
    case Category.Frontend:
      return "Frontend";
    default:
      return undefined;
  }
}
