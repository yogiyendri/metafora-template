import React from 'react'
import { Grid, GridItem } from '@/components/ui/grid'
import { ChartRadialDefault } from '@/components/charts/chart-radial-default'
import { ChartRadialLabel } from '@/components/charts/chart-radial-label'
import { ChartRadialGrid } from '@/components/charts/chart-radial-grid'
import { ChartRadialText } from '@/components/charts/chart-radial-text'
import { ChartRadialShape } from '@/components/charts/chart-radial-shape'
import { ChartRadialStacked } from '@/components/charts/chart-radial-stacked'

export default function ChartRadialPage() {
  return (
    <Grid>
      <GridItem span={4}>
        <ChartRadialDefault />
      </GridItem>
      <GridItem span={4}>
        <ChartRadialLabel />
      </GridItem>
      <GridItem span={4}>
        <ChartRadialGrid />
      </GridItem>
      <GridItem span={4}>
        <ChartRadialText />
      </GridItem>
      <GridItem span={4}>
        <ChartRadialShape />
      </GridItem>
      <GridItem span={4}>
        <ChartRadialStacked />
      </GridItem>
    </Grid>
  )
}
