import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import {
    apihub,
    numble,
    slippyClone,
    dayflow,
    ProjectData
} from "@/app/data/project-data"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { buildProjectGraphMinimal } from "@/config/schemas"
import { DOMAIN_URL } from "@/config/siteConfig"
import Script from "next/script"

// Map slugs to project data
const projectsMap: Record<string, ProjectData> = {
    [apihub.slug]: apihub,
    [numble.slug]: numble,
    [slippyClone.slug]: slippyClone,
    [dayflow.slug]: dayflow,
}

// Generate static params for all projects
export async function generateStaticParams() {
    return Object.keys(projectsMap).map((slug) => ({
        slug: slug,
    }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const project = projectsMap[slug]

    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    // Convert ReactNode title to string properly if needed, or just use client
    // For simplicity, using client name as fallback or a hardcoded string if complex
    const titleString = typeof project.hero.title === 'string'
        ? project.hero.title
        : `${project.hero.client} Project`

    const projectImageUrl = typeof project.projectImage === 'string' 
        ? project.projectImage 
        : (project.projectImage as any)?.src

    return {
        title: `${titleString} | Ronit Soni`,
        description: typeof project.hero.description === 'string'
            ? project.hero.description
            : `Details about the ${project.hero.client} project.`,
        alternates: {
            canonical: `${DOMAIN_URL}/projects/${project.slug}`,
        },
        openGraph: {
            title: `${titleString} | Ronit Soni`,
            description: typeof project.hero.description === 'string'
                ? project.hero.description
                : `Details about the ${project.hero.client} project.`,
            url: `${DOMAIN_URL}/projects/${project.slug}`,
            images: projectImageUrl ? [{ url: projectImageUrl }] : [],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${titleString} | Ronit Soni`,
            description: typeof project.hero.description === 'string'
                ? project.hero.description
                : `Details about the ${project.hero.client} project.`,
            images: projectImageUrl ? [projectImageUrl] : [],
        }
    }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projectsMap[slug]

    if (!project) {
        notFound()
    }

    const jsonLd = buildProjectGraphMinimal(slug, project)

    return (
        <>
            <Script
                id={`id-project-${slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <ProjectDisplay projectData={project} />
        </>
    )
}
