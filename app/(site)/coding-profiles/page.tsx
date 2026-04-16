import { Metadata } from "next"
import { DOMAIN_URL } from "@/config/siteConfig"
import { GitHubStats } from "@/app/components/CodingProfile/GitHubStats"
import { LeetCodeStats } from "@/app/components/CodingProfile/LeetCodeStats"
import { AnimatedH1 } from "@/app/components/ui/AnimatedH1"

export const metadata: Metadata = {
    title: "Coding Profiles | Ronit Soni",
    description: "Explore Ronit Soni's coding stats, open-source contributions on GitHub, and problem-solving progress on LeetCode.",
    alternates: {
        canonical: `${DOMAIN_URL}/coding-profiles`,
    },
}

export default function CodingProfilesPage() {
    return (
        <div className="pt-10 pb-8 md:pt-24 md:pb-16">
            <div className="inside-container !gap-6 md:!gap-12">
                <div className="mb-2 md:mb-12">
                    <AnimatedH1 className="mb-1 md:mb-4">
                        Coding <span className="text-gray-500">Profiles</span>
                    </AnimatedH1>
                    <p className="max-w-2xl text-base md:text-lg text-gray-500">
                        A real-time look at my open source contributions and problem-solving journey.
                    </p>
                </div>

                <div className="flex flex-col gap-6 md:gap-8">
                    <GitHubStats />
                    <LeetCodeStats />
                </div>
            </div>
        </div>
    )
}
