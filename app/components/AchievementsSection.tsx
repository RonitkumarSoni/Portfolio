import React from "react"
import { AnimatedText } from "./AnimatedText"

const achievements = {
  hackathons: [
    {
      title: "OpenPools Hackathon",
      organizer: "OpenPools",
      description: "Participated in an intensive hackathon challenge, collaborating to build an innovative solution under tight deadlines.",
      fileUrl: "/assets/certificates/openPools_certificate.pdf",
    }
  ],
  certifications: [
    {
      title: "GitHub Copilot",
      platform: "Microsoft",
      description: "Mastered AI-assisted development by leveraging GitHub Copilot's features for improved code quality and productivity.",
      fileUrl: "/assets/certificates/github_Copilot_certificate.pdf",
    },
    {
      title: "Data Analysis",
      platform: "Simplilearn",
      description: "Developed strong analytical skills, mastering data manipulation, visualization, and core statistical concepts.",
      fileUrl: "/assets/certificates/Data_Analyasis.pdf",
    },
    {
      title: "Generative AI Studio",
      platform: "Google Cloud",
      description: "Explored advanced prompt engineering and model tuning techniques to build robust AI-driven applications.",
      fileUrl: "/assets/certificates/genrative_ai_studio.pdf",
    }
  ]
}

const CertificateCard = ({ title, sub, description, fileUrl }: { title: string, sub: string, description: string, fileUrl: string }) => (
  <a
    href={fileUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col gap-3 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-zinc-900/30 dark:backdrop-blur-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/10 dark:hover:border-white/20 hover:shadow-xl"
  >
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">{title}</h3>
      <svg className="h-5 w-5 text-gray-400 dark:text-zinc-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black dark:group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </div>
    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{sub}</span>
    <p className="text-sm leading-relaxed text-slate-600 dark:text-[#A1A1A6]">
      {description}
    </p>
    <div className="mt-auto pt-4">
      <span className="inline-flex items-center text-sm font-medium text-slate-500 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
        View Certificate <span className="ml-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">&rarr;</span>
      </span>
    </div>
  </a>
)

export const AchievementsSection: React.FC = () => {
  return (
    <section className="inside-container relative overflow-hidden bg-white dark:bg-transparent !pt-8 pb-24">
      <div className="pointer-events-none relative z-5 mb-2 max-w-3xl">
        <AnimatedText
          text="Achievements & Certifications"
          margin={100}
          once={true}
          className="inline-block text-3xl xxs:text-4xl font-medium tracking-tighter text-slate-900 dark:text-zinc-100 md:text-5xl lg:text-5xl"
        />
      </div>

      <div className="relative z-4 flex flex-col gap-16">

        {/* Hackathons */}
        <div>
          <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-200">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </span>
            Hackathons & Competitions
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.hackathons.map((hackathon) => (
              <CertificateCard
                key={hackathon.title}
                title={hackathon.title}
                sub={hackathon.organizer}
                description={hackathon.description}
                fileUrl={hackathon.fileUrl}
              />
            ))}
          </div>
        </div>

        {/* Learning & Certifications */}
        <div>
          <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-200">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </span>
            Learning & Certifications
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.certifications.map((cert) => (
              <CertificateCard
                key={cert.title}
                title={cert.title}
                sub={cert.platform}
                description={cert.description}
                fileUrl={cert.fileUrl}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
