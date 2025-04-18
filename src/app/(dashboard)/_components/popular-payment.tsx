'use client'

import React from 'react'
import { Pie, PieChart } from 'recharts'
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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const paymentMethods = [
  { method: 'ewallet', percentage: 45, fill: 'var(--color-ewallet)' },
  { method: 'bank', percentage: 25, fill: 'var(--color-bank)' },
  { method: 'credit', percentage: 18, fill: 'var(--color-credit)' },
  { method: 'cash', percentage: 8, fill: 'var(--color-cash)' },
  { method: 'kredivo', percentage: 4, fill: 'var(--color-kredivo)' },
]

const chartConfig = {
  ewallet: {
    label: 'E-Wallet',
    color: 'var(--chart-1)',
  },
  bank: {
    label: 'Bank Transfer',
    color: 'var(--chart-2)',
  },
  credit: {
    label: 'Credit Card',
    color: 'var(--chart-3)',
  },
  cash: {
    label: 'Cash on Delivery',
    color: 'var(--chart-4)',
  },
  kredivo: {
    label: 'Kredivo / PayLater',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig

export const PopulayPayment = () => {
  return (
    <Card className="h-full shadow-none">
      <CardHeader>
        <CardTitle>Popular Payment</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-80"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="method" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
            <Pie
              data={paymentMethods}
              dataKey="percentage"
              nameKey="method"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
