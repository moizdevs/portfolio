export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  /** Live preview URL. Leave undefined if there is none. */
  live?: string;
  /** GitHub repository URL. Falls back to the GitHub profile when undefined. */
  repo?: string;
  /** Screenshot path inside /public (e.g. /images/projects/chatnova.png). Placeholder art is used when undefined. */
  image?: string;
  /** Accent hue (0-360) used for generated placeholder art. */
  hue: number;
  featured?: boolean;
};

export type SkillCategory = {
  name: string;
  blurb: string;
  icon: "layout" | "server" | "database" | "wrench";
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  type: string;
  points: string[];
  stack: string[];
};

export type NavItem = { id: string; label: string };
