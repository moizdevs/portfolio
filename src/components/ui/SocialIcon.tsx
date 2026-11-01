import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "@/lib/socials";

const icons = { github: Github, linkedin: Linkedin, email: Mail };

export function SocialIcon({ link, className = "" }: { link: SocialLink; className?: string }) {
  const Icon = icons[link.kind];
  const external = !link.href.startsWith("mailto:");
  return (
    <a
      href={link.href}
      aria-label={link.label}
      title={link.label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-indigo-400/60 hover:text-white ${className}`}
    >
      <Icon className="h-[18px] w-[18px]" />
    </a>
  );
}
