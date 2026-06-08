import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const highlights = [
  "Small group GCSE and IGCSE classes",
  "Mathematics and Physics foundations",
  "Mock exam and intensive revision support",
];

const pillars = [
  {
    title: "Academic rigour",
    description: "Oxford and Cambridge-inspired standards, clear teaching, and disciplined preparation.",
  },
  {
    title: "International focus",
    description: "Designed for English-language learners and families across the UAE, Qatar, and Saudi Arabia.",
  },
  {
    title: "Prep-Test advantage",
    description: "Students will use Prep-Test.com to strengthen practice, feedback, and exam readiness.",
  },
];

export default function Home() {
  return (
    <>
      <section className="academic-pattern relative overflow-hidden">
        <Container className="grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-gold-500">
              UK-based online GCSE & IGCSE preparation
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">
              Premium academic preparation for ambitious international students.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-navy-800/80">
              QUANTRA Education supports parents and students with elegant, structured online learning in English, beginning with Mathematics and Physics.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Book a Free Assessment</Button>
              <Button href="/programmes" variant="secondary">
                Explore Programmes
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-academic backdrop-blur">
            <div className="rounded-[1.5rem] border border-gold-400/30 bg-navy-950 p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-300">Foundation offer</p>
              <h2 className="mt-5 font-serif text-3xl font-semibold">One free demo group lesson</h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                A placeholder homepage section for QUANTRA&apos;s launch offer, academic assessment, and early programme pathways.
              </p>
              <div className="mt-8 grid gap-4">
                {highlights.map((highlight) => (
                  <div key={highlight} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Why QUANTRA"
            title="A refined learning foundation for GCSE and IGCSE success."
            description="This starter website establishes the brand direction and reusable structure before full page content is developed."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-3xl border border-navy-900/10 bg-ivory p-8 shadow-sm">
                <div className="mb-6 h-1 w-14 rounded-full bg-gold-400" />
                <h3 className="font-serif text-2xl font-semibold text-navy-950">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-navy-800/75">{pillar.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
