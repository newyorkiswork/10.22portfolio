"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { addDays, format } from "date-fns"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function CalendarDateRangePicker({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 30),
  })

  const [selectedRange, setSelectedRange] = React.useState("30days")
  const { toast } = useToast()

  const handleRangeChange = (value: string) => {
    setSelectedRange(value)

    const today = new Date()
    let from: Date

    switch (value) {
      case "7days":
        from = addDays(today, -7)
        break
      case "30days":
        from = addDays(today, -30)
        break
      case "90days":
        from = addDays(today, -90)
        break
      case "year":
        from = addDays(today, -365)
        break
      default:
        from = addDays(today, -30)
    }

    setDate({
      from,
      to: today,
    })

    // Here you would typically trigger an analytics data refresh
    // For example:
    // refreshAnalyticsData({ from, to: today })

    // For demonstration, show a toast notification
    if (typeof window !== "undefined") {
      toast({
        title: "Date range updated",
        description: `Showing data from ${format(from, "MMM d, yyyy")} to ${format(today, "MMM d, yyyy")}`,
        duration: 3000,
      })
    }
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Select value={selectedRange} onValueChange={handleRangeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="7days">Last 7 days</SelectItem>
          <SelectItem value="30days">Last 30 days</SelectItem>
          <SelectItem value="90days">Last 90 days</SelectItem>
          <SelectItem value="year">Last year</SelectItem>
        </SelectContent>
      </Select>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
