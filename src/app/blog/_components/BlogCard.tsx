import Link from "next/link";
import type { BlogArticle } from "@/lib/blog";

export function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-navy-900/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-academic">
      <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-gold-500">
        <span>{article.category}</span>
        <span className="text-navy-300">•</span>
        <time dateTime={article.date}>{new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(new Date(article.date))}</time>
      </div>
      <h2 className="mt-5 font-serif text-2xl font-semibold leading-tight text-navy-950">
        <Link href={`/blog/${article.slug}`} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400">
          {article.title}
        </Link>
      </h2>
      <p className="mt-4 flex-1 text-sm leading-7 text-navy-800/75">{article.excerpt}</p>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-navy-900/10 pt-5 text-sm text-navy-700">
        <span>{article.author}</span>
        <span>{article.readingTime}</span>
      </div>
    </article>
  );
}
