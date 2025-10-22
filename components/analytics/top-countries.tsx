import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function TopCountries() {
  const topCountries = [
    {
      country: "United States",
      code: "US",
      visitors: 487,
      percentage: "36.8%",
      change: "+12.4%",
    },
    {
      country: "United Kingdom",
      code: "UK",
      visitors: 189,
      percentage: "14.3%",
      change: "+8.7%",
    },
    {
      country: "Germany",
      code: "DE",
      visitors: 154,
      percentage: "11.6%",
      change: "+15.2%",
    },
    {
      country: "Canada",
      code: "CA",
      visitors: 132,
      percentage: "10.0%",
      change: "+7.8%",
    },
    {
      country: "India",
      code: "IN",
      visitors: 98,
      percentage: "7.4%",
      change: "+22.5%",
    },
    {
      country: "Australia",
      code: "AU",
      visitors: 76,
      percentage: "5.7%",
      change: "+9.3%",
    },
    {
      country: "Japan",
      code: "JP",
      visitors: 65,
      percentage: "4.9%",
      change: "+5.2%",
    },
    {
      country: "France",
      code: "FR",
      visitors: 54,
      percentage: "4.1%",
      change: "+6.8%",
    },
    {
      country: "Brazil",
      code: "BR",
      visitors: 42,
      percentage: "3.2%",
      change: "+18.4%",
    },
    {
      country: "Netherlands",
      code: "NL",
      visitors: 27,
      percentage: "2.0%",
      change: "+4.5%",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-medium text-slate-900 dark:text-white">Country</TableHead>
          <TableHead className="text-right font-medium text-slate-900 dark:text-white">Visitors</TableHead>
          <TableHead className="text-right font-medium text-slate-900 dark:text-white">% of Total</TableHead>
          <TableHead className="text-right font-medium text-slate-900 dark:text-white">Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topCountries.map((country, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-slate-800 dark:text-slate-200">
              <div className="flex items-center">
                <span className="mr-2">{country.code}</span>
                {country.country}
              </div>
            </TableCell>
            <TableCell className="text-right text-slate-700 dark:text-slate-300">{country.visitors}</TableCell>
            <TableCell className="text-right text-slate-700 dark:text-slate-300">{country.percentage}</TableCell>
            <TableCell className="text-right text-green-700 dark:text-green-400">{country.change}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
