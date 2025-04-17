'use client'

import * as React from 'react'
import { type DialogProps } from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'
import { File, Search } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'

export function CommandMenu({ ...props }: DialogProps) {
  const [open, setOpen] = React.useState(false)
  const isMobile = useIsMobile()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      {!isMobile && (
        <Button
          variant="outline"
          size="lg"
          className={cn(
            'text-muted-foreground relative flex w-full items-center justify-start gap-2 pl-4 text-sm font-normal sm:pr-12 md:w-40 lg:w-96'
          )}
          onClick={() => setOpen(true)}
          {...props}
        >
          <Search />
          <span className="hidden lg:block">Cari halaman...</span>
          <kbd className="bg-muted pointer-events-none absolute top-2 right-2 hidden h-6 items-center gap-1 rounded border px-1.5 font-mono text-xs font-medium opacity-100 select-none sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      )}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(true)}
          {...props}
        >
          <Search />
        </Button>
      )}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            <CommandItem>
              <File />
              <span>Docs</span>
            </CommandItem>
            <CommandItem>
              <File />
              <span>GitHub</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  )
}
