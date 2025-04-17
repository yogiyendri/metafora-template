import NextAuth from 'next-auth'
import { NextResponse } from 'next/server'

import authConfig from '@/config/auth.config'
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from '@/config/route'

export const { auth } = NextAuth(authConfig)

export async function middleware(req: Request) {
  const url = new URL(req.url)
  const session = await auth() // Fetch the session asynchronously
  const isLoggedIn = !!session

  const isApiAuthRoute = url.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(url.pathname)
  const isAuthRoute = authRoutes.includes(url.pathname)

  if (isApiAuthRoute) {
    return NextResponse.next()
  }

  // **CHANGE: Do not redirect if the user is already on the login page**
  if (!isLoggedIn && isAuthRoute) {
    return NextResponse.next()
  }

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url))
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
