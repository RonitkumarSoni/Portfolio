import type { MetadataRoute } from "next"
import { DOMAIN_URL } from "@/config/siteConfig"

export const dynamic = "force-static"
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${DOMAIN_URL}/sitemap.xml`,
  }
}
