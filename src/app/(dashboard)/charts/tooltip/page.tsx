import React from 'react';
import { Grid, GridItem } from '@/components/ui/grid';
import { ChartTooltipDefault } from '@/components/charts/chart-tooltip-default';
import { ChartTooltipIndicatorLine } from '@/components/charts/chart-tooltip-indicator-line';
import { ChartTooltipIndicatorNone } from '@/components/charts/chart-tooltip-indicator-none';
import { ChartTooltipLabelCustom } from '@/components/charts/chart-tooltip-label-custom';
import { ChartTooltipLabelFormatter } from '@/components/charts/chart-tooltip-label-formatter';
import { ChartTooltipLabelNone } from '@/components/charts/chart-tooltip-label-none';
import { ChartTooltipFormatter } from '@/components/charts/chart-tooltip-formatter';
import { ChartTooltipIcons } from '@/components/charts/chart-tooltip-icons';
import { ChartTooltipAdvanced } from '@/components/charts/chart-tooltip-advanced';

export default function ChartTooltipPage() {
  return (
    <Grid>
      <GridItem span={4}>
        <ChartTooltipDefault />
      </GridItem>
      <GridItem span={4}>
        <ChartTooltipIndicatorLine />
      </GridItem>
      <GridItem span={4}>
        <ChartTooltipIndicatorNone />
      </GridItem>
      <GridItem span={4}>
        <ChartTooltipLabelCustom />
      </GridItem>
      <GridItem span={4}>
        <ChartTooltipLabelFormatter />
      </GridItem>
      <GridItem span={4}>
        <ChartTooltipLabelNone />
      </GridItem>
      <GridItem span={4}>
        <ChartTooltipFormatter />
      </GridItem>
      <GridItem span={4}>
        <ChartTooltipIcons />
      </GridItem>
      <GridItem span={4}>
        <ChartTooltipAdvanced />
      </GridItem>
    </Grid>
  );
}
