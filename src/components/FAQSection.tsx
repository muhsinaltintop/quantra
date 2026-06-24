import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  faqs: FAQItem[];
  background?: "white" | "parchment" | "ivory";
};

const backgroundClasses = {
  white: "bg-white",
  parchment: "bg-parchment",
  ivory: "bg-ivory",
};

export function FAQSection({ eyebrow = "FAQ", title, description, faqs, background = "white" }: FAQSectionProps) {
  return (
    <section className={`${backgroundClasses[background]} py-20`}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-navy-900/10 bg-white/75 p-7 shadow-sm backdrop-blur">
              <h2 className="font-serif text-2xl font-semibold text-navy-950">{faq.question}</h2>
              <p className="mt-4 text-sm leading-7 text-navy-800/75">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
