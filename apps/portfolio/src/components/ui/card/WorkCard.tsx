"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "../typography";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleClick = () => {
    router.push(`/work/${slug}`);
  };

  return (
    <div
      className={twMerge("group w-full h-full cursor-pointer", className)}
      onClick={handleClick}
    >
      <div>
        <figure>
          {imgSrc.length > 0 && imgAlt.length > 0 && (
            <div className="flex justify-center items-center h-[230px] bg-white">
              <img
                src={imgSrc}
                alt={imgAlt}
                className={twMerge(
                  "max-h-full max-w-full object-cover mx-auto transition-all duration-300",
                  "group-hover:scale-103"
                )}
              />
            </div>
          )}
        </figure>
      </div>

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
        <Typography className="text-white">{description}</Typography>
      </figcaption>
    </div>
  );
};
