import Code from "@/components/Code";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    i: ({ children }) => (
      <span className="italic text-gray-400">{children}</span>
    ),
    b: ({ children }) => <p className="font-semibold">{children}</p>,
    h2: ({ children }) => (
      <h2 className="text-lg font-bold text-gray-700">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-md font-semibold text-gray-600">{children}</h3>
    ),
    li: ({ children }) => <li className="list-disc">{children}</li>,
    code: ({ children }) => <Code>{children}</Code>,
    ...components,
  };
}
