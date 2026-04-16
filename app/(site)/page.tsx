import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectsSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { RecruiterContact } from "../components/RecruiterContact"
import { AchievementsSection } from "../components/AchievementsSection"
import { Metadata } from "next"
import { SITE_CONFIG, SITE_SLUGS, DOMAIN_URL } from "@/config/siteConfig"
import { homeGraph } from "@/config/schemas"
import Script from "next/script"
import { DynamicSectionTitle } from "../components/DynamicSectionTitle"

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  alternates: {
    canonical: DOMAIN_URL,
  },
}

const PortfolioPage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <Script
        id="id-site-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeGraph),
        }}
      />
      <HeroV2 />
      <div className="border-b border-gray-200 dark:border-white/5" />
      <ProjectsSection />
      <AchievementsSection />
      <AboutSectionV2 />
      <ServicesSectionV2 />
      <RecruiterContact />
      <DynamicSectionTitle />
      {/* <FAQSection /> */}
    </main>
  )
}
export default PortfolioPage
