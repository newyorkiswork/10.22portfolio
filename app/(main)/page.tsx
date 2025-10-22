"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Rocket, Brain } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const stats = [
    { icon: Code2, label: "Projects", value: "15+" },
    { icon: Brain, label: "AI Models", value: "8+" },
    { icon: Rocket, label: "Deployments", value: "20+" },
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-cyan-50/30 dark:from-slate-950 dark:via-purple-950/20 dark:to-cyan-950/20">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-shapes.png')] opacity-[0.03]" />
        
        <div className="container relative mx-auto px-4 py-24 sm:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600/10 to-cyan-600/10 px-4 py-2 text-sm font-medium text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50"
            >
              <Sparkles className="h-4 w-4" />
              AI-First Developer & Innovator
            </motion.div>

            <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl lg:text-8xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Robert
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Building the future with{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">AI-powered solutions</span>
              {" "}that transform businesses and elevate user experiences through intelligent automation.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-cyan-100 dark:from-purple-900/30 dark:to-cyan-900/30 mb-3">
                    <stat.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg shadow-purple-500/30 group">
                <Link href="/projects" className="flex items-center gap-2">
                  View My Projects
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 hover:bg-slate-50 dark:hover:bg-slate-900">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-white dark:text-slate-950"/>
          </svg>
        </div>
      </section>
    </div>
  )
}
