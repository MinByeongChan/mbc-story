/* eslint-disable @next/next/no-img-element */
import React from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "../typography";

export interface WorkCardProps {
  imgSrc?: string;
  imgAlt?: string;
  title?: string;
  description?: string;
  skills?: string[];
}

export const WorkCard = ({
  imgSrc = "",
  imgAlt = "",
  title = "",
  description = "",
  skills = [],
}: WorkCardProps) => {
  return (
    <div className="w-full h-full">
      <figure>
        {imgSrc.length > 0 && imgAlt.length > 0 && (
          <div>
            <img src={imgSrc} alt={imgAlt} className={twMerge("w-full")} />
          </div>
        )}
      </figure>

      <figcaption className="p-6 bg-black flex flex-col gap-1 justify-start items-start">
        <Typography className="text-xl font-bold text-white">
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
