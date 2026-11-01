import { Database, LayoutTemplate, Server, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = { layout: LayoutTemplate, server: Server, database: Database, wrench: Wrench };

export function Skills() {
  const [frontend, ...others] = skillCategories;
  const FrontIcon = icons[frontend.icon];

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
      <div className="container-x">
        <SectionHeading eyebrow="Skills" title="Technologies I Work With" description="The tools and technologies I use to build and ship web applications." />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="glass relative overflow-hidden rounded-3xl p-7 sm:p-9">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" aria-hidden />
            <div className="relative">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                <FrontIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-white">{frontend.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{frontend.blurb}</p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {frontend.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-xl border border-white/10 bg-ink-950/60 px-4 py-2.5 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-white"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {others.map((cat, i) => {
              const Icon = icons[cat.icon];
              return (
                <Reveal key={cat.name} delay={0.08 * (i + 1)} className="rounded-3xl border border-white/10 bg-white/[0.025] p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{cat.name}</h3>
                      <p className="text-xs text-slate-500">{cat.blurb}</p>
                    </div>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <li key={s} className="rounded-lg bg-white/[0.05] px-3 py-1.5 text-sm text-slate-300">
                        {s}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
