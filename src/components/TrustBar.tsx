import { Container } from "@/components/Container";
import { trustIndicators } from "@/content/home";

type TrustBarProps = {
  indicators?: string[];
  tone?: "light" | "dark";
};

export function TrustBar({ indicators = trustIndicators, tone = "dark" }: TrustBarProps) {
  const isDark = tone === "dark";

  return (
    <section className={`${isDark ? "border-y border-navy-900/10 bg-navy-950 text-white" : "bg-ivory text-navy-950"} py-5`}>
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-between">
          {indicators.map((indicator) => (
            <div
              key={indicator}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] ${
                isDark
                  ? "border border-white/10 bg-white/5 text-white/80"
                  : "border border-navy-900/10 bg-white/70 text-navy-800"
              }`}
            >
              {indicator}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
