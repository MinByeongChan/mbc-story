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
        "grid grid-cols-1 gap-4 mx-2 my-12",
        "lg:mx-0 lg:my-12 lg:grid-cols-3",
        "sm:mx-0 sm:my-2 sm:grid-cols-2"
      )}
    >
      {list.map((workCard) => (
        <WorkCard key={workCard.title} {...workCard} />
      ))}
    </div>
  );
};
