import React from 'react';
import { Grid, GridItem } from '@/components/ui/grid';
import { ChartLineDefault } from '@/components/charts/chart-line-default';
import { ChartLineLinear } from '@/components/charts/chart-line-linear';
import { ChartLineStep } from '@/components/charts/chart-line-step';
import { ChartLineMultiple } from '@/components/charts/chart-line-multiple';
import { ChartLineDots } from '@/components/charts/chart-line-dots';
import { ChartLineDotsCustom } from '@/components/charts/chart-line-dots-custom';
import { ChartLineDotsColors } from '@/components/charts/chart-line-dots-colors';
import { ChartLineLabel } from '@/components/charts/chart-line-label';
import { ChartLineLabelCustom } from '@/components/charts/chart-line-label-custom';
import { ChartLineInteractive } from '@/components/charts/chart-line-interactive';

export default function ChartsLinePage() {
  return (
    <Grid>
      <GridItem span={4}>
        <ChartLineDefault />
      </GridItem>
      <GridItem span={4}>
        <ChartLineLinear />
      </GridItem>
      <GridItem span={4}>
        <ChartLineStep />
      </GridItem>
      <GridItem span={4}>
        <ChartLineMultiple />
      </GridItem>
      <GridItem span={4}>
        <ChartLineDots />
      </GridItem>
      <GridItem span={4}>
        <ChartLineDotsCustom />
      </GridItem>
      <GridItem span={4}>
        <ChartLineDotsColors />
      </GridItem>
      <GridItem span={4}>
        <ChartLineLabel />
      </GridItem>
      <GridItem span={4}>
        <ChartLineLabelCustom />
      </GridItem>
      <GridItem span={12}>
        <ChartLineInteractive />
      </GridItem>
    </Grid>
  );
}
