import { notFound } from 'next/navigation';
import { getAllMDXFiles, getMDXFile } from '@/lib/mdx';
import { generateArticleSchema, JsonLdScript, SITE_URL } from '@/lib/seo';
import { Metadata } from 'next';
import MDXContent from '@/components/MDXContent';
import NewsletterSignup from '@/components/NewsletterSignup';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllMDXFiles('news').map((file) => ({ slug: file.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const file = getMDXFile('news', params.slug);
  if (!file) return {};

  const url = `${SITE_URL}/news/${file.slug}`;
  return {
    title: `${file.frontmatter.title} | The AI Prism`,
    description: file.frontmatter.excerpt || file.frontmatter.title,
    alternates: { canonical: url },
    openGraph: {
      title: file.frontmatter.title,
      description: file.frontmatter.excerpt,
      type: 'article',
      url,
      publishedTime: file.frontmatter.date,
    },
  };
}

export default async function NewsSlugPage({ params }: PageProps) {
  const file = getMDXFile('news', params.slug);
  if (!file) notFound();

  const url = `${SITE_URL}/news/${file.slug}`;
  const articleSchema = generateArticleSchema({
    title: file.frontmatter.title,
    description: file.frontmatter.excerpt || file.content.substring(0, 200),
    authorName: file.frontmatter.author || 'The AI Prism Team',
    datePublished: file.frontmatter.date,
    url,
  });

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <JsonLdScript schema={articleSchema} />

      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span>News</span>
          <span>•</span>
          <time dateTime={file.frontmatter.date}>
            {new Date(file.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {file.frontmatter.title}
        </h1>
        {file.frontmatter.excerpt && (
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {file.frontmatter.excerpt}
          </p>
        )}
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <MDXContent source={file.content} />
      </div>

      <div className="mt-16">
        <NewsletterSignup />
      </div>
    </article>
  );
}
