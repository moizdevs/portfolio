import { siteConfig } from "@/data/site";

export type SocialLink = { label: string; href: string; kind: "github" | "linkedin" | "email" };

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.social.github, kind: "github" as const },
  { label: "LinkedIn", href: siteConfig.social.linkedin, kind: "linkedin" as const },
  { label: "Email", href: `mailto:${siteConfig.email}`, kind: "email" as const },
].filter((s) => Boolean(s.href));
