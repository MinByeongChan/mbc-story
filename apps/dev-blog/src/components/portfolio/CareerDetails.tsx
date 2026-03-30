import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { PortfolioDetails } from '@/types';

const portfolioDirectory = join(process.cwd(), '_portfolio');

export const getSlugs = () => {
  return fs.readdirSync(portfolioDirectory);
};

export const getDetailsBySlug = (fileName: string): PortfolioDetails => {
  const path = join(portfolioDirectory, fileName);
  const fileContents = fs.readFileSync(path, 'utf8');
  const { content } = matter(fileContents);

  return {
    id: fileName.replace(/\.md$/, ''),
    content,
  };
};

export const getAllPortfolio = () => {
  const slugs = getSlugs();
  return slugs.map((data) => getDetailsBySlug(data));
};
