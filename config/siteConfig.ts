export const DOMAIN_URL = "https://github.com/RonitkumarSoni"

export const SITE_CONFIG = {
  title: "Ronit Soni | Full Stack Developer (MERN + AI)",
  description: "Ronit Soni is a Full Stack Developer specializing in the MERN stack, React.js, and AI/LLM development. Explore my portfolio of web projects and open source work.",
  url: DOMAIN_URL,
  siteName: "Ronit Soni",
  keywords: [
    "Ronit Soni",
    "RonitkumarSoni",
    "Ronit Soni Portfolio",
    "Ronit Soni Developer",
    "Full-Stack Developer Gujarat",
    "MERN Stack Developer",
    "JavaScript Developer",
    "React.js Specialist",
    "Cybersecurity Enthusiast",
    "Open Source Contributor",
    "Software Engineer India",
    "Frontend Engineer",
    "developer",
    "portfolio",
    "Backend Developer",
    "Full-Stack Developer",
    "Web Developer",
    "AI Developer",
    "LLM"
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
  googleBusinessType: "LocalBusiness" as const,
  contact: "Ronit Soni",
  contactTitle: "Full Stack Developer",
  email: "ronitkumarsoni.cg@gmail.com",
  phone: "", 
  formattedPhone: "",
  addressLink: "", 
  street: "",
  city: "Kalol",
  state: "Gujarat", 
  zipCode: "",
  openingHours: [{ days: "Mon - Sat", hours: "9am - 6pm" }] as const,
  googleReviewLink: "",
  profiles: {
    linkedIn: "https://www.linkedin.com/in/ronit-sonii/",
    yelp: "",
    pinterest: "",
    gbp: "",
    github: "https://github.com/RonitkumarSoni",
    leetcode: "https://leetcode.com/u/ronitkumarsoni/",
  } as const,
  logo: "https://avatars.githubusercontent.com/u/224968961?v=4",
  favicon: "/favicon.svg",
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
