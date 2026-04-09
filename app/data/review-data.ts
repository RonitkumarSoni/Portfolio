export type ReviewProps = {
  quote: React.ReactNode
  name: string
  title: string
  img: any
}

export const REVIEW_MAP: Record<string, ReviewProps> = {
  bespoke: {
    quote: "A game changer for finding the right API for my hackathon projects quickly.",
    name: "Beta Tester",
    title: "Full Stack Dev",
    img: "",
  },
  automedics: {
    quote: "Incredible attention to detail and optimization.",
    name: "Anonymous User",
    title: "Developer",
    img: "",
  },
  iao: {
    quote: "Robust solutions tailored perfectly.",
    name: "Client",
    title: "Manager",
    img: "",
  },
}
