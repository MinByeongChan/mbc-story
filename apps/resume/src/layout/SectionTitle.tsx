import React from 'react';

interface SectionTitleProps {
  id: string;
  title: string;
}

export const SectionTitle = ({ title, id }: SectionTitleProps) => (
  <div className="mb-5 mt-14 pb-3 first:mt-0">
    <h2 id={id} className="scroll-mt-28">
      <a className="border-none" href={`#${id}`}>
        {title}
      </a>
    </h2>
  </div>
);
