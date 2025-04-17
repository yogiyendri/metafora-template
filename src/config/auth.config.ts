import { type NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          value: 'template@metafora.my.id',
        },
        password: { label: 'Password', type: 'password', value: 'Metafora' },
      },
      async authorize(credentials) {
        const user = {
          name: 'Metafora',
          email: 'template@metafora.my.id',
          password: 'Metafora',
        }

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user
        }

        return null
      },
    }),
  ],
} satisfies NextAuthConfig
