"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/types";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { ProjectMedia } from "@/components/ui/ProjectMedia";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const repoHref = project?.repo ?? siteConfig.social.github;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink-950/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-900 sm:rounded-3xl"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close details"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/80 text-white backdrop-blur"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative aspect-[16/9] w-full">
              <ProjectMedia project={project} sizes="(max-width: 768px) 100vw, 672px" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="eyebrow">{project.tagline}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
              <p className="mt-4 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="rounded-full bg-indigo-500/10 px-3 py-1 font-mono text-xs text-indigo-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.live && (
                  <Button href={project.live} external>
                    <ExternalLink className="h-4 w-4" /> Live Preview
                  </Button>
                )}
                <Button href={repoHref} external variant="ghost">
                  <Github className="h-4 w-4" /> {project.repo ? "Source Code" : "GitHub Profile"}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
