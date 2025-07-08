import { Typography } from "@/components/ui/typography";
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
        <a href="/work">
          <Typography>{"<-"} Back</Typography>
        </a>
        <article className={twMerge("mt-16", "xl:mx-32")}>{children}</article>
      </div>
    </article>
  );
}
