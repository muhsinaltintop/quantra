import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AssessmentCTA } from "@/components/AssessmentCTA";
import { FAQSection } from "@/components/FAQSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ResultsSection } from "@/components/ResultsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { TrustBar } from "@/components/TrustBar";

const whyQuantraCards = [
  {
    title: "Expert Academic Guidance",
    description:
      "Students learn with qualified specialist teachers who provide clear instruction, rigorous feedback, and confident academic direction.",
  },
  {
    title: "Small Group Learning",
    description:
      "Focused classes give every student the space to ask questions, practise deeply, and receive meaningful teacher attention.",
  },
  {
    title: "Personalised Study Pathways",
    description:
      "Academic plans are shaped around each student’s current level, target grade, learning gaps, and exam timeline.",
  },
  {
    title: "Exam-Focused Preparation",
    description:
      "Every lesson is connected to specification mastery, exam technique, structured practice, and measurable progress.",
  },
];

const programmeCards = [
  {
    title: "Small Group Classes",
    description:
      "Weekly online classes that combine expert teaching, guided practice, homework review, and ongoing progress monitoring.",
    detail: "Ideal for consistent term-time support and confident subject development.",
  },
  {
    title: "Intensive Revision Courses",
    description:
      "High-impact revision programmes designed to consolidate key topics, remove uncertainty, and strengthen exam performance.",
    detail: "Ideal before mocks, final exams, and demanding assessment windows.",
  },
  {
    title: "Mock Exam Preparation",
    description:
      "Structured mock preparation with diagnostic feedback, targeted revision priorities, and exam-readiness coaching.",
    detail: "Ideal for building confidence under timed conditions.",
  },
];

const subjectFocus = ["GCSE Mathematics", "IGCSE Mathematics", "GCSE Physics", "IGCSE Physics"];

const platformBenefits = [
  "Diagnostic assessments",
  "Topic-by-topic progress tracking",
  "Personalised revision plans",
  "Practice tests",
  "Parent-friendly progress insights",
  "Exam readiness monitoring",
];

const studentJourneySteps = [
  { title: "Complete the enquiry form", description: "Share your child’s subject, exam board, current confidence level, and academic goals." },
  { title: "Take a free academic assessment", description: "Identify strengths, gaps, and preparation priorities before choosing a programme." },
  { title: "Attend an academic consultation", description: "Discuss the assessment outcome with parent-friendly guidance and clear next steps." },
  { title: "Receive a personalised study plan", description: "Understand the recommended pathway, subject focus, and learning rhythm." },
  { title: "Join the right programme", description: "Begin structured online teaching matched to your child’s needs and timetable." },
  { title: "Track progress and prepare for exams", description: "Use regular feedback and exam-style practice to support confident preparation." },
];

const homepageFaqs = [
  {
    question: "Is QUANTRA suitable for my child’s exam board?",
    answer:
      "QUANTRA focuses on GCSE and IGCSE preparation, with Cambridge-focused pathways for international learners. The free assessment helps confirm the most suitable support route.",
  },
  {
    question: "How do parents understand progress?",
    answer:
      "Families receive clear guidance on strengths, gaps, priorities, and next steps so progress feels structured rather than vague.",
  },
  {
    question: "Are classes online?",
    answer:
      "Yes. QUANTRA is designed for online learning flexibility, combining live teaching with structured preparation and parent-friendly communication.",
  },
  {
    question: "Will the assessment guarantee a result?",
    answer:
      "No. The assessment is used to recommend an appropriate pathway. Outcomes depend on the student’s starting point, attendance, practice, and wider academic context.",
  },
];

export default function Home() {
  return (
    <>
      <section className="academic-pattern relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        <Container className="grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-gold-500">
              QUANTRA Education
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">
              Elite GCSE &amp; IGCSE Preparation for Ambitious Students
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-navy-800/80">
              Expert-led online tuition, small group classes, intensive revision programmes, and mock exam preparation designed to help students achieve their full academic potential.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Book a Free Assessment</Button>
              <Button href="/contact" variant="secondary">
                Join a Free Demo Class
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-academic backdrop-blur">
            <div className="rounded-[1.5rem] border border-gold-400/30 bg-navy-950 p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-300">
                Academic preparation pathway
              </p>
              <h2 className="mt-5 font-serif text-3xl font-semibold">
                From diagnostic insight to exam-ready confidence.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Begin with a free academic assessment, receive expert guidance, and join a programme matched to your child’s goals, gaps, and target grade.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Free assessment",
                  "Academic consultation",
                  "Personalised plan",
                  "Progress tracking",
                ].map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Why QUANTRA"
            title="A premium academic environment built for serious GCSE and IGCSE progress."
            description="QUANTRA combines expert teaching, careful assessment, and structured exam preparation to help motivated students study with clarity and purpose."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyQuantraCards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-navy-900/10 bg-ivory p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-academic">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15 text-lg font-bold text-gold-500">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-semibold text-navy-950">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-navy-800/75">{card.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-20">
        <Container>
          <SectionHeading
            eyebrow="Programmes"
            title="Focused preparation pathways for every stage of the exam journey."
            description="Choose the right level of support for steady learning, intensive revision, or high-confidence mock exam performance."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {programmeCards.map((programme) => (
              <article key={programme.title} className="flex h-full flex-col rounded-3xl border border-white/70 bg-white/75 p-8 shadow-sm backdrop-blur">
                <div className="mb-7 h-1 w-16 rounded-full bg-gold-400" />
                <h3 className="font-serif text-2xl font-semibold text-navy-950">{programme.title}</h3>
                <p className="mt-4 text-sm leading-7 text-navy-800/75">{programme.description}</p>
                <p className="mt-6 rounded-2xl bg-navy-50 px-4 py-3 text-sm font-semibold leading-6 text-navy-800">
                  {programme.detail}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Subjects Focus"
            title="Specialist support in core GCSE and IGCSE subjects."
            description="QUANTRA begins with high-demand quantitative subjects where precise teaching, structured practice, and exam technique make a measurable difference."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {subjectFocus.map((subject) => (
              <div key={subject} className="rounded-3xl border border-navy-900/10 bg-ivory p-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-500">Featured subject</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-navy-950">{subject}</h3>
              </div>
            ))}
            <div className="rounded-3xl border border-dashed border-gold-400/70 bg-gold-400/10 p-6 sm:col-span-2">
              <p className="font-serif text-2xl font-semibold text-navy-950">More subjects coming soon</p>
              <p className="mt-3 text-sm leading-7 text-navy-800/75">
                Additional GCSE and IGCSE pathways will be introduced as QUANTRA expands its specialist teacher network.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-300">Learning platform</p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Powered by Advanced Learning Technology
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72 sm:text-lg">
              Students benefit from a structured digital learning environment supported by Prep-Test.com, helping lessons, independent practice, and parent updates stay connected.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {platformBenefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white/85">
                {benefit}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProcessTimeline
        title="A clear route from enquiry to exam readiness."
        description="Families receive a structured onboarding experience before students enter the programme best suited to their goals."
        steps={studentJourneySteps}
      />

      <ResultsSection />

      <TestimonialSection />

      <FAQSection
        title="Questions parents ask before booking."
        description="Clear answers to help families decide whether QUANTRA is the right academic environment for their child."
        faqs={homepageFaqs}
      />

      <AssessmentCTA
        title="Start with a Free Academic Assessment"
        description="Discover your child’s current academic level and receive clear guidance on the right preparation pathway."
        href="/contact"
        variant="dark"
      />
    </>
  );
}
