"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { Typography } from "gocheok-project";
import { twMerge } from "tailwind-merge";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

interface StackItemProps {
  index: number;
  label: string;
  imageSrc?: string;
  isBackground?: boolean;
}

const getInitials = (label: string) =>
  label
    .split(/[\s/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

export const StackItem = ({
  index,
  label,
  imageSrc,
  isBackground = false,
}: StackItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (!itemRef.current) return;
    gsap.set(itemRef.current, { opacity: 0 });
    gsap.to(itemRef.current, {
      scrollTrigger: {
        trigger: itemRef.current,
        start: `${index * 10}px 90%`,
        end: `+=400`,
        scrub: true,
      },
      opacity: 1,
      duration: 0.5,
      ease: "power2",
    });
  }, [itemRef, index]);

  return (
    <div className="stack-item" ref={itemRef}>
      <li className="flex flex-row items-center justify-center gap-4 stack-item ">
        <div
          className={twMerge(
            "w-12 h-12 rounded relative",
            isBackground && "bg-white",
            !imageSrc &&
              "flex items-center justify-center bg-neutral-800 text-base font-bold text-(--color-neutral-100)"
          )}
          aria-hidden={!imageSrc}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={label}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10"
            />
          ) : (
            getInitials(label)
          )}
        </div>
        <div>
          <Typography className=" text-2xl text-(--color-neutral-100)">
            {label}
          </Typography>
        </div>
      </li>
    </div>
  );
};
