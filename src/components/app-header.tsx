'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
import React from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Link from 'next/link'
import { Crown } from 'lucide-react'
import { UserNavigation } from '@/components/user-nav'
import { ModeToggle } from '@/components/mode-toggle'
import { CommandMenu } from '@/components/command-menu'

export const AppHeader = () => {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false)
  const isMobile = useIsMobile()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-9999 flex h-16 shrink-0 items-center gap-2 px-4 backdrop-blur-xl transition-all duration-300 lg:px-6',
        isScrolled ? 'bg-muted/50 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          {isMobile && <SidebarTrigger className="size-9" />}
          <CommandMenu />
        </div>
        <Link href="/" className="block md:hidden">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-9 items-center justify-center rounded-lg">
            <Crown size={16} aria-label="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <UserNavigation />
        </div>
      </div>
    </header>
  )
}
