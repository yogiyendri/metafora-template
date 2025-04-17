'use server'

import { signIn } from '@/config/auth'
import { loginSchema } from '@/lib/validations/auth'
import { AuthError } from 'next-auth'
import { z } from 'zod'

export const login = async (values: z.infer<typeof loginSchema>) => {
  const parsed = loginSchema.safeParse(values)

  await new Promise((resolve) => setTimeout(resolve, 3000))

  if (!parsed.success) return { error: 'Invalid fields!' }

  const { email, password } = parsed.data

  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    return { success: 'Login successful!' }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' }
        default:
          return { error: 'Something went wrong!' }
      }
    }

    throw error
  }
}
