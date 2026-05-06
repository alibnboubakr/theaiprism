import React from "react";

export const SITE_URL = "https://theaiprism.com";
export const SITE_NAME = "The AI Prism";

export interface ReviewSchemaInput {
  toolName: string;
  rating: number;
  price: string;
  authorName: string;
  reviewBody: string;
  datePublished: string;
  url?: string;
}

export interface SoftwareApplicationSchemaInput {
  toolName: string;
  price: string;
  description?: string;
  category?: string;
  url?: string;
}

export function generateReviewSchema(input: ReviewSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: input.toolName,
      applicationCategory: "AIApplication",
      offers: {
        "@type": "Offer",
        price: input.price,
        priceCurrency: "USD",
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: input.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      "@type": "Person",
      name: input.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: input.datePublished,
    reviewBody: input.reviewBody,
    ...(input.url ? { url: input.url } : {}),
  };
}

export function generateSoftwareApplicationSchema(
  input: SoftwareApplicationSchemaInput,
) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.toolName,
    applicationCategory: input.category || "AIApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: input.price,
      priceCurrency: "USD",
    },
    ...(input.description ? { description: input.description } : {}),
    ...(input.url ? { url: input.url } : {}),
  };
}

export function generateArticleSchema(input: {
  title: string;
  description: string;
  authorName: string;
  datePublished: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    author: { "@type": "Person", name: input.authorName },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: input.datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
    url: input.url,
  };
}

export function JsonLdScript({ schema }: { schema: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
