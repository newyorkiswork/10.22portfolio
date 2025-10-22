import Link from "next/link"
import { Button } from "@/components/ui/button"

// Extremely simplified project page
export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Basic project data
  const projectData = {
    "auro-laundry-ai-platform": {
      title: "Auro - The Laundry AI Platform",
      description:
        "Revolutionizing laundry services with AI-powered scheduling, stain recognition, and efficiency optimization",
    },
    "new-york-is-home": {
      title: "New York is Home - Luxury AI Shopping Assistant",
      description:
        "Elevating luxury shopping experiences with personalized recommendations and virtual styling for discerning clients",
    },
    "agnes-shopping-assistant": {
      title: "Agnes v.2.1 - Agentic AI Shopping Assistant",
      description:
        "Autonomous shopping assistant that learns preferences, makes decisions, and streamlines the entire shopping journey",
    },
    "chimera-pro-ai-resume": {
      title: "Chimera Pro - The AI Resume",
      description:
        "AI-driven resume platform designed to outperform LinkedIn and Indeed with intelligent job matching and career advancement tools",
    },
    "project-ascend-pro-budget": {
      title: "Project Ascend Pro - The AI Agentic Budget App",
      description:
        "AI-powered agentic budget application that revolutionizes personal finance management through automated planning and intelligent insights",
    },
  }

  const project = projectData[params.slug as keyof typeof projectData] || {
    title: "Project Not Found",
    description: "The project you're looking for doesn't exist or has been moved.",
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/projects" className="text-purple-600 hover:underline">
        ← Back to Projects
      </Link>
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{project.title}</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{project.description}</p>
        <div className="mt-8">
          <Button asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
