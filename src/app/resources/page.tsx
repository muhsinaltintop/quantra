import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const resourceCategories = [
  {
    title: "GCSE Revision Guides",
    description: "Structured topic checklists and exam-focused guidance for UK GCSE Mathematics and Physics preparation.",
  },
  {
    title: "IGCSE Revision Guides",
    description: "Cambridge-aligned guides that help students organise knowledge, practise application, and prepare for international papers.",
  },
  {
    title: "Study Planners",
    description: "Weekly and termly planning templates for balancing school work, retrieval practice, past papers, and rest.",
  },
  {
    title: "Formula Sheets",
    description: "Clear reference sheets for core mathematics and physics formulae, with space for notes and common exam cautions.",
  },
  {
    title: "Parent Guides",
    description: "Practical resources to help families understand exam timelines, progress reports, mock results, and revision routines.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "GCSE & IGCSE Revision Resources",
  description: "Free GCSE and IGCSE revision guides, study planners, formula sheets, and parent resources for online exam preparation.",
  path: "/resources",
  keywords: ['GCSE tuition', 'IGCSE tuition', 'Cambridge IGCSE preparation'],
});

export default function ResourcesPage() {
  return (
    <>
      <section className="academic-pattern py-20">
        <Container>
          <SectionHeading
            eyebrow="QUANTRA resources"
            title="A structured library for future GCSE and IGCSE study tools."
            description="Downloadable resources will be organised around the materials students and parents need most: revision guides, planning tools, formula support, and family guidance."
            align="center"
          />
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {resourceCategories.map((category) => (
              <article key={category.title} className="rounded-3xl border border-navy-900/10 bg-ivory p-8 shadow-sm">
                <div className="mb-7 h-1 w-16 rounded-full bg-gold-400" />
                <h2 className="font-serif text-2xl font-semibold text-navy-950">{category.title}</h2>
                <p className="mt-4 text-sm leading-7 text-navy-800/75">{category.description}</p>
                <p className="mt-6 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-navy-700">
                  Coming soon as the QUANTRA resource library expands.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
