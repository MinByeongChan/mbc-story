import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// 스타일 타입 정의
interface HeadingStyles {
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  h5?: string;
  h6?: string;
}

interface TextStyles {
  p?: string;
  strong?: string;
  em?: string;
}

interface LinkStyles {
  className?: string;
  hoverClassName?: string;
}

interface CodeStyles {
  inline?: string;
  block?: string;
}

interface ListStyles {
  ul?: string;
  ol?: string;
  li?: string;
}

interface BlockquoteStyles {
  className?: string;
}

interface ImageStyles {
  className?: string;
}

interface MarkdownRendererProps {
  content: string;
  className?: string;
  // 각 요소별 스타일 객체
  headings?: HeadingStyles;
  text?: TextStyles;
  link?: LinkStyles;
  code?: CodeStyles;
  list?: ListStyles;
  blockquote?: BlockquoteStyles;
  image?: ImageStyles;
}

// 기본 스타일 정의
const defaultStyles = {
  headings: {
    h1: "font-bold text-6xl text-white",
    h2: "font-bold text-4xl text-white",
    h3: "font-bold text-3xl text-white",
    h4: "font-bold text-2xl text-white",
    h5: "font-bold text-xl text-white",
    h6: "font-bold text-lg text-white",
  },
  text: {
    p: "text-justify text-white",
    strong: "text-white",
    em: "italic text-white",
  },
  link: {
    className: "text-blue-600 underline",
    hoverClassName: "hover:text-blue-800",
  },
  code: {
    inline: "bg-gray-800 text-white px-1 py-0.5 rounded text-sm",
    block:
      "block bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm",
  },
  list: {
    ul: "list-disc list-inside",
    ol: "list-decimal list-inside",
    li: "text-white marker:text-white",
  },
  blockquote: {
    className: "border-l-4 border-gray-300 pl-4 italic text-gray-600",
  },
  image: {
    className: "rounded-xl max-w-full h-auto",
  },
};

export const MarkdownRenderer = ({
  content,
  className = "",
  headings = {},
  text = {},
  link = {},
  code = {},
  list = {},
  blockquote = {},
  image = {},
}: MarkdownRendererProps) => {
  // 기본 스타일과 전달받은 스타일 병합
  const mergedStyles = {
    headings: { ...defaultStyles.headings, ...headings },
    text: { ...defaultStyles.text, ...text },
    link: { ...defaultStyles.link, ...link },
    code: { ...defaultStyles.code, ...code },
    list: { ...defaultStyles.list, ...list },
    blockquote: { ...defaultStyles.blockquote, ...blockquote },
    image: { ...defaultStyles.image, ...image },
  };

  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // 제목 스타일링
          h1: ({ children, ...props }) => (
            <h1 {...props} className={mergedStyles.headings.h1}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 {...props} className={mergedStyles.headings.h2}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 {...props} className={mergedStyles.headings.h3}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4 {...props} className={mergedStyles.headings.h4}>
              {children}
            </h4>
          ),
          h5: ({ children, ...props }) => (
            <h5 {...props} className={mergedStyles.headings.h5}>
              {children}
            </h5>
          ),
          h6: ({ children, ...props }) => (
            <h6 {...props} className={mergedStyles.headings.h6}>
              {children}
            </h6>
          ),
          // 텍스트 스타일링
          p: ({ children, ...props }) => (
            <p {...props} className={mergedStyles.text.p}>
              {children}
            </p>
          ),
          strong: ({ children, ...props }) => (
            <strong {...props} className={mergedStyles.text.strong}>
              {children}
            </strong>
          ),
          em: ({ children, ...props }) => (
            <em {...props} className={mergedStyles.text.em}>
              {children}
            </em>
          ),
          // 링크 스타일링
          a: ({ children, ...props }) => (
            <a
              {...props}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mergedStyles.link.className} ${mergedStyles.link.hoverClassName}`}
            >
              {children}
            </a>
          ),
          // 이미지 스타일링
          img: ({ ...props }) => (
            <Image
              src={typeof props.src === "string" ? props.src : ""}
              alt={typeof props.alt === "string" ? props.alt : ""}
              width={props.width ? Number(props.width) : 800}
              height={props.height ? Number(props.height) : 400}
              className={mergedStyles.image.className}
              loading="lazy"
            />
          ),
          // 코드 스타일링
          code: ({ children, className, ...props }) => (
            <code
              {...props}
              className={
                className === "language-code"
                  ? mergedStyles?.code?.block
                  : mergedStyles.code.inline
              }
            >
              {children}
            </code>
          ),
          // 리스트 스타일링
          ul: ({ children, ...props }) => (
            <ul {...props} className={mergedStyles.list.ul}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol {...props} className={mergedStyles.list.ol}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li {...props} className={mergedStyles.list.li}>
              {children}
            </li>
          ),
          // 인용구 스타일링
          blockquote: ({ children, ...props }) => (
            <blockquote
              {...props}
              className={mergedStyles.blockquote.className}
            >
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
