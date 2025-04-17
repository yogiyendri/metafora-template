import React from 'react'
import { Grid, GridItem } from '@/components/ui/grid'
import { ChartPieDefault } from '@/components/charts/chart-pie-default'
import { ChartPieSeparatorNone } from '@/components/charts/chart-pie-separator-none'
import { ChartPieLabel } from '@/components/charts/chart-pie-label'
import { ChartPieLabelCustom } from '@/components/charts/chart-pie-label-custom'
import { ChartPieLabelList } from '@/components/charts/chart-pie-label-list'
import { ChartPieLegend } from '@/components/charts/chart-pie-legend'
import { ChartPieDonut } from '@/components/charts/chart-pie-donut'
import { ChartPieDonutActive } from '@/components/charts/chart-pie-donut-active'
import { ChartPieDonutText } from '@/components/charts/chart-pie-donut-text'
import { ChartPieStacked } from '@/components/charts/chart-pie-stacked'
import { ChartPieInteractive } from '@/components/charts/chart-pie-interactive'

export default function ChartsPiePage() {
  return (
    <Grid>
      <GridItem span={4}>
        <ChartPieDefault />
      </GridItem>
      <GridItem span={4}>
        <ChartPieSeparatorNone />
      </GridItem>
      <GridItem span={4}>
        <ChartPieLabel />
      </GridItem>
      <GridItem span={4}>
        <ChartPieLabelCustom />
      </GridItem>
      <GridItem span={4}>
        <ChartPieLabelList />
      </GridItem>
      <GridItem span={4}>
        <ChartPieLegend />
      </GridItem>
      <GridItem span={4}>
        <ChartPieDonut />
      </GridItem>
      <GridItem span={4}>
        <ChartPieDonutActive />
      </GridItem>
      <GridItem span={4}>
        <ChartPieDonutText />
      </GridItem>
      <GridItem span={4}>
        <ChartPieStacked />
      </GridItem>
      <GridItem span={4}>
        <ChartPieInteractive />
      </GridItem>
    </Grid>
  )
}
