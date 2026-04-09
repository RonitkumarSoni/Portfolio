import Image from "next/image"
import { H3, Text } from "@/app/ui/Elements"
import { MotionDiv } from "@/app/utils/lazy-ui"
import { Icon } from "./Icon"

import { SITE_NAP } from "@/config/siteConfig"
import { Mail } from "@react-zero-ui/icon-sprite"
import { BlackButtonLink } from "./ui/BlackButtonLink"
import { WhiteButtonLink } from "./ui/WhiteButtonLink"

export const RecruiterContact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-gray-200 dark:border-white/5">
      <div className="inside-container-small">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 14 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative z-1 mx-auto flex w-full max-w-2xl flex-col items-center gap-6 rounded-2xl border border-gray-300 dark:border-white/5 bg-white dark:bg-zinc-900/40 dark:backdrop-blur-2xl p-5.5 max-lg:text-center max-sm:px-2 sm:p-8"
        >
          <div className="flex w-fit items-center gap-3 p-2 max-lg:justify-center">
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-4 ring-slate-200 dark:ring-white/10">
              <Image src="https://github.com/RonitkumarSoni.png" alt="Ronit Soni" fill sizes="80px" className="object-cover" />
            </div>
            <div className="flex flex-col items-start text-sm whitespace-nowrap text-slate-700">
              <h2 className="font-medium text-slate-900 dark:text-white">Ronit Soni</h2>
              <p className="text-slate-500 dark:text-[#A1A1A6]">Full Stack Developer (MERN + AI)</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 max-lg:items-center">
            <H3 className="text-center font-normal tracking-tight dark:text-white">
              <span>
                Building Something Amazing? <br />
              </span>
              <span className="text-slate-500 dark:text-[#A1A1A6]">Let&apos;s chat.</span>
            </H3>
            <Text className="max-w-2xl text-center text-balance text-slate-600 dark:text-[#A1A1A6]">
              I build fast, accessible web apps with React, Next.js, and TypeScript. I&apos;m looking for teams that value product quality, performance, and
              thoughtful UX.
            </Text>
          </div>

          <div className="flex flex-wrap items-center gap-4 max-lg:justify-center">
            <BlackButtonLink href={`mailto:${SITE_NAP.email}`}>
              <Mail height={18} width={18} className="h-[18px] w-[18px] text-white" />
              Email me
            </BlackButtonLink>

            <WhiteButtonLink href={SITE_NAP.profiles.linkedIn}>
              <Icon name="linkedin" height={18} width={18} className="h-[18px] w-[18px] text-black dark:text-zinc-200" />
              LinkedIn
            </WhiteButtonLink>
            <WhiteButtonLink href={SITE_NAP.profiles.github}>
              <Icon name="github" height={18} width={18} className="h-[18px] w-[18px] text-black dark:text-zinc-200" />
              GitHub
            </WhiteButtonLink>
            <WhiteButtonLink href="/resume.pdf" download>
              <Icon name="page" height={18} width={18} className="h-[18px] w-[18px] text-black dark:text-zinc-200" />
              Download Resume
            </WhiteButtonLink>
          </div>


        </MotionDiv>
      </div>
    </section>
  )
}
