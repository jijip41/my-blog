"use client";

import React from "react";
import { categories } from "@/lib/category";
import { CategoryCheckbox } from "@/components/posts/CategoryCheckbox";

export default function Category() {
  return (
    <section className="flex gap-x-4">
      <h3 className="text-md font-semibold text-gray-500">Category</h3>
      <ul className="flex flex-wrap items-center gap-x-4 gap-y-4">
        {categories.map((category) => (
          <li key={category}>
            <CategoryCheckbox label={category} />
          </li>
        ))}
      </ul>
    </section>
  );
}
