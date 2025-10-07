"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "gocheok-project";
import Link from "next/link";
import Image from "next/image";

export interface WorkCardProps {
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  title?: string;
  description?: string;
  skills?: string[];
  projectType?: string;
  slug: string;
}

export const WorkCard = ({
  className = "",
  imgSrc = "",
  imgAlt = "",
  title = "",
  description = "",
  skills = [],
  projectType = "",
  slug,
}: WorkCardProps) => {
  return (
    <Link
      href={`/work/${slug}`}
      className={twMerge("group block w-full h-full cursor-pointer", className)}
    >
      <figure>
        {
          <div className="flex justify-center items-center h-[230px] bg-white overflow-hidden">
            <Image
              width={imgSrc ? 500 : 50}
              height={imgSrc ? 500 : 100}
              src={imgSrc || "/portfolio/work/no_data.png"}
              alt={imgAlt || "No Data"}
              className={twMerge(
                "max-h-full max-w-full object-cover mx-auto transition-all duration-300",
                "group-hover:scale-105"
              )}
            />
          </div>
        }
        <figcaption className="bg-black flex flex-col gap-1 justify-start items-start mt-4">
          <div className="flex gap-2">
            <Typography
              className={twMerge(
                "text-xl font-bold text-white transition-all duration-300",
                "group-hover:text-primary"
              )}
            >
              {title}
            </Typography>
            <Typography className="text-sm/loose text-(--color-accent-200)">
              {projectType}
            </Typography>
          </div>
          <Typography className="text-sm text-(--color-accent-200)">
            {skills.join(", ")}
          </Typography>
          <Typography className="text-white mt-2">{description}</Typography>
        </figcaption>
      </figure>
    </Link>
  );
};
