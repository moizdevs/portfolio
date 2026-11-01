import { Download, GraduationCap, Database, Bot, Layers } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Portrait } from "@/components/ui/Portrait";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  { icon: Layers, title: "Full-stack focus", text: "Modern JavaScript web applications, front to back." },
  { icon: Database, title: "Data & databases", text: "Hands-on experience with MySQL in an industry setting." },
  { icon: Bot, title: "Web scraping", text: "Built scraping solutions using Playwright." },
];

export function About() {
  const { education } = siteConfig;
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
          <div className="relative">
            <Portrait className="aspect-[4/5] w-full" />
            <div className="glass absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl sm:-right-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-white">{education.degree}</p>
                <p className="text-xs text-slate-400">Graduated {education.graduation}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="About" title="A Little About Me" />
          <Reveal delay={0.1} className="mt-6 space-y-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            <p>
              I&apos;m a Software Engineering graduate from Riphah International University with a passion for full-stack web
              development.
            </p>
            <p>
              My primary focus is building web applications using modern JavaScript technologies. I&apos;ve also gained
              practical industry experience working with databases, web scraping, and frontend development.
            </p>
            <p>
              I enjoy learning new technologies, improving my problem-solving abilities, and developing applications that
              solve real-world problems.
            </p>
          </Reveal>

          <ul className="mt-9 grid gap-3 sm:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal as="li" key={h.title} delay={0.15 + i * 0.08} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <h.icon className="h-5 w-5 text-indigo-300" />
                <p className="mt-3 text-sm font-medium text-white">{h.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{h.text}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.3} className="mt-9">
            <Button href={siteConfig.cvPath} download variant="ghost">
              <Download className="h-4 w-4" /> Download CV
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
