import { promises as fs } from "fs";
import path from "path";
import { describe, expect, it } from "vitest";
import { projects, projectSlugs } from "./projects";

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
