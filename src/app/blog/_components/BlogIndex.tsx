"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "./BlogCard";
import type { BlogArticle, BlogCategory } from "@/lib/blog";

export function BlogIndex({ articles, categories }: { articles: BlogArticle[]; categories: BlogCategory[] }) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All articles">("All articles");
  const filteredArticles = useMemo(
    () => activeCategory === "All articles" ? articles : articles.filter((article) => article.category === activeCategory),
    [activeCategory, articles],
  );
  const baseClass = "rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400";

  return (
    <>
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-500">Article library</p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">Browse by study need.</h2>
          <p className="mt-4 text-base leading-8 text-navy-800/80 sm:text-lg">Filter by category to find strategy, curriculum, and revision support.</p>
        </div>
        <div aria-label="Blog categories" className="flex flex-wrap gap-3" role="group">
          {["All articles", ...categories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category as BlogCategory | "All articles")}
              className={`${baseClass} ${activeCategory === category ? "border-navy-900 bg-navy-900 text-white" : "border-navy-900/10 bg-white text-navy-800 hover:border-gold-400"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredArticles.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </>
  );
}
