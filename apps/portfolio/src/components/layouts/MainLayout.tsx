import React from "react";
import { PropsWithChildren } from "react";
import { Navigation } from "./Navigation";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex flex-col min-h-lvh font-[family-name:var(--font-geist-sans)] bg-black">
      <Navigation />
      {children}
    </main>
  );
};
