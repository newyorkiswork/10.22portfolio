"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
} from "recharts"

const data = [
  {
    name: "Jan",
    visitors: 157,
    pageViews: 428,
  },
  {
    name: "Feb",
    visitors: 245,
    pageViews: 612,
  },
  {
    name: "Mar",
    visitors: 287,
    pageViews: 723,
  },
  {
    name: "Apr",
    visitors: 375,
    pageViews: 892,
  },
  {
    name: "May",
    visitors: 410,
    pageViews: 1023,
  },
  {
    name: "Jun",
    visitors: 502,
    pageViews: 1253,
  },
  {
    name: "Jul",
    visitors: 635,
    pageViews: 1598,
  },
  {
    name: "Aug",
    visitors: 809,
    pageViews: 2042,
  },
  {
    name: "Sep",
    visitors: 947,
    pageViews: 2361,
  },
  {
    name: "Oct",
    visitors: 1102,
    pageViews: 2798,
  },
  {
    name: "Nov",
    visitors: 1238,
    pageViews: 3214,
  },
  {
    name: "Dec",
    visitors: 1324,
    pageViews: 4271,
  },
]

export function Overview() {
  const [chartType, setChartType] = useState<"line" | "bar">("line")

  const toggleChartType = () => {
    setChartType(chartType === "line" ? "bar" : "line")
  }

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-end">
        <Button variant="outline" size="sm" onClick={toggleChartType} className="text-xs">
          {chartType === "line" ? "Show Bar Chart" : "Show Line Chart"}
        </Button>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        {chartType === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Visitors</span>
                          <span className="font-bold text-muted-foreground">{payload[0].value}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Page Views</span>
                          <span className="font-bold text-muted-foreground">{payload[1].value}</span>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Legend />
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="visitors"
              name="Visitors"
              activeDot={{
                r: 6,
                style: { fill: "var(--theme-primary)", opacity: 0.8 },
              }}
              style={{
                stroke: "var(--theme-primary)",
              }}
            />
            <Line
              type="monotone"
              dataKey="pageViews"
              name="Page Views"
              strokeWidth={2}
              activeDot={{
                r: 8,
                style: { fill: "#8b5cf6", opacity: 0.8 },
              }}
              style={{
                stroke: "#8b5cf6",
              }}
            />
          </LineChart>
        ) : (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Visitors</span>
                          <span className="font-bold text-muted-foreground">{payload[0].value}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Page Views</span>
                          <span className="font-bold text-muted-foreground">{payload[1].value}</span>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Legend />
            <Bar dataKey="visitors" name="Visitors" fill="var(--theme-primary)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="pageViews" name="Page Views" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}
