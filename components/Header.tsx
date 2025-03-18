"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const menu = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/posts",
    title: "Posts",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between">
      <h1 className="text-lg font-bold">
        <Link href="/">{"Jihye's Blog"}</Link>
      </h1>
      <nav className="flex justify-evenly space-x-2 font-semibold">
        {menu.map(({ href, title }) => (
          <Link
            key={href}
            href={href}
            className={`${
              href === pathname ? "text-rose-600" : "hover:text-rose-500"
            }`}
          >
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
