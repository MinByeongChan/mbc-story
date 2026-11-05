import { promises as fs } from "fs";
import path from "path";
import { describe, expect, it } from "vitest";
import {
  formatYearRange,
  getProjectsUsingSkill,
  getTimelineProjects,
  projects,
  projectSlugs,
} from "./projects";

const workDir = path.join(process.cwd(), "public/work");

describe("projects content", () => {
  it("slug가 중복되지 않아야 함", () => {
    expect(new Set(projectSlugs).size).toBe(projectSlugs.length);
  });

  it("모든 프로젝트에 상세 마크다운 파일이 있어야 함", async () => {
    for (const project of projects) {
      const file = path.join(
        workDir,
        project.slug,
        `${project.slug}Details.md`,
      );
      await expect(fs.access(file), `${project.slug} 상세 파일 없음`).resolves
        .toBeUndefined();
    }
  });

  it("대표 이미지가 지정된 프로젝트는 실제 파일이 있어야 함", async () => {
    for (const project of projects) {
      if (!project.thumbnail) continue;
      const file = path.join(workDir, project.slug, project.thumbnail);
      await expect(fs.access(file), `${project.slug} 대표 이미지 없음`).resolves
        .toBeUndefined();
    }
  });

  it("상세 마크다운 디렉터리마다 콘텐츠 모델 항목이 있어야 함", async () => {
    const dirs = await fs.readdir(workDir, { withFileTypes: true });
    const slugsOnDisk = dirs.filter((d) => d.isDirectory()).map((d) => d.name);
    for (const slug of slugsOnDisk) {
      expect(projectSlugs, `${slug} 디렉터리가 콘텐츠 모델에 없음`).toContain(
        slug,
      );
    }
  });

  it("모든 프로젝트에 요약, 기간, 기술, 핵심 성과가 있어야 함", () => {
    for (const project of projects) {
      expect(project.summary.length, project.slug).toBeGreaterThan(20);
      expect(project.period, project.slug).toMatch(/^\d{4}\.\d{2}/);
      expect(project.skills.length, project.slug).toBeGreaterThan(0);
      expect(project.highlights.length, project.slug).toBeGreaterThanOrEqual(2);
    }
  });
});

describe("getProjectsUsingSkill", () => {
  it("괄호 표기를 무시하고 같은 기술로 집계해야 함", () => {
    const awsProjects = getProjectsUsingSkill("AWS");
    expect(awsProjects.map((p) => p.slug)).toContain("codyMatching");
    expect(awsProjects.map((p) => p.slug)).toContain("accountMigration");
  });

  it("스킬 섹션 주력 기술의 프로젝트 수가 콘텐츠 모델과 일치해야 함", () => {
    expect(getProjectsUsingSkill("TypeScript")).toHaveLength(projects.length);
    expect(getProjectsUsingSkill("React").length).toBeGreaterThanOrEqual(9);
    expect(getProjectsUsingSkill("TanStack Query").length).toBeGreaterThanOrEqual(4);
  });

  it("TypeScript는 모든 회사 프로젝트에서 사용되어야 함", () => {
    const coway = projects.filter((p) => p.kind === "Coway");
    expect(
      getProjectsUsingSkill("TypeScript").filter((p) => p.kind === "Coway"),
    ).toHaveLength(coway.length);
  });
});

describe("timeline", () => {
  it("기간 문자열을 연도 범위로 줄여야 함", () => {
    expect(formatYearRange("2024.04 – 2025.10")).toBe("2024 – 2025");
    expect(formatYearRange("2026.01 – 현재")).toBe("2026 – 현재");
    expect(formatYearRange("2022.10 – 2024.01, 2026.04 – 현재")).toBe(
      "2022 – 2024",
    );
    expect(formatYearRange("2024.12")).toBe("2024");
    expect(formatYearRange("2025.06 – 2025.07")).toBe("2025");
  });

  it("타임라인은 headline이 있는 프로젝트를 최신순으로 반환해야 함", () => {
    const timeline = getTimelineProjects();
    expect(timeline.length).toBeGreaterThanOrEqual(3);
    expect(timeline.every((project) => project.headline)).toBe(true);
    const starts = timeline.map((project) => project.period.slice(0, 7));
    expect([...starts].sort().reverse()).toEqual(starts);
  });
});
