import Image from "next/image"
import clsx from "clsx"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("py-8 md:py-24 border-y border-gray-200 dark:border-white/5 bg-white dark:bg-transparent", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2 className="text-2xl md:text-5xl lg:text-6xl">
          <span className="text-slate-500 dark:text-[#A1A1A6]">About</span>
          <br />
          <span className="dark:text-white">Ronit Soni</span>
        </AnimatedH2>
        <div className="flex flex-row items-start gap-3 md:gap-0">
          {/* ---------------- left column ---------------- */}

          <div className="w-[110px] shrink-0 md:flex md:[flex:1_0_0px] flex-col gap-3 md:gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src="/assets/ronit-portrait.png" alt="Ronit Soni" className="custom-shadow aspect-[4/4.5] w-full" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="mt-2"
            >
              <Text as="h2" size="sm" className="font-medium dark:text-white text-[9px] md:text-lg">
                Ronit Soni
              </Text>
              <p className="text-[6px] md:text-sm text-gray-500 dark:text-[#A1A1A6]">Full Stack Developer (MERN + AI)</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="flex-1 space-y-2 md:space-y-8 text-slate-500 dark:text-[#A1A1A6] text-[10.5px] md:text-lg leading-tight md:leading-6">
            <p>
              <strong className="font-semibold text-slate-900 dark:text-white block mb-0.5 md:inline">I build things for the web.</strong> I&apos;m a Full Stack Developer with hands-on experience in
              {" "}
              <a href="https://github.com/RonitkumarSoni" target="_blank" rel="noopener" className="dark:text-white dark:hover:text-gray-300 transition-colors">
                React.js, Node.js, and the MERN stack
              </a>
              . My focus is on writing clean, maintainable code.
            </p>

            <p>
              <strong className="font-semibold text-slate-900 dark:text-white block mb-0.5 md:inline">I&apos;m actively expanding into AI.</strong>{" "}
              Currently learning how to integrate Large Language Models (LLMs) into web applications.
            </p>
            <p>
              <strong className="font-semibold text-slate-900 dark:text-white block mb-0.5 md:inline">Beyond front-end, I have a curiosity for Cybersecurity</strong> — how systems can be protected and web apps hardened against attacks.
            </p>
          </Typography>
        </div>
      </div>
    </section>
  )
}
