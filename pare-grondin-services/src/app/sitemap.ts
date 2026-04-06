import { MetadataRoute } from "next";
import { siteConfig, services } from "@/data/site";

const blogSlugs = [
  "health-sharing-new-hampshire-guide-2026",
  "cobra-alternative-new-hampshire",
  "aca-subsidies-expired-2026",
  "impact-health-sharing-review-2026",
  "health-sharing-vs-insurance-nh",
  "self-employed-health-insurance-nh-2026",
  "impact-health-sharing-pre-existing-conditions",
  "health-sharing-scandals-is-impact-safe",
  "medicare-supplement-health-sharing-nh",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    // Core pages
    { url: base,                    lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/booking`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.95 },
    { url: `${base}/about`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/quiz`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog`,          lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/testimonials`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/faq`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/contact`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    // /pricing excluded — noindex sales tool, deleted before launch

    // Service detail pages
    ...servicePages,

    // Blog articles
    ...blogPages,
  ];
}
