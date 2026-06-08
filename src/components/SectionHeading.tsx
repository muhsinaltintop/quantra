type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-navy-800/80 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
