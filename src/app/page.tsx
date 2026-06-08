import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const trustPhrases = [
  "UK-Based Online Education",
  "Cambridge-Focused Preparation",
  "Qualified Expert Teachers",
  "Small Group Learning",
  "Exam-Oriented Progress",
];

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
  "Complete the enquiry form",
  "Take a free academic assessment",
  "Attend an academic consultation",
  "Receive a personalised study plan",
  "Join the right programme",
  "Track progress and prepare for exams",
];

const placeholderTestimonials = [
  {
    quote:
      "QUANTRA gave us a clear picture of our daughter’s strengths and gaps. The consultation felt thoughtful, structured, and genuinely academic.",
    name: "Sarah Al-Mansoori",
    role: "Parent",
    location: "Dubai",
  },
  {
    quote:
      "The lessons are focused and easy to follow. I like how every topic links back to exam questions and how to improve my answers.",
    name: "Ahmed Khan",
    role: "IGCSE Student",
  },
  {
    quote:
      "We wanted serious preparation without overcrowded classes. QUANTRA’s small group approach feels premium and very well organised.",
    name: "Noura Al-Harbi",
    role: "Parent",
    location: "Riyadh",
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

      <section className="border-y border-navy-900/10 bg-navy-950 py-5 text-white">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-between">
            {trustPhrases.map((phrase) => (
              <div key={phrase} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                {phrase}
              </div>
            ))}
          </div>
        </Container>
      </section>

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

      <section className="bg-ivory py-20">
        <Container>
          <SectionHeading
            eyebrow="Student Journey"
            title="A clear route from enquiry to exam readiness."
            description="Families receive a structured onboarding experience before students enter the programme best suited to their goals."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {studentJourneySteps.map((step, index) => (
              <article key={step} className="rounded-3xl border border-navy-900/10 bg-white p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-navy-950">{step}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="What families and students may experience with QUANTRA."
            description="Placeholder testimonials for launch-stage website content, written to reflect the intended premium student and parent experience."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {placeholderTestimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-3xl border border-navy-900/10 bg-ivory p-8 shadow-sm">
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

      <section className="bg-parchment py-20">
        <Container>
          <div className="overflow-hidden rounded-[2rem] bg-navy-950 p-8 text-white shadow-academic sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold-300">Free assessment</p>
                <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                  Start with a Free Academic Assessment
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
                  Discover your child’s current academic level and receive clear guidance on the right preparation pathway.
                </p>
              </div>
              <Button href="/contact" variant="secondary" className="bg-white text-navy-950 hover:bg-gold-300">
                Book a Free Assessment
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
