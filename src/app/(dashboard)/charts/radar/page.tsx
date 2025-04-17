import React from 'react'
import { Grid, GridItem } from '@/components/ui/grid'
import { ChartRadarDefault } from '@/components/charts/chart-radar-default'
import { ChartRadarDots } from '@/components/charts/chart-radar-dots'
import { ChartRadarMultiple } from '@/components/charts/chart-radar-multiple'
import { ChartRadarLinesOnly } from '@/components/charts/chart-radar-lines-only'
import { ChartRadarLabelCustom } from '@/components/charts/chart-radar-label-custom'
import { ChartRadarRadius } from '@/components/charts/chart-radar-radius'
import { ChartRadarGridCustom } from '@/components/charts/chart-radar-grid-custom'
import { ChartRadarGridFill } from '@/components/charts/chart-radar-grid-fill'
import { ChartRadarGridNone } from '@/components/charts/chart-radar-grid-none'
import { ChartRadarGridCircle } from '@/components/charts/chart-radar-grid-circle'
import { ChartRadarGridCircleNoLines } from '@/components/charts/chart-radar-grid-circle-no-lines'
import { ChartRadarGridCircleFill } from '@/components/charts/chart-radar-grid-circle-fill'
import { ChartRadarLegend } from '@/components/charts/chart-radar-legend'
import { ChartRadarIcons } from '@/components/charts/chart-radar-icons'

export default function ChartsRadarPage() {
  return (
    <Grid>
      <GridItem span={4}>
        <ChartRadarDefault />
      </GridItem>
      <GridItem span={4}>
        <ChartRadarDots />
      </GridItem>
      <GridItem span={4}>
        <ChartRadarMultiple />
      </GridItem>
      <GridItem span={4}>
        <ChartRadarLinesOnly />
      </GridItem>
      <GridItem span={4}>
        <ChartRadarLabelCustom />
      </GridItem>
      <GridItem span={4}>
        <ChartRadarRadius />
      </GridItem>
      <GridItem span={4}>
        <ChartRadarGridCustom />
      </GridItem>
      <GridItem span={4}>
        <ChartRadarGridFill />
      </GridItem>
      <GridItem span={4}>
        <ChartRadarGridNone />
      </GridItem>
      <GridItem span={4}>
        <ChartRadarGridCircle />
      </GridItem>
      <GridItem span={4}>
        <ChartRadarGridCircleNoLines />
      </GridItem>
      <GridItem span={4}>
        <ChartRadarGridCircleFill />
      </GridItem>
      <GridItem span={4}>
        <ChartRadarLegend />
      </GridItem>
      <GridItem span={4}>
        <ChartRadarIcons />
      </GridItem>
    </Grid>
  )
}
