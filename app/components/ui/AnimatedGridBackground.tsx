"use client"
import { useEffect } from "react"
import { m, useScroll, useTransform, useMotionTemplate, useSpring } from "motion/react"

export const AnimatedGridBackground = () => {
  const { scrollYProgress } = useScroll()
  
  // Hardware-accelerated springs for buttery cursor tracking
  const mouseX = useSpring(0, { stiffness: 60, damping: 25 })
  const mouseY = useSpring(0, { stiffness: 60, damping: 25 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Morph the spotlight glow colors based entirely on scroll position!
  // Liquid transitions: Orange -> Blue -> Royal Purple
  const color1 = useTransform(scrollYProgress, [0, 0.5, 1], ["#f97316", "#3b82f6", "#a855f7"])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden hidden dark:block bg-black">
      {/* 1. High-Performance Static Grid (Very Efficient) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* 2. THE SPOTLIGHT (No Masks!) */}
      {/* Uses translate3d (handled by GPU) for absolute zero lag cursor reveal. */}
      {/* will-change: left, top tells the browser to keep this on the GPU. */}
      <m.div
        className="absolute h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 mix-blend-screen blur-[60px] sm:blur-[80px]"
        style={{
          left: mouseX,
          top: mouseY,
          background: useMotionTemplate`radial-gradient(circle, ${color1}, transparent 70%)`,
          willChange: "left, top"
        } as any}
      />

      {/* Low-opacity static technical dots for subtle depth */}
      <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Soft Vignette to depth the edges into the pitch-black void */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_100%)] opacity-70" />
    </div>
  )
}
