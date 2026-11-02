import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Moiz Ur Rehman",
  brand: "Code with Moiz",
  title: "Moiz Ur Rehman | Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Moiz Ur Rehman, a software engineer building modern, scalable and user-friendly web applications with React, Next.js, Node.js and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://codewithmoiz.vercel.app",
  email: "moizurrehman01@gmail.com",
  /** Add your real profile URLs here. Empty values are hidden automatically. */
  social: {
    github: "https://github.com/moizdevs", // TODO: verify this is your GitHub username
    linkedin: "https://www.linkedin.com/in/moiz-rehman-79383942a/", // TODO: paste your LinkedIn profile URL
  },
  /** Drop your CV at public/cv/CV-Moiz.pdf (a placeholder is included). */
  cvPath: "/cv/CV-Moiz.pdf",
  /** Optional portrait: put a photo at public/images/portrait.jpg and set this to "/images/portrait.jpg". */
  portrait: "/images/projects/profilepic.png",
  availability: "Open to new opportunities",
  education: {
    degree: "BS Software Engineering",
    school: "Riphah International University",
    graduation: "January 2026",
  },
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
