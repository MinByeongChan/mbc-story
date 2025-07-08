"use client";

import React from "react";
import { WorkCard, WorkCardProps } from "../ui/card/WorkCard";
import { twMerge } from "tailwind-merge";
import { useGsapSplit } from "@/hooks";

interface WorkCardListProps {
  list: WorkCardProps[];
}

export const WorkCardList = ({ list }: WorkCardListProps) => {
  useGsapSplit({
    stagger: 0.3,
    duration: 1,
  });
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
        <a href={`/work/${workCard.slug}`} key={workCard.title}>
          <WorkCard {...workCard} className="split" />
        </a>
      ))}
    </div>
  );
};
