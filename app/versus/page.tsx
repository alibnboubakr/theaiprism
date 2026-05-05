import Link from 'next/link';
import { getAllMDXFiles } from '@/lib/mdx';

export const metadata = {
  title: 'AI Tool Versus Comparisons | The AI Prism',
  description: 'Side-by-side comparisons of top AI tools. Find out which tool wins in head-to-head battles.',
};

export default function VersusPage() {
  const comparisons = getAllMDXFiles('versus');
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Tool Versus
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Head-to-head comparisons. No fluff, just data. Find out which AI tool comes out on top.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {comparisons.map((comparison) => (
          <Link
            key={comparison.slug}
            href={`/versus/${comparison.slug}`}
            className="group block p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⚔️</span>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Versus
              </span>
            </div>
            
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {comparison.frontmatter.title}
            </h2>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {comparison.frontmatter.toolA} vs {comparison.frontmatter.toolB}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <time dateTime={comparison.frontmatter.date}>
                {new Date(comparison.frontmatter.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      {comparisons.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No comparisons yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
