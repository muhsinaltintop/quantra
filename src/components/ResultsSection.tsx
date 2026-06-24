import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { resultMetrics } from "@/content/home";

type ResultsSectionProps = {
  background?: "white" | "parchment";
};

export function ResultsSection({ background = "parchment" }: ResultsSectionProps) {
  return (
    <section className={`${background === "parchment" ? "bg-parchment" : "bg-white"} py-20`}>
      <Container>
        <SectionHeading
          eyebrow="Success metrics"
          title="Clear preparation signals for a launch-ready academic pathway."
          description="A concise overview of the structured support available from assessment through to exam-focused preparation."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resultMetrics.map((metric) => (
            <article key={metric.label} className="rounded-3xl border border-white/70 bg-white/80 p-7 text-center shadow-sm backdrop-blur">
              <p className="font-serif text-4xl font-semibold text-navy-950">{metric.value}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-gold-500">{metric.label}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
