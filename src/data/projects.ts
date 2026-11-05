import type { Project } from "@/types";

/**
 * Add or edit projects here. To use a real screenshot, drop the image into
 * public/images/projects/ and set `image`, e.g. image: "/images/projects/chatnova.png".
 * To add a GitHub repo link, set `repo`.
 */
export const projects: Project[] = [
  {
    slug: "school-management-system",
    title: "School Management System",
    tagline: "Streamlined administration",
    description: "Comprehensive school management solution.",
    tags: ["Education", "Management", "Web App"],
    repo: "https://github.com/moizdevs/school-management-MERN-",
    image: "/images/projects/school management system.jpg",
    hue: 262,
    featured: true,
  },
  {
    slug: "chatnova",
    title: "ChatNova",
    tagline: "AI-powered chatbot",
    description: "AI-powered chatbot application.",
    tags: ["AI", "Chatbot", "Web App"],
    live: "https://chat-nova-rho.vercel.app/",
    repo: "https://github.com/moizdevs/ChatBot",
    image: "/images/projects/chatnova.jpg",
    hue: 262,
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
    image: "/images/projects/kristi-rho.jpg",
    hue: 190,
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
    image: "/images/projects/video-player.jpg",
    hue: 345,
    featured: true,
  },
  {
    slug: "music-player",
    title: "Music Player",
    tagline: "Spotify-inspired player",
    description: "Music player application inspired by Spotify.",
    tags: ["UI", "Audio"],
    repo: "https://github.com/moizdevs/Spotify-Clone-JS",
    image: "/images/projects/spotify-clone.jpg",
    hue: 150,
  },
  {
    slug: "funding-app",
    title: "Funding Application",
    tagline: "Payment integration",
    description: "Application featuring payment integration.",
    image: "/images/projects/get-me-chai.jpg",
    repo: "https://github.com/moizdevs/get-me-a-chai",
    tags: ["Payments", "Web App"],
    hue: 30,
  },
];
