export interface PortfolioDetails {
  id: string;
  content: string;
}
export interface ModalContent {
  isOpen: boolean;
  content: string;
}

export interface FrontMatter {
  slug: string;
  title: string;
  description: string;
  date: string;
  modified_date?: string;
  content: string;
  tags: string[];
  image?: string;
}

export type FuncPostBySlug = (slug: string) => FrontMatter;

export type BlogListItem = Pick<FrontMatter, 'title' | 'date' | 'tags' | 'description'> & {
  id: string;
};
