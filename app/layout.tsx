import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { roboto } from '@lib/fonts'
import Header from '@lib/components/home/Header'
import { HeaderProvider } from '@lib/contexts/HeaderContext'

export const metadata: Metadata = {
  title: 'Porfolio de ibraSanusi',
  description:
    'Porfolio generado por ibraSanusi con la intención de demostrar sus conocimientos.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} relative w-full max-w-screen overflow-x-hidden px-8 m-auto py-[190px] flex flex-col items-center`}
      >
        <HeaderProvider>
          <Header />
          {children}
        </HeaderProvider>
      </body>
    </html>
  )
}
