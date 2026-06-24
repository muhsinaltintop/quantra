import type { FAQItem } from "@/components/FAQSection";
import type { Testimonial } from "@/components/TestimonialSection";
import type { TimelineStep } from "@/components/ProcessTimeline";

export type ContentCard = { title: string; description: string; detail?: string; audience?: string; focus?: string; href?: string; benefits?: string[]; points?: string[]; eyebrow?: string; };
export type { FAQItem, Testimonial, TimelineStep };
