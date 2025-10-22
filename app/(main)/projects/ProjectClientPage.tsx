"use client"

import type React from "react"

import { Github, ExternalLink } from "lucide-react"

import type { Project } from "@/types"
import { Button } from "@/components/ui/button"

interface ProjectClientPageProps {
  project: Project
}

const ProjectClientPage: React.FC<ProjectClientPageProps> = ({ project }) => {
  return (
    <div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button
          asChild
          className="flex-1 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
          aria-label={`View live demo of ${project.title}`}
        >
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md"
          aria-label={`View source code for ${project.title}`}
        >
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View Code
          </a>
        </Button>
      </div>
    </div>
  )
}

export default ProjectClientPage
