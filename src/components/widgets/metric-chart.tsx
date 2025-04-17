'use client'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'

type chartDataProps = {
  value: number
}

type MetricsChartProps = React.ComponentProps<typeof Card> & {
  className?: string
  title: string
  value: React.ReactNode | string
  chartData: chartDataProps[]
  percentage: number
  detailPercentage: string
}

export const MetricChart = ({
  className,
  title,
  value,
  chartData,
  percentage,
  detailPercentage,
  ...props
}: MetricsChartProps) => {
  return (
    <Card className={cn('shadow-none', className)} {...props}>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <div className="flex w-full items-center justify-between">
          <CardTitle className="text-2xl">{value}</CardTitle>
          <ResponsiveContainer width={100} height={40}>
            <AreaChart data={chartData}>
              <Area
                type="monotone"
                dataKey="value"
                stroke={percentage >= 0 ? '#16a34a' : '#dc2626'}
                fill="transparent"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {typeof percentage === 'number' && detailPercentage && (
          <CardDescription
            className={cn(
              'flex gap-1',
              percentage >= 0 ? 'text-green-500' : 'text-red-500'
            )}
          >
            <div className="flex items-center gap-0.5">
              {percentage >= 0 ? (
                <ArrowUpRight size={16} strokeWidth={3} />
              ) : (
                <ArrowDownRight size={16} strokeWidth={3} />
              )}
              <span>{Math.abs(percentage)}%</span>
            </div>
            <span className="text-muted-foreground">{detailPercentage}</span>
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  )
}
