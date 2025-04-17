'use client'

import { TrendingDown, TrendingUp } from 'lucide-react'
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from 'recharts'

import { cn } from '@/lib/utils'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ChartContainer } from '@/components/ui/chart'

interface MetricsProgressProps {
  className?: string
  title: string
  value: string | number
  percentage: number
  detailPercentage: string
  progress: number
}

const getProgressColor = (progress: number) => {
  if (progress <= 30) return '#3b82f6'
  if (progress <= 70) return '#a855f7'
  return '#ef4444'
}

export const MetricProgress = ({
  className,
  title,
  value,
  percentage,
  detailPercentage,
  progress,
}: MetricsProgressProps) => {
  const color = getProgressColor(progress)

  const dataChart = [
    {
      name: 'Data',
      percent: progress,
      fill: 'var(--color-data)',
    },
  ]

  return (
    <Card className={cn('shadow-none', className)}>
      <div className="relative flex justify-between">
        <CardHeader className="w-full">
          <div className="space-y-2">
            <CardDescription>{title}</CardDescription>
            <CardTitle className="text-2xl">{value}</CardTitle>
          </div>
          <CardDescription
            className={cn(
              'flex gap-1',
              percentage >= 0 ? 'text-green-500' : 'text-red-600'
            )}
          >
            <div className="flex items-center gap-1">
              {percentage >= 0 ? (
                <TrendingUp size={16} strokeWidth={3} />
              ) : (
                <TrendingDown size={16} strokeWidth={3} />
              )}
              <span>{percentage !== null ? `${percentage}%` : '0%'}</span>
            </div>
            <span className="text-muted-foreground">{detailPercentage}</span>
          </CardDescription>
        </CardHeader>

        <ChartContainer
          config={{
            data: {
              label: `${title}`,
              color: `${color}`,
            },
          }}
          className="absolute top-1/2 right-6 aspect-square max-h-[100px] min-w-[100px] -translate-y-1/2"
        >
          <RadialBarChart
            data={dataChart}
            startAngle={90}
            endAngle={90 - (360 * dataChart[0].percent) / 100}
            innerRadius={40}
            outerRadius={60}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-card"
              polarRadius={[44, 36]}
            />
            <RadialBar dataKey="percent" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-base font-semibold"
                        >
                          {dataChart[0].percent.toLocaleString()} %
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </div>
    </Card>
  )
}
