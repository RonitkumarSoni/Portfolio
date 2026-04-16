import React from "react"
import { WorkHero } from "./WorkHero"
import { ProjectsStatic } from "./ProjectsStatic"
import { RecruiterContact } from "@/app/components/RecruiterContact"
import { Metadata } from "next"
import { SITE_SLUGS, DOMAIN_URL } from "@/config/siteConfig"
import { projectsGraph } from "@/config/schemas"

export const metadata: Metadata = {
  title: "Featured Projects | Ronit Soni",
  description: "Explore featured engineering projects by Ronit Soni, specializing in Next.js, AI integration, and scalable web solutions.",
  alternates: {
    canonical: `${DOMAIN_URL}/projects`,
  },
}
const page = () => {
  return (
    <main className="relative z-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsGraph),
        }}
      />
      <WorkHero />
      <ProjectsStatic />
      <RecruiterContact />
    </main>
  )
}

export default page
