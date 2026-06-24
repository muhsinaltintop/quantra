import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials as approvedTestimonials } from "@/content/testimonials";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location?: string;
};

type TestimonialSectionProps = {
  testimonials?: Testimonial[];
  background?: "white" | "ivory";
};

export function TestimonialSection({ testimonials = approvedTestimonials, background = "white" }: TestimonialSectionProps) {
  return (
    <section className={`${background === "white" ? "bg-white" : "bg-ivory"} py-20`}>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Feedback from families preparing with structure and purpose."
          description="Representative feedback demonstrates the clarity, structure, and exam focus families can expect from QUANTRA."
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
