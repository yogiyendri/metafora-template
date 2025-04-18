import { CircleDollarSign, Coins, Package, Users } from 'lucide-react'
import { Counter } from '@/components/ui/counter'
import { Grid, GridItem } from '@/components/ui/grid'
import { MetricIcon } from '@/components/widgets/metric-icon'
import { SalesReport } from '@/app/(dashboard)/_components/sales-report'
import { TopProducts } from './_components/top-products'
import { PopulayPayment } from './_components/popular-payment'
import { LatestOrder } from './_components/latest-order'
import { TopCountry } from './_components/top-country'
import { StockReport } from './_components/stock-report'

export default async function Home() {
  return (
    <Grid>
      <GridItem span={3}>
        <MetricIcon
          title="Sales"
          value={<Counter value={6500} />}
          icon={CircleDollarSign}
          percentage={4.3}
          detailPercentage="vs last year"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricIcon
          title="Customers"
          value={<Counter value={12000} />}
          icon={Users}
          percentage={7.2}
          detailPercentage="vs last month"
          color="yellow"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricIcon
          title="Products"
          value={<Counter value={47000} />}
          icon={Package}
          percentage={8}
          detailPercentage="vs last month"
          color="green"
        />
      </GridItem>
      <GridItem span={3}>
        <MetricIcon
          title="Revenue"
          value={<Counter value={128000} locale="en-US" currency="USD" />}
          icon={Coins}
          percentage={3.69}
          detailPercentage="vs last month"
          color="pink"
        />
      </GridItem>
      <GridItem span={8}>
        <SalesReport />
      </GridItem>
      <GridItem span={4}>
        <PopulayPayment />
      </GridItem>
      <GridItem span={4}>
        <TopProducts />
      </GridItem>
      <GridItem span={4}>
        <StockReport />
      </GridItem>
      <GridItem span={4}>
        <TopCountry />
      </GridItem>
      <GridItem span={12}>
        <LatestOrder />
      </GridItem>
    </Grid>
  )
}
