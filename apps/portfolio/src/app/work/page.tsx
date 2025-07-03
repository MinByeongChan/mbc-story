import { MainLayout } from "@/components/layouts/MainLayout";
import { WorkCardList } from "@/components/work/WorkCardList";
import React from "react";

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
      <WorkCardList list={list} />
    </MainLayout>
  );
}
