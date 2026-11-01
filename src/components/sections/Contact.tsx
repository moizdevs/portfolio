"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/lib/socials";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { Aurora } from "@/components/ui/Aurora";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Button } from "@/components/ui/Button";

type Status = { kind: "idle" } | { kind: "success" } | { kind: "error"; message: string };

const fieldCls =
  "w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition focus:border-indigo-400/70 focus:outline-none focus:ring-2 focus:ring-indigo-400/20";

function Field({ label, error, children, htmlFor }: { label: string; error?: string; children: React.ReactNode; htmlFor: string }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-slate-400">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema), defaultValues: { website: "" } });

  const onSubmit = async (data: ContactInput) => {
    setStatus({ kind: "idle" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus({ kind: "success" });
      reset();
    } catch (e) {
      setStatus({ kind: "error", message: e instanceof Error ? e.message : "Something went wrong." });
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <Aurora className="opacity-70" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Have a Project in Mind? <span className="text-gradient">Let&apos;s Talk.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400 sm:text-lg">
            I&apos;m always interested in discussing new projects, opportunities, and interesting ideas.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="glass mt-9 flex items-center gap-4 rounded-2xl p-4 transition hover:border-indigo-400/50"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
              <Mail className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs text-slate-500">Email</span>
              <span className="text-sm text-white sm:text-base">{siteConfig.email}</span>
            </span>
          </a>

          <div className="mt-6 flex items-center gap-2">
            {socialLinks
              .filter((s) => s.kind !== "email")
              .map((s) => (
                <SocialIcon key={s.kind} link={s} />
              ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="glass space-y-5 rounded-3xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" error={errors.name?.message}>
                <input id="name" autoComplete="name" placeholder="Your name" className={fieldCls} {...register("name")} />
              </Field>
              <Field label="Email" htmlFor="email" error={errors.email?.message}>
                <input id="email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldCls} {...register("email")} />
              </Field>
            </div>
            <Field label="Subject" htmlFor="subject" error={errors.subject?.message}>
              <input id="subject" placeholder="What's this about?" className={fieldCls} {...register("subject")} />
            </Field>
            <Field label="Message" htmlFor="message" error={errors.message?.message}>
              <textarea id="message" rows={5} placeholder="Tell me about your project or idea..." className={`${fieldCls} resize-none`} {...register("message")} />
            </Field>

            {/* Honeypot: hidden from users, bots fill it in. */}
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
              <label htmlFor="website">Website</label>
              <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </Button>

            <div aria-live="polite">
              <AnimatePresence mode="wait">
                {status.kind === "success" && (
                  <motion.p
                    key="ok"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm text-emerald-200"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> Thanks! Your message has been sent. I&apos;ll get back to you soon.
                  </motion.p>
                )}
                {status.kind === "error" && (
                  <motion.p
                    key="err"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-2 rounded-xl border border-rose-400/20 bg-rose-400/10 p-3 text-sm text-rose-200"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /> {status.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
