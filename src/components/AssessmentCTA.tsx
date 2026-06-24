import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

type AssessmentCTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  variant?: "light" | "dark";
};

export function AssessmentCTA({
  eyebrow = "Free academic assessment",
  title,
  description,
  href = "/free-assessment",
  ctaLabel = "Book a Free Assessment",
  variant = "light",
}: AssessmentCTAProps) {
  const isDark = variant === "dark";

  return (
    <section className={`${isDark ? "bg-parchment" : "academic-pattern"} py-20`}>
      <Container>
        <div className={`${isDark ? "bg-navy-950 text-white" : "border border-white/70 bg-white/75 text-center text-navy-950 backdrop-blur"} rounded-[2rem] p-8 shadow-academic sm:p-12 lg:p-16`}>
          <div className={`${isDark ? "grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center" : ""}`}>
            <div>
              <p className={`text-xs font-bold uppercase tracking-[0.28em] ${isDark ? "text-gold-300" : "text-gold-500"}`}>{eyebrow}</p>
              <h2 className={`${isDark ? "" : "mx-auto"} mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl`}>
                {title}
              </h2>
              <p className={`${isDark ? "text-white/72" : "mx-auto text-navy-800/75"} mt-5 max-w-2xl text-base leading-8 sm:text-lg`}>
                {description}
              </p>
            </div>
            <div className={isDark ? "" : "mt-8"}>
              <Button href={href} variant={isDark ? "secondary" : "primary"} className={isDark ? "bg-white text-navy-950 hover:bg-gold-300" : ""}>
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
