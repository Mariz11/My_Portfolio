import type { LucideIcon } from "lucide-react";
import { Brain, Monitor } from "lucide-react";

export const siteConfig = {
  name: "Mariz Gutib",
  title: "Software Developer",
  tagline: "Building fast, scalable web applications & digital experiences.",
  location: "Cebu-based",
  email: "https://mail.google.com/mail/u/0/#inbox",
  linkedin: "https://www.linkedin.com/in/mariz-gutib/",
  github: "https://github.com/yourusername",
} as const;

export const skills = [
  "JavaScript (ES6+)",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js / APIs",
  "Git & CI/CD",
] as const;

export type Project = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  icon: LucideIcon;
};

export const projects: Project[] = [
  {
    title: "Barangay Profiling and Nutritional Status",
    description:
      "Built a full-stack resident profiling system for Barangay Luz, replacing manual paper records with a searchable digital database. Enabled staff to track child nutritional status in real time, cutting reporting time from days to minutes.",
    image: "/barangay_luz.png",
    imageAlt: "Barangay Luz Web Application",
    demoUrl: "https://information-system-sand.vercel.app/",
    tags: ["Next.js", "React", "TailwindCSS", "REST API"],
    icon: Brain,
  },
  {
    title: "Live Auction System",
    description:
      "Designed and built a live auction platform from concept to pre-production for M Lhuillier Financial Services during my internship — the first system of its kind for the company. Owned the UI/UX from wireframe to working prototype.",
    imageAlt: "Live Auction System",
    demoUrl: "https://yourdemo.com",
    image: "/auction.jpg",
    tags: [
      "Node.js",
      "Express",
      "Next.js",
      "React",
      "TypeScript",
      "Socket.io",
      "Agora",
      "Docker",
      "Oracle Cloud",
      "UI/UX Design",
    ],
    icon: Monitor,
  },
  {
    title: "M. Lhuillier Quiz Master",
    description:
      "Built a secure assessment platform used company-wide for employee development, hiring, and promotion evaluations. Streamlined a previously manual evaluation process, giving management real-time visibility into applicant readiness.",
    image: "/quiz_master.png",
    imageAlt: "Quiz Master Web Application",
    demoUrl: "https://quail.mlhuillier.net/",
    tags: [
      "Node.js",
      "Express",
      "Next.js",
      "React",
      "TypeScript",
      "Socket.io",
      "Agora",
      "Docker",
      "Oracle Cloud",
    ],
    icon: Brain,
  },
  {
    title: "Kwarta Padala v10",
    description:
      "Modernized the UI and shipped new features for Kwarta Padala v10, improving usability for end users. Coordinated with cross-functional and outsourced teams to keep user account status in sync and ensure delivery met agreed criteria.",
    image: "/kwarta_padala.png",
    imageAlt: "Kwarta Padala v10 Web Application",
    demoUrl: "https://mlhuillier.com/kwarta-padala",
    tags: ["Node.js", "Express", "Next.js", "React", "TypeScript", "Docker"],
    icon: Monitor,
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  period: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Field Agent",
    company: "Hey, Let's Ride Website",
    location: "Negros Oriental",
    period: "July 2026",
  },
  {
    role: "Inventory Clerk",
    company: "E-Commerce Company",
    location: "Meycuayan, Bulacan",
    period: "May – July 2026",
  },
  {
    role: "Software Developer",
    company: "M Lhuillier Financial Services",
    period: "March 2025 – January 2026",
  },
  {
    role: "Software Developer Intern",
    company: "M Lhuillier Financial Services",
    period: "2024",
  },
  {
    role: "Computer Technology Graduate",
    company: "University of San Carlos",
    period: "2022 – 2025",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
