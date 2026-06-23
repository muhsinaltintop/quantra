type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isCentered = align === "center";
  const isDark = tone === "dark";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-bold uppercase tracking-[0.28em] ${isDark ? "text-gold-300" : "text-gold-500"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-serif text-3xl font-semibold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-navy-950"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 sm:text-lg ${isDark ? "text-white/72" : "text-navy-800/80"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
