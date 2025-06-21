"use client";

import { Navigation } from "@/components/layouts/Navigation";
import { Profile } from "@/components/main/Profile";

export default function Main() {
  return (
    <div className="flex flex-col min-h-lvh font-[family-name:var(--font-geist-sans)] bg-(--color-bg-100)">
      <Navigation />
      <main className="w-full h-full flex items-center grow-1">
        <Profile />
      </main>
    </div>
  );
}
