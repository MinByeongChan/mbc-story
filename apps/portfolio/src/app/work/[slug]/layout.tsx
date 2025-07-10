"use client";
import Link from "next/link";

import React from "react";
import { twMerge } from "tailwind-merge";

export default function WorkSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article>
      <div className={twMerge("h-full", "xl:mx-48")}>
        <Link href="/work">
          <span className="text-md text-neutral-200">{"<-"} Back</span>
        </Link>
        <article className={twMerge("mt-16", "xl:mx-32")}>{children}</article>
      </div>
    </article>
  );
}
