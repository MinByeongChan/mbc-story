import Image from "next/image";
import { Project } from "@/content/portfolio";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  onOpen: (project: Project) => void;
};

export const ProjectCard = ({
  project,
  priority = false,
  onOpen,
}: ProjectCardProps) => {
  return (
    <article className="project-card" id={project.slug}>
      <div className="project-card__media">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1180px) 520px, (min-width: 760px) 45vw, 100vw"
        />
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.kind}</span>
          <span>{project.period}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="stack-list" aria-label={`${project.title} 기술 스택`}>
          {project.stacks.map((stack) => (
            <li key={stack}>{stack}</li>
          ))}
        </ul>
        <ul className="outcome-list">
          {project.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
        <button
          className="detail-button"
          type="button"
          onClick={() => onOpen(project)}
          aria-haspopup="dialog"
        >
          주요 업무 내용 보기
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
};
