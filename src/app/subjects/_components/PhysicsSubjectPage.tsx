import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

type DetailCard = {
  title: string;
  description: string;
};

type PhysicsSubjectPageProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  heroCard: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
  };
  audience: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  topics: {
    title: string;
    description: string;
    items: string[];
  };
  support: {
    eyebrow: string;
    title: string;
    description: string;
    cards: DetailCard[];
  };
  learningFormats: {
    title: string;
    description: string;
    items: string[];
  };
  outcomes: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  cta: {
    headline: string;
    description: string;
  };
};

export function PhysicsSubjectPage({
  eyebrow,
  headline,
  subheadline,
  heroCard,
  audience,
  topics,
  support,
  learningFormats,
  outcomes,
  cta,
}: PhysicsSubjectPageProps) {
  return (
    <>
      <section className="academic-pattern relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        <Container className="grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-gold-500">
              {eyebrow}
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.04] tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">
              {headline}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-navy-800/80">
              {subheadline}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Book a Free Assessment</Button>
              <Button href={`#${audience.id}`} variant="secondary">
                Explore the Programme
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-academic backdrop-blur">
            <div className="rounded-[1.5rem] border border-gold-400/30 bg-navy-950 p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-300">
                {heroCard.eyebrow}
              </p>
              <h2 className="mt-5 font-serif text-3xl font-semibold">{heroCard.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/72">{heroCard.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {heroCard.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id={audience.id} className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading eyebrow={audience.eyebrow} title={audience.title} description={audience.description} />
          <div className="grid gap-4 sm:grid-cols-2">
            {audience.points.map((item) => (
              <div key={item} className="rounded-2xl border border-navy-900/10 bg-ivory px-5 py-4 text-sm font-semibold leading-6 text-navy-800 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-20">
        <Container>
          <SectionHeading eyebrow="What We Cover" title={topics.title} description={topics.description} align="center" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.items.map((topic) => (
              <div key={topic} className="rounded-2xl border border-white/70 bg-white/75 px-5 py-5 text-sm font-semibold text-navy-800 shadow-sm backdrop-blur">
                {topic}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <Container>
          <SectionHeading eyebrow={support.eyebrow} title={support.title} description={support.description} align="center" tone="dark" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {support.cards.map((card, index) => (
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
            <SectionHeading eyebrow="Learning Formats" title={learningFormats.title} description={learningFormats.description} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {learningFormats.items.map((format) => (
                <div key={format} className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-navy-800">
                  {format}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-navy-900/10 bg-navy-950 p-8 text-white shadow-sm sm:p-10">
            <SectionHeading eyebrow={outcomes.eyebrow} title={outcomes.title} description={outcomes.description} tone="dark" />
            <div className="mt-8 grid gap-4">
              {outcomes.items.map((outcome) => (
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
              {cta.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-navy-800/75 sm:text-lg">
              {cta.description}
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
