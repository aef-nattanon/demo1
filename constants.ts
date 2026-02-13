import { Experience, Project, Skill, SocialLink } from "./types";

export const PERSONAL_INFO = {
  name: "Nattanon",
  title: "Full Stack Developer & UI/UX Enthusiast",
  about: "I am a passionate software engineer dedicated to building scalable web applications and intuitive user experiences. With a strong foundation in modern frontend architectures and a knack for clean design, I transform complex requirements into seamless digital solutions.",
  email: "nattanon@example.com",
  location: "Bangkok, Thailand"
};

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "Docker", level: 75, category: "Tools" },
  { name: "Git / CI/CD", level: 85, category: "Tools" },
  { name: "Figma", level: 70, category: "Other" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "Tech Innovations Co.",
    period: "2021 - Present",
    description: "Leading the frontend team in rebuilding the core product dashboard using React and TypeScript. Improved performance by 40% and established a comprehensive design system."
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Digital Agency Solutions",
    period: "2019 - 2021",
    description: "Developed responsive websites for diverse clients ranging from e-commerce to corporate portfolios. Collaborated closely with designers to ensure pixel-perfect implementation."
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "Startup Inc.",
    period: "2018 - 2019",
    description: "Assisted in the development of a mobile-first web application. Maintained legacy codebases and implemented new features using Vue.js."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers providing real-time sales data and inventory management.",
    tags: ["React", "Chart.js", "Tailwind", "Node.js"],
    link: "#",
    github: "https://github.com/aef-nattanon",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "Task Master AI",
    description: "An AI-powered task management application that automatically prioritizes your todo list based on deadlines and complexity.",
    tags: ["Next.js", "OpenAI API", "PostgreSQL"],
    link: "#",
    github: "https://github.com/aef-nattanon",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "Travel Buddy",
    description: "Social platform for travelers to share itineraries and find companions for their trips.",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
    github: "https://github.com/aef-nattanon",
    image: "https://picsum.photos/600/400?random=3"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/aef-nattanon", icon: "github" },
  { platform: "LinkedIn", url: "#", icon: "linkedin" },
  { platform: "Twitter", url: "#", icon: "twitter" },
];
