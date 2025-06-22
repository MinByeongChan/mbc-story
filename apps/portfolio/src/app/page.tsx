"use client";

import { Navigation } from "@/components/layouts/Navigation";
import { Profile } from "@/components/main/Profile";
import { ContactMe } from "@/components/main/ContactMe";

export default function Main() {
  return (
    <main className="flex flex-col min-h-lvh font-[family-name:var(--font-geist-sans)] bg-(--color-bg-100)">
      <Navigation />
      <div>
        <div className="w-full h-full flex items-center grow-1 mt-30">
          <Profile />
        </div>
        <div className="h-[1px] bg-(--color-neutral-100) w-[90%] mt-20 mx-auto" />
        <ContactMe />
      </div>
    </main>
  );
}
