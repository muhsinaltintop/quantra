import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const philosophyPoints = [
  "Every student brings different strengths, gaps, and academic habits to the exam journey.",
  "Effective preparation should be structured, measurable, and supportive from the first assessment onwards.",
  "Small group learning can combine shared motivation with meaningful individual attention.",
  "Exam preparation should include content mastery, careful practice, feedback, and confidence building.",
];

const supportCards = [
  {
    title: "Students aiming to improve grades",
    description:
      "Learners who want clearer understanding, stronger exam technique, and a structured route towards higher performance.",
  },
  {
    title: "Parents looking for structured academic support",
    description:
      "Families seeking a calm, rigorous, and transparent approach to tuition, progress monitoring, and exam preparation.",
  },
  {
    title: "International families preparing for British curriculum exams",
    description:
      "Students overseas who need focused guidance for GCSE and IGCSE expectations, assessment styles, and academic standards.",
  },
];

const learningPillars = [
  {
    title: "Assessment",
    description:
      "We begin by understanding each student’s current level, confidence, and priority gaps before recommending a pathway.",
  },
  {
    title: "Personalised Planning",
    description:
      "Students receive clear academic priorities shaped around their subject needs, exam timeline, and target outcomes.",
  },
  {
    title: "Guided Learning",
    description:
      "Lessons combine expert explanation, structured practice, and careful feedback to strengthen both knowledge and technique.",
  },
  {
    title: "Progress Tracking",
    description:
      "Ongoing review helps students and parents see development, identify next steps, and prepare with greater assurance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="academic-pattern relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        <Container className="py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-gold-500">
              QUANTRA Education
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.04] tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">
              About QUANTRA Education
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-navy-800/80">
              A UK-based online education company helping ambitious students prepare for GCSE and IGCSE success through expert teaching, structured learning, and exam-focused academic support.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Our purpose"
            title="Our Mission"
            description="At QUANTRA Education, our mission is to help students build the knowledge, confidence, and exam technique they need to succeed in GCSE and IGCSE examinations. We combine expert teaching with structured programmes, personalised guidance, and technology-supported learning."
          />
          <div className="rounded-[2rem] border border-navy-900/10 bg-ivory p-8 shadow-sm sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500">
              Academic standard
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-navy-950">
              Academic Excellence with Personalised Support
            </h2>
            <div className="mt-8 grid gap-4">
              {philosophyPoints.map((point) => (
                <div key={point} className="flex gap-4 rounded-2xl bg-white px-5 py-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-sm font-bold text-gold-500">
                    ✓
                  </span>
                  <p className="text-sm leading-7 text-navy-800/75">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-sm backdrop-blur sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500">
              Cambridge-focused preparation
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
              A focused beginning with room to grow.
            </h2>
            <p className="mt-5 text-sm leading-7 text-navy-800/75">
              QUANTRA initially focuses on Cambridge GCSE and IGCSE preparation, where structured subject teaching, exam familiarity, and careful feedback are especially important. As our academic offering develops, we will broaden our subject pathways while maintaining the same measured, specialist approach.
            </p>
          </div>
          <div className="rounded-[2rem] bg-navy-950 p-8 text-white shadow-academic sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-300">
              Expert teaching
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">
              Guided by qualified academic expertise.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/72">
              Students learn with qualified teachers who bring UK-qualified academic expertise and Cambridge Certified Examiner experience to the preparation process. Teaching is clear, subject-specific, and grounded in the expectations of British curriculum examinations.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Who we support"
            title="Support for students and families preparing with purpose."
            description="QUANTRA is designed for families who value rigorous teaching, careful structure, and a thoughtful academic environment."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {supportCards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-navy-900/10 bg-ivory p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-academic">
                <div className="mb-7 h-1 w-16 rounded-full bg-gold-400" />
                <h3 className="font-serif text-2xl font-semibold text-navy-950">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-navy-800/75">{card.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <Container>
          <SectionHeading
            eyebrow="Learning approach"
            title="A structured pathway from insight to progress."
            description="Our approach is designed to make preparation clear, focused, and responsive to each student’s academic needs."
            align="center"
            tone="dark"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {learningPillars.map((pillar, index) => (
              <article key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-bold text-gold-300">0{index + 1}</p>
                <h3 className="mt-5 font-serif text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{pillar.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="academic-pattern py-20">
        <Container>
          <div className="rounded-[2rem] border border-white/70 bg-white/75 p-8 text-center shadow-academic backdrop-blur sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500">
              Free academic assessment
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
              Ready to understand your child’s academic level?
            </h2>
            <div className="mt-8">
              <Button href="/contact">Book a Free Assessment</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
