"use client"
import React, { useEffect, useState } from "react"
import { m, useSpring, useMotionValue, useMotionTemplate } from "motion/react"

export const EdgeLightingOverlay = () => {
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 })
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 })
  const [windowWidth, setWindowWidth] = useState(0)

  // Move hooks to top level (Rule of Hooks)
  const leftBackground = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15), transparent 80%)`
  const rightBackground = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(236, 72, 153, 0.15), transparent 80%)`

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    // ... rest of useEffect
    const handleResize = () => setWindowWidth(window.innerWidth)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  // Center container width is 1152px (max-w-6xl)
  const containerWidth = 1152
  const marginWidth = (windowWidth - containerWidth) / 2

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden hidden dark:xl:block">
      {/* Left Margin Glow */}
      <m.div
        className="absolute top-0 bottom-0 left-0 dark:opacity-20 opacity-10"
        style={{
          width: marginWidth,
          background: leftBackground,
        }}
      />

      {/* Right Margin Glow */}
      <m.div
        className="absolute top-0 bottom-0 right-0 dark:opacity-20 opacity-10"
        style={{
          width: marginWidth,
          background: rightBackground,
        }}
      />

      {/* Vertical Light Beams (Meteor Trails) precisely on container edges */}
      <div 
        className="absolute inset-y-0 z-0"
        style={{ left: marginWidth, right: marginWidth }}
      >
        <div className="absolute left-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/10 to-transparent">
             <m.div 
               animate={{ top: ["-20%", "120%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute left-[-1px] h-32 w-[2px] bg-gradient-to-b from-transparent via-blue-400/50 to-transparent blur-[1px]" 
             />
        </div>
        <div className="absolute right-0 h-full w-px bg-gradient-to-b from-transparent via-pink-500/10 to-transparent">
             <m.div 
               animate={{ top: ["120%", "-20%"] }}
               transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
               className="absolute right-[-1px] h-40 w-[2px] bg-gradient-to-b from-transparent via-pink-400/50 to-transparent blur-[1px]" 
             />
        </div>
      </div>
    </div>
  )
}
