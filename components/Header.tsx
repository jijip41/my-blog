import Link from "next/link";

import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between">
      <h1 className="text-lg font-bold">
        <Link href="/">{"Jihye's Blog"}</Link>
      </h1>
      <nav className="flex justify-evenly space-x-2 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
