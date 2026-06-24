import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export type TimelineStep = {
  title: string;
  description?: string;
};

type ProcessTimelineProps = {
  eyebrow?: string;
  title: string;
  description: string;
  steps: TimelineStep[];
  background?: "ivory" | "white" | "navy";
};

const backgroundClasses = {
  ivory: "bg-ivory text-navy-950",
  white: "bg-white text-navy-950",
  navy: "bg-navy-950 text-white",
};

export function ProcessTimeline({ eyebrow = "Student Journey", title, description, steps, background = "ivory" }: ProcessTimelineProps) {
  const isDark = background === "navy";

  return (
    <section className={`${backgroundClasses[background]} py-20`}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" tone={isDark ? "dark" : "light"} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className={`${isDark ? "border-white/10 bg-white/5" : "border-navy-900/10 bg-white"} rounded-3xl border p-7 shadow-sm`}>
              <p className={`text-xs font-bold uppercase tracking-[0.28em] ${isDark ? "text-gold-300" : "text-gold-500"}`}>
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-semibold">{step.title}</h3>
              {step.description ? <p className={`${isDark ? "text-white/70" : "text-navy-800/75"} mt-4 text-sm leading-7`}>{step.description}</p> : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
