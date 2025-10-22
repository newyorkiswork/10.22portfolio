"use client"

import { useEffect } from "react"
import { track } from "@vercel/analytics"

type EventProps = {
  eventName: string
  properties?: Record<string, string | number | boolean>
}

export function trackCustomEvent({ eventName, properties }: EventProps) {
  track(eventName, properties)
}

export function useTrackPageView() {
  useEffect(() => {
    // This will automatically track page views
    // The Analytics component handles this by default
  }, [])
}

export function useTrackProjectView(projectId: string, projectTitle: string) {
  useEffect(() => {
    trackCustomEvent({
      eventName: "project_view",
      properties: {
        projectId,
        projectTitle,
      },
    })
  }, [projectId, projectTitle])
}

export function useTrackContactFormSubmission() {
  const trackFormSubmission = () => {
    trackCustomEvent({
      eventName: "contact_form_submission",
      properties: {
        source: "contact_page",
      },
    })
  }

  return trackFormSubmission
}

export function useTrackAIConciergeInteraction() {
  const trackConciergeOpen = () => {
    trackCustomEvent({
      eventName: "ai_concierge_open",
    })
  }

  const trackConciergeMessage = (messageLength: number) => {
    trackCustomEvent({
      eventName: "ai_concierge_message",
      properties: {
        messageLength,
      },
    })
  }

  return { trackConciergeOpen, trackConciergeMessage }
}
