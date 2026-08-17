import { Card } from "gocheok-project";

const sections = [
  { id: "introduction", label: "소개" },
  { id: "skill", label: "기술스택" },
  { id: "experience", label: "경력" },
  { id: "project", label: "프로젝트" },
  { id: "education", label: "학력사항" },
];

export const AboutNavigation = () => (
  <aside className="lg:sticky lg:top-24 lg:self-start">
    <Card className="overflow-x-auto" padding="sm" tone="muted">
      <nav aria-label="이력서 목차">
        <ul className="flex min-w-max gap-1 lg:min-w-0 lg:flex-col">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                className="block rounded-xl px-3 py-2 text-sm font-medium text-grey-600 transition-colors hover:bg-white hover:text-blue-600"
                href={`#${id}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Card>
  </aside>
);
