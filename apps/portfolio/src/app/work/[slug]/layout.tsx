import Image from "next/image";
import Link from "next/link";

import React from "react";
import { twMerge } from "tailwind-merge";
import { portfolioPath } from "@/constants/portfolio";

export default function WorkSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={twMerge(
        "h-full",
        "xl:mx-48 xl:mt-8",
        "lg:mx-24 lg:mt-8",
        "md:mx-16 md:mt-8",
        "sm:mt-8",
        "mt-16",
      )}
    >
      <Link
        href="/work"
        className={twMerge(
          "inline-flex items-center gap-2 text-md text-neutral-200",
          "hover:text-white",
          "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-primary)",
        )}
      >
        <Image
          src={portfolioPath("/left-arrow.png")}
          alt=""
          aria-hidden="true"
          width={24}
          height={24}
        />
        Back
      </Link>
      <article className={twMerge("mt-16", "xl:mx-32")}>
        <div className="flex flex-col gap-4 max-w-[700px] mx-auto">
          {children}
        </div>
      </article>
    </div>
  );
}
