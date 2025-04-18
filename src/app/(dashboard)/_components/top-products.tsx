import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const products = [
  {
    product: 'Apple iPhone 14 Pro',
    image: '/assets/products/apple-iphone-14-pro.jpg',
    price: 999,
    sales: 5230,
  },
  {
    product: 'Sony WH-1000XM5 Headphones',
    image: '/assets/products/sony-wh-1000xm5-headphones.jpg',
    price: 398,
    sales: 3412,
  },
  {
    product: 'Nike Air Max 270',
    image: '/assets/products/nike-air-max-270.png',
    price: 150,
    sales: 432,
  },
  {
    product: 'Dell XPS 13 Laptop',
    image: '/assets/products/dell-xps-13-laptop.jpg',
    price: 1249,
    sales: 203,
  },
  {
    product: 'Apple AirPods Pro (2nd Gen)',
    image: '/assets/products/apple-airpods-pro-2nd-gen.png',
    price: 249,
    sales: 1983,
  },
  {
    product: 'Samsung QLED 55" 4K TV',
    image: '/assets/products/samsung-55-qled-4k-smart-tv.jpg',
    price: 649,
    sales: 4321,
  },
]

export const TopProducts = () => {
  return (
    <Card className="h-full shadow-none">
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {products.map((product) => (
          <div
            key={product.product}
            className="flex items-center justify-between gap-2 py-2"
          >
            <div className="flex items-center gap-2">
              <Image
                src={product.image}
                alt={product.product}
                width={48}
                height={48}
                className="rounded-md border"
              />
              <CardTitle className="text-sm">{product.product}</CardTitle>
            </div>
            <div className="min-w-fit space-y-1 text-end">
              <CardTitle className="text-sm">
                {product.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                })}
              </CardTitle>
              <CardDescription className="text-xs">
                {product.sales} Sales
              </CardDescription>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
