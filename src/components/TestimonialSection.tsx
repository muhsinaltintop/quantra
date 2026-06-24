import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location?: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "QUANTRA gave us a clear picture of our daughter’s strengths and gaps. The consultation felt thoughtful, structured, and genuinely academic.",
    name: "Parent testimonial placeholder",
    role: "Parent",
    location: "International family",
  },
  {
    quote:
      "The lessons are focused and easy to follow. I like how every topic links back to exam questions and how to improve my answers.",
    name: "Student testimonial placeholder",
    role: "IGCSE Student",
  },
  {
    quote:
      "We wanted serious preparation without overcrowded classes. QUANTRA’s small group approach feels premium and very well organised.",
    name: "Parent testimonial placeholder",
    role: "Parent",
    location: "International family",
  },
];

type TestimonialSectionProps = {
  testimonials?: Testimonial[];
  background?: "white" | "ivory";
};

export function TestimonialSection({ testimonials = defaultTestimonials, background = "white" }: TestimonialSectionProps) {
  return (
    <section className={`${background === "white" ? "bg-white" : "bg-ivory"} py-20`}>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Parent-focused feedback placeholders for a premium academic experience."
          description="These testimonials are launch-stage placeholders and should be replaced with approved family feedback before publication."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article key={`${testimonial.name}-${index}`} className="rounded-3xl border border-navy-900/10 bg-ivory p-8 shadow-sm">
              <p className="text-4xl leading-none text-gold-400">“</p>
              <p className="mt-3 text-sm leading-7 text-navy-800/75">{testimonial.quote}</p>
              <div className="mt-7 border-t border-navy-900/10 pt-5">
                <p className="font-serif text-xl font-semibold text-navy-950">{testimonial.name}</p>
                <p className="mt-1 text-sm font-semibold text-navy-700">
                  {testimonial.role}{testimonial.location ? `, ${testimonial.location}` : ""}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
