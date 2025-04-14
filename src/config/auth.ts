import NextAuth from 'next-auth';
import authConfig from '@/config/auth.config';

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: 'jwt' },
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  debug: true,
  ...authConfig,
});
