"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, ShoppingCart, Briefcase, Brain, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  const projects = [
    {
      id: "auro-laundry-ai-platform",
      title: "Auro - The Laundry AI Platform",
      description: "Revolutionizing laundry services with intelligent automation, predictive analytics, and seamless customer experiences",
      tags: ["AI/ML", "SaaS", "Automation", "React"],
      gradient: "from-blue-500 to-cyan-500",
      icon: Sparkles
    },
    {
      id: "new-york-is-home",
      title: "New York is Home",
      description: "Premium AI-powered shopping concierge delivering personalized luxury retail experiences at scale",
      tags: ["AI", "E-commerce", "LLM", "Next.js"],
      gradient: "from-purple-500 to-pink-500",
      icon: ShoppingCart
    },
    {
      id: "agnes-shopping-assistant",
      title: "Agnes v.2.1",
      description: "Advanced agentic AI assistant with multi-modal capabilities, RAG architecture, and natural conversation flow",
      tags: ["Agentic AI", "RAG", "NLP", "Python"],
      gradient: "from-amber-500 to-orange-500",
      icon: Brain
    },
    {
      id: "chimera-pro-ai-resume",
      title: "Chimera Pro",
      description: "Intelligent resume builder powered by AI to craft compelling professional narratives and optimize for ATS systems",
      tags: ["AI", "Career Tech", "Next.js", "OpenAI"],
      gradient: "from-emerald-500 to-teal-500",
      icon: Briefcase
    },
    {
      id: "project-ascend-pro-budget",
      title: "Project Ascend Pro",
      description: "AI-driven budget management app with predictive spending insights, smart recommendations, and financial goal tracking",
      tags: ["FinTech", "AI", "Analytics", "React"],
      gradient: "from-indigo-500 to-purple-500",
      icon: DollarSign
    },
  ]

  return (
    <div className="relative min-h-screen">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-cyan-50/30 dark:from-slate-950 dark:via-purple-950/20 dark:to-cyan-950/20 py-20">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-shapes.png')] opacity-[0.03]" />
        
        <div className="container relative mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600/10 to-cyan-600/10 px-4 py-2 text-sm font-medium text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50 mb-6">
              <Sparkles className="h-4 w-4" />
              Portfolio Showcase
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              AI-Powered{" "}
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore my portfolio of innovative solutions that leverage cutting-edge AI to solve real-world problems and create exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/projects/${project.id}`} className="group block h-full">
                    <div className="relative h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 shadow-lg shrink-0`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium group-hover:gap-3 transition-all mt-auto">
                        View Details
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 text-center max-w-3xl mx-auto"
          >
            <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-950/20 dark:to-cyan-950/20 p-8 sm:p-12 border border-purple-200/50 dark:border-purple-800/50">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Interested in collaborating?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
                Let's build something amazing together with AI-powered innovation
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg shadow-purple-500/30">
                <Link href="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
