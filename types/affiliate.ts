export interface AffiliateLink {
  id: string;
  toolName: string;
  affiliateUrl: string;
  nonAffiliateUrl: string;
  category?: string;
}

export const AFFILIATE_LINKS: AffiliateLink[] = [
  {
    id: "midjourney",
    toolName: "Midjourney",
    affiliateUrl: "https://www.midjourney.com/?ref=theaiprism",
    nonAffiliateUrl: "https://www.midjourney.com/",
    category: "image",
  },
  {
    id: "dalle3",
    toolName: "DALL-E 3 (ChatGPT Plus)",
    affiliateUrl: "https://openai.com/chatgpt/?ref=theaiprism",
    nonAffiliateUrl: "https://openai.com/chatgpt/",
    category: "image",
  },
  {
    id: "jasper",
    toolName: "Jasper AI",
    affiliateUrl: "https://jasper.ai/?fpr=theaiprism",
    nonAffiliateUrl: "https://jasper.ai/",
    category: "writing",
  },
  {
    id: "copyai",
    toolName: "Copy.ai",
    affiliateUrl: "https://www.copy.ai/?via=theaiprism",
    nonAffiliateUrl: "https://www.copy.ai/",
    category: "writing",
  },
  {
    id: "notion-ai",
    toolName: "Notion AI",
    affiliateUrl: "https://affiliate.notion.so/theaiprism",
    nonAffiliateUrl: "https://www.notion.so/product/ai",
    category: "productivity",
  },
  {
    id: "surferseo",
    toolName: "SurferSEO",
    affiliateUrl: "https://surferseo.com/?fpr=theaiprism",
    nonAffiliateUrl: "https://surferseo.com/",
    category: "seo",
  },
  {
    id: "semrush",
    toolName: "SEMrush",
    affiliateUrl: "https://www.semrush.com/?ref=theaiprism",
    nonAffiliateUrl: "https://www.semrush.com/",
    category: "seo",
  },
  {
    id: "descript",
    toolName: "Descript",
    affiliateUrl: "https://www.descript.com/?lmref=theaiprism",
    nonAffiliateUrl: "https://www.descript.com/",
    category: "video",
  },
  {
    id: "pictory",
    toolName: "Pictory",
    affiliateUrl: "https://pictory.ai/?ref=theaiprism",
    nonAffiliateUrl: "https://pictory.ai/",
    category: "video",
  },
  {
    id: "obsidian-copilot",
    toolName: "Obsidian Copilot",
    affiliateUrl: "https://obsidian.md/?ref=theaiprism",
    nonAffiliateUrl: "https://obsidian.md/",
    category: "productivity",
  },
  {
    id: "convertkit",
    toolName: "ConvertKit",
    affiliateUrl: "https://convertkit.com/?lmref=theaiprism",
    nonAffiliateUrl: "https://convertkit.com/",
    category: "email",
  },
  {
    id: "github-copilot",
    toolName: "GitHub Copilot",
    affiliateUrl: "https://github.com/features/copilot?ref=theaiprism",
    nonAffiliateUrl: "https://github.com/features/copilot",
    category: "coding",
  },
  {
    id: "cursor",
    toolName: "Cursor",
    affiliateUrl: "https://cursor.com/?ref=theaiprism",
    nonAffiliateUrl: "https://cursor.com/",
    category: "coding",
  },
  {
    id: "v0",
    toolName: "v0.dev",
    affiliateUrl: "https://v0.dev/?ref=theaiprism",
    nonAffiliateUrl: "https://v0.dev/",
    category: "coding",
  },
  {
    id: "chatgpt-plus",
    toolName: "ChatGPT Plus",
    affiliateUrl: "https://openai.com/chatgpt/pricing/?ref=theaiprism",
    nonAffiliateUrl: "https://openai.com/chatgpt/pricing/",
    category: "writing",
  },
  {
    id: "grammarly",
    toolName: "Grammarly",
    affiliateUrl: "https://www.grammarly.com/?aff=theaiprism",
    nonAffiliateUrl: "https://www.grammarly.com/",
    category: "writing",
  },
  {
    id: "canva",
    toolName: "Canva",
    affiliateUrl: "https://www.canva.com/?aff=theaiprism",
    nonAffiliateUrl: "https://www.canva.com/",
    category: "design",
  },
  {
    id: "writesonic",
    toolName: "Writesonic",
    affiliateUrl: "https://writesonic.com/?via=theaiprism",
    nonAffiliateUrl: "https://writesonic.com/",
    category: "writing",
  },
];

export function getAffiliateLink(toolName: string): AffiliateLink | undefined {
  const normalized = toolName.toLowerCase().trim();
  return AFFILIATE_LINKS.find(
    (link) =>
      link.toolName.toLowerCase() === normalized ||
      link.id.toLowerCase() === normalized,
  );
}

export function getAffiliateLinksByCategory(category: string): AffiliateLink[] {
  return AFFILIATE_LINKS.filter((link) => link.category === category);
}
