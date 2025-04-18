'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const router = useRouter()

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center lg:flex-row-reverse lg:justify-between lg:px-60 lg:text-left">
      <figure className="flex justify-center">
        <Image
          src="/not-found-img.svg"
          alt="Illustration of a page not found by Freepik"
          width={384}
          height={384}
          className="h-60 w-60 lg:h-96 lg:w-96"
          priority
        />
      </figure>
      <main className="max-w-lg">
        <header>
          <h4 className="text-primary text-sm font-medium">404 error</h4>
        </header>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold md:text-4xl">Page not found</h1>
          <p className="text-gray-600">
            Sorry, the page you are looking for doesn&apos;t exist. Here are
            some helpful links:
          </p>
        </div>
        <nav className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            variant="outline"
            onClick={() => router.back()}
            aria-label="Go back"
          >
            ← Go back
          </Button>
          <Button asChild>
            <Link href="/" aria-label="Go to homepage">
              Take me home
            </Link>
          </Button>
        </nav>
      </main>
    </section>
  )
}
