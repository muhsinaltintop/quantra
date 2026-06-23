import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const initialSubjects = [
  {
    title: "GCSE Mathematics",
    description:
      "Structured support for students building secure mathematical knowledge, fluency, and confidence across the GCSE course.",
    focus:
      "Algebra, number, geometry, statistics, problem solving, calculator strategy, and timed exam-question practice.",
    href: "/subjects/gcse-mathematics",
  },
  {
    title: "IGCSE Mathematics",
    description:
      "Focused preparation for international learners who need clear topic coverage and careful practice aligned with IGCSE expectations.",
    focus:
      "Core and extended topic mastery, multi-step problem solving, syllabus review, and paper-specific exam technique.",
    href: "/subjects/igcse-mathematics",
  },
  {
    title: "GCSE Physics",
    description:
      "Academic guidance that helps students connect physics concepts, equations, practical skills, and written explanations.",
    focus:
      "Forces, energy, electricity, waves, particles, required practical understanding, calculations, and exam-style responses.",
    href: "/subjects/gcse-physics",
  },
  {
    title: "IGCSE Physics",
    description:
      "Cambridge-focused physics preparation for students who need precise concept teaching and confident exam application.",
    focus:
      "Syllabus-led topic coverage, scientific vocabulary, equation practice, data interpretation, and structured paper preparation.",
    href: "/subjects/igcse-physics",
  },
];

const futureSubjects = [
  "Chemistry",
  "Biology",
  "English Language",
  "English Literature",
  "Economics",
  "Business Studies",
  "Computer Science",
];

const supportPillars = [
  {
    title: "Diagnostic assessment",
    description:
      "Students begin with a clear academic review so strengths, gaps, confidence levels, and target grades are understood before teaching begins.",
  },
  {
    title: "Topic-by-topic planning",
    description:
      "Learning is organised around a purposeful plan that prioritises essential syllabus areas and gives each student a clear route forward.",
  },
  {
    title: "Exam-style practice",
    description:
      "Students regularly apply knowledge through carefully selected questions, timed tasks, and teacher feedback focused on mark improvement.",
  },
  {
    title: "Progress tracking",
    description:
      "Parents and students receive structured insight into academic progress, completed topics, next priorities, and exam readiness.",
  },
];

export default function SubjectsPage() {
  return (
    <>
      <section className="academic-pattern relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        <Container className="py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-gold-500">
              QUANTRA Subjects
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.04] tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">
              GCSE &amp; IGCSE Subjects We Support
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-navy-800/80">
              Focused academic preparation in core subjects, starting with Mathematics and Physics, with more GCSE and IGCSE subjects planned as QUANTRA grows.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Book a Free Assessment</Button>
              <Button href="#initial-subject-focus" variant="secondary">
                Explore Subjects
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="initial-subject-focus" className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Initial Subject Focus"
            title="Specialist support in Mathematics and Physics."
            description="QUANTRA begins with high-impact academic subjects where expert explanation, structured practice, and exam technique can make a measurable difference."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {initialSubjects.map((subject) => (
              <article key={subject.title} className="flex h-full flex-col rounded-3xl border border-navy-900/10 bg-ivory p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-academic">
                <div className="mb-6 h-1 w-16 rounded-full bg-gold-400" />
                <h2 className="font-serif text-2xl font-semibold text-navy-950">{subject.title}</h2>
                <p className="mt-4 text-sm leading-7 text-navy-800/75">{subject.description}</p>
                <div className="mt-6 rounded-2xl bg-white px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-500">Exam preparation focus</p>
                  <p className="mt-3 text-sm leading-7 text-navy-800/75">{subject.focus}</p>
                </div>
                <Button href={subject.href} variant="secondary" className="mt-8 w-full sm:w-auto">
                  View Subject
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Future Subjects"
            title="A broader GCSE and IGCSE offering is being built over time."
            description="QUANTRA is building a broader GCSE and IGCSE subject offering over time, expanding carefully as specialist teachers and academic resources are developed."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {futureSubjects.map((subject) => (
              <div key={subject} className="rounded-2xl border border-white/70 bg-white/75 px-5 py-4 text-sm font-semibold text-navy-800 shadow-sm backdrop-blur">
                {subject}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <Container>
          <SectionHeading
            eyebrow="Subject Support Approach"
            title="A clear academic pathway from assessment to exam readiness."
            description="Every subject pathway is designed to help families understand where a student is now, what needs to improve, and how preparation will be structured."
            align="center"
            tone="dark"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {supportPillars.map((pillar, index) => (
              <article key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-300/15 text-sm font-bold text-gold-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="font-serif text-2xl font-semibold">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/70">{pillar.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Cambridge Curriculum Focus"
            title="Cambridge GCSE and IGCSE preparation with syllabus clarity."
            description="QUANTRA initially focuses on Cambridge GCSE and IGCSE preparation, helping students understand syllabus expectations, topic coverage, and exam technique."
          />
          <div className="rounded-[2rem] border border-navy-900/10 bg-ivory p-8 shadow-sm sm:p-10">
            <p className="text-sm leading-7 text-navy-800/75">
              Lessons are planned to connect knowledge, application, and assessment. Students are guided through what each topic requires, how marks are awarded, and how to communicate answers with the precision expected in Cambridge-style examinations.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Syllabus expectations", "Topic coverage", "Exam technique"].map((item) => (
                <div key={item} className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-navy-800">
                  {item}
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
              Not sure which subject support your child needs?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-navy-800/75 sm:text-lg">
              Begin with a clear academic assessment and receive parent-friendly guidance on the most suitable next step.
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
