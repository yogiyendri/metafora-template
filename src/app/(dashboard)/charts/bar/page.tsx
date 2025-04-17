import React from 'react'
import { Grid, GridItem } from '@/components/ui/grid'
import { ChartBarDefault } from '@/components/charts/chart-bar-default'
import { ChartBarHorizontal } from '@/components/charts/chart-bar-horizontal'
import { ChartBarMultiple } from '@/components/charts/chart-bar-multiple'
import { ChartBarLabel } from '@/components/charts/chart-bar-label'
import { ChartBarLabelCustom } from '@/components/charts/chart-bar-label-custom'
import { ChartBarMixed } from '@/components/charts/chart-bar-mixed'
import { ChartBarStacked } from '@/components/charts/chart-bar-stacked'
import { ChartBarActive } from '@/components/charts/chart-bar-active'
import { ChartBarNegative } from '@/components/charts/chart-bar-negative'
import { ChartBarInteractive } from '@/components/charts/chart-bar-interactive'

export default function ChartsBarPage() {
  return (
    <Grid>
      <GridItem span={4}>
        <ChartBarDefault />
      </GridItem>
      <GridItem span={4}>
        <ChartBarHorizontal />
      </GridItem>
      <GridItem span={4}>
        <ChartBarMultiple />
      </GridItem>
      <GridItem span={4}>
        <ChartBarLabel />
      </GridItem>
      <GridItem span={4}>
        <ChartBarLabelCustom />
      </GridItem>
      <GridItem span={4}>
        <ChartBarMixed />
      </GridItem>
      <GridItem span={4}>
        <ChartBarStacked />
      </GridItem>
      <GridItem span={4}>
        <ChartBarActive />
      </GridItem>
      <GridItem span={4}>
        <ChartBarNegative />
      </GridItem>
      <GridItem span={12}>
        <ChartBarInteractive />
      </GridItem>
    </Grid>
  )
}
