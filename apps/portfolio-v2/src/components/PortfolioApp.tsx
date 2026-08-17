"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Project,
  experiences,
  profile,
  projects,
  skillGroups,
  strengths,
} from "@/content/portfolio";
import { getFeaturedProjects } from "@/lib/harness";

export const PortfolioApp = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = getFeaturedProjects(projects);

  return (
    <main>
      <header className="site-header">
        <a href="#top" aria-label="민병찬 포트폴리오 홈">
          B.C Min
        </a>
        <nav aria-label="주요 섹션">
          <a href="#strength">강점</a>
          <a href="#skill">기술</a>
          <a href="#career">경력</a>
          <a href="#work">프로젝트</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__content">
          <p className="eyebrow">Portfolio V2</p>
          <h1>
            안녕하세요,
            <span>{profile.title}</span>
            {profile.name} 입니다.
          </h1>
          <p className="hero__summary">{profile.summary}</p>
          <p className="hero__focus">{profile.focus}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#work">
              프로젝트 보기
            </a>
            <a className="button" href={profile.github}>
              GitHub
            </a>
          </div>
        </div>

        <aside className="hero__visual" aria-label="프로필">
          <div className="profile-panel">
            <Image
              src="/assets/my_profile.png"
              alt="민병찬 프로필"
              width={360}
              height={420}
              priority
            />
            <div>
              <span>Currently</span>
              <strong>Coway Frontend</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="section" id="strength">
        <SectionHeader
          eyebrow="Core Strength"
          title="유연하게 소통하고 견고하게 개발합니다."
          description="문제가 반복되는 지점을 찾아 화면 구조, 상태 관리, 테스트와 운영 모니터링으로 되돌립니다."
        />
        <div className="feature-grid">
          {strengths.map((strength, index) => (
            <article className="feature-card" key={strength.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skill">
        <SectionHeader
          eyebrow="Stack"
          title="기술 스택 및 도구"
          description="서비스 성격에 맞게 React와 Vue를 모두 다뤘고, 상태 관리와 운영 관측 도구를 함께 사용했습니다."
        />
        <div className="skill-board">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="career">
        <SectionHeader
          eyebrow="Career"
          title="업무 경험"
          description="대내외 서비스 개발과 운영 대응을 함께 경험했습니다."
        />
        <div className="career-list">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.period}`}>
              <time>{experience.period}</time>
              <div>
                <h3>{experience.company}</h3>
                <p>{experience.team}</p>
                <strong>{experience.role}</strong>
                <p>{experience.summary}</p>
                <ul className="stack-list">
                  {experience.stacks.map((stack) => (
                    <li key={stack}>{stack}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="work">
        <SectionHeader
          eyebrow="Projects"
          title="주요 프로젝트의 세부 사항을 확인해보세요."
          description="카드를 누르면 페이지 이동 없이 상세 모달에서 담당 업무, 문제 해결, 배운 점을 확인할 수 있습니다."
        />
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index < 2}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </section>

      <section className="section all-work">
        <SectionHeader
          eyebrow="Archive"
          title="프로젝트 아카이브"
          description="Coway 프로젝트와 개인 프로젝트를 같은 기준으로 정리했습니다."
        />
        <div className="archive-list">
          {projects.map((project) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setSelectedProject(project)}
            >
              <span>{project.title}</span>
              <small>{project.kind}</small>
            </button>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>{profile.email}</p>
        <a href={profile.github}>github.com/minbyeongchan</a>
      </footer>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
};
