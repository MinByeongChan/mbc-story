"use client";

import { Profile } from "@/components/main/Profile";
import { ContactMe } from "@/components/main/ContactMe";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Dividor } from "@/components/ui/divider/Dividor";

export default function Main() {
  return (
    <MainLayout>
      <div className="w-full h-full flex items-center grow-1 mt-30">
        <Profile />
      </div>

      <Dividor />

      <ContactMe />
    </MainLayout>
  );
}
