import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const placeholderMetrics = [
  { value: "500+", label: "Students Supported" },
  { value: "15+", label: "Countries" },
  { value: "92%", label: "Parent Satisfaction" },
  { value: "4.8/5", label: "Average Rating" },
];

type ResultsSectionProps = {
  background?: "white" | "parchment";
};

export function ResultsSection({ background = "parchment" }: ResultsSectionProps) {
  return (
    <section className={`${background === "parchment" ? "bg-parchment" : "bg-white"} py-20`}>
      <Container>
        <SectionHeading
          eyebrow="Success metrics"
          title="Placeholder outcomes for the launch website."
          description="These figures are clearly marked as placeholders and should only be published after verification by the QUANTRA team."
          align="center"
        />
        {/* Replace with verified statistics before launch. */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {placeholderMetrics.map((metric) => (
            <article key={metric.label} className="rounded-3xl border border-white/70 bg-white/80 p-7 text-center shadow-sm backdrop-blur">
              <p className="font-serif text-4xl font-semibold text-navy-950">{metric.value}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-gold-500">{metric.label}</p>
              <p className="mt-4 text-xs leading-6 text-navy-800/60">Placeholder value — verify before launch.</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
