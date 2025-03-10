import { PostProps } from "@/lib/post";
import React, { PropsWithChildren } from "react";
import Link from "next/link";

interface Props extends PropsWithChildren {
  post: PostProps;
  className?: string;
}
export default function PostNavigator({ children, post, className }: Props) {
  const { path, title } = post;
  return (
    <Link
      className={`${className} flex w-1/3 flex-col gap-x-2 rounded-md p-4 shadow-md hover:bg-yellow-50 hover:shadow-lg`}
      href={`/posts/${path}`}
    >
      <p className={`${className} text-lg font-semibold text-gray-500`}>
        {children}
      </p>
      <p className={`${className}`}>{title}</p>
    </Link>
  );
}
