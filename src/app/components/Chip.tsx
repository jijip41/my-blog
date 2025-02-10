import React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { getRealCategoryName } from "../utils/getRealCategoryName";
import { Category } from "../utils/getCategory";

const style = tv({
  base: "rounded-full bg-gray-200 text-gray-800 px-2 py-1 w-fit",
  variants: {
    category: {
      review: "bg-yellow-200 text-gray-800",
      nextJs: "bg-blue-200 text-gray-800",
    },
  },
});

export type categoryVariants = VariantProps<typeof style>;

export default function Chip({ category }: { category: Category | undefined }) {
  return (
    <div className={style({ category })}>{getRealCategoryName(category)}</div>
  );
}
