import React from 'react'
import { AuthWrapper } from '@/components/auth/auth-wrapper'
import { LoginForm } from '@/components/auth/login-form'

export default function LoginPage() {
  return (
    <AuthWrapper
      heading="Welcome Back"
      subtitle="Log in to continue where you left off."
      footerLabel="Don't have an account? "
      footerLinkUrl="/auth/register"
      footerLinkLabel="Register"
    >
      <LoginForm />
    </AuthWrapper>
  )
}
