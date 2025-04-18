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
    productName: 'Apple iPhone 14 Pro',
    productImage: '/assets/products/apple-iphone-14-pro.jpg',
    stock: 10,
    totalStock: 20,
    price: 999,
  },
  {
    productName: 'Sony WH-1000XM5 Headphones',
    productImage: '/assets/products/sony-wh-1000xm5-headphones.jpg',
    stock: 5,
    totalStock: 10,
    price: 398,
  },
  {
    productName: 'Nike Air Max 270',
    productImage: '/assets/products/nike-air-max-270.png',
    stock: 3,
    totalStock: 10,
    price: 150,
  },
  {
    productName: 'Dell XPS 13 Laptop',
    productImage: '/assets/products/dell-xps-13-laptop.jpg',
    stock: 2,
    totalStock: 10,
    price: 1249,
  },
  {
    productName: 'Apple AirPods Pro (2nd Gen)',
    productImage: '/assets/products/apple-airpods-pro-2nd-gen.png',
    stock: 1,
    totalStock: 10,
    price: 249,
  },
  {
    productName: 'Samsung QLED 55" 4K TV',
    productImage: '/assets/products/samsung-55-qled-4k-smart-tv.jpg',
    stock: 0,
    totalStock: 10,
    price: 649,
  },
]

export const StockReport = () => {
  return (
    <Card className="h-full shadow-none">
      <CardHeader>
        <CardTitle>Stock Report</CardTitle>
        <CardDescription>
          Stock is running low! Restock before they&apos;re gone!
        </CardDescription>
      </CardHeader>
      <CardContent>
        {products.map((product) => {
          const percentage = (product.stock / product.totalStock) * 100

          return (
            <div
              key={product.productName}
              className="flex items-center justify-between gap-2 py-2"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={product.productImage}
                  alt={product.productName}
                  width={48}
                  height={48}
                  className="rounded-md border"
                />
                <div className="space-y-1.5">
                  <CardTitle className="text-sm">
                    {product.productName}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {product.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                    })}
                  </CardDescription>
                </div>
              </div>
              <div className="min-w-fit space-y-1 text-end">
                <CardTitle className="text-xs">
                  {product.stock} / {product.totalStock}
                </CardTitle>
                <CardDescription className="text-xs">
                  {percentage === 0
                    ? 'Out of Stock'
                    : percentage <= 30
                      ? 'Low Stock'
                      : 'In Stock'}
                </CardDescription>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
