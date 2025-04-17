import React from 'react'
import { Grid, GridItem } from '@/components/ui/grid'
import { MetricIcon } from '@/components/widgets/metric-icon'
import { Box, CircleDollarSign, RotateCcw, Users2 } from 'lucide-react'
import { MetricChart } from '@/components/widgets/metric-chart'
import { MetricProgress } from '@/components/widgets/metric-progress'
import { Counter } from '@/components/ui/counter'

export default function MetricsPage() {
  return (
    <Grid>
      <GridItem span={3}>
        <MetricIcon
          title="Sales"
          value={<Counter value={4520} locale="en-US" currency="USD" />}
          percentage={12.43}
          detailPercentage="vs last year"
          icon={CircleDollarSign}
          color="green"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricIcon
          title="Refunds"
          value={<Counter value={128} />}
          percentage={-5.2}
          detailPercentage="vs last month"
          icon={RotateCcw}
          color="red"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricIcon
          title="Visitors Today"
          value={<Counter value={3254} />}
          percentage={1.2}
          detailPercentage="vs yesterday"
          icon={Users2}
          color="yellow"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricIcon
          title="Orders"
          value={<Counter value={542} />}
          percentage={8.5}
          detailPercentage="vs last week"
          icon={Box}
          color="purple"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricChart
          title="Sales"
          value={<Counter value={4520} locale="en-US" currency="USD" />}
          chartData={[
            { value: 1690 },
            { value: 1416 },
            { value: 1576 },
            { value: 668 },
            { value: 1602 },
            { value: 836 },
            { value: 1585 },
            { value: 2043 },
            { value: 1320 },
            { value: 1705 },
            { value: 1449 },
            { value: 1963 },
          ]}
          percentage={12.43}
          detailPercentage="vs last year"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricChart
          title="Refunds"
          value={<Counter value={128} />}
          chartData={[
            { value: 10 },
            { value: 12 },
            { value: 15 },
            { value: 8 },
            { value: 7 },
            { value: 9 },
            { value: 13 },
            { value: 6 },
            { value: 5 },
            { value: 11 },
            { value: 8 },
            { value: 13 },
          ]}
          percentage={-5.2}
          detailPercentage="vs last month"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricChart
          title="Visitors Today"
          value={<Counter value={3254} />}
          chartData={[
            { value: 410 },
            { value: 520 },
            { value: 380 },
            { value: 610 },
            { value: 310 },
            { value: 570 },
            { value: 453 },
          ]}
          percentage={1.2}
          detailPercentage="vs yesterday"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricChart
          title="Orders"
          value={<Counter value={542} />}
          chartData={[
            { value: 65 },
            { value: 82 },
            { value: 73 },
            { value: 88 },
            { value: 64 },
            { value: 81 },
            { value: 89 },
          ]}
          percentage={8.5}
          detailPercentage="vs last week"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricProgress
          title="Sales"
          value={<Counter value={4520} locale="en-US" currency="USD" />}
          percentage={12.43}
          detailPercentage="vs last year"
          progress={50}
        />
      </GridItem>
      <GridItem span={3}>
        <MetricProgress
          title="Refunds"
          value={<Counter value={128} />}
          percentage={-5.2}
          detailPercentage="vs last month"
          progress={24}
        />
      </GridItem>
      <GridItem span={3}>
        <MetricProgress
          title="Visitors Today"
          value={<Counter value={3254} />}
          percentage={1.2}
          detailPercentage="vs yesterday"
          progress={76}
        />
      </GridItem>
      <GridItem span={3}>
        <MetricProgress
          title="Orders"
          value={<Counter value={542} />}
          percentage={8.5}
          detailPercentage="vs last week"
          progress={94}
        />
      </GridItem>
    </Grid>
  )
}
