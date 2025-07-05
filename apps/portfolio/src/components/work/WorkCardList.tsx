import React from "react";
import { WorkCard, WorkCardProps } from "../ui/card/WorkCard";
import { twMerge } from "tailwind-merge";

interface WorkCardListProps {
  list: WorkCardProps[];
}

export const WorkCardList = ({ list }: WorkCardListProps) => {
  return (
    <div
      className={twMerge(
        "grid grid-cols-1 gap-4 mx-2 my-24",
        "xl:mx-36 xl:grid-cols-3",
        "lg:mx-24 lg:grid-cols-2",
        "md:mx-24 md:grid-cols-2",
        "sm:mx-0 sm:grid-cols-2"
      )}
    >
      {list.map((workCard) => (
        <WorkCard key={workCard.title} {...workCard} />
      ))}
    </div>
  );
};
