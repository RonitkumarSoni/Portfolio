import { SITE_SLUGS, DOMAIN_URL } from "@/config/siteConfig"
import {
  apihub,
  numble,
  slippyClone,
  dayflow
} from "@/app/data/project-data"
import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const flatSlugs = Object.values(SITE_SLUGS).flatMap((val) => (typeof val === "string" ? [val] : Object.values(val)))

  // Filter out routes that contain hash symbols (scroll links)
  const allRoutes = flatSlugs.filter((route) => typeof route === "string" && !route.includes("#"))

  // Add project routes dynamically if possible, or keep the current list if specific
  const projectRoutes = [apihub, numble, slippyClone, dayflow].map(p => `/projects/${p.slug}`)

  const uniqueRoutes = Array.from(new Set([...allRoutes, ...projectRoutes]))

  return uniqueRoutes.map((url) => {
    const isHome = url === "/"
    const isProject = url.startsWith("/projects/")

    return {
      url: `${DOMAIN_URL}${url}`,
      lastModified: new Date().toISOString(),
      priority: isHome ? 1.0 : isProject ? 0.9 : 0.7,
      changeFrequency: isHome ? "daily" : isProject ? "weekly" : "monthly",
    }
  })
}
