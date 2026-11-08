import { COMPANY_LABEL, Project } from "@/content/projects";

interface ProjectDetailHeaderProps {
  project: Project;
}

export const ProjectDetailHeader = ({ project }: ProjectDetailHeaderProps) => {
  return (
    <header className="border-b border-neutral-800 pb-12">
      <p className="text-sm text-neutral-500">
        {COMPANY_LABEL[project.kind]} · {project.role} ·{" "}
        <span className="tabular-nums">{project.period}</span>
      </p>
      <h1 className="mt-3 text-4xl font-bold break-keep text-white md:text-6xl">
        {project.title}
      </h1>

      {project.links && project.links.length > 0 && (
        <ul
          aria-label="관련 링크"
          className="mt-4 flex flex-wrap gap-x-5 gap-y-2"
        >
          {project.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-300 underline underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-primary)"
              >
                {link.label}
                <span aria-hidden="true"> ↗</span>
              </a>
            </li>
          ))}
        </ul>
      )}

      {project.headline && (
        <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-3xl font-bold text-white md:text-4xl">
            {project.headline.value}
          </span>
          <span className="text-neutral-400">{project.headline.label}</span>
        </p>
      )}

      <section aria-labelledby="project-highlights" className="mt-10">
        <h2
          id="project-highlights"
          className="text-sm font-semibold text-neutral-500"
        >
          핵심 성과
        </h2>
        <ul className="mt-4 space-y-3">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-relaxed break-keep text-neutral-200 md:text-base"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 size-1 shrink-0 rounded-full bg-neutral-500"
              />
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      <ul aria-label="기술스택" className="mt-10 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </header>
  );
};
