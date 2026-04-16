export const DOMAIN_URL = "https://ronitsoni.vercel.app"

export const SITE_CONFIG = {
  title: "Ronit Soni | Senior Full Stack Developer & AI Specialist",
  description: "Senior Full Stack Developer specializing in Next.js, AI/LLM integration, and modern web architectures. Explore Ronit Soni's portfolio for premium UI/UX and scalable solutions.",
  url: DOMAIN_URL,
  siteName: "Ronit Soni",
  keywords: [
    "Ronit Soni",
    "RonitkumarSoni",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js Expert",
    "AI Engineer",
    "Software Engineer India",
    "React.js Specialist",
    "Web Developer Gujarat",
  ],
  ogImage: "https://avatars.githubusercontent.com/u/224968961?v=4",
  ogImageAlt: "Ronit Soni - Full Stack Developer Portfolio",
  logo: "https://avatars.githubusercontent.com/u/224968961?v=4",
  authors: [{ name: "Ronit Soni", url: DOMAIN_URL }],
  creator: "Ronit Soni",
  publisher: "Ronit Soni",
} as const

export const SITE_NAP = {
  name: "Ronit Soni",
  googleBusinessType: "ProfessionalService" as const,
  contact: "Ronit Soni",
  contactTitle: "Full Stack Developer",
  email: "ronitkumarsoni.cg@gmail.com",
  phone: "", 
  formattedPhone: "",
  addressLink: "", 
  street: "",
  city: "Kalol",
  state: "Gujarat", 
  zipCode: "382721",
  openingHours: [{ days: "Mon - Sat", hours: "9am - 8pm" }] as const,
  googleReviewLink: "",
  profiles: {
    linkedIn: "https://www.linkedin.com/in/ronit-sonii/",
    github: "https://github.com/RonitkumarSoni",
    leetcode: "https://leetcode.com/u/ronitkumarsoni/",
    twitter: "https://x.com/RonitXSoni",
  } as const,
  logo: "https://avatars.githubusercontent.com/u/224968961?v=4",
  favicon: "/favicon.ico",
  images: ["https://avatars.githubusercontent.com/u/224968961?v=4"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about",
  projectLinks: {
    automedics: "/projects/automedics",
    bespoke: "/projects/bespoke",
    iao: "/projects/iron-and-oak",
    hrms: "/projects/hrms",
    codingProfiles: "/coding-profiles",
  },
} as const

export const externalLinks = {
  vetsChoice: "https://vetschoiceinsurance.com/",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
