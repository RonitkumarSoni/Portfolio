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
          <Typography as="article" size="lg" className="flex-1 space-y-4 md:space-y-8 text-slate-500 dark:text-[#A1A1A6] text-[10.5px] md:text-lg leading-relaxed md:leading-7">
            <p>
              <strong className="font-semibold text-slate-900 dark:text-white block mb-1 md:inline text-sm md:text-xl">Crafting Scalable Digital Ecosystems.</strong><br className="md:hidden" /> 
              As a dedicated Full Stack Developer with a deep specialization in the 
              {" "}
              <a href="https://github.com/RonitkumarSoni" target="_blank" rel="noopener" className="font-medium text-slate-800 dark:text-white dark:hover:text-gray-300 underline decoration-indigo-500/30 underline-offset-4 transition-all">
                MERN Stack and Next.js ecosystem
              </a>
              , I don't just write code—I engineer solutions. My approach combines robust architectural planning with pixel-perfect frontend execution, ensuring that every application is high-performing, accessible, and ready to scale from day one.
            </p>

            <p>
              <strong className="font-semibold text-slate-900 dark:text-white block mb-1 md:inline text-sm md:text-xl">AI-Driven Engineering & Future-Ready Tech.</strong><br className="md:hidden" />
              The landscape of web development is evolving, and I am actively at the forefront of this shift. I specialize in integrating Large Language Models (LLMs) and Generative AI into traditional web architectures, transforming static applications into intelligent, adaptive environments that solve real-world problems with unparalleled efficiency.
            </p>

            <p>
              <strong className="font-semibold text-slate-900 dark:text-white block mb-1 md:inline text-sm md:text-xl">A Holistic Approach to Security & Performance.</strong><br className="md:hidden" />
              My technical curiosity extends beyond the browser. I have a profound interest in Cybersecurity, focusing on building hardened web applications that prioritize user data integrity. By combining these security principles with advanced backend optimization and modern dev-ops practices, I deliver professional-grade software that stands the test of time and traffic.
            </p>

            <p className="text-sm md:text-base italic italic-text opacity-80">
              Based in Kalol, Gujarat, I am continually exploring the frontiers of technology, contributing to open-source projects, and collaborating with visionary teams to build the next generation of the web.
            </p>
          </Typography>
        </div>
      </div>
    </section>
  )
}
