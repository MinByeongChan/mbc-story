import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/** 요소별 스타일은 감싸는 요소의 `prose` 클래스로 지정한다. */
export const MarkdownRenderer = ({
  content,
  className = "",
}: MarkdownRendererProps) => {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ children, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          img: ({ src, alt, width, height }) => (
            <Image
              src={typeof src === "string" ? src : ""}
              alt={typeof alt === "string" ? alt : ""}
              width={width ? Number(width) : 800}
              height={height ? Number(height) : 400}
              loading="lazy"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
