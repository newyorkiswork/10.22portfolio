"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, X, Send } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useTrackAIConciergeInteraction } from "@/components/analytics/custom-events"
import { useToast } from "@/hooks/use-toast"

export default function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi there! I'm your AI concierge. How can I help you navigate Robert's portfolio or answer questions about his work?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const { trackConciergeOpen, trackConciergeMessage } = useTrackAIConciergeInteraction()
  const { toast } = useToast()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Focus input when concierge opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  const handleSend = () => {
    if (!input.trim()) return

    // Track the message
    trackConciergeMessage(input.length)

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])

    // Clear input and show typing indicator
    setInput("")
    setIsTyping(true)

    // Simulate AI response with typing delay
    setTimeout(() => {
      // Generate a more contextual response based on the input
      let response = ""
      const lowerInput = input.toLowerCase()

      if (lowerInput.includes("project") || lowerInput.includes("work")) {
        response = `I'd be happy to tell you about Robert's projects. He specializes in AI development, full-stack applications, and innovative interfaces. Would you like to explore his AI Content Generator, Predictive Analytics Dashboard, or Neural Interface Prototype?`
      } else if (lowerInput.includes("contact") || lowerInput.includes("hire") || lowerInput.includes("work with")) {
        response = `If you're interested in working with Robert, you can reach out through the contact form on the Contact page. He's currently open to new opportunities and collaborations.`
      } else if (lowerInput.includes("experience") || lowerInput.includes("background")) {
        response = `Robert has over 7 years of experience in AI and software development. He's worked with companies like TechVision AI, InnovateLab, and DataSphere, focusing on machine learning, natural language processing, and full-stack development.`
      } else if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("stack")) {
        response = `Robert's technical skills include AI development (TensorFlow, PyTorch), full-stack engineering (React, Node.js), cloud architecture (AWS, GCP), and data science. He's particularly strong in building AI-powered applications and interfaces.`
      } else {
        response = `Thanks for your question about "${input}". Robert has extensive experience in this area. Would you like to see his related projects, learn about his approach, or discuss how he might help with your specific needs?`
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-purple-600 shadow-lg hover:bg-purple-700 transition-all duration-300 z-50"
        onClick={() => {
          setIsOpen(true)
          trackConciergeOpen()
        }}
        aria-label="Open AI Concierge"
      >
        <Bot className="h-6 w-6" />
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader className="flex flex-row items-center justify-between">
            <SheetTitle>AI Concierge</SheetTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close">
              <X className="h-4 w-4" />
            </Button>
          </SheetHeader>

          <div className="mt-4 flex h-[calc(100vh-12rem)] flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === "assistant"
                        ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                        : "bg-purple-600 text-white"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg px-4 py-2 bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                    <div className="flex space-x-1">
                      <div className="typing-dot"></div>
                      <div className="typing-dot animation-delay-200"></div>
                      <div className="typing-dot animation-delay-400"></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="border-t p-4">
              <form
                className="flex space-x-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
              >
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  onKeyDown={handleKeyDown}
                  disabled={isTyping}
                  className="flex-1"
                />
                <Button type="submit" disabled={!input.trim() || isTyping} aria-label="Send message">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
