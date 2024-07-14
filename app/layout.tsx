import type { Metadata } from 'next'
import './globals.css'
import { roboto } from '@lib/fonts'
import Header from '@lib/components/home/Header'
import { HeaderProvider } from '@lib/contexts/HeaderContext'

export const metadata: Metadata = {
  title: 'Porfolio de ibraSanusi',
  description:
    'Porfolio generado por ibraSanusi con la intención de demostrar sus conocimientos.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} xl:max-w-[1440px] w-full m-auto py-[190px] flex flex-col items-center`}
      >
        <HeaderProvider>
          <Header />
          {children}
        </HeaderProvider>
      </body>
    </html>
  )
}
