import type { Metadata } from "next";
import { courseJsonLd, createMetadata, JsonLd } from "@/lib/seo";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = createMetadata({
  title: "GCSE Mathematics Tuition",
  description: "Online GCSE Maths tutoring with structured topic teaching, guided exam practice, and progress monitoring for ambitious GCSE students.",
  path: "/subjects/gcse-mathematics",
  keywords: ['GCSE Maths tutoring', 'GCSE tuition', 'Online GCSE tuition'],
});

const courseStructuredData = courseJsonLd({
  name: "GCSE Mathematics Tuition",
  description: "Online GCSE Maths tutoring with structured topic teaching, guided exam practice, and progress monitoring for ambitious GCSE students.",
  path: "/subjects/gcse-mathematics",
});
const programmeFit = [
  "Need stronger foundations in key maths topics",
  "Want to improve exam confidence",
  "Are preparing for GCSE assessments",
  "Need structured revision and guided practice",
  "Benefit from small group learning with expert support",
];

const topicAreas = [
  "Number",
  "Algebra",
  "Ratio, proportion and rates of change",
  "Geometry and measures",
  "Probability",
  "Statistics",
  "Problem solving and exam technique",
];

const supportCards = [
  {
    title: "Diagnostic Assessment",
    description:
      "Students begin with a careful academic review that identifies current strengths, knowledge gaps, confidence levels, and the most important next priorities.",
  },
  {
    title: "Topic-by-Topic Learning",
    description:
      "Lessons build understanding systematically across the GCSE Mathematics course, connecting methods, reasoning, and accurate mathematical communication.",
  },
  {
    title: "Guided Exam Practice",
    description:
      "Students practise exam-style questions with teacher guidance, learning how to approach multi-step problems, show working, and manage marks effectively.",
  },
  {
    title: "Progress Monitoring",
    description:
      "Ongoing feedback helps students and parents understand completed topics, developing skills, revision priorities, and readiness for upcoming assessments.",
  },
];

const learningFormats = [
  "Small group classes",
  "Intensive revision courses",
  "Mock exam preparation",
  "Optional one-to-one support",
];

const expectedOutcomes = [
  "Stronger mathematical confidence",
  "Better understanding of core topics",
  "Improved exam technique",
  "Clearer revision priorities",
  "More consistent practice habits",
];

export default function GCSEMathematicsPage() {
  return (
    <>
      <JsonLd data={courseStructuredData} />
      <section className="academic-pattern relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        <Container className="grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-gold-500">
              GCSE Mathematics
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.04] tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">
              GCSE Mathematics Preparation
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-navy-800/80">
              Structured online GCSE Mathematics support designed to strengthen understanding, improve problem-solving skills, and prepare students for exam success.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Book a Free Assessment</Button>
              <Button href="#programme-fit" variant="secondary">
                Explore the Programme
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-academic backdrop-blur">
            <div className="rounded-[1.5rem] border border-gold-400/30 bg-navy-950 p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-300">
                Structured exam preparation
              </p>
              <h2 className="mt-5 font-serif text-3xl font-semibold">
                Clear foundations, confident methods, and purposeful practice.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                QUANTRA helps students move from uncertainty to organised preparation through diagnostic insight, expert teaching, and carefully guided GCSE Mathematics revision.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Assessment-led", "Topic-focused", "Exam-oriented", "Progress-aware"].map((highlight) => (
                  <div key={highlight} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="programme-fit" className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Who This Programme Is For"
            title="Designed for students who need structure, confidence, and expert GCSE Mathematics support."
            description="The programme is suitable for learners at different stages of preparation, from those rebuilding foundations to students refining exam technique before assessments."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {programmeFit.map((item) => (
              <div key={item} className="rounded-2xl border border-navy-900/10 bg-ivory px-5 py-4 text-sm font-semibold leading-6 text-navy-800 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Cover"
            title="Comprehensive topic coverage with problem solving at the centre."
            description="Teaching is organised around core GCSE Mathematics content while giving students repeated opportunities to apply knowledge in unfamiliar and exam-style contexts."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topicAreas.map((topic) => (
              <div key={topic} className="rounded-2xl border border-white/70 bg-white/75 px-5 py-5 text-sm font-semibold text-navy-800 shadow-sm backdrop-blur">
                {topic}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <Container>
          <SectionHeading
            eyebrow="How QUANTRA Supports GCSE Mathematics Students"
            title="A precise academic framework from assessment to sustained practice."
            description="Students receive structured support that clarifies what to learn, how to practise, and how to prepare more effectively for GCSE Mathematics assessments."
            align="center"
            tone="dark"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {supportCards.map((card, index) => (
              <article key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-300/15 text-sm font-bold text-gold-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="font-serif text-2xl font-semibold">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/70">{card.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-navy-900/10 bg-ivory p-8 shadow-sm sm:p-10">
            <SectionHeading
              eyebrow="Learning Formats"
              title="Flexible preparation options for different stages of study."
              description="Families can choose the level of support that matches the student’s current confidence, timetable, and assessment goals."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {learningFormats.map((format) => (
                <div key={format} className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-navy-800">
                  {format}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-navy-900/10 bg-navy-950 p-8 text-white shadow-sm sm:p-10">
            <SectionHeading
              eyebrow="Expected Outcomes"
              title="Realistic progress through clearer learning and consistent practice."
              description="QUANTRA does not promise guaranteed grades. The aim is to help students build stronger habits, sharper understanding, and more confident preparation."
              tone="dark"
            />
            <div className="mt-8 grid gap-4">
              {expectedOutcomes.map((outcome) => (
                <div key={outcome} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white/85">
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="academic-pattern py-20">
        <Container>
          <div className="rounded-[2rem] border border-white/70 bg-white/75 p-8 text-center shadow-academic backdrop-blur sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500">Free academic assessment</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
              Start GCSE Mathematics Preparation with QUANTRA
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-navy-800/75 sm:text-lg">
              Begin with a clear assessment and receive parent-friendly guidance on the most suitable GCSE Mathematics preparation pathway.
            </p>
            <div className="mt-8">
              <Button href="/contact">Book a Free Assessment</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
