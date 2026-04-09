"use client"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

// Dynamic imports with no SSR to reduce bundle size and initial hydration cost
const AnimatedGridBackground = dynamic(
  () => import("../components/ui/AnimatedGridBackground").then((mod) => mod.AnimatedGridBackground),
  { ssr: false, loading: () => null }
)

const EdgeLightingOverlay = dynamic(
  () => import("../components/ui/EdgeLightingOverlay").then((mod) => mod.EdgeLightingOverlay),
  { ssr: false, loading: () => null }
)

export function LazyBackgroundVisuals() {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // Immediately render once on the client to avoid hydration mismatch 
    // but without the artificial delay that made it feel "late."
    setShouldRender(true)
  }, [])

  if (!shouldRender) return null

  return (
    <>
      <EdgeLightingOverlay />
      {/* Dark Mode Background: Full screen on mobile/tablet, side-masked only on wide desktop screens (xl >= 1280px) */}
      <div className="pointer-events-none fixed inset-0 z-0 hidden w-full dark:block xl:[mask-image:linear-gradient(to_right,black_calc(50%-35rem),transparent_calc(50%-35.5rem),transparent_calc(50%+35.5rem),black_calc(50%+35rem))] xl:[-webkit-mask-image:linear-gradient(to_right,black_calc(50%-35rem),transparent_calc(50%-35.5rem),transparent_calc(50%+35.5rem),black_calc(50%+35rem))]">
         <AnimatedGridBackground />
      </div>
    </>
  )
}
