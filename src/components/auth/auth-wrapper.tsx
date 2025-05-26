import React from 'react'
import Link from 'next/link'
import { Crown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface AuthWrapperProps {
  heading: string
  subtitle?: string
  footerLabel?: string
  footerLinkUrl?: string
  footerLinkLabel?: string
  children: React.ReactNode
}

export const AuthWrapper = ({
  heading,
  subtitle,
  footerLabel,
  footerLinkUrl,
  footerLinkLabel,
  children,
}: AuthWrapperProps) => {
  return (
    <Card className="fixed inset-0 shadow-none md:relative md:min-w-sm">
      <CardHeader className="text-center">
        <div className="bg-sidebar-primary mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-md text-white">
          <Crown size={24} aria-label="logo" />
        </div>
        <CardTitle className="text-lg">{heading}</CardTitle>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-grow">{children}</CardContent>
      {(footerLabel || (footerLinkUrl && footerLinkLabel)) && (
        <CardFooter>
          <CardDescription className="w-full text-center text-sm">
            {footerLabel}
            {footerLinkUrl && footerLinkLabel && (
              <>
                {' '}
                <Link
                  href={footerLinkUrl}
                  className={cn(
                    buttonVariants({ variant: 'link' }),
                    'text-foreground hover:text-primary h-auto px-0 py-0'
                  )}
                >
                  {footerLinkLabel}
                </Link>
              </>
            )}
          </CardDescription>
        </CardFooter>
      )}
    </Card>
  )
}
