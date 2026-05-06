import type { MetadataRoute } from 'next';
import { getAllMDXFiles } from '@/lib/mdx';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/reviews',
    '/versus',
    '/ai-stacks',
    '/ad-free-ethos',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : 0.8,
  }));

  const buildEntries = (subdir: 'reviews' | 'versus' | 'ai-stacks') =>
    getAllMDXFiles(subdir).map((file) => ({
      url: `${SITE_URL}/${subdir}/${file.slug}`,
      lastModified: new Date(file.frontmatter.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  return [
    ...staticRoutes,
    ...buildEntries('reviews'),
    ...buildEntries('versus'),
    ...buildEntries('ai-stacks'),
  ];
}
