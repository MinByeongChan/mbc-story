"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "../typography";
import Link from "next/link";

export interface WorkCardProps {
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  title?: string;
  description?: string;
  skills?: string[];
  slug: string;
}

export const WorkCard = ({
  className = "",
  imgSrc = "",
  imgAlt = "",
  title = "",
  description = "",
  skills = [],
  slug,
}: WorkCardProps) => {
  // 완성되지 않은 코드를 삭제하고, 카드 전체를 Link로 감쌉니다.
  return (
    <Link
      href={`/work/${slug}`}
      className={twMerge("group block w-full h-full cursor-pointer", className)}
    >
      <figure>
        {imgSrc.length > 0 && imgAlt.length > 0 && (
          <div className="flex justify-center items-center h-[230px] bg-white overflow-hidden">
            <img
              src={imgSrc}
              alt={imgAlt}
              className={twMerge(
                "max-h-full max-w-full object-cover mx-auto transition-all duration-300",
                "group-hover:scale-105" // hover 효과를 조금 더 잘 보이게 수정
              )}
            />
          </div>
        )}
        <figcaption className="bg-black flex flex-col gap-1 justify-start items-start mt-4">
          <Typography
            className={twMerge(
              "text-xl font-bold text-white transition-all duration-300",
              "group-hover:text-primary"
            )}
          >
            {title}
          </Typography>
          <Typography className="text-sm text-(--color-accent-200)">
            {skills.join(", ")}
          </Typography>
          <Typography className="text-white mt-2">{description}</Typography>
        </figcaption>
      </figure>
    </Link>
  );
};
