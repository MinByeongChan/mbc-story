import React from 'react';
import ReactMarkdown, { ExtraProps } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownProps {
  content: string;
}

const Code = ({
  children,
  className,
  ...rest
}: React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & ExtraProps) => {
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <SyntaxHighlighter PreTag="div" language={match[1]}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};

const Markdown = ({ content }: MarkdownProps) => {
  return (
    <article className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code: Code,
        }}>
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default Markdown;
