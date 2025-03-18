import { Category, getRealCategoryName } from "@/lib/category";
import React from "react";
import { tv } from "tailwind-variants";

const style = tv({
  base: "rounded-full bg-gray-200 text-gray-800 px-2 py-1 w-fit",
  variants: {
    category: {
      review: "bg-yellow-200 text-gray-800",
      nextJs: "bg-blue-200 text-gray-800",
      react: "",
      tailwindCss: "",
      typeScript: "bg-green-200",
      frontend: "bg-rose-600 text-white",
    },
  },
});

export default function Chip({ category }: { category: Category | undefined }) {
  return (
    <div className={style({ category })}>{getRealCategoryName(category)}</div>
  );
}
