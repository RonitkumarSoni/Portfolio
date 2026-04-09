"use client"

import { useState } from "react"
import { Icon } from "../Icon"
import { Link } from "../../utils/Link"
import { MobileMenuButton } from "./MobileMenuButton"
import { MobileMenu } from "./MobileMenu"
import { SITE_SLUGS } from "@/config/siteConfig"

import { DarkModeToggle } from "./DarkModeToggle"

const navItems = [
  { name: "Projects", href: SITE_SLUGS.projects },
  { name: "Profiles", href: SITE_SLUGS.projectLinks.codingProfiles },
  { name: "About", href: SITE_SLUGS.about },
]

export const TopBarV2: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string | null>(null)

  const getNavStyle = (name: string) => {
    if (activeNav === name) {
      return "bubble-hover rounded-full border border-orange-100 dark:border-white/10 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-white/10 dark:to-white/5 px-1.5 py-0.5 md:px-3 md:py-1 font-semibold text-orange-600 dark:text-white shadow-md duration-300 hover:translate-y-0.5 hover:shadow-orange-200/50 dark:hover:shadow-white/5 inline-block text-[9px] md:text-sm"
    }
    return "bubble-hover p-0.5 px-1 md:p-1 md:px-2 hover:text-gray-900 dark:hover:text-white text-[9px] md:text-sm"
  }

  return (
    <nav className="font-switzer fixed top-1 left-1/2 z-50 flex w-fit -translate-x-1/2 justify-center text-base sm:top-2.5 md:top-5 md:text-sm">
      {/* Wrapper */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/60 shadow-md backdrop-blur-2xl">
        <div className="relative flex flex-col">
          {/* Main Bar */}
          <div className="flex items-center gap-1.5 pl-4 pr-6 py-1.5 md:gap-8 md:px-4 md:py-2.5">
            {/* Logo */}
            <Link href="/" className="flex flex-shrink-0 items-center gap-1 md:gap-2 font-medium text-nowrap dark:text-white" onClick={() => setActiveNav(null)}>
              <img src="/assets/logo-spark.svg" alt="Spark Logo" className="h-5 w-5 md:h-6 md:w-6 rounded-md shadow-sm border border-gray-100/50 dark:border-white/10" />
              <span className="hidden md:inline text-[10px] md:text-base">Ronit Soni</span>
            </Link>

            {/* Combined Navigation (Multi-viewport) */}
            <ul className="flex items-center gap-1.5 transition-all duration-300 ease-in-out md:gap-4 font-medium text-gray-600 dark:text-zinc-300">
              {navItems.map((item) => (
                <li key={item.name} className="flex">
                  <Link href={item.href} className={getNavStyle(item.name)} onClick={() => setActiveNav(item.name)}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="flex gap-1.5 items-center">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className={getNavStyle("Resume")}
                  onClick={() => setActiveNav("Resume")}
                >
                  Resume
                </Link>
                <Link
                  href="/#contact"
                  className={`${activeNav === "Contact" ? "bubble-hover rounded-full border border-orange-100 dark:border-white/10 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-white/10 dark:to-white/5 px-1.5 py-0.5 md:px-3 md:pr-4 md:py-1 font-semibold text-orange-600 dark:text-white shadow-md duration-300 hover:translate-y-0.5 hover:shadow-orange-200/50 dark:hover:shadow-white/5 inline-block text-[9px] md:text-sm" : "bubble-hover rounded-full px-1.5 py-0.5 md:px-3 md:pr-4 md:py-1 font-medium hover:text-gray-900 dark:hover:text-white duration-300 hover:translate-y-0.5 inline-block text-[9px] md:text-sm"}`}
                  onClick={() => setActiveNav("Contact")}
                >
                  Contact
                </Link>
                {/* Custom Dark Mode Toggle with added mobile right padding */}
                <div className="flex items-center gap-1 md:gap-1.5 pr-1 md:pr-0">
                  <span className="h-3 w-[1px] bg-gray-200 dark:bg-white/10 md:hidden" />
                  <div className="items-center border-gray-200 dark:border-white/10 flex md:ml-1 md:border-l md:pl-2">
                    <DarkModeToggle />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
