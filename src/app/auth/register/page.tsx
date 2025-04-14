import React from 'react';
import { AuthWrapper } from '@/components/auth/auth-wrapper';
import { RegisterForm } from '@/components/auth/register-form';

export default function RegisterPage() {
  return (
    <AuthWrapper
      heading="Create an Account"
      subtitle="Start your journey with us today."
      footerLabel="Already have an account? "
      footerLinkUrl="/auth/login"
      footerLinkLabel="Login"
    >
      <RegisterForm />
    </AuthWrapper>
  );
}
