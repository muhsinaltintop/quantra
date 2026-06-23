import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { articles, getArticleBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return { title: "Article not found | QUANTRA Education" };
  }

  return {
    title: `${article.title} | QUANTRA Education`,
    description: article.excerpt,
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article>
      <header className="academic-pattern py-20">
        <Container className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500">{article.category}</p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-navy-800/80">{article.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-navy-700">
            <span>By {article.author}</span>
            <time dateTime={article.date}>{new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(new Date(article.date))}</time>
            <span>{article.readingTime}</span>
          </div>
        </Container>
      </header>

      <section className="bg-white py-16">
        <Container className="max-w-4xl">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy-950 prose-p:leading-8 prose-p:text-navy-800/80">
            <p className="text-xl leading-9 text-navy-900">{article.introduction}</p>
            {article.sections.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="font-serif text-3xl font-semibold text-navy-950">{section.heading}</h2>
                <p className="mt-4 text-base leading-8 text-navy-800/80">{section.body}</p>
              </section>
            ))}
            <aside className="mt-12 rounded-3xl border border-gold-400/40 bg-ivory p-7">
              <h2 className="font-serif text-2xl font-semibold text-navy-950">Key takeaway</h2>
              <p className="mt-4 text-base leading-8 text-navy-800/80">{article.takeaway}</p>
            </aside>
          </div>
        </Container>
      </section>
    </article>
  );
}
