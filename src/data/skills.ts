import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    blurb: "Interfaces I build day to day.",
    icon: "layout",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Material UI"],
  },
  {
    name: "Backend",
    blurb: "Server-side logic and APIs.",
    icon: "server",
    skills: ["Node.js", "Express.js", "Python", "Django"],
  },
  {
    name: "Database",
    blurb: "Storing and querying data.",
    icon: "database",
    skills: ["MongoDB", "MySQL", "SQLite"],
  },
  {
    name: "Tools",
    blurb: "Workflow and tooling.",
    icon: "wrench",
    skills: ["Git", "GitHub", "Playwright", "Postman", "VS Code"],
  },
];

/** Used for the floating hero badges. */
export const heroBadges = ["React", "Next.js", "TypeScript", "Node.js"];
