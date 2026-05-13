import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The AI Prism | Ad-Free AI Tool Reviews & Comparisons",
  description: "Ruthlessly honest AI tool reviews, comparisons, and stacks. 100% ad-free. We test AI tools so you don't waste your money.",
  keywords: ["AI tools", "AI reviews", "AI comparisons", "ad-free", "affiliate"],
};

function AdFreeBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 text-sm font-medium sticky top-0 z-50">
      <span className="mr-2">⚡</span>
      100% Ad-Free. We test AI tools so you don&apos;t waste your money. Support us by using our links.
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-8 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            The AI Prism
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/reviews" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Reviews
          </a>
          <a href="/versus" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Versus
          </a>
          <a href="/alternatives" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Alternatives
          </a>
          <a href="/ai-stacks" className="text-sm font-medium hover:text-blue-500 transition-colors">
            AI Stacks
          </a>
          <a href="/news" className="text-sm font-medium hover:text-blue-500 transition-colors">
            News
          </a>
          <a href="/ad-free-ethos" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Our Ad-Free Ethos
          </a>
        </nav>
        <button className="md:hidden p-2" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            The AI Prism
          </span>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
            100% ad-free AI tool reviews, comparisons, and stacks. We test so you don&apos;t waste your money.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Browse</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li><a href="/reviews" className="hover:text-blue-500">Reviews</a></li>
            <li><a href="/versus" className="hover:text-blue-500">Versus</a></li>
            <li><a href="/alternatives" className="hover:text-blue-500">Alternatives</a></li>
            <li><a href="/ai-stacks" className="hover:text-blue-500">AI Stacks</a></li>
            <li><a href="/news" className="hover:text-blue-500">News</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">About</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li><a href="/ad-free-ethos" className="hover:text-blue-500">Our Ad-Free Ethos</a></li>
            <li><a href="/sitemap.xml" className="hover:text-blue-500">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} The AI Prism. Affiliate-supported, ad-free.
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <AdFreeBanner />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
