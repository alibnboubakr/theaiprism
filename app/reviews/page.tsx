import Link from 'next/link';
import { getAllMDXFiles } from '@/lib/mdx';

export const metadata = {
  title: 'AI Tool Reviews | The AI Prism',
  description:
    'In-depth, honest reviews of AI tools. We test for 30+ days so you know what works.',
};

export default function ReviewsPage() {
  const reviews = getAllMDXFiles('reviews');

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Tool Reviews
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Real testing. No ads. Just honest verdicts on the tools that matter.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Link
            key={review.slug}
            href={`/reviews/${review.slug}`}
            className="group block p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📝</span>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Review
              </span>
            </div>

            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {review.frontmatter.title}
            </h2>

            {review.frontmatter.excerpt && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {review.frontmatter.excerpt}
              </p>
            )}

            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              {typeof review.frontmatter.schemaRating === 'number' && (
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">
                    {'★'.repeat(Math.floor(review.frontmatter.schemaRating))}
                  </span>
                  <span>{review.frontmatter.schemaRating.toFixed(1)}</span>
                </div>
              )}
              <time dateTime={review.frontmatter.date}>
                {new Date(review.frontmatter.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>
          </Link>
        ))}
      </div>

      {reviews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No reviews yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
