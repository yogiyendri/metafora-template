'use client'

import CountUp, { CountUpProps } from 'react-countup'

type CounterProps = {
  value: number
  locale?: string
  currency?: string | null
  unit?: string | null
  isPercent?: boolean
  compact?: boolean // Manual override
  autoCompact?: boolean // Auto active if value > 1000
} & Omit<CountUpProps, 'end' | 'start' | 'formattingFn'>

export const Counter = ({
  value = 0,
  locale = 'id-ID',
  currency = null,
  unit = null,
  isPercent = false,
  compact,
  autoCompact = false,
  ...props
}: CounterProps) => {
  const shouldCompact = compact ?? (autoCompact && value > 1000)

  const formatNumber = (val: number) => {
    if (isNaN(val)) return '-'

    if (isPercent) {
      return (val / 100).toLocaleString(locale, {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
      })
    }

    const options: Intl.NumberFormatOptions = {
      style: currency ? 'currency' : 'decimal',
      currency: currency || undefined,
    }

    if (shouldCompact) {
      options.notation = 'compact'
      options.compactDisplay = 'short'
      options.minimumFractionDigits = 2
      options.maximumFractionDigits = 2
    } else {
      options.minimumFractionDigits = 0
    }

    let formatted = val.toLocaleString(locale, options)

    if (unit) {
      formatted += ` ${unit}`
    }

    return formatted
  }

  return (
    <CountUp
      start={0}
      end={value}
      formattingFn={formatNumber}
      duration={1.5}
      {...props}
    />
  )
}
