import type { Metadata } from "next";
import Link from "next/link";
import { BlogIndex } from "./_components/BlogIndex";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { articles, blogCategories, getFeaturedArticle } from "@/lib/blog";

export const metadata: Metadata = {
  title: "GCSE & IGCSE Blog | QUANTRA Education",
  description: "Educational articles on GCSE success, IGCSE preparation, revision techniques, exam planning, and parent guidance.",
};

export default function BlogPage() {
  const featured = getFeaturedArticle();

  return (
    <>
      <section className="academic-pattern py-20">
        <Container>
          <SectionHeading
            eyebrow="Resources for exam success"
            title="GCSE and IGCSE study guidance for ambitious families."
            description="Explore practical articles written for students and parents preparing for Cambridge, GCSE, and IGCSE assessment demands."
            align="center"
          />
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="rounded-[2rem] border border-gold-400/30 bg-navy-950 p-8 text-white shadow-academic lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-300">Featured article</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.35fr] lg:items-end">
              <div>
                <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">{featured.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">{featured.excerpt}</p>
              </div>
              <Link href={`/blog/${featured.slug}`} className="inline-flex justify-center rounded-full bg-gold-400 px-6 py-3 text-sm font-bold text-navy-950 transition hover:-translate-y-0.5 hover:bg-gold-300">
                Read featured article
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-16">
        <Container>
<BlogIndex articles={articles} categories={blogCategories} />
        </Container>
      </section>
    </>
  );
}
