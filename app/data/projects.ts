import aiGameBotImg from "@/public/assets/ai-game-bot.png"
import homieCoffeeImg from "@/public/assets/homie-coffee.png"
import renteaseImg from "@/public/assets/rentease.png"
import canvaCloneImg from "@/public/assets/canva-clone.png"
import oceanDepthsImg from "@/public/assets/ocean-depths.png"
import spacexCloneImg from "@/public/assets/spacex-clone.png"
import usabilityHubImg from "@/public/assets/usability-hub-clone.png"
import proxgyCloneImg from "@/public/assets/proxgy-clone.png"
import newsAppImg from "@/public/assets/news-app.png"

export type Project = {
  id: string
  title: string
  alt: string
  description: string
  tech: string
  image: any
  liveUrl: string
  githubUrl: string
  type?: string
  color?: string
}

export const MAIN_PROJECTS: Project[] = [
  {
    id: "ai-game-bot",
    title: "AI Game Bot",
    alt: "AI Game Bot Project Preview",
    description: "A high-performance AI bot developed for a competitive Chain Reaction game hackathon, implementing winning strategies.",
    tech: "Python · AI · Algorithms",
    image: aiGameBotImg,
    liveUrl: "https://github.com/RonitkumarSoni/Ai-Game-bot-hackathone",
    githubUrl: "https://github.com/RonitkumarSoni/Ai-Game-bot-hackathone",
    type: "Python / AI Hackathon",
    color: "#3B06D1",
  },
  {
    id: "homie-coffee",
    title: "Homie Coffee",
    alt: "Homie Coffee E-commerce Preview",
    description: "A modern e-commerce platform for a coffee brand, featuring product catalogs, cart management, and a clean UI.",
    tech: "React · Tailwind · Vercel",
    image: homieCoffeeImg,
    liveUrl: "https://homie-coffeeee.vercel.app/",
    githubUrl: "https://github.com/RonitkumarSoni/Homie-coffee",
    type: "E-commerce / React",
    color: "#024EFC",
  },
  {
    id: "rentease",
    title: "RentEase",
    alt: "RentEase Real Estate Platform Preview",
    description: "A comprehensive real-time property rental platform built with the MERN stack, offering interactive listings and search.",
    tech: "MERN Stack · React · Node.js",
    image: renteaseImg,
    liveUrl: "https://rentease-lemon.vercel.app",
    githubUrl: "https://github.com/RonitkumarSoni/rentease",
    type: "Real Estate / MERN",
    color: "#13739C",
  },
  {
    id: "canva-clone",
    title: "Canva Clone",
    alt: "Canva Clone Frontend Preview",
    description: "A sophisticated frontend recreation of the Canva landing page, showcasing advanced CSS layouts and responsiveness.",
    tech: "Frontend · CSS · Layouts",
    image: canvaCloneImg,
    liveUrl: "https://ronit-canva-clone.netlify.app/",
    githubUrl: "https://github.com/RonitkumarSoni/Canva_Clone",
    type: "UI Clone / Frontend",
    color: "#FF5733",
  },
]

export const EXTRA_PROJECTS: Project[] = [
  {
    id: "ocean-depths",
    title: "Ocean Depths",
    alt: "Ocean Depths Interactive Storytelling Preview",
    description: "Interactive storytelling & ocean dive experience with scroll animations.",
    tech: "React · GSAP · Framer Motion",
    image: oceanDepthsImg,
    liveUrl: "https://ocean-depths-rust.vercel.app",
    githubUrl: "https://github.com/RonitkumarSoni/Ocean-Depths",
  },
  {
    id: "spacex-clone",
    title: "SpaceX Clone",
    alt: "SpaceX Landing Page Clone Preview",
    description: "Responsive SpaceX landing page clone with high visual accuracy.",
    tech: "HTML · CSS",
    image: spacexCloneImg,
    liveUrl: "https://spacex-frontend-project.netlify.app/",
    githubUrl: "https://github.com/RonitkumarSoni/SpaceX-Clone",
  },
  {
    id: "usability-hub-clone",
    title: "Usability Hub Clone",
    alt: "Usability Hub Frontend Clone Preview",
    description: "Pixel-perfect frontend clone with Flexbox and CSS Variables.",
    tech: "HTML5 · CSS3",
    image: usabilityHubImg,
    liveUrl: "https://usabilityhub-clone-frontend.netlify.app/",
    githubUrl: "https://github.com/RonitkumarSoni/Usability-Hub-Clone",
  },
  {
    id: "proxgy-clone",
    title: "Proxgy Clone",
    alt: "Proxgy Website Clone Preview",
    description: "Responsive front-end project recreating a modern tech website.",
    tech: "HTML5 · CSS3",
    image: proxgyCloneImg,
    liveUrl: "https://proxy-website-clone.netlify.app/",
    githubUrl: "https://github.com/RonitkumarSoni/Proxgy-Clone",
  },
  {
    id: "news-app",
    title: "News App",
    alt: "News Aggregator App Preview",
    description: "News aggregator web app with category filters and live data.",
    tech: "JavaScript · CSS · API",
    image: newsAppImg,
    liveUrl: "https://news-app-omega-indol.vercel.app",
    githubUrl: "https://github.com/RonitkumarSoni/News-App",
  },
]

export const ALL_PROJECTS = [...MAIN_PROJECTS, ...EXTRA_PROJECTS]
