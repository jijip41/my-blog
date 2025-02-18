export enum Category {
  Review = "review",
  NextJs = "nextJs",
  React = "react",
  TailwindCss = "tailwindCss",
  TypeScript = "typeScript",
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
    default:
      return undefined;
  }
}
