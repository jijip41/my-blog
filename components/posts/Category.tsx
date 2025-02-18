"use client";

import React from "react";
import { categories } from "@/lib/category";
import { CategoryCheckbox } from "@/components/posts/CategoryCheckbox";

export default function Category() {
  return (
    <>
      <h3 className="text-md font-semibold text-gray-500">Category</h3>
      <ul className="flex flex-row flex-wrap gap-x-4 gap-y-2 sm:flex-col">
        {categories.map((category) => (
          <li key={category}>
            <CategoryCheckbox label={category} />
          </li>
        ))}
      </ul>
    </>
  );
}
