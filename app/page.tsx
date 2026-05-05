import Link from "next/link";
import { getAllMDXFiles } from '@/lib/mdx';

export const metadata = {
  title: 'The AI Prism | Ad-Free AI Tool Reviews & Comparisons',
  description: 'Ruthlessly honest AI tool reviews, comparisons, and stacks. 100% ad-free. We test AI tools so you don\'t waste your money.',
};

export default function Home() {
  const recentVersus = getAllMDXFiles('versus').slice(0, 3);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            The AI Prism
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Ruthlessly honest AI tool reviews. 100% ad-free. We test so you don&apos;t waste money.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/versus"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Compare Tools
            </Link>
            <Link
              href="/reviews"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Comparisons */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Comparisons</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {recentVersus.map((post) => (
              <Link
                key={post.slug}
                href={`/versus/${post.slug}`}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-2">{post.frontmatter.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {post.frontmatter.toolA} vs {post.frontmatter.toolB}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Why Trust The AI Prism?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">100% Ad-Free</h3>
              <p className="text-gray-600 dark:text-gray-400">
                No annoying ads. No tracking. Just honest reviews.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Real Testing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We actually use these tools for 30+ days before reviewing.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Affiliate Supported</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We only earn if you buy. So we recommend what works.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
