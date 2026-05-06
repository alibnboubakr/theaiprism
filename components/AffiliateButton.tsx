import Link from "next/link";
import { AffiliateLink, getAffiliateLink } from "@/types/affiliate";

export interface AffiliateButtonProps {
  toolName: string;
  link?: AffiliateLink; // Optional: pass full object or just toolName
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  showDisclosure?: boolean;
}

export default function AffiliateButton({
  toolName,
  link,
  variant = "primary",
  size = "md",
  showDisclosure = true,
}: AffiliateButtonProps) {
  const affiliateLink = link || getAffiliateLink(toolName);
  
  if (!affiliateLink) {
    console.warn(`Affiliate link not found for tool: ${toolName}`);
    return null;
  }

  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 focus:ring-blue-500",
  };
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <div className="inline-flex flex-col items-start gap-1">
      <Link
        href={affiliateLink.affiliateUrl}
        target="_blank"
        rel="sponsored nofollow noopener"
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
        aria-label={`Get ${affiliateLink.toolName} via our affiliate link`}
      >
        <span>Get {affiliateLink.toolName}</span>
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </Link>
      
      {showDisclosure && (
        <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs">
          <em>
            Disclosure: We earn a commission if you purchase through this link, at no extra cost to you. This keeps our site ad-free.
          </em>
        </p>
      )}
    </div>
  );
}

// Convenience component for multiple buttons side-by-side
export function AffiliateButtonGroup({
  tools,
  variant = "primary",
}: {
  tools: string[];
  variant?: "primary" | "secondary" | "outline";
}) {
  return (
    <div className="flex flex-wrap gap-4 my-6">
      {tools.map((toolName) => (
        <AffiliateButton
          key={toolName}
          toolName={toolName}
          variant={variant}
        />
      ))}
    </div>
  );
}
