import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { FrontMatter, FuncPostBySlug } from '@/types';

export const readDirectoryFiles = () => {
  const postsDirectory = join(process.cwd(), '_posts');
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug: FuncPostBySlug = (slug) => {
  const postsDirectory = join(process.cwd(), '_posts');
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const frontMatter = matter(fileContents);
  const { data, content } = frontMatter;

  return {
    content,
    slug: realSlug,
    ...data,
  } as FrontMatter;
};

export function getAllPosts() {
  const slugs = readDirectoryFiles();
  return slugs.map((slug) => getPostBySlug(slug)).sort((a, b) => (a.date > b.date ? -1 : 1));
}
