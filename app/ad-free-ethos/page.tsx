export const metadata = {
  title: 'Our Ad-Free Ethos | The AI Prism',
  description: 'Why we chose to be 100% ad-free and how this makes our reviews more trustworthy.',
};

export default function AdFreeEthosPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12 text-center">
        <div className="text-6xl mb-6">⚡</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Our Ad-Free Ethos
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Why we don&apos;t run ads, and why that makes us more trustworthy.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>The Problem with Ad-Supported Reviews</h2>
        <p>
          Most AI tool review sites are cluttered with ads. They need you to stay on their page longer, 
          click on ads, and often promote tools that pay the highest commissions—not the tools that actually work best.
        </p>

        <h2>Our Solution: Affiliate-Only, Ad-Free</h2>
        <p>
          At <strong>The AI Prism</strong>, we don&apos;t run any ads. No display banners. No pop-ups. No tracking pixels.
          We only make money when you use our affiliate links to purchase a tool we&apos;ve tested and recommend.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 my-8 rounded-r">
          <h3 className="text-blue-800 dark:text-blue-200 mt-0">The Result?</h3>
          <p className="text-blue-700 dark:text-blue-300 mb-0">
            We have zero incentive to recommend a bad tool. If we recommend garbage, you won&apos;t buy through our links,
            and we don&apos;t make money. Our incentives are perfectly aligned with yours: <strong>find the best tools</strong>.
          </p>
        </div>

        <h2>How We Test</h2>
        <ul>
          <li><strong>30-Day Minimum:</strong> We use every tool for at least 30 days before reviewing.</li>
          <li><strong>Real Workflows:</strong> We test tools in real-world scenarios, not just with demo prompts.</li>
          <li><strong>Side-by-Side Comparisons:</strong> We run the same prompts/tasks through multiple tools to compare.</li>
          <li><strong>ROI Focus:</strong> We care about your return on investment—time saved vs. money spent.</li>
        </ul>

        <h2>Affiliate Disclosure</h2>
        <p>
          We earn a small commission if you purchase through our links, at no extra cost to you. 
          This commission helps keep our site ad-free and allows us to continue testing new tools.
        </p>
        <p>
          We only recommend tools we&apos;ve personally tested and believe in. Our affiliate relationships never influence our ratings or verdicts.
        </p>

        <h2>Support Our Mission</h2>
        <p>
          Want to support our ad-free mission? Simply use our links when you decide to purchase a tool.
          It costs you nothing extra, but it keeps us independent and ad-free.
        </p>

        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to find the right AI tools?</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Browse our comparisons and reviews. No ads, no fluff, just honest verdicts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/versus"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Compare Tools
            </a>
            <a
              href="/reviews"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              Read Reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
