import { notFound } from 'next/navigation';
import { getAllMDXFiles, getMDXFile, getMDXSource } from '@/lib/mdx';
import { generateReviewSchema, generateSoftwareApplicationSchema, JsonLdScript } from '@/lib/seo';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const MDXContent = dynamic(() => import('@/components/MDXContent'), {
  ssr: false,
  loading: () => <p>Loading content...</p>,
});

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const files = getAllMDXFiles('versus');
  return files.map((file) => ({
    slug: file.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const file = getMDXFile('versus', params.slug);
  
  if (!file) {
    return {};
  }

  return {
    title: `${file.frontmatter.title} | The AI Prism`,
    description: `Compare ${file.frontmatter.toolA || 'Tool A'} vs ${file.frontmatter.toolB || 'Tool B'}. Honest, ad-free comparison by The AI Prism.`,
    openGraph: {
      title: file.frontmatter.title,
      description: `Compare ${file.frontmatter.toolA || 'Tool A'} vs ${file.frontmatter.toolB || 'Tool B'}.`,
      type: 'article',
      publishedTime: file.frontmatter.date,
    },
  };
}

export default async function VersusPage({ params }: PageProps) {
  const file = getMDXFile('versus', params.slug);
  
  if (!file) {
    notFound();
  }

  // Serialize MDX content server-side
  const mdxSource = await getMDXSource(file.content);
  
  // Generate schema markup
  const reviewSchema = generateReviewSchema({
    toolName: file.frontmatter.toolA || 'AI Tool',
    rating: file.frontmatter.schemaRating || 4.0,
    price: 'Varies',
    authorName: 'The AI Prism Team',
    reviewBody: file.content.substring(0, 500),
    datePublished: file.frontmatter.date,
  });

  const softwareSchema = generateSoftwareApplicationSchema({
    toolName: file.frontmatter.toolA || 'AI Tool',
    price: 'Varies',
  });

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* JSON-LD Schema Markup */}
      <JsonLdScript schema={reviewSchema} />
      <JsonLdScript schema={softwareSchema} />
      
      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span>Versus Comparison</span>
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
        
        {file.frontmatter.affiliateFocus && (
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Focus: {file.frontmatter.affiliateFocus}
          </p>
        )}
      </header>

      {/* MDX Content - rendered client-side */}
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <MDXContent source={mdxSource} />
      </div>
    </article>
  );
}
