"use client";

import React from "react";
import { CategoryCheckbox } from "../components/CategoryCheckbox";
import { Category } from "../utils/getCategory";
import { CategoryProvider } from "../context/categoryContext";

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CategoryProvider>
      <main className="flex justify-between p-4">
        <section>
          <div>{children}</div>
        </section>
        <section className="flex flex-col space-y-4 w-[20%] border-2 rounded-sm p-4">
          <h2 className="text-md font-semibold text-gray-500">Category</h2>
          <ul className="flex flex-col gap-y-2">
            <CategoryCheckbox label={Category.Review} />
            <CategoryCheckbox label={Category.NextJs} />
            <CategoryCheckbox label={Category.React} />
            <CategoryCheckbox label={Category.TailwindCss} />
          </ul>
        </section>
      </main>
    </CategoryProvider>
  );
}
