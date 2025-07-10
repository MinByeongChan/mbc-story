"use client";

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
        "grid grid-cols-1 gap-4 my-24",
        "xl:grid-cols-3",
        "lg:grid-cols-2",
        "md:grid-cols-2",
        "sm:grid-cols-2"
      )}
    >
      {list.map((workCard) => (
        <WorkCard {...workCard} className="split" key={workCard.title} />
      ))}
    </div>
  );
};
