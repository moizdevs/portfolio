import type { Project } from "@/types";

/**
 * Add or edit projects here. To use a real screenshot, drop the image into
 * public/images/projects/ and set `image`, e.g. image: "/images/projects/chatnova.png".
 * To add a GitHub repo link, set `repo`.
 */
export const projects: Project[] = [
  {
    slug: "chatnova",
    title: "ChatNova",
    tagline: "AI-powered chatbot",
    description: "AI-powered chatbot application.",
    tags: ["AI", "Chatbot", "Web App"],
    live: "https://chat-nova-rho.vercel.app/",
    repo: "https://github.com/moizdevs/ChatBot",
    hue: 262,
    featured: true,
  },
  {
    slug: "video-player",
    title: "Video Player Application",
    tagline: "YouTube-inspired player",
    description: "A YouTube-inspired video browsing and playback interface.",
    tags: ["JavaScript", "UI", "Video"],
    live: "https://moizdevs.github.io/video-Player/",
    repo: "https://github.com/moizdevs/video-Player",
    hue: 345,
    featured: true,
  },
  {
    slug: "kristi",
    title: "Kristi E-commerce",
    tagline: "Elegant online store",
    description: "Modern e-commerce website with an elegant shopping experience.",
    tags: ["E-commerce", "Frontend"],
    live: "https://kristi-rho.vercel.app/",
    repo: "https://github.com/moizdevs/kristi",
    hue: 190,
    featured: true,
  },
  {
    slug: "twitter-clone",
    title: "Twitter Clone",
    tagline: "Social media interface",
    description: "Social media interface inspired by Twitter, built using Node.js technologies.",
    tags: ["Node.js", "Social"],
    live: "https://moizdevs.github.io/",
    hue: 210,
  },
  {
    slug: "dentist-ui",
    title: "Dentist Application UI",
    tagline: "Dental app frontend",
    description: "Frontend interface for a dental application.",
    tags: ["Frontend", "UI"],
    hue: 170,
  },
  {
    slug: "password-saver",
    title: "Password Saver",
    tagline: "Local password manager",
    description: "Password management application using browser local storage.",
    tags: ["JavaScript", "LocalStorage"],
    hue: 285,
  },
  {
    slug: "task-saver",
    title: "Task Saver",
    tagline: "Simple task manager",
    description: "Task management application built with React and local storage.",
    tags: ["React", "LocalStorage"],
    hue: 230,
  },
  {
    slug: "music-player",
    title: "Music Player",
    tagline: "Spotify-inspired player",
    description: "Music player application inspired by Spotify.",
    tags: ["UI", "Audio"],
    hue: 150,
  },
  {
    slug: "funding-app",
    title: "Funding Application",
    tagline: "Payment integration",
    description: "Application featuring payment integration.",
    tags: ["Payments", "Web App"],
    hue: 30,
  },
];
