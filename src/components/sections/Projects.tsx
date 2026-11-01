"use client";

import { useCallback, useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import type { Project } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { ProjectModal } from "./ProjectModal";

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-300">
          {t}
        </span>
      ))}
    </div>
  );
}

function LinkRow({ project, onDetails }: { project: Project; onDetails: () => void }) {
  const repoHref = project.repo ?? siteConfig.social.github;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 transition hover:bg-indigo-100"
        >
          <ExternalLink className="h-3.5 w-3.5" /> Live
        </a>
      )}
      <a
        href={repoHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} on GitHub`}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-indigo-400/60 hover:text-white"
      >
        <Github className="h-3.5 w-3.5" /> Code
      </a>
      <button
        type="button"
        onClick={onDetails}
        className="inline-flex items-center gap-1 px-2 py-2 text-sm text-indigo-300 transition hover:text-white"
      >
        View Details <ArrowUpRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
      <div className="container-x">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Projects"
          description="A collection of projects where I've explored ideas, solved problems, and built practical applications."
        />

        <div className="mt-14 space-y-8 sm:space-y-10">
          {featured.map((p, i) => (
            <Reveal key={p.slug}>
              <article className="group glass grid overflow-hidden rounded-[1.75rem] transition duration-500 hover:border-indigo-400/40 lg:grid-cols-[1.35fr_1fr]">
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  aria-label={`View details for ${p.title}`}
                  className={`relative block aspect-[16/10] overflow-hidden text-left lg:aspect-auto lg:min-h-[340px] ${i % 2 ? "lg:order-2" : ""}`}
                >
                  <ProjectMedia project={p} sizes="(max-width: 1024px) 100vw, 700px" />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                </button>
                <div className="flex flex-col justify-center gap-5 p-6 sm:p-9">
                  <span className="font-mono text-xs text-slate-500">0{i + 1} / Featured</span>
                  <div>
                    <p className="eyebrow">{p.tagline}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-400">{p.description}</p>
                  </div>
                  <Tags tags={p.tags} />
                  <LinkRow project={p} onDetails={() => setSelected(p)} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex items-center gap-4">
          <h3 className="font-display text-xl font-semibold text-white">More projects</h3>
          <span className="h-px flex-1 bg-white/10" aria-hidden />
        </Reveal>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition duration-500 hover:-translate-y-1 hover:border-indigo-400/40">
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  aria-label={`View details for ${p.title}`}
                  className="relative block aspect-[16/9] overflow-hidden"
                >
                  <ProjectMedia project={p} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px" />
                </button>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div>
                    <h4 className="font-display text-lg font-semibold text-white">{p.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{p.description}</p>
                  </div>
                  <Tags tags={p.tags} />
                  <div className="mt-auto pt-1">
                    <LinkRow project={p} onDetails={() => setSelected(p)} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
      <ProjectModal project={selected} onClose={close} />
    </section>
  );
}
