import type { Metadata } from "next";
import { createMetadata, faqJsonLd, JsonLd } from "@/lib/seo";
import { AssessmentEnquiryForm } from "./_components/AssessmentEnquiryForm";
import { Container } from "@/components/Container";

export const metadata: Metadata = createMetadata({
  title: "Contact QUANTRA Education",
  description: "Book a free academic assessment for GCSE tuition, IGCSE tuition, online GCSE Maths tutoring, and online Physics tutoring.",
  path: "/contact",
  keywords: ["Online GCSE tuition", "Online IGCSE tuition", "GCSE tutors UAE"],
});

const contactFaqStructuredData = faqJsonLd([
  {
    question: "Can families in Dubai or the UAE book online GCSE tuition?",
    answer: "Yes. QUANTRA provides online GCSE and IGCSE tuition for students in Dubai, the UAE, and other international locations.",
  },
  {
    question: "What happens after the free academic assessment?",
    answer: "Families receive guidance on the student’s current level, priority gaps, and the most suitable GCSE or IGCSE preparation pathway.",
  },
]);

const benefits = [
  "Personalised GCSE and IGCSE pathway advice",
  "Clear view of current academic level and target gaps",
  "Guidance from an experienced academic advisor",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactFaqStructuredData} />
      <ContactAssessmentPage />
    </>
  );
}

export function ContactAssessmentPage() {
  return (
    <main className="academic-pattern py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <section className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-academic backdrop-blur sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-gold-500">Free Assessment</p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
              Book a Free Academic Assessment
            </h1>
            <p className="mt-6 text-lg leading-8 text-navy-700">
              Understand your child&apos;s current academic level and receive expert guidance on the most suitable GCSE or IGCSE preparation pathway.
            </p>
            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-2xl bg-white/70 p-4 text-sm font-semibold text-navy-800">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gold-400" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </section>
          <AssessmentEnquiryForm />
        </div>
      </Container>
    </main>
  );
}
