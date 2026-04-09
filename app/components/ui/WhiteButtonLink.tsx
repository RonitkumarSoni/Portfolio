export const WhiteButtonLink: React.FC<{ children: React.ReactNode; href: string; className?: string; download?: boolean }> = ({
  children,
  href,
  className,
  download,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      download={download}
      className={
        "bubble-hover flex w-fit items-center justify-center gap-1 rounded-full dark:bg-zinc-900 bg-white px-2 py-1 h-[28px] md:h-auto md:px-4 md:py-3 text-[9px] md:text-sm font-medium whitespace-nowrap text-black dark:text-zinc-200 shadow-lg dark:shadow-black/50 transition-all duration-300 hover:translate-y-0.5 hover:shadow-none " +
        className
      }
    >
      {children}
    </a>
  )
}
