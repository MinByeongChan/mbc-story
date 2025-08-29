import { describe, it, expect } from "vitest";
import { getImageUrl, getProjectMetadata } from "./utils";
import { projectInfo, baseUrl } from "./constant";

describe("getImageUrl", () => {
  it("abcAdmin slug에 대해 올바른 이미지 URL을 반환해야 함", () => {
    const result = getImageUrl("abcAdmin");
    expect(result).toBe("/portfolio/work/abcAdmin/abc_admin_홈화면.png");
  });

  it("accountService slug에 대해 올바른 이미지 URL을 반환해야 함", () => {
    const result = getImageUrl("accountService");
    expect(result).toBe(
      "/portfolio/work/accountService/통합회원_서비스이용관리.png"
    );
  });

  it("codyMatching slug에 대해 올바른 이미지 URL을 반환해야 함", () => {
    const result = getImageUrl("codyMatching");
    expect(result).toBe(
      "/portfolio/work/codyMatching/코디매칭_메인_mobile.png"
    );
  });

  it("portfolio2025 slug에 대해 올바른 이미지 URL을 반환해야 함", () => {
    const result = getImageUrl("portfolio2025");
    expect(result).toBe(
      "/portfolio/work/portfolio2025/포트폴리오2025_메인.png"
    );
  });

  it("존재하지 않는 slug에 대해 기본 이미지 URL을 반환해야 함", () => {
    const result = getImageUrl("nonexistent");
    expect(result).toBe("/portfolio/work/nonexistent/default.png");
  });

  it("빈 문자열에 대해 기본 이미지 URL을 반환해야 함", () => {
    const result = getImageUrl("");
    expect(result).toBe("/portfolio/work//default.png");
  });
});

describe("getProjectMetadata", () => {
  const testBaseUrl = "https://test.com";
  const testSlug = "abcAdmin";

  it("올바른 메타데이터 구조를 반환해야 함", () => {
    const result = getProjectMetadata(testBaseUrl, testSlug, projectInfo);

    expect(result).toHaveProperty("title");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("keywords");
    expect(result).toHaveProperty("openGraph");
    expect(result).toHaveProperty("twitter");
  });

  it("abcAdmin 프로젝트에 대해 올바른 제목을 반환해야 함", () => {
    const result = getProjectMetadata(testBaseUrl, testSlug, projectInfo);
    expect(result.title).toBe("B.C Min | ABC Admin");
  });

  it("설명에 회사명과 기술스택이 포함되어야 함", () => {
    const result = getProjectMetadata(testBaseUrl, testSlug, projectInfo);
    expect(result.description).toContain("코웨이");
    expect(result.description).toContain("React");
    expect(result.description).toContain("TypeScript");
  });

  it("키워드에 필수 항목들이 포함되어야 함", () => {
    const result = getProjectMetadata(testBaseUrl, testSlug, projectInfo);

    expect(result.keywords).toContain("B.C Min");
    expect(result.keywords).toContain("민병찬");
    expect(result.keywords).toContain("프론트엔드");
    expect(result.keywords).toContain("포트폴리오");
    expect(result.keywords).toContain("코웨이");
    expect(result.keywords).toContain("React");
  });

  it("OpenGraph 메타데이터가 올바르게 설정되어야 함", () => {
    const result = getProjectMetadata(testBaseUrl, testSlug, projectInfo);

    expect(result.openGraph.title).toBe(
      "B.C Min | ABC Admin | 민병찬 포트폴리오"
    );
    expect(result.openGraph.url).toBe(`${testBaseUrl}/work/${testSlug}`);
    expect(result.openGraph.type).toBe("article");
    expect(result.openGraph.images).toHaveLength(1);
    expect(result.openGraph.images[0]).toEqual({
      url: "/portfolio/work/abcAdmin/abc_admin_홈화면.png",
      width: 1200,
      height: 630,
      alt: "B.C Min | ABC Admin 프로젝트 이미지",
    });
  });

  it("Twitter 메타데이터가 올바르게 설정되어야 함", () => {
    const result = getProjectMetadata(testBaseUrl, testSlug, projectInfo);

    expect(result.twitter.title).toBe(
      "B.C Min | ABC Admin | 민병찬 포트폴리오"
    );
    expect(result.twitter.description).toBe(projectInfo[testSlug].description);
    expect(result.twitter.images).toEqual([
      "/portfolio/work/abcAdmin/abc_admin_홈화면.png",
    ]);
  });

  it("다른 프로젝트(portfolio2025)에 대해서도 올바른 메타데이터를 반환해야 함", () => {
    const result = getProjectMetadata(
      testBaseUrl,
      "portfolio2025",
      projectInfo
    );

    expect(result.title).toBe("B.C Min | 포트폴리오 2025");
    expect(result.description).toContain("개인");
    expect(result.keywords).toContain("Next.js");
    expect(result.openGraph.images[0].url).toBe(
      "/portfolio/work/portfolio2025/포트폴리오2025_메인.png"
    );
  });

  it("프로젝트 스킬이 키워드와 OpenGraph 태그에 모두 포함되어야 함", () => {
    const result = getProjectMetadata(testBaseUrl, testSlug, projectInfo);
    const projectSkills = projectInfo[testSlug].skills;

    // 키워드에 모든 스킬이 포함되어야 함
    projectSkills.forEach((skill) => {
      expect(result.keywords).toContain(skill);
    });

    // OpenGraph 태그에도 모든 스킬이 포함되어야 함
    expect(result.openGraph.tags).toEqual(projectSkills);
  });

  it("baseUrl이 올바르게 적용되어야 함", () => {
    const customBaseUrl = "https://custom-domain.com";
    const result = getProjectMetadata(customBaseUrl, testSlug, projectInfo);

    expect(result.openGraph.url).toBe(`${customBaseUrl}/work/${testSlug}`);
  });
});

// Edge case 테스트
describe("getImageUrl - Edge Cases", () => {
  it("대소문자가 다른 slug에 대해서도 동작해야 함", () => {
    // 실제로는 정확한 케이스를 사용해야 하지만, 견고성 테스트
    const result = getImageUrl("ABCADMIN");
    expect(result).toBe("/portfolio/work/ABCADMIN/default.png");
  });

  it("특수문자가 포함된 slug를 처리할 수 있어야 함", () => {
    const result = getImageUrl("test-project_123");
    expect(result).toBe("/portfolio/work/test-project_123/default.png");
  });
});

describe("getProjectMetadata - Edge Cases", () => {
  it("존재하지 않는 프로젝트에 대해 기본 메타데이터를 반환해야 함", () => {
    const mockProjectInfo = {};

    const result = getProjectMetadata(baseUrl, "nonexistent", mockProjectInfo);

    expect(result.title).toBe("프로젝트를 찾을 수 없습니다");
    expect(result.description).toBe("요청하신 프로젝트를 찾을 수 없습니다.");
    expect(result.openGraph.tags).toEqual([]);
    expect(result.keywords).toContain("B.C Min");
  });

  it("빈 스킬 배열을 가진 프로젝트를 처리할 수 있어야 함", () => {
    const mockProjectInfo = {
      testProject: {
        title: "Test Project",
        description: "Test Description",
        company: "Test Company",
        skills: [],
      },
    };

    const result = getProjectMetadata(baseUrl, "testProject", mockProjectInfo);

    expect(result.description).toContain("기술스택: ");
    expect(result.keywords).not.toContain(undefined);
    expect(result.openGraph.tags).toEqual([]);
  });

  it("긴 설명을 가진 프로젝트를 처리할 수 있어야 함", () => {
    const longDescription = "A".repeat(500);
    const mockProjectInfo = {
      longProject: {
        title: "Long Project",
        description: longDescription,
        company: "Test Company",
        skills: ["React"],
      },
    };

    const result = getProjectMetadata(baseUrl, "longProject", mockProjectInfo);

    expect(result.description).toContain(longDescription);
    expect(result.openGraph.description).toBe(longDescription);
  });
});
