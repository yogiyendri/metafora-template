'use server'

import { registerSchema } from '@/lib/validations/auth'
import { z } from 'zod'

export const register = async (values: z.infer<typeof registerSchema>) => {
  const parsed = registerSchema.safeParse(values)

  await new Promise((resolve) => setTimeout(resolve, 3000))

  if (!parsed.success) return { error: 'Invalid fields!' }

  return { success: 'Confirmation email sent!' }
}
