import { ALL_PROJECTS } from "../../data/projects"
import { Card } from "@/app/components/ProjectCard/Card"

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="pt-10 pb-16 md:pb-24">
      <div className="inside-container-small py-0 md:py-0">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {ALL_PROJECTS.map((project) => {
            return (
              <div key={project.id} className="flex flex-col gap-5">
                <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Card
                      src={project.image}
                      alt={project.alt}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                      title={project.title}
                      hideTitle={true}
                    />
                  </div>
                </div>
                {/* Info Block - Shown on Projects Page */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400 leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.split(" · ").map((t) => (
                      <span key={t} className="rounded-full bg-gray-100 dark:bg-zinc-800 px-3 py-1 text-[11px] font-medium text-gray-600 dark:text-zinc-400 border border-gray-200/50 dark:border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
