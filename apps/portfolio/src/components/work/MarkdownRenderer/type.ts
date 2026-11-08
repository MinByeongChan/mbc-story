export interface ProjectInfo {
  title: string;
  description: string;
  company: string;
  skills: string[];
}

export type ProjectInfoRecord = Record<string, ProjectInfo>;
