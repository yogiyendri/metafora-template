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
  const session = await auth() // Ambil session secara async
  const isLoggedIn = !!session

  const isApiAuthRoute = url.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(url.pathname)
  const isAuthRoute = authRoutes.includes(url.pathname)

  if (isApiAuthRoute) {
    console.log('API Auth Route, bypassing middleware.')
    return NextResponse.next()
  }

  // **PERUBAHAN: Jangan redirect jika pengguna sudah di halaman login**
  if (!isLoggedIn && isAuthRoute) {
    console.log('User is on login page, allowing access...')
    return NextResponse.next()
  }

  if (isAuthRoute && isLoggedIn) {
    console.log('User already logged in, redirecting...')
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url))
  }

  if (!isLoggedIn && !isPublicRoute) {
    console.log('User not logged in, redirecting to login...')
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  console.log('No redirection, proceeding...')
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
