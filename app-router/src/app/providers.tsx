'use client'
// Otherwise we get the error:
// Error: React Context is unavailable in Server Components

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>
}
