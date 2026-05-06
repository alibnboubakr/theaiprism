/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MDXFrontmatter {
  title: string;
  slug: string;
  date: string;
  affiliateFocus?: string;
  schemaRating?: number;
  toolA?: string;
  toolB?: string;
  [key: string]: any;
}

export interface MDXContent {
  frontmatter: MDXFrontmatter;
  content: string;
  slug: string;
}

export function getAllMDXFiles(subdirectory: string): MDXContent[] {
  const dirPath = path.join(contentDirectory, subdirectory);

  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const files = fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));

  return files
    .map((file) => {
      const filePath = path.join(dirPath, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        frontmatter: data as MDXFrontmatter,
        content,
        slug: data.slug || file.replace(/\.mdx?$/, ''),
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}

export function getMDXFile(
  subdirectory: string,
  slug: string,
): MDXContent | undefined {
  const files = getAllMDXFiles(subdirectory);
  return files.find((file) => file.slug === slug);
}
