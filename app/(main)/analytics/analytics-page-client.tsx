"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/analytics/date-range-picker"
import { Overview } from "@/components/analytics/overview"
import { RecentVisits } from "@/components/analytics/recent-visits"
import { TopPages } from "@/components/analytics/top-pages"
import { TopReferrers } from "@/components/analytics/top-referrers"
import { TopCountries } from "@/components/analytics/top-countries"
import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function AnalyticsPageClient() {
  const { toast } = useToast()

  const handleRefreshAnalytics = () => {
    toast({
      title: "Analytics refreshed",
      description: "The latest data has been loaded",
      duration: 3000,
    })
  }

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-space text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Analytics</h1>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
              Track visitor engagement and performance metrics
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={handleRefreshAnalytics} className="mr-2">
              <RefreshCw className="h-4 w-4" />
              <span className="sr-only">Refresh analytics</span>
            </Button>
            <CalendarDateRangePicker />
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="referrers">Referrers</TabsTrigger>
            <TabsTrigger value="geography">Geography</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,324</div>
                  <p className="text-xs text-muted-foreground">+12.5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4,271</div>
                  <p className="text-xs text-muted-foreground">+8.2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Visit Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3m 42s</div>
                  <p className="text-xs text-muted-foreground">+14.6% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28.3%</div>
                  <p className="text-xs text-muted-foreground">-4.1% from last month</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Visitor Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Visits</CardTitle>
                  <CardDescription>Latest visitor activity on your portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentVisits />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="pages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>The most visited pages on your portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <TopPages />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="referrers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Referrers</CardTitle>
                <CardDescription>Sources driving traffic to your portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <TopReferrers />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="geography" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Visitor Geography</CardTitle>
                <CardDescription>Where your visitors are coming from</CardDescription>
              </CardHeader>
              <CardContent>
                <TopCountries />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
