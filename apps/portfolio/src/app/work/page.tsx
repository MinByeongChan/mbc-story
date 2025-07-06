import { MainLayout } from "@/components/layouts/MainLayout";
import { WorkCardList } from "@/components/work/WorkCardList";
import { WorkIntroduce } from "@/components/work/WorkIntroduce";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function Work() {
  const list = [
    {
      imgSrc: "/portfolio/work/abc_admin_cover.png",
      imgAlt: "ABC_ADMIN_COVER",
      title: "ABC_ADMIN1",
      description: "ABC_ADMIN_DESCRIPTION",
      skills: ["React", "Typescript", "TailwindCSS"],
    },
    {
      imgSrc: "/portfolio/work/abc_admin_cover.png",
      imgAlt: "ABC_ADMIN_COVER",
      title: "ABC_ADMIN2",
      description: "ABC_ADMIN_DESCRIPTION",
      skills: ["React", "Typescript", "TailwindCSS"],
    },
    {
      imgSrc: "/portfolio/work/abc_admin_cover.png",
      imgAlt: "ABC_ADMIN_COVER",
      title: "ABC_ADMIN3",
      description: "ABC_ADMIN_DESCRIPTION",
      skills: ["React", "Typescript", "TailwindCSS"],
    },
    {
      imgSrc: "/portfolio/work/abc_admin_cover.png",
      imgAlt: "ABC_ADMIN_COVER",
      title: "ABC_ADMIN4",
      description: "ABC_ADMIN_DESCRIPTION",
      skills: ["React", "Typescript", "TailwindCSS"],
    },
  ];

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
        <WorkIntroduce />
        <WorkCardList list={list} />
      </div>
    </MainLayout>
  );
}
