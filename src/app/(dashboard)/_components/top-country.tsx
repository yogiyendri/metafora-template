import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const data = [
  { country: 'United States', image: '/assets/flags/usa.svg', progress: 28 },
  { country: 'Germany', image: '/assets/flags/germany.svg', progress: 22 },
  { country: 'United Kingdom', image: '/assets/flags/uk.svg', progress: 18 },
  { country: 'Canada', image: '/assets/flags/canada.svg', progress: 14 },
  { country: 'Portugal', image: '/assets/flags/portugal.svg', progress: 10 },
  { country: 'Spain', image: '/assets/flags/spain.svg', progress: 8 },
]

export const TopCountry = () => {
  return (
    <Card className="h-full shadow-none">
      <CardHeader>
        <CardTitle>Top Selling by Country</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {data.map((item) => (
            <div key={item.country} className="space-y-2 py-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={item.image}
                    alt={item.country}
                    width={24}
                    height={24}
                    className="rounded-full border"
                  />
                  <CardTitle className="text-sm">{item.country}</CardTitle>
                </div>
                <CardDescription>{item.progress}%</CardDescription>
              </div>
              <Progress value={item.progress} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
