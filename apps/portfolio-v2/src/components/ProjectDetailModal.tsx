"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Project } from "@/content/portfolio";

type ProjectDetailModalProps = {
  project: Project | null;
  onClose: () => void;
};

const DetailList = ({ title, items }: { title: string; items: string[] }) => (
  <section>
    <h3>{title}</h3>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
);

export const ProjectDetailModal = ({
  project,
  onClose,
}: ProjectDetailModalProps) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <article
        aria-labelledby="project-modal-title"
        aria-modal="true"
        className="project-modal"
        role="dialog"
      >
        <header className="project-modal__header">
          <div>
            <p className="eyebrow">{project.kind} Project</p>
            <h2 id="project-modal-title">{project.title}</h2>
            <p>{project.period}</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose}>
            닫기
          </button>
        </header>

        <div className="project-modal__hero">
          {project.detail.gallery.map((image, index) => (
            <div className="project-modal__image" key={image}>
              <Image
                src={image}
                alt={`${project.title} 상세 이미지 ${index + 1}`}
                fill
                sizes="(min-width: 980px) 42vw, 100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="project-modal__content">
          <section className="project-modal__overview">
            <h3>Overview</h3>
            <p>{project.detail.overview}</p>
            <ul className="stack-list" aria-label={`${project.title} 상세 기술`}>
              {project.stacks.map((stack) => (
                <li key={stack}>{stack}</li>
              ))}
            </ul>
          </section>

          <div className="project-modal__lists">
            <DetailList title="Responsibilities" items={project.detail.responsibilities} />
            <DetailList title="Problem Solving" items={project.detail.problemSolving} />
            <DetailList title="Learned" items={project.detail.learned} />
          </div>
        </div>
      </article>
    </div>
  );
};
