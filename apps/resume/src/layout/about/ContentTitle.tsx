import React from "react";

interface ContentTitleProps {
  id: string;
  title: string;
}

export const ContentTitle = ({ title, id }: ContentTitleProps) => (
  <div className="mb-5 mt-14 border-b border-grey-200 pb-3 first:mt-0">
    <h2
      id={id}
      className="scroll-mt-28 text-2xl font-bold tracking-tight text-grey-900 sm:text-3xl"
    >
      <a href={`#${id}`}>{title}</a>
    </h2>
  </div>
);
