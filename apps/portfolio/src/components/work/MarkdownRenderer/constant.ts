// 기본 스타일 정의
export const defaultStyles = {
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
