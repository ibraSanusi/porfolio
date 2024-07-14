'use client'

import { createContext, ReactNode, RefObject, useRef } from 'react'

export const HeaderContext = createContext<RefObject<HTMLElement> | null>(null)

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const headerRef = useRef<HTMLElement>(null)

  return (
    <HeaderContext.Provider value={headerRef}>
      {children}
    </HeaderContext.Provider>
  )
}
