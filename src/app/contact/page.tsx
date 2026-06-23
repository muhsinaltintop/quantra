import { AssessmentEnquiryForm } from "./_components/AssessmentEnquiryForm";
import { Container } from "@/components/Container";

const benefits = [
  "Personalised GCSE and IGCSE pathway advice",
  "Clear view of current academic level and target gaps",
  "Guidance from an experienced academic advisor",
];

export default function ContactPage() {
  return <ContactAssessmentPage />;
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
