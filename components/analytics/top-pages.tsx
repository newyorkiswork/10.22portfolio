import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function TopPages() {
  const topPages = [
    {
      page: "/",
      views: 1245,
      visitors: 892,
      bounceRate: "24%",
      avgTime: "2m 12s",
    },
    {
      page: "/projects",
      views: 986,
      visitors: 753,
      bounceRate: "31%",
      avgTime: "3m 04s",
    },
    {
      page: "/projects/ai-content-generator",
      views: 879,
      visitors: 645,
      bounceRate: "18%",
      avgTime: "4m 38s",
    },
    {
      page: "/about",
      views: 721,
      visitors: 512,
      bounceRate: "27%",
      avgTime: "2m 51s",
    },
    {
      page: "/vision",
      views: 654,
      visitors: 487,
      bounceRate: "22%",
      avgTime: "3m 22s",
    },
    {
      page: "/contact",
      views: 542,
      visitors: 398,
      bounceRate: "35%",
      avgTime: "1m 45s",
    },
    {
      page: "/projects/predictive-analytics-dashboard",
      views: 487,
      visitors: 342,
      bounceRate: "19%",
      avgTime: "3m 58s",
    },
    {
      page: "/projects/neural-interface-prototype",
      views: 421,
      visitors: 298,
      bounceRate: "21%",
      avgTime: "3m 42s",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-medium text-slate-900 dark:text-white">Page</TableHead>
          <TableHead className="text-right font-medium text-slate-900 dark:text-white">Views</TableHead>
          <TableHead className="text-right font-medium text-slate-900 dark:text-white">Visitors</TableHead>
          <TableHead className="text-right font-medium text-slate-900 dark:text-white">Bounce Rate</TableHead>
          <TableHead className="text-right font-medium text-slate-900 dark:text-white">Avg. Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topPages.map((page, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-slate-800 dark:text-slate-200">{page.page}</TableCell>
            <TableCell className="text-right text-slate-700 dark:text-slate-300">{page.views}</TableCell>
            <TableCell className="text-right text-slate-700 dark:text-slate-300">{page.visitors}</TableCell>
            <TableCell className="text-right text-slate-700 dark:text-slate-300">{page.bounceRate}</TableCell>
            <TableCell className="text-right text-slate-700 dark:text-slate-300">{page.avgTime}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
