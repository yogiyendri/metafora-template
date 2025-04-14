import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name must be at most 50 characters long')
    .regex(/^[a-zA-Z\s]+$/, 'Name must only contain letters and spaces'),
  email: z
    .string()
    .trim()
    .nonempty('Email is required')
    .email('Invalid email')
    .toLowerCase(),
  password: z
    .string()
    .nonempty('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(32, 'Password must be at most 32 characters long'),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty('Email is required')
    .email('Invalid email')
    .toLowerCase(),
  password: z
    .string()
    .nonempty('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(32, 'Password must be at most 32 characters long'),
});
