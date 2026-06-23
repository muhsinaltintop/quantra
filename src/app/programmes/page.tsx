import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const programmeOverview = [
  {
    title: "Small Group Classes",
    description:
      "Weekly online lessons that combine expert subject teaching, guided practice, and consistent academic routines.",
    audience:
      "Students who need structured ongoing support throughout their GCSE or IGCSE course.",
    benefits: ["Small class environment", "Interactive teaching", "Regular exam practice"],
  },
  {
    title: "Intensive Revision Courses",
    description:
      "Focused holiday and exam-period courses designed to consolidate priority topics and strengthen assessment readiness.",
    audience:
      "Students approaching mocks, final examinations, or a demanding revision window.",
    benefits: ["Targeted topic review", "Practice-based learning", "Exam technique support"],
  },
  {
    title: "Mock Exam Preparation",
    description:
      "Exam-style preparation with timed practice, performance review, and clear revision priorities after each assessment.",
    audience:
      "Students who want to build confidence, manage timing, and identify weaker areas before the real exam.",
    benefits: ["Timed mock exams", "Detailed feedback", "Personal revision recommendations"],
  },
];

const programmeDetails = [
  {
    eyebrow: "Ongoing preparation",
    title: "Small Group Classes",
    description:
      "Weekly structured group lessons provide a focused class environment where students learn through clear explanation, active participation, and steady teacher guidance. Interactive teaching encourages questions and discussion, while peer motivation helps students maintain momentum across the academic year.",
    points: [
      "Weekly structured group lessons for consistent subject progress",
      "Focused class environment with meaningful teacher attention",
      "Interactive teaching that encourages participation and confidence",
      "Peer motivation within a serious academic setting",
      "Teacher-led exam practice linked to GCSE and IGCSE expectations",
      "Suitable for ongoing GCSE and IGCSE preparation",
    ],
  },
  {
    eyebrow: "Focused revision",
    title: "Intensive Revision Courses",
    description:
      "Designed for exam periods and school holidays, these courses help students make purposeful use of limited revision time. Lessons focus on high-value topics, careful practice, and exam technique so students can approach assessment windows with greater clarity.",
    points: [
      "Designed for exam periods and school holidays",
      "Focused revision of key topics and common challenge areas",
      "Practice-based learning to strengthen recall and application",
      "Exam technique support for clearer, more accurate responses",
      "Suitable for students who need targeted preparation",
    ],
  },
  {
    eyebrow: "Exam readiness",
    title: "Mock Exam Preparation",
    description:
      "Mock preparation gives students the experience of working under realistic conditions before high-stakes examinations. Timed papers, careful feedback, and performance review help students understand where marks are gained, where they are lost, and what to revise next.",
    points: [
      "Full exam-style practice aligned with GCSE and IGCSE demands",
      "Timed mock exams to build pace, stamina, and confidence",
      "Feedback and performance review after completed practice",
      "Identification of weak areas and recurring mistakes",
      "Revision recommendations to guide the next stage of study",
    ],
  },
];

export default function ProgrammesPage() {
  return (
    <>
      <section className="academic-pattern relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        <Container className="py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-gold-500">
              QUANTRA Programmes
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.04] tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">
              GCSE &amp; IGCSE Programmes Designed for Academic Progress
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-navy-800/80">
              Structured online programmes combining expert teaching, small group learning, personalised support, and exam-focused preparation.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Programme overview"
            title="Choose the learning format that matches your child’s academic stage."
            description="Each QUANTRA pathway is designed to provide structure, expert guidance, and measurable preparation for GCSE and IGCSE success."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {programmeOverview.map((programme) => (
              <article key={programme.title} className="flex h-full flex-col rounded-3xl border border-navy-900/10 bg-ivory p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-academic">
                <div className="mb-7 h-1 w-16 rounded-full bg-gold-400" />
                <h2 className="font-serif text-2xl font-semibold text-navy-950">{programme.title}</h2>
                <p className="mt-4 text-sm leading-7 text-navy-800/75">{programme.description}</p>
                <div className="mt-6 rounded-2xl bg-white px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-500">Who it is for</p>
                  <p className="mt-3 text-sm leading-7 text-navy-800/75">{programme.audience}</p>
                </div>
                <ul className="mt-6 space-y-3">
                  {programme.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm leading-6 text-navy-800/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-gold-500">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="secondary" className="mt-8 w-full sm:w-auto">
                  Learn More
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-20">
        <Container className="space-y-8">
          {programmeDetails.map((programme, index) => (
            <article key={programme.title} className={`grid gap-8 rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-sm backdrop-blur sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500">{programme.eyebrow}</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">{programme.title}</h2>
                <p className="mt-5 text-sm leading-7 text-navy-800/75">{programme.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {programme.points.map((point) => (
                  <div key={point} className="rounded-2xl border border-navy-900/10 bg-ivory px-5 py-4 text-sm font-semibold leading-6 text-navy-800">
                    {point}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Hybrid learning model"
            title="Consistent group teaching with targeted one-to-one support."
            description="QUANTRA uses a hybrid academic model combining standard weekly group lessons with optional one-to-one support. Group lessons provide structure and consistency, while one-to-one sessions give students targeted help where they need it most."
            tone="dark"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-300">Group lessons</p>
              <h3 className="mt-4 font-serif text-2xl font-semibold">Structure and consistency</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">Weekly teaching keeps students accountable, supported, and engaged with a clear academic rhythm.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-300">One-to-one support</p>
              <h3 className="mt-4 font-serif text-2xl font-semibold">Targeted individual help</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">Optional sessions address specific gaps, difficult topics, and personal revision priorities.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="academic-pattern py-20">
        <Container>
          <div className="rounded-[2rem] border border-white/70 bg-white/75 p-8 text-center shadow-academic backdrop-blur sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500">Free academic assessment</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
              Find the Right Programme for Your Child
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-navy-800/75 sm:text-lg">
              Start with a free academic assessment and receive guidance on the most suitable learning pathway.
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
