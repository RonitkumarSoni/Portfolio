"use client"
import Image, { StaticImageData } from "next/image"
import clsx from "clsx"

export const Card = ({
  src,
  alt,
  liveUrl,
  githubUrl,
  title,
  detailUrl,
  priority,
  hideTitle = false,
}: {
  src: StaticImageData
  alt: string
  liveUrl?: string
  githubUrl?: string
  title?: string
  detailUrl?: string
  hideTitle?: boolean
  // Keeping unused optional props for now to avoid breakages in other files not yet updated
  color?: string
  type?: string
  reveal?: boolean
  text?: string
  priority?: boolean
}) => {
  return (
    <div className="h-full w-full aspect-[16/10] overflow-hidden rounded-2xl border border-transparent dark:border-white/5 group relative bg-gray-100 dark:bg-zinc-900/50 dark:backdrop-blur-2xl shadow-sm dark:shadow-[0_0_15px_rgba(255,255,255,0.02)] dark:hover:border-white/20 dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-shadow">
      <div className="h-full w-full duration-400 group-hover:scale-105 transition-transform">
        <Image className="h-full w-full object-cover" src={src} alt={alt} priority={priority} decoding="async" />

        {/* Overlay - Always visible on mobile, visible on hover on desktop */}
        <div className="absolute inset-0 flex items-end justify-between p-4 md:p-6 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 bg-gradient-to-t from-black/95 via-black/50 to-transparent md:from-black/90">
          {/* Left: Project Title */}
          <div className="flex-1 pr-4 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 duration-300 delay-75">
            {!hideTitle && title && (
              <span className="text-lg md:text-xl font-bold text-white shadow-sm inline-block">{title}</span>
            )}
            {detailUrl && (
              <a href={detailUrl} className={clsx("block text-[10px] md:text-xs font-normal text-gray-300 opacity-90 hover:text-white transition-colors", !hideTitle && "mt-1")}>View Details &rarr;</a>
            )}
          </div>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-2 md:gap-3 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 duration-300 delay-100">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 p-2 text-white shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-110 hover:bg-black/80"
                onClick={(e) => e.stopPropagation()}
                title="View on GitHub"
              >
                <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 md:gap-2 rounded-full border border-green-500/30 bg-green-600/90 px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-105 hover:bg-green-600"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-white"></span>
                </span>
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
