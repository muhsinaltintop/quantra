import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const topicAreas = [
  "Number",
  "Algebra",
  "Geometry",
  "Mensuration",
  "Trigonometry",
  "Graphs",
  "Probability",
  "Statistics",
  "Problem solving",
  "Exam technique",
];

const cambridgeSupport = [
  "Syllabus-based preparation",
  "Topic coverage aligned with exam expectations",
  "Past-paper style practice",
  "Feedback on common mistakes",
  "Guidance on calculator and non-calculator problem solving where relevant",
];

const learningFormats = [
  "Small group online classes",
  "Intensive revision courses",
  "Mock exam preparation",
  "Optional one-to-one support",
];

const parentReasons = [
  {
    title: "UK-Based Academic Standards",
    description:
      "Teaching is planned with the precision, clarity, and academic expectations associated with high-quality British curriculum preparation.",
  },
  {
    title: "Cambridge Examiner Insight",
    description:
      "Students are guided to understand how Cambridge-style questions are structured, where marks are commonly gained, and how to avoid avoidable errors.",
  },
  {
    title: "Structured Learning Pathway",
    description:
      "Preparation follows a clear sequence from topic foundations to exam-style application, helping families see how learning is being organised over time.",
  },
  {
    title: "Parent-Friendly Progress Updates",
    description:
      "Parents receive clear guidance on completed topics, current priorities, practice habits, and the next steps needed for confident preparation.",
  },
];

export default function IGCSEMathematicsPage() {
  return (
    <>
      <section className="academic-pattern relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        <Container className="grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-gold-500">
              IGCSE Mathematics
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.04] tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">
              IGCSE Mathematics Preparation
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-navy-800/80">
              Cambridge-focused IGCSE Mathematics tuition for students who need structured learning, exam-style practice, and clear academic guidance.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Book a Free Assessment</Button>
              <Button href="#international-students" variant="secondary">
                Explore the Programme
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-academic backdrop-blur">
            <div className="rounded-[1.5rem] border border-gold-400/30 bg-navy-950 p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-300">
                Cambridge-focused support
              </p>
              <h2 className="mt-5 font-serif text-3xl font-semibold">
                Structured tuition for international learners preparing with purpose.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                QUANTRA helps students build mathematical fluency, strengthen exam technique, and follow a clear preparation pathway without making guaranteed grade claims.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Syllabus-led", "Exam-style", "Parent-friendly", "Progress-aware"].map((highlight) => (
                  <div key={highlight} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="international-students" className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Designed for International Students"
            title="IGCSE Mathematics preparation for families navigating international education."
            description="The programme supports students preparing for IGCSE Mathematics within international and British curriculum schools, especially families in the UAE, Qatar, Saudi Arabia, and other international education markets. Lessons are delivered in clear English with structured academic guidance for both students and parents."
          />
          <div className="rounded-[2rem] border border-navy-900/10 bg-ivory p-8 shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold-500">
              International curriculum confidence
            </p>
            <p className="mt-5 text-base leading-8 text-navy-800/75">
              Students receive focused support that respects the demands of international school timetables, the expectations of Cambridge-style assessment, and the need for calm, consistent preparation at home.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["International schools", "British curriculum", "Cambridge IGCSE", "Family guidance"].map((item) => (
                <div key={item} className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-navy-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Cover"
            title="Comprehensive IGCSE Mathematics topic coverage with exam technique built in."
            description="Students work through the essential mathematical content and learn how to apply methods accurately in unfamiliar, multi-step, and exam-style questions."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {topicAreas.map((topic) => (
              <div key={topic} className="rounded-2xl border border-white/70 bg-white/75 px-5 py-5 text-sm font-semibold text-navy-800 shadow-sm backdrop-blur">
                {topic}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Cambridge-Focused Support"
            title="Preparation aligned with syllabus expectations and practical exam demands."
            description="Teaching is organised to help students understand what each topic requires, practise in an exam-aware way, and improve through precise feedback on mathematical working and common mistakes."
            tone="dark"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {cambridgeSupport.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold leading-6 text-white/85">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-navy-900/10 bg-ivory p-8 shadow-sm sm:p-10">
            <SectionHeading
              eyebrow="Learning Formats"
              title="Flexible routes for steady learning, revision, and mock exam preparation."
              description="Families can choose the preparation format that best matches the student’s timetable, confidence level, and stage of the IGCSE course."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {learningFormats.map((format) => (
                <div key={format} className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-navy-800">
                  {format}
                </div>
              ))}
            </div>
          </div>
          <SectionHeading
            eyebrow="Academic guidance"
            title="Clear support without unrealistic promises."
            description="QUANTRA focuses on careful diagnosis, structured teaching, consistent practice, and parent-friendly communication so students can prepare with greater confidence and direction."
          />
        </Container>
      </section>

      <section className="bg-parchment py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Parents Choose QUANTRA"
            title="Premium academic support designed for clarity, confidence, and accountability."
            description="Parents choose QUANTRA for a structured, transparent approach that helps international families understand both the learning journey and the next academic priorities."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {parentReasons.map((reason, index) => (
              <article key={reason.title} className="rounded-3xl border border-white/70 bg-white/75 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-academic">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15 text-sm font-bold text-gold-600">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="font-serif text-2xl font-semibold text-navy-950">{reason.title}</h2>
                <p className="mt-4 text-sm leading-7 text-navy-800/75">{reason.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="academic-pattern py-20">
        <Container>
          <div className="rounded-[2rem] border border-white/70 bg-white/75 p-8 text-center shadow-academic backdrop-blur sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500">Free academic assessment</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
              Prepare for IGCSE Mathematics with Confidence
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-navy-800/75 sm:text-lg">
              Begin with a clear academic assessment and receive practical guidance on the most suitable IGCSE Mathematics preparation pathway for your child.
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
