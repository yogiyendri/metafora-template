import React from 'react'
import { Grid, GridItem } from '@/components/ui/grid'
import { MetricIcon } from '@/components/widgets/metrics/metric-icon'
import { Box, CircleDollarSign, RotateCcw, Users2 } from 'lucide-react'

export default function MetricsPage() {
  return (
    <Grid>
      <GridItem span={3}>
        <MetricIcon
          title="Sales"
          value={(4520).toLocaleString('en-US', {
            currency: 'USD',
            style: 'currency',
            maximumFractionDigits: 0,
          })}
          percentage={12.43}
          detailPercentage="vs last year"
          icon={CircleDollarSign}
          color="green"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricIcon
          title="Refunds"
          value={128}
          percentage={-5.2}
          detailPercentage="vs last month"
          icon={RotateCcw}
          color="red"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricIcon
          title="Visitors Today"
          value={3254}
          percentage={1.2}
          detailPercentage="vs yesterday"
          icon={Users2}
          color="yellow"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricIcon
          title="Orders"
          value={542}
          percentage={8.5}
          detailPercentage="vs last week"
          icon={Box}
          color="purple"
        />
      </GridItem>
    </Grid>
  )
}
