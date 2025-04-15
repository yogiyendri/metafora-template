import React from 'react';
import { Grid, GridItem } from '@/components/ui/grid';
import { ChartAreaDefault } from '@/components/charts/chart-area-default';
import { ChartAreaLinear } from '@/components/charts/chart-area-linear';
import { ChartAreaStep } from '@/components/charts/chart-area-step';
import { ChartAreaStacked } from '@/components/charts/chart-area-stacked';
import { ChartAreaStackedExpand } from '@/components/charts/chart-area-stacked-expand';
import { ChartAreaLegend } from '@/components/charts/chart-area-legend';
import { ChartAreaIcons } from '@/components/charts/chart-area-icons';
import { ChartAreaGradient } from '@/components/charts/chart-area-gradient';
import { ChartAreaAxes } from '@/components/charts/chart-area-axes';
import { ChartAreaInteractive } from '@/components/charts/chart-area-interactive';

export default function ChartsAreaPage() {
  return (
    <Grid>
      <GridItem span={4}>
        <ChartAreaDefault />
      </GridItem>
      <GridItem span={4}>
        <ChartAreaLinear />
      </GridItem>
      <GridItem span={4}>
        <ChartAreaStep />
      </GridItem>
      <GridItem span={4}>
        <ChartAreaStacked />
      </GridItem>
      <GridItem span={4}>
        <ChartAreaStackedExpand />
      </GridItem>
      <GridItem span={4}>
        <ChartAreaLegend />
      </GridItem>
      <GridItem span={4}>
        <ChartAreaIcons />
      </GridItem>
      <GridItem span={4}>
        <ChartAreaGradient />
      </GridItem>
      <GridItem span={4}>
        <ChartAreaAxes />
      </GridItem>
      <GridItem span={12}>
        <ChartAreaInteractive />
      </GridItem>
    </Grid>
  );
}
