import Link from 'next/link';

export const metadata = {
  title: 'AI Tool Reviews | The AI Prism',
  description: 'In-depth, honest reviews of AI tools. We test for 30+ days so you know what works.',
};

export default function ReviewsPage() {
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
        {/* Sample review cards - will be dynamically generated from MDX */}
        {[
          {
            title: 'Jasper AI Review',
            tool: 'Jasper AI',
            rating: 4.2,
            excerpt: 'We tested Jasper for 30 days on 100 blog posts. Here is the ROI breakdown.',
            date: '2026-06-10',
            slug: 'jasper-ai-review',
          },
          {
            title: 'Midjourney Deep Dive',
            tool: 'Midjourney',
            rating: 4.8,
            excerpt: 'Is the $10/mo plan worth it for commercial designers? We break down the ROI.',
            date: '2026-06-08',
            slug: 'midjourney-review',
          },
          {
            title: 'Notion AI: 30-Day Test',
            tool: 'Notion AI',
            rating: 4.0,
            excerpt: 'We used Notion AI for personal knowledge management. Here is what we found.',
            date: '2026-06-05',
            slug: 'notion-ai-review',
          },
        ].map((review) => (
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
              {review.title}
            </h2>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {review.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <span>Rating:</span>
                <span className="text-yellow-500">{'★'.repeat(Math.floor(review.rating))}</span>
                <span>{review.rating}</span>
              </div>
              <time dateTime={review.date}>
                {new Date(review.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
