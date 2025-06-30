"use client";

import { Profile } from "@/components/main/Profile";
import { ContactMe } from "@/components/main/ContactMe";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function Main() {
  return (
    <MainLayout>
      <div>
        <div className="w-full h-full flex items-center grow-1 mt-30">
          <Profile />
        </div>
        <div className="h-[1px] bg-(--color-neutral-100) w-[90%] mt-20 mx-auto" />
        <ContactMe />
      </div>
    </MainLayout>
  );
}
