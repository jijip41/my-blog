import React from "react";

import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  content: string;
};

export default function MarkdownViewer({ content }: Props) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      className="prose max-w-none space-y-4 lg:prose-xl"
      components={{
        code(props) {
          const { children, className, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              ref={null}
              PreTag="div"
              language={match[1]}
              style={nightOwl}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
}
