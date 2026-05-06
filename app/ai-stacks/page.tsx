import Link from 'next/link';
import { getAllMDXFiles } from '@/lib/mdx';

export const metadata = {
  title: 'AI Stacks for Every Budget | The AI Prism',
  description:
    'Curated AI tool stacks for solopreneurs, students, agencies, and creators. Find your perfect setup.',
};

export default function AIStacksPage() {
  const stacks = getAllMDXFiles('ai-stacks');

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Stacks
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Curated tool combinations for every need and budget. Stop wasting money on tools you don&apos;t need.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stacks.map((stack) => (
          <Link
            key={stack.slug}
            href={`/ai-stacks/${stack.slug}`}
            className="group block p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">🛠️</span>
              {stack.frontmatter.price && (
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {stack.frontmatter.price}
                </span>
              )}
            </div>

            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {stack.frontmatter.title}
            </h2>

            {stack.frontmatter.description && (
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                {stack.frontmatter.description}
              </p>
            )}

            {Array.isArray(stack.frontmatter.tools) && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Includes:
                </h3>
                <ul className="space-y-1">
                  {(stack.frontmatter.tools as string[]).slice(0, 4).map((tool) => (
                    <li
                      key={tool}
                      className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
                    >
                      <span className="text-green-500">✓</span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <span className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
              View stack
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        ))}
      </div>

      {stacks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No stacks yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
