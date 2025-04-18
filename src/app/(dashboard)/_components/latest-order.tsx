'use client'

import React from 'react'
import Image from 'next/image'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

type Data = {
  orderId: string
  customer: string
  customerImage: string
  product: string
  productImage: string
  date: string
  paymentMethod: string
  amount: number
  status: 'Cancelled' | 'Processing' | 'Delivered'
}

const data: Data[] = [
  {
    orderId: 'ORD-1001',
    customer: 'John Smith',
    customerImage: '/assets/avatars/john-smith.jpg',
    product: 'Apple iPhone 14 Pro',
    productImage: '/assets/products/apple-iphone-14-pro.jpg',
    date: '2025-04-17',
    paymentMethod: 'E-Wallet',
    amount: 999,
    status: 'Processing',
  },
  {
    orderId: 'ORD-1002',
    customer: 'Emma Johnson',
    customerImage: '/assets/avatars/emma-johnson.jpg',
    product: 'Sony WH-1000XM5 Headphones',
    productImage: '/assets/products/sony-wh-1000xm5-headphones.jpg',
    date: '2025-04-17',
    paymentMethod: 'Credit Card',
    amount: 398,
    status: 'Processing',
  },
  {
    orderId: 'ORD-1003',
    customer: 'Liam Brown',
    customerImage: '/assets/avatars/liam-brown.jpg',
    product: 'Nike Air Max 270',
    productImage: '/assets/products/nike-air-max-270.png',
    date: '2025-04-16',
    paymentMethod: 'Bank Transfer',
    amount: 150,
    status: 'Delivered',
  },
  {
    orderId: 'ORD-1004',
    customer: 'Olivia Davis',
    customerImage: '/assets/avatars/olivia-davis.jpg',
    product: 'Dell XPS 13 Laptop',
    productImage: '/assets/products/dell-xps-13-laptop.jpg',
    date: '2025-04-16',
    paymentMethod: 'PayLater',
    amount: 1249,
    status: 'Cancelled',
  },
  {
    orderId: 'ORD-1005',
    customer: 'Noah Wilson',
    customerImage: '/assets/avatars/noah-wilson.jpg',
    product: 'Apple AirPods Pro (2nd Gen)',
    productImage: '/assets/products/apple-airpods-pro-2nd-gen.png',
    date: '2025-04-15',
    paymentMethod: 'E-Wallet',
    amount: 249,
    status: 'Delivered',
  },
  {
    orderId: 'ORD-1006',
    customer: 'Ava Martinez',
    customerImage: '/assets/avatars/ava-martinez.jpg',
    product: 'Samsung QLED 55" 4K TV',
    productImage: '/assets/products/samsung-55-qled-4k-smart-tv.jpg',
    date: '2025-04-15',
    paymentMethod: 'Bank Transfer',
    amount: 649,
    status: 'Processing',
  },
  {
    orderId: 'ORD-1007',
    customer: 'William Taylor',
    customerImage: '/assets/avatars/william-taylor.jpg',
    product: 'JBL Flip 6 Bluetooth Speaker',
    productImage: '/assets/products/jbl-flip-6-bluetooth-speaker.jpg',
    date: '2025-04-14',
    paymentMethod: 'E-Wallet',
    amount: 129.95,
    status: 'Delivered',
  },
  {
    orderId: 'ORD-1008',
    customer: 'Sophia Anderson',
    customerImage: '/assets/avatars/sophia-anderson.jpg',
    product: 'Amazon Echo Dot (5th Gen)',
    productImage: '/assets/products/amazon-echo-dot-5th-gen.jpg',
    date: '2025-04-14',
    paymentMethod: 'Credit Card',
    amount: 49.99,
    status: 'Processing',
  },
  {
    orderId: 'ORD-1009',
    customer: 'James Thomas',
    customerImage: '/assets/avatars/james-thomas.jpg',
    product: 'Logitech MX Master 3',
    productImage: '/assets/products/logitech-mx-master-3-mouse.jpg',
    date: '2025-04-13',
    paymentMethod: 'PayLater',
    amount: 99,
    status: 'Delivered',
  },
  {
    orderId: 'ORD-1010',
    customer: 'Isabella Lee',
    customerImage: '/assets/avatars/isabella-lee.jpg',
    product: 'GoPro HERO11 Black',
    productImage: '/assets/products/gopro-hero11-black.jpg',
    date: '2025-04-13',
    paymentMethod: 'Bank Transfer',
    amount: 399,
    status: 'Processing',
  },
]

const columns: ColumnDef<Data>[] = [
  {
    accessorKey: 'orderId',
    header: 'Order ID',
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.original.orderId}</span>
    ),
  },
  {
    accessorKey: 'customer',
    header: 'Customer',
    cell: ({ row }) => {
      const customer = row.original

      return (
        <div className="flex w-40 items-center gap-2">
          <Image
            src={customer.customerImage}
            alt={customer.customer}
            width={40}
            height={40}
            className="rounded-sm border"
          />
          <span className="font-medium">{customer.customer}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'product',
    header: 'Product',
    cell: ({ row }) => {
      const product = row.original

      return (
        <div className="flex w-60 items-center gap-2">
          <Image
            src={product.productImage}
            alt={product.product}
            width={40}
            height={40}
            className="rounded-sm border"
          />
          <span className="font-medium">{product.product}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Payment Method',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => {
      const inUSD = (row.getValue('amount') as number).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })

      return <span className="font-semibold">{inUSD}</span>
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <span
        className={cn(
          'rounded-full px-2 py-1 text-xs',
          row.getValue('status') === 'Cancelled'
            ? 'bg-red-100 text-red-600'
            : row.getValue('status') === 'Processing'
              ? 'bg-orange-100 text-orange-600'
              : 'bg-green-100 text-green-600'
        )}
      >
        {row.getValue('status')}
      </span>
    ),
  },
]

function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  })

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export const LatestOrder = () => {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Latest Order</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  )
}
