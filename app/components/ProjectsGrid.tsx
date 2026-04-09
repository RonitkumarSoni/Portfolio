"use client"
import { useRef, useEffect, useState } from "react"
import { useScroll, useSpring } from "motion/react"
import { MotionDiv } from "../utils/lazy-ui"
import { useUI } from "@react-zero-ui/core"
import clsx from "clsx"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import { Card } from "./ProjectCard/Card"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { MAIN_PROJECTS, EXTRA_PROJECTS } from "../data/projects"

// Use the IDs from main projects for animated stack
const ids = MAIN_PROJECTS.map(p => p.id)

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.48 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")
  const [showMore, setShowMore] = useState(false)

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    "ai-game-bot": { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    "homie-coffee": { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    rentease: { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    "canva-clone": { rot: -3, s: responsiveScale, dx: isMobile ? -220 : -50, dy: isMobile ? -110 : -35 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id]
      const t = OFFSET_TUNING[id]
      return [
        id,
        {
          x: (base.x ?? 0) + (t.dx ?? 0),
          y: (base.y ?? 0) + (t.dy ?? 0),
          rot: t.rot ?? 0,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true")
      } else {
        setReveal("false")
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])

  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      {/* Original 4-card animated grid */}
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-6 md:grid-cols-2 md:grid-rows-2">
        {MAIN_PROJECTS.map((project, index) => (
          <AnimatedCard
            key={project.id}
            src={project.image}
            alt={project.alt}
            offset={offsets[project.id]}
            gridId={project.id}
            color={project.color!}
            type={project.type!}
            progress={progress}
            href={project.liveUrl}
            githubUrl={project.githubUrl}
            title={project.title}
            priority={index === 0}
          />
        ))}
      </div>

      {/* See More Button + Extra Cards */}
      <div className="mt-4 flex flex-col items-center gap-8">
        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="group flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/5 bg-white dark:bg-zinc-900/60 dark:backdrop-blur-xl px-6 py-3 text-sm font-semibold text-gray-700 dark:text-[#A1A1A6] shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-md active:scale-95"
          >
            See More Projects
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-y-0.5">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        )}

        {showMore && (
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {EXTRA_PROJECTS.map((project, i) => (
                <MotionDiv
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-zinc-900/50 dark:backdrop-blur-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Card 
                      src={project.image} 
                      alt={project.alt} 
                      liveUrl={project.liveUrl} 
                      githubUrl={project.githubUrl} 
                      title={project.title}
                    />
                  </div>
                </MotionDiv>
              ))}
            </div>

            {/* Collapse button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowMore(false)}
                className="flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/5 bg-white dark:bg-zinc-900/60 dark:backdrop-blur-xl px-5 py-2.5 text-sm font-medium text-gray-600 dark:text-[#A1A1A6] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                Show Less
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 rotate-180">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </MotionDiv>
        )}
      </div>
    </section>
  )
}
