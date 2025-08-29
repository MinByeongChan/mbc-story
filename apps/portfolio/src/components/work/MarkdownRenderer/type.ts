export interface ProjectInfo {
  title: string;
  description: string;
  company: string;
  skills: string[];
}

export type ProjectInfoRecord = Record<string, ProjectInfo>;

export interface HeadingStyles {
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  h5?: string;
  h6?: string;
}

export interface TextStyles {
  p?: string;
  strong?: string;
  em?: string;
}

export interface LinkStyles {
  className?: string;
  hoverClassName?: string;
}

export interface CodeStyles {
  inline?: string;
  block?: string;
}

export interface ListStyles {
  ul?: string;
  ol?: string;
  li?: string;
}

export interface BlockquoteStyles {
  className?: string;
}

export interface ImageStyles {
  className?: string;
}
