import Link from 'next/link';
import { getAllMDXFiles } from '@/lib/mdx';

export const metadata = {
  title: 'AI News & Trends | The AI Prism',
  description:
    'No-fluff commentary on the AI news that actually affects your wallet, workflow, and stack.',
  alternates: { canonical: 'https://theaiprism.com/news' },
};

export default function NewsPage() {
  const posts = getAllMDXFiles('news');

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI News &amp; Trends
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          No-fluff takes on AI launches, pricing changes, and shifts that affect your stack.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/news/${post.slug}`}
            className="group block p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📰</span>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                News
              </span>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.frontmatter.title}
            </h2>
            {post.frontmatter.excerpt && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {post.frontmatter.excerpt}
              </p>
            )}
            <time
              className="text-sm text-gray-500 dark:text-gray-400"
              dateTime={post.frontmatter.date}
            >
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No news posts yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
