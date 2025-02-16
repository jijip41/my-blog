"use client";

import React from "react";
import { CategoryProvider } from "../context/categoryContext";
import { Category } from "@/lib/category";
import { CategoryCheckbox } from "@/components/posts/CategoryCheckbox";

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CategoryProvider>
      <main className="flex space-x-4 p-4">
        <section className="flex-1">{children}</section>
        <section className="flex flex-col space-y-4 flex-0 border rounded-md p-4 shadow-md h-fit">
          <h3 className="text-md font-semibold text-gray-500">Category</h3>
          <ul className="flex flex-col gap-y-2">
            <li>
              <CategoryCheckbox label={Category.Review} />
            </li>
            <li>
              <CategoryCheckbox label={Category.NextJs} />
            </li>
            <li>
              <CategoryCheckbox label={Category.React} />
            </li>
            <li>
              <CategoryCheckbox label={Category.TailwindCss} />
            </li>
          </ul>
        </section>
      </main>
    </CategoryProvider>
  );
}
