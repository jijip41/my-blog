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
