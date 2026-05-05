import type { MDXComponents } from 'mdx/types';
import AffiliateButton from './components/AffiliateButton';
import VersusTable from './components/VersusTable';
import type { AffiliateButtonProps } from './components/AffiliateButton';
import type { VersusTableProps } from './components/VersusTable';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Spread the provided components first
    ...components,
    
    // Register our custom components
    AffiliateButton: (props: AffiliateButtonProps) => <AffiliateButton {...props} />,
    VersusTable: (props: VersusTableProps) => <VersusTable {...props} />,
    
    // Override default elements for better styling
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-5 mb-2 text-gray-800 dark:text-gray-200">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="my-4 leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-2"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-950/30 py-2 pr-4 rounded-r">
        {children}
      </blockquote>
    ),
  };
}
