import Link from 'next/link';

export const metadata = {
  title: 'AI Stacks for Every Budget | The AI Prism',
  description: 'Curated AI tool stacks for solopreneurs, students, agencies, and creators. Find your perfect setup.',
};

export default function AIStacksPage() {
  const stacks = [
    {
      title: 'The $0 AI Stack for Students',
      price: '$0/mo',
      description: 'Free tools that rival paid alternatives. Perfect for college students on a budget.',
      tools: ['Notion AI (Free)', 'ChatGPT Free', 'Canva Free', 'Grammarly Free'],
      slug: 'free-ai-stack-students',
    },
    {
      title: 'The $100/mo Solopreneur Stack',
      price: '$100/mo',
      description: 'The essential AI toolkit for running a one-person business efficiently.',
      tools: ['Jasper AI', 'Midjourney', 'SurferSEO', 'ConvertKit'],
      slug: '100-dollar-solopreneur-stack',
    },
    {
      title: 'The AI Coding Stack',
      price: '$50/mo',
      description: 'Accelerate your development workflow with these AI coding assistants.',
      tools: ['GitHub Copilot', 'Cursor', 'v0.dev', 'ChatGPT Plus'],
      slug: 'ai-coding-stack-developers',
    },
  ];

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
          <div
            key={stack.slug}
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">🛠️</span>
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                {stack.price}
              </span>
            </div>
            
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {stack.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              {stack.description}
            </p>
            
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Includes:
              </h3>
              <ul className="space-y-1">
                {stack.tools.map((tool) => (
                  <li key={tool} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            
            <Link
              href={`/ai-stacks/${stack.slug}`}
              className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Stack
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
