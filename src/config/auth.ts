import NextAuth from 'next-auth'
import authConfig from '@/config/auth.config'

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/auth/login',
  },
  session: { strategy: 'jwt' },
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  ...authConfig,
})
