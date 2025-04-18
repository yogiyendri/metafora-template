'use client'

import React from 'react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { month: 'January', sales: 1120, orders: 210, visits: 4200 },
  { month: 'February', sales: 980, orders: 190, visits: 3900 },
  { month: 'March', sales: 1240, orders: 230, visits: 4600 },
  { month: 'April', sales: 1180, orders: 220, visits: 4400 },
  { month: 'May', sales: 1320, orders: 245, visits: 5100 },
  { month: 'June', sales: 1080, orders: 195, visits: 3700 },
  { month: 'July', sales: 950, orders: 175, visits: 3400 },
  { month: 'August', sales: 1230, orders: 225, visits: 4600 },
  { month: 'September', sales: 1340, orders: 240, visits: 5200 },
  { month: 'October', sales: 1580, orders: 280, visits: 5800 },
  { month: 'November', sales: 2120, orders: 370, visits: 7200 },
  { month: 'December', sales: 2740, orders: 450, visits: 8400 },
]

const chartConfig = {
  sales: {
    label: 'Sales',
    color: 'var(--chart-1)',
  },
  orders: {
    label: 'Orders',
    color: 'var(--chart-2)',
  },
  visits: {
    label: 'Visits',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig

export const SalesReport = () => {
  const [selected, setSelected] = React.useState<'sales' | 'orders' | 'visits'>(
    'sales'
  )

  const filteredData = chartData.map((item) => {
    return {
      month: item.month,
      [selected]: item[selected],
    }
  })

  return (
    <Card className="h-full shadow-none">
      <CardHeader>
        <div className="flex flex-col justify-between gap-1.5 md:flex-row">
          <div className="space-y-1.5">
            <CardTitle className="capitalize">{selected} Report</CardTitle>
            <CardDescription>
              Analyze sales, orders, and visits over time—clearly visualized in
              one simple chart.
            </CardDescription>
          </div>
          <div className="flex h-fit w-fit overflow-hidden rounded-md border">
            <Button
              variant={selected === 'sales' ? 'default' : 'ghost'}
              onClick={() => setSelected('sales')}
              className="rounded-none"
            >
              Sales
            </Button>
            <Button
              variant={selected === 'orders' ? 'default' : 'ghost'}
              onClick={() => setSelected('orders')}
              className="rounded-none"
            >
              Orders
            </Button>
            <Button
              variant={selected === 'visits' ? 'default' : 'ghost'}
              onClick={() => setSelected('visits')}
              className="rounded-none"
            >
              Visits
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-80">
          <LineChart
            accessibilityLayer
            data={filteredData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey={selected}
              type="monotone"
              stroke={chartConfig[selected].color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
