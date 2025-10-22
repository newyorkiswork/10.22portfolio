import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Vision | Robert - AI Innovator",
  description: "Explore my vision for the future of AI and technology",
}

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-space text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          My Vision
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
          Exploring the future of AI and its potential to transform our world
        </p>

        <div className="mt-12 space-y-16">
          <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-space text-3xl font-bold text-slate-900 dark:text-white">Human-Centered AI</h2>
              <div className="mt-4 space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  I believe that AI should augment human capabilities, not replace them. My vision is to create AI
                  systems that work alongside humans, enhancing our creativity, productivity, and problem-solving
                  abilities.
                </p>
                <p>
                  This means designing AI that is transparent, explainable, and aligned with human values. It means
                  creating interfaces that feel natural and intuitive, allowing humans and AI to collaborate seamlessly.
                </p>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image src="/images/human-centered-ai.png" alt="Human-Centered AI" fill className="object-cover" />
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image src="/placeholder.svg?key=k159d" alt="Accessible AI" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-space text-3xl font-bold text-slate-900 dark:text-white">Accessible AI</h2>
              <div className="mt-4 space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  AI should be accessible to everyone, not just technical experts or large corporations. I'm committed
                  to democratizing AI by creating tools and interfaces that make advanced AI capabilities available to
                  users of all backgrounds and skill levels.
                </p>
                <p>
                  This includes developing no-code AI platforms, intuitive visual interfaces, and educational resources
                  that empower individuals to leverage AI in their work and daily lives.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-space text-3xl font-bold text-slate-900 dark:text-white">Ethical AI Development</h2>
              <div className="mt-4 space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  As AI becomes more powerful, ethical considerations become increasingly important. I'm dedicated to
                  developing AI systems that are fair, unbiased, and respectful of privacy and autonomy.
                </p>
                <p>
                  This means implementing robust testing for bias, designing with privacy in mind from the start, and
                  being transparent about the capabilities and limitations of AI systems. It also means engaging with
                  diverse stakeholders to ensure that AI benefits everyone.
                </p>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image src="/placeholder.svg?key=6dic3" alt="Ethical AI Development" fill className="object-cover" />
            </div>
          </section>

          <section className="rounded-xl bg-gradient-to-r from-purple-900 to-indigo-900 p-8 text-white sm:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-space text-3xl font-bold sm:text-4xl">Let's Build the Future Together</h2>
              <p className="mt-4 text-lg text-purple-200">
                I'm always looking for collaborators, partners, and clients who share my vision for human-centered,
                accessible, and ethical AI.
              </p>
              <Button asChild size="lg" className="mt-8 bg-white text-purple-900 hover:bg-purple-100">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
