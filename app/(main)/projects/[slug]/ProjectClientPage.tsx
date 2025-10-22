"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { useTrackProjectView } from "@/components/analytics/custom-events"

// Simplified project data to reduce complexity
const projectsData = {
  "auro-laundry-ai-platform": {
    title: "Auro - The Laundry AI Platform",
    description:
      "Revolutionizing laundry services with AI-powered scheduling, stain recognition, and efficiency optimization",
    fullDescription: `
      Auro represents a revolutionary approach to laundry management, combining artificial intelligence with IoT technology to transform an everyday chore into an efficient, optimized experience. This comprehensive platform serves both commercial laundry operations and individual consumers with smart solutions that reduce resource consumption, extend equipment lifespan, and deliver superior cleaning results.

      The platform's core innovation lies in its advanced stain recognition system, which uses computer vision to identify and analyze stains, then recommend precise treatment protocols. This capability alone reduces rewash rates by up to 37% in commercial settings and helps consumers achieve professional-quality results at home.

      For consumers, the Auro mobile app provides a seamless interface to schedule laundry services, receive real-time updates, and access personalized care recommendations. The system learns from each interaction, continuously improving its recommendations based on user feedback and results.
    `,
    image: "laundry-ai-platform",
    tags: ["AI", "IoT", "Laundry Tech", "Computer Vision", "Predictive Analytics"],
    features: [
      "Advanced Stain Recognition System",
      "Smart Scheduling and Capacity Optimization",
      "Predictive Maintenance",
      "Energy and Water Usage Optimization",
      "Personalized Fabric Care Recommendations",
      "Real-time Monitoring and Notifications",
      "Carbon Footprint Tracking",
      "Integration with Smart Home Systems",
    ],
    technologies: [
      "Computer Vision",
      "IoT Sensors",
      "Machine Learning",
      "React Native",
      "Node.js and Express",
      "MongoDB",
      "AWS IoT Core",
      "GraphQL",
    ],
    demoUrl: "https://auro-laundry.example.com",
    githubUrl: "https://github.com/example/auro-platform",
    images: ["auro-dashboard", "auro-stain-recognition", "auro-scheduling"],
  },
  "new-york-is-home": {
    title: "New York is Home - Luxury AI Shopping Assistant",
    description:
      "Elevating luxury shopping experiences with personalized recommendations and virtual styling for discerning clients",
    fullDescription: `
      New York is Home redefines luxury shopping by combining artificial intelligence with deep expertise in high-end fashion, home decor, and lifestyle products. This premium platform caters exclusively to discerning clients who value personalization, curation, and exceptional service in their shopping experience.

      Unlike conventional e-commerce platforms, New York is Home builds sophisticated taste profiles that go beyond basic preferences. The system analyzes subtle style indicators, contextual needs, and long-term collection building to create a truly personalized luxury shopping journey.

      What truly sets New York is Home apart is its hybrid approach, combining AI recommendations with human expertise. The platform maintains exclusive partnerships with premium brands and boutiques across New York City, providing access to limited-edition items and bespoke experiences that aren't available through traditional channels.
    `,
    image: "luxury-shopping-assistant",
    tags: ["AI", "Luxury Retail", "Personalization", "Virtual Styling", "Concierge Service"],
    features: [
      "Sophisticated Taste Modeling",
      "Virtual Styling and Visualization",
      "Exclusive Product Access",
      "Hybrid AI-Human Concierge",
      "Occasion-based Recommendation Engine",
      "Collection Building and Wardrobe Management",
      "Personalized Lookbooks",
      "White Glove Delivery Service",
    ],
    technologies: [
      "GPT-4",
      "Computer Vision",
      "Augmented Reality",
      "React",
      "Swift",
      "PostgreSQL",
      "Azure Cloud",
      "Elasticsearch",
    ],
    demoUrl: "https://newyorkishome.example.com",
    githubUrl: "https://github.com/example/nyih-platform",
    images: ["nyih-homepage", "nyih-virtual-styling", "nyih-product-recommendations"],
  },
  "agnes-shopping-assistant": {
    title: "Agnes v.2.1 - Agentic AI Shopping Assistant",
    description:
      "Autonomous shopping assistant that learns preferences, makes decisions, and streamlines the entire shopping journey",
    fullDescription: `
      Agnes v.2.1 represents a paradigm shift in e-commerce, moving beyond passive recommendation systems to true agentic AI that acts autonomously on behalf of users. This revolutionary shopping assistant doesn't just suggest products—it actively manages the entire shopping journey with minimal human intervention.

      At its core, Agnes employs a sophisticated multi-agent architecture where specialized sub-agents collaborate to handle different aspects of the shopping process. The Research Agent identifies optimal products based on user needs, the Negotiation Agent finds the best prices, and the Budget Agent ensures all purchases align with financial constraints.

      Perhaps most impressively, Agnes can proactively identify needs based on usage patterns and seasonal changes, suggesting timely purchases before users even recognize the need themselves.
    `,
    image: "agentic-shopping-assistant",
    tags: ["Agentic AI", "E-commerce", "Autonomous Systems", "Multi-agent Architecture", "Proactive Computing"],
    features: [
      "Autonomous Shopping Journey Management",
      "Multi-agent Architecture",
      "Proactive Need Identification",
      "Price Tracking and Optimal Purchase Timing",
      "Natural Language Shopping Interface",
      "Cross-platform Integration",
      "Purchase Justification and Transparency",
      "Preference Learning from Implicit Feedback",
    ],
    technologies: [
      "Large Language Models",
      "Reinforcement Learning from Human Feedback",
      "Multi-agent Orchestration Framework",
      "WebAutomation",
      "React and Next.js",
      "Vector Database",
      "Temporal",
      "Redis",
    ],
    demoUrl: "https://agnes-shopping.example.com",
    githubUrl: "https://github.com/example/agnes-platform",
    images: ["agnes-interface", "agnes-multi-agent-view", "agnes-shopping-journey"],
  },
  "chimera-pro-ai-resume": {
    title: "Chimera Pro - The AI Resume",
    description:
      "AI-driven resume platform designed to outperform LinkedIn and Indeed with intelligent job matching and career advancement tools",
    fullDescription: `
      Chimera Pro revolutionizes the job search and career advancement process by reimagining the resume as a dynamic, intelligent document that adapts to each opportunity. Unlike static platforms like LinkedIn and Indeed, Chimera Pro uses advanced AI to create personalized presentations of your professional experience that resonate with specific employers and roles.

      The platform's core innovation is its ability to analyze both the explicit and implicit requirements of job postings, understanding not just the stated qualifications but the underlying competencies and potential that employers are seeking.

      Beyond job applications, Chimera Pro functions as a comprehensive career development system. The platform continuously analyzes emerging skills and trends in your industry, identifying potential gaps in your qualifications and suggesting targeted learning opportunities.
    `,
    image: "ai-resume-platform",
    tags: ["AI Resume", "Career Tech", "Job Matching", "Skill Analysis", "Professional Development"],
    features: [
      "Dynamic Resume Generation",
      "AI-powered Job Matching",
      "Skill Gap Analysis",
      "Career Trajectory Modeling",
      "Interview Preparation",
      "Networking Recommendations",
      "Achievement Optimization",
      "Continuous Learning Integration",
    ],
    technologies: [
      "Natural Language Processing",
      "Machine Learning",
      "Graph Databases",
      "React and TypeScript",
      "Python and FastAPI",
      "AWS",
      "TensorFlow",
      "Elasticsearch",
    ],
    demoUrl: "https://chimerapro.example.com",
    githubUrl: "https://github.com/example/chimera-platform",
    images: ["chimera-dashboard", "chimera-resume-builder", "chimera-job-matching"],
  },
  "project-ascend-pro-budget": {
    title: "Project Ascend Pro - The AI Agentic Budget App",
    description:
      "AI-powered agentic budget application that revolutionizes personal finance management through automated planning and intelligent insights",
    fullDescription: `
      Project Ascend Pro transforms personal finance management from a passive tracking exercise into an active, intelligent system that optimizes your financial health. This revolutionary platform leverages agentic AI to create a financial assistant that doesn't just record transactions but actively works to improve your financial situation.

      At its foundation, Project Ascend Pro employs sophisticated financial modeling that analyzes your spending patterns, income fluctuations, and financial goals to create dynamic budget allocations that adapt in real-time.

      The platform's predictive capabilities are particularly powerful, forecasting potential financial challenges weeks or months in advance by analyzing patterns and external factors. This foresight allows users to make small adjustments early rather than facing significant problems later.
    `,
    image: "ai-budget-application",
    tags: ["Agentic AI", "Personal Finance", "Budgeting", "Financial Planning", "Automated Savings"],
    features: [
      "Autonomous Budget Optimization",
      "Predictive Financial Modeling",
      "Automated Bill Negotiation",
      "Smart Savings",
      "Financial Opportunity Detection",
      "Behavioral Finance Insights",
      "Goal-based Planning",
      "Tax Optimization",
    ],
    technologies: [
      "Reinforcement Learning",
      "Time-series Analysis",
      "Natural Language Processing",
      "Plaid API",
      "React Native",
      "Firebase",
      "Python",
      "TensorFlow",
    ],
    demoUrl: "https://ascendpro.example.com",
    githubUrl: "https://github.com/example/ascend-platform",
    images: ["ascend-dashboard", "ascend-budget-planning", "ascend-savings-optimization"],
  },
}

// This function gets project data from our simplified data object
function getProjectData(slug: string) {
  return projectsData[slug as keyof typeof projectsData] || null
}

export default function ProjectClientPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug)

  // Add this hook to track project views
  useTrackProjectView(params.slug, project?.title || "Unknown Project")

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="font-space text-4xl font-bold">Project Not Found</h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="mt-8">
          <h1 className="font-space text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {project.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags &&
              project.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
                >
                  {tag}
                </span>
              ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-xl">
            <Image
              src={`/abstract-geometric-shapes.png?height=600&width=1200&query=${project.image} detailed tech project visualization with futuristic interface`}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild className="flex-1">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          </div>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="font-space text-2xl font-bold text-slate-900 dark:text-white">Overview</h2>
              <div className="mt-4 space-y-4 text-slate-700 dark:text-slate-300">
                {project.fullDescription &&
                  project.fullDescription
                    .split("\n\n")
                    .map((paragraph: string, index: number) => <p key={index}>{paragraph}</p>)}
              </div>
            </section>

            <section>
              <h2 className="font-space text-2xl font-bold text-slate-900 dark:text-white">Key Features</h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.features &&
                  project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-purple-100 text-center text-xs font-bold leading-5 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300">
                        {index + 1}
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
              </ul>
            </section>

            <section>
              <h2 className="font-space text-2xl font-bold text-slate-900 dark:text-white">Technologies Used</h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.technologies &&
                  project.technologies.map((tech: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-slate-100 text-center text-xs font-bold leading-5 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                        {index + 1}
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">{tech}</span>
                    </li>
                  ))}
              </ul>
            </section>

            <section>
              <h2 className="font-space text-2xl font-bold text-slate-900 dark:text-white">Gallery</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.images &&
                  project.images.map((image: string, index: number) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <Image
                        src={`/abstract-geometric-shapes.png?height=300&width=500&query=${image} interface screenshot with futuristic design`}
                        alt={`${project.title} - Screenshot ${index + 1}`}
                        width={500}
                        height={300}
                        className="w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
