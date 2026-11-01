import { CalendarDays, GraduationCap } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  const { education } = siteConfig;
  return (
    <section id="education" className="relative pb-24 sm:pb-32">
      <div className="container-x">
        <SectionHeading eyebrow="Education" title="Academic Background" />
        <Reveal className="mt-10">
          <article className="glass flex flex-col gap-6 rounded-3xl p-7 sm:flex-row sm:items-center sm:p-9">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-blue-500/30 text-white">
              <GraduationCap className="h-8 w-8" />
            </span>
            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{education.degree}</h3>
              <p className="mt-1 text-indigo-300">{education.school}</p>
            </div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
              <CalendarDays className="h-4 w-4 text-slate-500" /> Graduated {education.graduation}
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
