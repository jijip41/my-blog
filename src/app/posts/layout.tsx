"use client";

import React from "react";
import { CategoryProvider } from "../context/categoryContext";
import { categories } from "@/lib/category";
import { CategoryCheckbox } from "@/components/posts/CategoryCheckbox";

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CategoryProvider>
      <main className="flex flex-col sm:flex-row p-4 space-y-4 sm:space-x-4">
        <section className="flex-1">{children}</section>
        <section className="flex flex-col space-y-4 flex-0 border rounded-md p-4 shadow-md h-fit">
          <h3 className="text-md font-semibold text-gray-500">Category</h3>
          <ul className="flex flex-col gap-y-2">
            {categories.map((category) => (
              <li key={category}>
                <CategoryCheckbox label={category} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </CategoryProvider>
  );
}
