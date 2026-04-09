"use client"
import clsx from "clsx"
import { Link } from "../../utils/Link"
import { useUI } from "@react-zero-ui/core"
import { SITE_SLUGS } from "@/config/siteConfig"
import { DarkModeToggle } from "./DarkModeToggle"

export const MobileMenu: React.FC<{ navItems: { name: string; href: string }[] }> = ({ navItems }) => {
  const [, setMobileMenu] = useUI<"open" | "closed">("mobile-menu", "closed")

  return (
    <div className={clsx("mobile-menu-container flex flex-col rounded-b-2xl border-x border-b border-gray-200/50 dark:border-white/10 bg-white/90 dark:bg-black/80 backdrop-blur-xl px-4 pb-4 transition-all duration-500 ease-in-out md:hidden overflow-hidden shadow-xl")}>
      <ul className="flex flex-row flex-wrap items-center justify-center gap-2 pt-4">
        {navItems.map((item, index) => (
          <li
            key={item.name}
            className="mobile-menu-item transform transition-all duration-300 ease-in-out"
            style={{ "--index": index } as React.CSSProperties}
          >
            <Link 
              href={item.href} 
              onClick={() => setMobileMenu("closed")} 
              className={clsx(
                "bubble-hover inline-block rounded-full px-2.5 py-1 text-[11px] font-bold tracking-tight active:scale-95 transition-all duration-300",
                item.name === "Projects" 
                  ? "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-white/10 dark:to-white/5 text-orange-600 dark:text-white border border-orange-100 dark:border-white/10 shadow-sm" 
                  : "text-gray-700 dark:text-zinc-300 bg-gray-100/50 dark:bg-white/5"
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
        
        {/* Buttons Section */}
        <li className="mobile-menu-item transform flex flex-row items-center gap-2 transition-all duration-300 ease-in-out" style={{ "--index": navItems.length } as React.CSSProperties}>
          <Link
            href="/resume.pdf"
            target="_blank"
            onClick={() => setMobileMenu("closed")}
            className="bubble-hover inline-block rounded-full bg-gradient-to-br from-orange-50 to-amber-50 dark:from-white/10 dark:to-white/5 px-2.5 py-1 text-[11px] font-bold text-orange-600 dark:text-white shadow-sm duration-300"
          >
            Resume
          </Link>
          
          <Link
            href={SITE_SLUGS.contact}
            onClick={() => setMobileMenu("closed")}
            className="bubble-hover inline-block rounded-full bg-white dark:bg-zinc-800 px-2.5 py-1 text-[11px] font-bold text-black dark:text-white shadow-sm duration-300"
          >
            Contact
          </Link>
        </li>

        {/* Dark Mode Integration */}
        <li className="mobile-menu-item transform transition-all duration-300 ease-in-out" style={{ "--index": navItems.length + 1 } as React.CSSProperties}>
          <div className="scale-75 origin-center ml-1 border-l border-gray-200 dark:border-white/10 pl-2">
            <DarkModeToggle />
          </div>
        </li>
      </ul>
    </div>
  )
}
