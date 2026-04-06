// JsonLd.tsx — Pare Grondin Services
// Server component — no "use client" directive
// Provides structured data (JSON-LD) for homepage, FAQ page, and blog articles.

import { siteConfig, faqs } from "@/data/site";

// ---------------------------------------------------------------------------
// ProfessionalServiceSchema — placed in layout.tsx, renders on every page
// ---------------------------------------------------------------------------
export function ProfessionalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phone || undefined,
    email: siteConfig.email || undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manchester",
      addressRegion: "NH",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "State",
      name: "New Hampshire",
    },
    serviceType: "Health Care Sharing Membership Enrollment Consulting",
    knowsAbout: [
      "Impact Health Sharing",
      "Health Care Sharing Ministries",
      "COBRA alternatives",
      "ACA marketplace alternatives",
      "Health sharing New Hampshire",
    ],
    founder: {
      "@type": "Person",
      name: "Helen Grondin",
      jobTitle: "Health Sharing Advocate and Enrollment Consultant",
    },
    sameAs: [siteConfig.facebookUrl, siteConfig.linkedinUrl].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ---------------------------------------------------------------------------
// FAQPageSchema — placed in src/app/faq/page.tsx
// ---------------------------------------------------------------------------
export function FAQPageSchema() {
  const mainEntity = faqs.flatMap((category) =>
    category.questions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.a,
      },
    }))
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ---------------------------------------------------------------------------
// ArticleSchema — placed in src/app/blog/[slug]/page.tsx
// ---------------------------------------------------------------------------
interface ArticleSchemaProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  siteUrl: string;
}

export function ArticleSchema({
  title,
  excerpt,
  date,
  slug,
  siteUrl,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: "Helen Grondin",
      url: `${siteUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Pare Grondin Services",
      url: siteUrl,
    },
    url: `${siteUrl}/blog/${slug}`,
    mainEntityOfPage: `${siteUrl}/blog/${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
