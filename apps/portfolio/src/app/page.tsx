"use client";

import { ContactMe, Profile, Stack } from "@/components/main";
import { Dividor } from "@/components/ui/divider/Dividor";
import { twMerge } from "tailwind-merge";

export default function Main() {
  return (
    <section className={twMerge("mx-0", "sm:mx-16", "md:mx-16", "lg:mx-32")}>
      <div className="w-full h-full flex items-center grow-1 mt-30">
        <Profile />
      </div>

      <Stack />

      <Dividor />

      <ContactMe />
    </section>
  );
}
