import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentVisits() {
  const recentVisits = [
    {
      page: "/projects/ai-content-generator",
      time: "2 minutes ago",
      country: "US",
      device: "Desktop",
      browser: "Chrome",
    },
    {
      page: "/about",
      time: "5 minutes ago",
      country: "UK",
      device: "Mobile",
      browser: "Safari",
    },
    {
      page: "/",
      time: "12 minutes ago",
      country: "DE",
      device: "Desktop",
      browser: "Firefox",
    },
    {
      page: "/vision",
      time: "18 minutes ago",
      country: "CA",
      device: "Tablet",
      browser: "Chrome",
    },
    {
      page: "/projects",
      time: "25 minutes ago",
      country: "JP",
      device: "Desktop",
      browser: "Edge",
    },
  ]

  return (
    <div className="space-y-8">
      {recentVisits.map((visit, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300">
              {visit.country}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{visit.page}</p>
            <p className="text-sm text-muted-foreground">
              {visit.time} • {visit.device} • {visit.browser}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
