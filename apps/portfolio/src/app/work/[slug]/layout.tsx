"use client";
import Image from "next/image";
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
          <span className="text-md flex items-center gap-2 text-neutral-200">
            <Image src="/left-arrow.png" alt="Back" width={24} height={24} />
            Back
          </span>
        </Link>
        <article className={twMerge("mt-16", "xl:mx-32")}>{children}</article>
      </div>
    </article>
  );
}
