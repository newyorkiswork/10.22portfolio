import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function TopReferrers() {
  const topReferrers = [
    {
      source: "Google",
      visitors: 542,
      percentage: "41%",
      conversion: "3.2%",
    },
    {
      source: "LinkedIn",
      visitors: 287,
      percentage: "22%",
      conversion: "5.7%",
    },
    {
      source: "GitHub",
      visitors: 184,
      percentage: "14%",
      conversion: "4.8%",
    },
    {
      source: "Twitter",
      visitors: 142,
      percentage: "11%",
      conversion: "3.9%",
    },
    {
      source: "Medium",
      visitors: 98,
      percentage: "7%",
      conversion: "2.5%",
    },
    {
      source: "YouTube",
      visitors: 71,
      percentage: "5%",
      conversion: "3.1%",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-medium text-slate-900 dark:text-white">Source</TableHead>
          <TableHead className="text-right font-medium text-slate-900 dark:text-white">Visitors</TableHead>
          <TableHead className="text-right font-medium text-slate-900 dark:text-white">% of Total</TableHead>
          <TableHead className="text-right font-medium text-slate-900 dark:text-white">Conversion Rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topReferrers.map((referrer, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-slate-800 dark:text-slate-200">{referrer.source}</TableCell>
            <TableCell className="text-right text-slate-700 dark:text-slate-300">{referrer.visitors}</TableCell>
            <TableCell className="text-right text-slate-700 dark:text-slate-300">{referrer.percentage}</TableCell>
            <TableCell className="text-right text-slate-700 dark:text-slate-300">{referrer.conversion}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
