"use client"

import { useEffect } from "react"
import { SITE_CONFIG } from "@/config/siteConfig"

export const DynamicSectionTitle = () => {
    useEffect(() => {
        const sections = [
            { id: "about", title: "About | Ronit Soni" },
            { id: "contact", title: "Contact | Ronit Soni" },
        ]

        const observerOptions = {
            threshold: 0.3, // Trigger when 30% of the section is visible
        }

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            let inViewSection = entries.find(entry => entry.isIntersecting)
            
            if (inViewSection) {
                const config = sections.find(s => s.id === inViewSection!.target.id)
                if (config) {
                    document.title = config.title
                }
            } else {
                // Check if we are at the top of the page
                if (window.scrollY < 300) {
                    document.title = SITE_CONFIG.title
                }
            }
        }

        const observer = new IntersectionObserver(handleIntersection, observerOptions)

        sections.forEach(section => {
            const el = document.getElementById(section.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return null // This component doesn't render anything
}
