'use client';

import { useState, FormEvent } from 'react';

export interface NewsletterSignupProps {
  variant?: 'inline' | 'card';
  heading?: string;
  subheading?: string;
}

export default function NewsletterSignup({
  variant = 'card',
  heading = 'Get the free PDF: 10 AI Tools that save 10+ hours a week',
  subheading = "Join the Prism Dispatch — one email, every Tuesday. Tool of the week, price-drop alerts, and the prompt of the week. No spam.",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  }

  const wrapperClass =
    variant === 'card'
      ? 'p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/40 dark:to-purple-950/40 rounded-xl border border-blue-200 dark:border-blue-900'
      : 'py-6';

  return (
    <section className={wrapperClass} aria-label="Newsletter signup">
      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {heading}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{subheading}</p>

      {status === 'success' ? (
        <p className="text-green-700 dark:text-green-400 font-medium">
          You&apos;re in. Check your inbox for the PDF.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending…' : 'Get the PDF'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          Please enter a valid email address.
        </p>
      )}

      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        We never sell your email. Unsubscribe in one click.
      </p>
    </section>
  );
}
