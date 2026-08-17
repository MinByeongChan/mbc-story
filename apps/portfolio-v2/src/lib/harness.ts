import { Project, experiences, profile, projects, skillGroups, strengths } from "@/content/portfolio";

export type HarnessResult = {
  ok: boolean;
  errors: string[];
};

const isLocalAsset = (path: string) => path.startsWith("/") && !path.includes("..");

export const getFeaturedProjects = (items: Project[] = projects) =>
  items.filter((project) => project.kind === "Coway").slice(0, 4);

export const validatePortfolioHarness = (): HarnessResult => {
  const errors: string[] = [];

  if (!profile.name || !profile.title || !profile.summary) {
    errors.push("Profile must include name, title, and summary.");
  }

  if (projects.length < 5) {
    errors.push("Portfolio must include at least five projects.");
  }

  if (strengths.length < 3) {
    errors.push("Portfolio must include at least three strengths.");
  }

  if (skillGroups.length < 3) {
    errors.push("Portfolio must include at least three skill groups.");
  }

  if (experiences.length < 2) {
    errors.push("Portfolio must include career history.");
  }

  projects.forEach((project) => {
    if (!project.slug || !project.title || !project.description) {
      errors.push(`Project ${project.slug || "unknown"} is missing core text.`);
    }

    if (!isLocalAsset(project.image)) {
      errors.push(`${project.title} must use a local public image asset.`);
    }

    if (project.stacks.length < 3) {
      errors.push(`${project.title} must list at least three stacks.`);
    }

    if (project.outcomes.length < 2) {
      errors.push(`${project.title} must list at least two outcomes.`);
    }

    if (project.detail.responsibilities.length < 2) {
      errors.push(`${project.title} must include modal detail responsibilities.`);
    }

    if (project.detail.gallery.some((image) => !isLocalAsset(image))) {
      errors.push(`${project.title} gallery must use local public image assets.`);
    }
  });

  return {
    ok: errors.length === 0,
    errors,
  };
};
