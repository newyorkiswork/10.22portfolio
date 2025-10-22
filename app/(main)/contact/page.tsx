"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Send } from "lucide-react"
import { useTrackContactFormSubmission } from "@/components/analytics/custom-events"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const trackFormSubmission = useTrackContactFormSubmission()
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error("Please fill in all fields")
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address")
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Track form submission
      trackFormSubmission()

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      setIsSubmitting(false)
      // Show error toast
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-cyan-50/30 dark:from-slate-950 dark:via-purple-950/20 dark:to-cyan-950/20 py-20">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-shapes.png')] opacity-[0.03]" />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600/10 to-cyan-600/10 px-4 py-2 text-sm font-medium text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50 mb-6">
              <Mail className="h-4 w-4" />
              Get in Touch
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Let's Create{" "}
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Have a project in mind or want to discuss a collaboration? I'd love to hear from you and explore how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className="w-2 h-6 bg-gradient-to-b from-purple-600 to-cyan-600 rounded-full" />
                    Why Work With Me?
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something amazing together!
                  </p>
                </div>

                <div className="space-y-4">
                  <Card className="border-2 hover:border-purple-500 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-cyan-100 dark:from-purple-900/30 dark:to-cyan-900/30 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-lg font-semibold">Email</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        <a
                          href="mailto:robert@example.com"
                          className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
                        >
                          robert@example.com
                        </a>
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-purple-500 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-cyan-100 dark:from-purple-900/30 dark:to-cyan-900/30 flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-lg font-semibold">Connect</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-3">
                        <a href="#" className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                          <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                        </a>
                        <a href="#" className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                          <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                        </a>
                        <a href="#" className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                          <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-950/20 dark:to-cyan-950/20 p-6 border border-purple-200/50 dark:border-purple-800/50">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Response Time</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    I typically respond to all inquiries within 24 hours. For urgent matters, please include "URGENT" in your subject line.
                  </p>
                </div>
              </div>

              <div>
                <Card className="border-2 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send a Message</CardTitle>
                    <CardDescription className="text-base">Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800">
                        <p className="font-semibold text-lg mb-2">✨ Message sent successfully!</p>
                        <p className="text-sm">Thank you for reaching out. I'll respond to your message within 24 hours.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            Name *
                          </label>
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required
                            className="h-12 border-2 focus:border-purple-500"
                            placeholder="Your name"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-12 border-2 focus:border-purple-500"
                            placeholder="your.email@example.com"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            Subject *
                          </label>
                          <Input 
                            id="subject" 
                            name="subject" 
                            value={formData.subject} 
                            onChange={handleChange} 
                            required
                            className="h-12 border-2 focus:border-purple-500"
                            placeholder="What's this about?"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="border-2 focus:border-purple-500 resize-none"
                            placeholder="Tell me about your project or idea..."
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full h-12 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg shadow-purple-500/30 text-base font-semibold" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
