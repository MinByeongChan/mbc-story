import React from "react";
import { PropsWithChildren } from "react";
import { Navigation } from "./Navigation";
import { twMerge } from "tailwind-merge";
import { AsideLink } from "./AsideLink";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main className="flex flex-col min-h-lvh font-[family-name:var(--font-geist-sans)] bg-black">
        <Navigation />
        <AsideLink />

        <div
          className={twMerge(
            "text-md p-6",
            "lg:p-18 sm:text-md",
            "sm:p-12 sm:text-md"
          )}
        >
          {children}
        </div>
      </main>
    </>
  );
};
