import { describe, expect, it } from "vitest";
import { projects, skillGroups, strengths } from "@/content/portfolio";
import { getFeaturedProjects, validatePortfolioHarness } from "@/lib/harness";

describe("portfolio harness", () => {
  it("validates required profile, project, modal detail, and asset data", () => {
    const result = validatePortfolioHarness();

    expect(result.errors).toEqual([]);
    expect(result.ok).toBe(true);
  });

  it("keeps MeganMagic-style portfolio sections populated", () => {
    expect(strengths).toHaveLength(3);
    expect(skillGroups.map((group) => group.title)).toEqual([
      "Frontend",
      "State & Data",
      "Quality & Ops",
    ]);
  });

  it("selects Coway work as featured work", () => {
    const featuredProjects = getFeaturedProjects(projects);

    expect(featuredProjects).toHaveLength(4);
    expect(featuredProjects.every((project) => project.kind === "Coway")).toBe(
      true
    );
  });

  it("uses stable slugs and local public image assets", () => {
    projects.forEach((project) => {
      expect(project.slug).toMatch(/^[a-z0-9-]+$/);
      expect(project.image).toMatch(/^\/work\//);
      expect(project.detail.gallery.length).toBeGreaterThan(0);
    });
  });
});
