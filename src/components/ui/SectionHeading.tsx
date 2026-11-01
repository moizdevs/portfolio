import { Reveal } from "./Reveal";

type Props = { eyebrow: string; title: string; description?: string; align?: "left" | "center" };

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>}
    </Reveal>
  );
}
