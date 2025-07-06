import { MainLayout } from "@/components/layouts/MainLayout";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function About() {
  return (
    <MainLayout>
      <div
        className={twMerge(
          "my-24",
          "xl:mx-36 xl:grid-cols-3",
          "lg:mx-24 lg:grid-cols-2",
          "md:mx-24 md:grid-cols-2",
          "sm:mx-0 sm:grid-cols-2"
        )}
      >
        <div>work </div>
      </div>
    </MainLayout>
  );
}
