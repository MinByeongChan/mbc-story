import Link from "next/link";
import { twMerge } from "tailwind-merge";
import {
  COMPANY_LABEL,
  formatYearRange,
  getTimelineProjects,
  ProjectHeadline,
  projects,
} from "@/content/projects";

interface TimelineEntry {
  key: string;
  years: string;
  title: string;
  company: string;
  headline?: ProjectHeadline;
  href?: string;
}

/** Work 목록에 없는 이전 회사 경력 */
const earlierCareer: TimelineEntry[] = [
  {
    key: "ksnet",
    years: "2020 – 2021",
    title: "KSTA Mobile",
    company: "KSNET",
    headline: { value: "VAN/PG", label: "가맹점 매출 조회 앱 리뉴얼" },
  },
];

const rowClassName = twMerge(
  "grid grid-cols-1 gap-y-2 border-t border-neutral-800 py-6",
  "sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-x-6",
  "lg:grid-cols-[8rem_minmax(0,1fr)_minmax(0,20rem)] lg:items-baseline lg:gap-x-8",
);

export const ExperienceHighlights = () => {
  const timeline: TimelineEntry[] = [
    ...getTimelineProjects().map((project) => ({
      key: project.slug,
      years: formatYearRange(project.period),
      title: project.title,
      company: COMPANY_LABEL[project.kind],
      headline: project.headline,
      href: `/work/${project.slug}`,
    })),
    ...earlierCareer,
  ];

  return (
    <section
      aria-labelledby="experience-heading"
      className="my-32 text-(--color-neutral-100) sm:my-40"
    >
      <header className="max-w-2xl">
        <h2
          id="experience-heading"
          className="text-3xl font-bold text-white sm:text-5xl"
        >
          Experience
        </h2>
        <p className="mt-5 text-base break-keep text-neutral-300 leading-relaxed sm:text-lg">
          2020년 KSNET에서 시작해 2021년부터 코웨이에서 대내외 서비스를 만들고
          운영하고 있습니다. 프로젝트마다 가장 분명한 결과 한 가지를 함께
          적었습니다.
        </p>
      </header>

      <ol className="mt-12 border-b border-neutral-800">
        {timeline.map((entry) => (
          <li key={entry.key} className={rowClassName}>
            <span className="text-sm text-neutral-500 tabular-nums sm:pt-1">
              {entry.years}
            </span>
            <div>
              <p className="text-xl font-bold text-white sm:text-2xl">
                {entry.href ? (
                  <Link
                    href={entry.href}
                    className={twMerge(
                      "underline-offset-4 hover:underline",
                      "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-primary)",
                    )}
                  >
                    {entry.title}
                  </Link>
                ) : (
                  entry.title
                )}
              </p>
              <p className="mt-1 text-sm text-neutral-500">{entry.company}</p>
            </div>
            {entry.headline && (
              <p className="text-base leading-relaxed text-neutral-400 sm:col-start-2 lg:col-start-3">
                <span className="font-semibold text-white">
                  {entry.headline.value}
                </span>
                <span aria-hidden="true"> · </span>
                {entry.headline.label}
              </p>
            )}
          </li>
        ))}
      </ol>

      <Link
        href="/work"
        className={twMerge(
          "group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-(--color-accent-200)",
          "hover:text-white",
          "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-primary)",
        )}
      >
        전체 프로젝트 {projects.length}개 보기
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </section>
  );
};
