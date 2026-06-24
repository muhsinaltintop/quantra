import type { Metadata } from "next";

const siteName = "QUANTRA Education";
const defaultDescription =
  "UK-based online GCSE and IGCSE tuition for ambitious students in the UAE, Dubai, and worldwide.";
const defaultKeywords = [
  "GCSE tuition",
  "IGCSE tuition",
  "GCSE Maths tutoring",
  "IGCSE Maths tutoring",
  "GCSE Physics tutoring",
  "IGCSE Physics tutoring",
  "GCSE tutors UAE",
  "IGCSE tutors Dubai",
  "Online GCSE tuition",
  "Online IGCSE tuition",
  "Cambridge IGCSE preparation",
];

export const siteConfig = {
  name: siteName,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://quantra.education",
  description: defaultDescription,
  locale: "en_GB",
  twitterHandle: "@QuantraEducation",
};

export type SeoConfig = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
}: SeoConfig): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      locale: siteConfig.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization"],
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  areaServed: ["United Arab Emirates", "Dubai", "Qatar", "Saudi Arabia", "United Kingdom", "Online"],
  educationalCredentialAwarded: "GCSE and IGCSE preparation support",
  knowsAbout: defaultKeywords,
  sameAs: [] as string[],
};

export function courseJsonLd({ name, description, path, provider = siteConfig.name }: { name: string; description: string; path: string; provider?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "EducationalOrganization",
      name: provider,
      url: siteConfig.url,
    },
    educationalLevel: ["GCSE", "IGCSE"],
    courseMode: "Online",
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
