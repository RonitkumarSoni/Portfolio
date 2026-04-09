"use client"
import { AnimatePresence, m } from "motion/react"
import { useState, useEffect } from "react"
import { HeroScrollClick } from "./HeroScrollClick"
import { ActivityDot } from "./ui/ActivityDot"
import { AnimatedElement } from "./ui/AnimatedElement"
import { CallToActionButton } from "./ui/CallToActionButton"
import { WhiteButtonLink } from "./ui/WhiteButtonLink"
import { Icon } from "./Icon"
import { VideoModal } from "./ui/VideoModal"

const STATUS_MESSAGES = [
  "Open to Internships",
  "Freelance Opportunities Welcome",
  "Building & Exploring SaaS Products",
  "Startup Collaboration Enthusiast",
  "Contributing to Meaningful Projects",
  "Turning Ideas into Scalable Products 🚀"
]

export const HeroV2 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [statusIndex, setStatusIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])


  return (
    <section className="mx-auto max-w-6xl pt-16 sm:pt-24 md:pt-32">
      <div className="inside relative flex [flex:1.5_0_0px] px-5.5 pb-10 md:px-11 md:pb-24">
        <div className="flex max-w-lg flex-col gap-5 md:min-w-sm md:gap-8">
          <div className="flex flex-col gap-2">
            <AnimatedElement
              element="div"
              delay={0.5}
              className="z-2 inline-flex items-center gap-1.5 self-start rounded-full border border-indigo-100 dark:border-indigo-500/30 bg-white dark:bg-zinc-900/50 px-2 py-1 md:px-5 md:py-2.5 text-[10px] md:text-sm font-bold shadow-lg shadow-indigo-500/10 dark:shadow-indigo-500/20"
            >
              <div className="relative h-1.5 w-1.5 md:h-2 md:w-2">
                <div className="absolute inset-0 animate-ping rounded-full bg-indigo-500 opacity-75" />
                <div className="absolute inset-0 m-auto h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-indigo-500" />
              </div>
              <div className="flex h-4 md:h-6 items-center overflow-hidden">
                <AnimatePresence mode="wait">
                    <m.span
                      key={statusIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="inline-block text-indigo-600 dark:text-indigo-400 pt-[1px]"
                    >
                      {STATUS_MESSAGES[statusIndex]}
                    </m.span>
                </AnimatePresence>
              </div>
            </AnimatedElement>

            <AnimatedElement
              element="span"
              delay={0.7}
              className="z-2 flex max-w-fit items-center gap-1.5 self-start rounded-full border border-gray-100 dark:border-white/10 bg-white dark:bg-zinc-900/50 dark:text-zinc-300 px-2 py-1 md:px-5 md:py-2.5 text-[10px] md:text-sm font-medium shadow-lg"
            >
              <ActivityDot />
              Kalol, Gujarat
            </AnimatedElement>
          </div>

          <h1 className="text-3xl xxs:text-4xl xs:text-5xl relative z-5 leading-none md:leading-[0.8] font-medium tracking-tight text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-zinc-100 dark:to-zinc-500 sm:text-6xl lg:text-7xl order-1">
            <div className="flex items-center justify-between gap-0 md:flex-col md:items-start md:gap-0">
              <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block">
                Ronit Soni
              </AnimatedElement>
              {/* Mobile Card Target */}
              <span data-stack-target-id className="md:hidden mt-2 border border-red-500/0 h-1 w-1 ml-2" />
            </div>
            <br className="hidden md:block" />
            <AnimatedElement element="span" delay={0.4} offsetPx={20} fadeDirection="left" className="inline-block text-slate-700 dark:text-zinc-500">
              Portfolio
            </AnimatedElement>
          </h1>

          <AnimatedElement element="p" delay={0.6} className="order-3 md:order-2 max-w-xs text-[11px] md:text-base leading-tight md:leading-snug tracking-tight text-slate-700 dark:text-zinc-400 md:max-w-sm md:pr-4 mt-1 md:mt-0">
            <strong className="font-semibold text-slate-900 dark:text-zinc-200">Web Developer.</strong> MERN & JavaScript Specialist. <br />
            Exploring the language of 0s and 1s. Cybersecurity Enthusiast & Open Source Contributor.
          </AnimatedElement>

          {/* Action Buttons - Ultra Compact Unified Grid */}
          <div className="w-full max-w-[260px] md:max-w-none order-2 md:order-3 mt-1 md:mt-0">
            <div className="grid w-full grid-cols-3 gap-0.5 md:grid md:grid-cols-2 md:gap-4 md:w-max">
              <div className="flex justify-center md:justify-start">
                <CallToActionButton />
              </div>
              <div className="flex justify-center md:justify-start">
                <WhiteButtonLink 
                  href="/resume.pdf" 
                  className="h-[28px] md:h-auto w-full md:w-max px-0 md:px-5 md:py-3 justify-center shadow-xl shadow-black/5 hover:shadow-none text-[9px] md:text-sm"
                >
                  <Icon name="page" className="h-2.5 w-2.5 md:h-5 md:w-5" />
                  Resume
                </WhiteButtonLink>
              </div>
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="group bubble-hover-cta active relative z-1 inline-flex h-[28px] w-full md:h-auto md:w-max items-center justify-center gap-0.5 md:gap-2 rounded-full bg-red-600 px-0 md:px-6 md:py-3 text-[9px] md:text-sm font-medium tracking-tight text-white shadow-xl shadow-red-600/30 transition-colors"
                >
                  <div className="pointer-events-none absolute inset-0.5 -z-1 rounded-full [background-image:url('/assets/framer-noise.png')] [background-size:164px] bg-repeat opacity-12" />
                  <Icon name="play" className="h-2.5 w-2.5 md:h-5 md:w-5 text-white fill-white" />
                  Intro
                </button>
              </div>
            </div>
          </div>
          <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoId="KPgjBvpN11c" />
        </div>
        {/* Desktop Card Target */}
        <span data-stack-target-id className="hidden md:block xs:ml-[8%] [flex:1 _0_0px] xs:mt-20 mt-24 ml-[4%] h-1 w-2 sm:mt-11 xl:ml-[16%]" />
        <HeroScrollClick />

        {/* subtle background ellipse */}
        <div className="pointer-events-none absolute inset-y-0 left-1/3 -z-1 hidden w-full bg-radial from-indigo-100 dark:from-indigo-900/10 via-transparent to-transparent blur-3xl md:block" />
      </div>
    </section>
  )
}
