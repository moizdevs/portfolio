"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { heroBadges } from "@/data/skills";
import { socialLinks } from "@/lib/socials";
import { Aurora } from "@/components/ui/Aurora";
import { Button } from "@/components/ui/Button";
import { Portrait } from "@/components/ui/Portrait";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { TextReveal } from "@/components/ui/Reveal";

const badgePositions = [
  "-left-4 top-10 sm:-left-10",
  "-right-3 top-24 sm:-right-10",
  "-left-2 bottom-24 sm:-left-12",
  "-right-2 bottom-8 sm:-right-8",
];

export function Hero() {
  const reduce = useReducedMotion();
  const portraitRef = useRef<HTMLDivElement>(null);

  // GSAP parallax on the portrait as the hero scrolls out.
  useEffect(() => {
    if (reduce || !portraitRef.current) return;
    let ctx: { revert: () => void } | undefined;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.to(portraitRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: 0.6 },
        });
      });
    })();
    return () => ctx?.revert();
  }, [reduce]);

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28">
      <Aurora />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" aria-hidden />
            <span className="text-xs font-medium text-emerald-200">{siteConfig.availability}</span>
          </motion.div>

          <p className="eyebrow mt-7">Software Engineer / Full-Stack Developer</p>

          <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
            <TextReveal text="Building Digital Experiences" delay={0.1} />
            <br />
            <TextReveal text="That Make an" delay={0.35} />{" "}
            <span className="text-gradient">
              <TextReveal text="Impact." delay={0.55} />
            </span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            I&apos;m Moiz Ur Rehman, a software engineer passionate about building modern, scalable, and user-friendly web
            applications. I enjoy turning complex problems into clean, functional digital experiences.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects">
              Explore My Work <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
            <Button href="#contact" variant="ghost">
              Let&apos;s Connect
            </Button>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <SocialIcon key={s.kind} link={s} />
              ))}
            </div>
            <span className="h-px w-8 bg-white/15" aria-hidden />
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5" /> Pakistan
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px]"
        >
          <div ref={portraitRef} className="relative">
            <div className="absolute -inset-3 rounded-[2.4rem] bg-gradient-to-br from-violet-500/40 via-indigo-500/10 to-blue-500/40 blur-2xl" aria-hidden />
            <Portrait priority className="aspect-[4/5] w-full" />
            {heroBadges.map((b, i) => (
              <span
                key={b}
                style={{ animationDelay: `${i * 0.9}s` }}
                className={`glass absolute animate-float rounded-full px-3.5 py-1.5 font-mono text-xs text-slate-100 shadow-xl ${badgePositions[i]}`}
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
