import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AssessmentCTA } from "@/components/AssessmentCTA";
import { FAQSection } from "@/components/FAQSection";
import { TrustBar } from "@/components/TrustBar";

export const metadata: Metadata = createMetadata({
  title: "GCSE & IGCSE Tuition Pricing",
  description: "Review QUANTRA Education pricing for structured online GCSE tuition and IGCSE tuition programmes.",
  path: "/pricing",
  keywords: ["GCSE tuition", "IGCSE tuition", "Online GCSE tuition"],
});

const pricingTiers = [
  {
    name: "Small Group Learning",
    shortName: "Group Learning",
    price: "£149/month",
    description:
      "Structured weekly group support for students who need consistency, curriculum alignment, and steady academic guidance.",
    includes: [
      "Weekly group classes",
      "Structured curriculum support",
      "Homework guidance",
      "Progress monitoring",
    ],
  },
  {
    name: "Hybrid Learning",
    shortName: "Hybrid Learning",
    price: "£249/month",
    description:
      "A balanced pathway combining group teaching with individual support and exam-focused strategy throughout the year.",
    includes: [
      "Weekly group classes",
      "Monthly one-to-one support",
      "Progress reviews",
      "Exam strategy support",
    ],
    badge: "Most Popular",
  },
  {
    name: "Premium Academic Support",
    shortName: "Premium Academic Support",
    price: "£399/month",
    description:
      "Enhanced academic support for families who want closer monitoring, increased individual attention, and personalised planning.",
    includes: [
      "Weekly group classes",
      "Increased one-to-one support",
      "Personalised academic planning",
      "Enhanced progress monitoring",
    ],
  },
];

const comparisonRows = [
  "Weekly group classes",
  "Structured curriculum support",
  "Homework guidance",
  "Progress monitoring",
  "Monthly one-to-one support",
  "Progress reviews",
  "Exam strategy support",
  "Increased one-to-one support",
  "Personalised academic planning",
  "Enhanced progress monitoring",
];

const pricingFaqs = [
  {
    question: "Do I need an assessment first?",
    answer:
      "Yes. We recommend starting with a free academic assessment so we can understand the student’s current level, subject priorities, and most suitable programme structure.",
  },
  {
    question: "Can I change programme later?",
    answer:
      "Yes. Programme recommendations can be reviewed as academic needs change, including before mock exams, subject changes, or new school-term goals.",
  },
  {
    question: "Are lessons recorded?",
    answer:
      "Lesson recording availability may depend on the programme format, safeguarding requirements, and subject structure. We can confirm the current arrangement during assessment.",
  },
  {
    question: "Can parents receive progress updates?",
    answer:
      "Yes. Parent communication and progress visibility are central to our support model, with updates tailored to the selected programme and student goals.",
  },
];

function tierIncludesFeature(tier: (typeof pricingTiers)[number], feature: string) {
  return tier.includes.includes(feature);
}

export default function PricingPage() {
  return (
    <>
      <section className="academic-pattern relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        <Container className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-gold-500">
              Transparent programme pricing
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.04] tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">
              Clear Monthly Options for Serious Academic Support
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-navy-800/80">
              Compare QUANTRA learning pathways and book a free assessment to identify the right level of support for your child.
            </p>
            <div className="mt-8">
              <Button href="/free-assessment">Book a Free Assessment</Button>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Pricing tiers"
            title="Select a starting point, then refine it through assessment."
            description="Each tier is designed for easy comparison, with indicative monthly pricing that can be confirmed after the free academic assessment."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className={`relative flex h-full flex-col rounded-[2rem] border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-academic ${
                  tier.badge
                    ? "border-gold-400 bg-navy-950 text-white"
                    : "border-navy-900/10 bg-ivory text-navy-950"
                }`}
              >
                {tier.badge ? (
                  <span className="absolute right-6 top-6 rounded-full bg-gold-400 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy-950">
                    {tier.badge}
                  </span>
                ) : null}
                <div className="mb-7 h-1 w-16 rounded-full bg-gold-400" />
                <h2 className="max-w-[13rem] font-serif text-3xl font-semibold">{tier.name}</h2>
                <p className={`mt-4 text-sm leading-7 ${tier.badge ? "text-white/72" : "text-navy-800/75"}`}>
                  {tier.description}
                </p>
                <div className="mt-8">
                  <p className={`text-xs font-bold uppercase tracking-[0.22em] ${tier.badge ? "text-gold-300" : "text-gold-500"}`}>
                    {tier.shortName}
                  </p>
                  <p className="mt-2 font-serif text-4xl font-semibold tracking-tight">{tier.price}</p>
                </div>
                <ul className="mt-8 space-y-3">
                  {tier.includes.map((item) => (
                    <li key={item} className={`flex gap-3 text-sm leading-6 ${tier.badge ? "text-white/82" : "text-navy-800/80"}`}>
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-gold-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/free-assessment" variant={tier.badge ? "secondary" : "primary"} className="mt-8 w-full">
                  Book a Free Assessment
                </Button>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold-400/30 bg-gold-400/10 px-5 py-4 text-center text-sm leading-7 text-navy-800/75">
            Pricing shown is indicative and may vary depending on programme structure and subject selection.
          </p>
        </Container>
      </section>

      <section className="bg-parchment py-20">
        <Container>
          <SectionHeading
            eyebrow="Compare programmes"
            title="A clear view of what each tier includes."
            description="Use this comparison table as a quick guide before your assessment recommendation."
            align="center"
          />
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-sm backdrop-blur">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-navy-950 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-5 font-semibold">Feature</th>
                    {pricingTiers.map((tier) => (
                      <th key={tier.name} scope="col" className="px-6 py-5 font-semibold">
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-900/10">
                  {comparisonRows.map((feature) => (
                    <tr key={feature} className="bg-white/55">
                      <th scope="row" className="px-6 py-4 font-semibold text-navy-950">{feature}</th>
                      {pricingTiers.map((tier) => (
                        <td key={`${tier.name}-${feature}`} className="px-6 py-4 text-navy-800/75">
                          {tierIncludesFeature(tier, feature) ? (
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold-400/20 text-sm font-bold text-gold-500">✓</span>
                          ) : (
                            <span className="text-navy-800/25">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <FAQSection
        eyebrow="Pricing FAQ"
        title="Common questions before booking an assessment."
        description="Transparent guidance for parents comparing support levels and indicative monthly options."
        faqs={pricingFaqs}
      />

      <AssessmentCTA
        title="Confirm the Right Pricing Tier for Your Child"
        description="Book a free assessment and receive guidance on the best-fit programme, subject selection, and support level."
      />
    </>
  );
}
