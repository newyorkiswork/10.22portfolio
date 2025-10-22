"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"

export default function AINavToggle() {
  const [isAIEnabled, setIsAIEnabled] = useState(true)
  const { toast } = useToast()

  const toggleAI = () => {
    const newState = !isAIEnabled
    setIsAIEnabled(newState)

    // Store the preference in localStorage for persistence
    localStorage.setItem("aiEnabled", newState.toString())

    // Show toast notification
    toast({
      title: newState ? "AI Features Enabled" : "AI Features Disabled",
      description: newState
        ? "AI-powered features are now active throughout the site."
        : "AI-powered features have been turned off.",
      duration: 3000,
    })

    // Here you would also trigger any global state updates or context changes
    // that would affect AI features throughout the application
  }

  // Load saved preference on mount
  useEffect(() => {
    const savedPreference = localStorage.getItem("aiEnabled")
    if (savedPreference !== null) {
      setIsAIEnabled(savedPreference === "true")
    }
  }, [])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={isAIEnabled ? "default" : "outline"}
            size="icon"
            onClick={toggleAI}
            className={isAIEnabled ? "bg-purple-600 hover:bg-purple-700" : ""}
          >
            <Sparkles className="h-4 w-4" />
            <span className="sr-only">{isAIEnabled ? "Disable AI features" : "Enable AI features"}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isAIEnabled ? "Disable AI features" : "Enable AI features"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
