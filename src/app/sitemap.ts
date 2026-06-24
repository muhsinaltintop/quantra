import type { MetadataRoute } from "next";
import { articles } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/about",
  "/programmes",
  "/subjects",
  "/subjects/gcse-mathematics",
  "/subjects/igcse-mathematics",
  "/subjects/gcse-physics",
  "/subjects/igcse-physics",
  "/resources",
  "/blog",
  "/contact",
  "/pricing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route || "/"),
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    } as const)),
    ...articles.map((article) => ({
      url: absoluteUrl(`/blog/${article.slug}`),
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
