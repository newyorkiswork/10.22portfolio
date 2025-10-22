"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Mail, Github, Linkedin, Code2, Brain, Rocket, Sparkles, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutPage() {
  const skills = {
    "AI & ML": ["TensorFlow", "PyTorch", "LangChain", "OpenAI API", "RAG", "Fine-tuning"],
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    "Backend": ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB"],
    "Cloud & DevOps": ["AWS", "Vercel", "Firebase", "Docker", "CI/CD"]
  }

  const achievements = [
    "15+ AI-powered applications deployed to production",
    "8+ machine learning models fine-tuned and optimized",
    "20+ successful project launches across multiple domains",
    "Expertise in RAG, agentic AI, and LLM integration"
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
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
              About Me
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Building the Future{" "}
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                with AI
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              AI-first innovator and full-stack developer specializing in intelligent systems that transform businesses and elevate user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-3">
            {/* Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1"
            >
              <div className="sticky top-8 space-y-6">
                <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-white dark:border-slate-800 shadow-xl">
                  <Image src="/images/ai-visionary.jpg" alt="Robert - AI Innovator" fill className="object-cover" />
                </div>

                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg shadow-purple-500/30">
                    <Link href="/contact" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Get in Touch
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="w-full border-2">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Connect</h3>
                  <div className="flex gap-3">
                    <a href="#" className="flex-1 flex items-center justify-center h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
                      <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </a>
                    <a href="#" className="flex-1 flex items-center justify-center h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
                      <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </a>
                    <a href="#" className="flex-1 flex items-center justify-center h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
                      <Mail className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </a>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Code2, label: "Projects", value: "15+" },
                    { icon: Brain, label: "AI Models", value: "8+" },
                    { icon: Rocket, label: "Launches", value: "20+" },
                    { icon: Sparkles, label: "Years Exp", value: "5+" },
                  ].map((stat, index) => (
                    <div key={index} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-center">
                      <stat.icon className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-2 space-y-12"
            >
              {/* Story */}
              <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-cyan-600 rounded-full" />
                  My Story
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p className="text-lg">
                    I'm an AI-first innovator and developer passionate about creating intelligent systems that solve
                    complex problems. With a background spanning machine learning, software engineering, and product
                    design, I bring a multidisciplinary approach to every project.
                  </p>
                  <p>
                    My journey began with a fascination for how technology could augment human capabilities. This led me
                    to explore the intersection of AI and user experience, where I discovered my passion for building
                    systems that are not just intelligent, but intuitive and accessible.
                  </p>
                  <p>
                    Today, I specialize in developing AI-powered solutions that bridge the gap between cutting-edge technology
                    and practical, everyday applications. Whether it's building agentic AI systems, implementing RAG architectures, 
                    or fine-tuning large language models, I'm driven by the potential of AI to transform how we interact with technology.
                  </p>
                </div>
              </section>

              {/* Skills */}
              <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-cyan-600 rounded-full" />
                  Technical Skills
                </h2>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, items], index) => (
                    <div key={index} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 px-3 py-1.5">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Achievements */}
              <section>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-cyan-600 rounded-full" />
                  Key Achievements
                </h2>
                <div className="grid gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
                      <div className="shrink-0">
                        <CheckCircle2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section>
                <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-950/20 dark:to-cyan-950/20 p-8 border border-purple-200/50 dark:border-purple-800/50 text-center">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    Let's Build Something Amazing
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg shadow-purple-500/30">
                      <Link href="/projects">View My Work</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-2">
                      <Link href="/contact">Start a Conversation</Link>
                    </Button>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
