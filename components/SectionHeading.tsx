import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-bronze">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">{title}</h2>
      <div
        className={`mt-6 h-px w-16 bg-bronze/60 ${align === "center" ? "mx-auto" : ""}`}
      />
      {description && (
        <p className="mt-6 text-base leading-relaxed text-taupe-dark">
          {description}
        </p>
      )}
    </Reveal>
  );
}
