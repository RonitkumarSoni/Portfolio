import { AnimatedElement } from "@/app/components/ui/AnimatedElement"

export const WorkHero: React.FC = () => {
  return (
    <div className="inside-container-large pt-24 sm:pt-28 md:pt-32 pb-0 md:pb-0 lg:pb-0">
      <div className="flex flex-col items-center gap-4 max-md:px-5.5">
        <h1 className="xs:text-5xl relative z-5 text-center text-4xl leading-tight font-medium tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
          <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block">
            Digital Showcase
          </AnimatedElement>
        </h1>
        <AnimatedElement
          element="p"
          delay={0.6}
          className="max-w-2xl text-center text-sm leading-relaxed tracking-tight text-slate-600 dark:text-zinc-400 md:text-base"
        >
          Explore a complete portfolio of my technical engineering work - from high-performance AI integrations and full-stack web applications to bespoke design systems.
        </AnimatedElement>
      </div>
    </div>
  )
}
