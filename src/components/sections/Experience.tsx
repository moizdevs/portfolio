"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const reduce = useReducedMotion();
  const lineRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLOListElement>(null);

  // GSAP: draw the timeline line as the section scrolls into view.
  useEffect(() => {
    if (reduce || !lineRef.current || !wrapRef.current) return;
    let ctx: { revert: () => void } | undefined;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: { trigger: wrapRef.current, start: "top 75%", end: "bottom 60%", scrub: 0.5 },
          },
        );
      });
    })();
    return () => ctx?.revert();
  }, [reduce]);

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Experience" title="Where I've Worked" description="Hands-on experience in a product-based software environment." />

        <ol ref={wrapRef} className="relative mt-14 space-y-10 pl-8 sm:pl-12">
          <div className="absolute bottom-2 left-[11px] top-2 w-px bg-white/10 sm:left-[15px]" aria-hidden />
          <div
            ref={lineRef}
            className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-violet-400 via-indigo-400 to-blue-400 sm:left-[15px]"
            aria-hidden
          />
          {experience.map((item) => (
            <Reveal as="li" key={item.company + item.period} className="relative">
              <span className="absolute -left-8 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-indigo-400/60 bg-ink-950 sm:-left-12 sm:h-8 sm:w-8">
                <Briefcase className="h-3 w-3 text-indigo-300 sm:h-4 sm:w-4" />
              </span>
              <article className="glass rounded-3xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{item.role}</h3>
                    <p className="mt-1 text-indigo-300">{item.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-slate-300">{item.period}</p>
                    <p className="mt-2 text-xs text-slate-500">{item.type}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <span key={s} className="rounded-full bg-indigo-500/10 px-3 py-1 font-mono text-xs text-indigo-200">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
