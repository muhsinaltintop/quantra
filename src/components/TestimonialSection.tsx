"use client";

import { useState } from "react";

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
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  return (
    <section className={`${background === "white" ? "bg-white" : "bg-ivory"} py-20`}>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Feedback from families preparing with structure and purpose."
          description="Representative feedback demonstrates the clarity, structure, and exam focus families can expect from QUANTRA."
          align="center"
        />
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="flex h-72 flex-col rounded-3xl border border-navy-900/10 bg-ivory p-6 shadow-sm"
            >
              <p className="text-4xl leading-none text-gold-400">“</p>
              <p className="mt-3 overflow-hidden text-sm leading-7 text-navy-800/75 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
                {testimonial.quote}
              </p>
              <button
                type="button"
                onClick={() => setSelectedTestimonial(testimonial)}
                className="mt-4 w-fit text-sm font-semibold text-gold-500 underline decoration-gold-500/30 underline-offset-4 transition hover:text-navy-950"
              >
                Read more
              </button>
              <div className="mt-auto border-t border-navy-900/10 pt-5">
                <p className="font-serif text-xl font-semibold text-navy-950">{testimonial.name}</p>
                <p className="mt-1 text-sm font-semibold text-navy-700">
                  {testimonial.role}{testimonial.location ? `, ${testimonial.location}` : ""}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>

      {selectedTestimonial ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/70 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="testimonial-dialog-title"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="max-h-full w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8 shadow-academic"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-500">Full testimonial</p>
                <h3 id="testimonial-dialog-title" className="mt-3 font-serif text-3xl font-semibold text-navy-950">
                  {selectedTestimonial.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-navy-700">
                  {selectedTestimonial.role}{selectedTestimonial.location ? `, ${selectedTestimonial.location}` : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTestimonial(null)}
                className="rounded-full border border-navy-900/10 px-4 py-2 text-sm font-semibold text-navy-700 transition hover:border-gold-500 hover:text-navy-950"
                aria-label="Close testimonial popup"
              >
                Close
              </button>
            </div>
            <p className="mt-8 whitespace-pre-line text-base leading-8 text-navy-800/80">{selectedTestimonial.quote}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
