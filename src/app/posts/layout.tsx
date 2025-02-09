import React from "react";

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div>{children}</div>
      <h3>Category</h3>
    </section>
  );
}
