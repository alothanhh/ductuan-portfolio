import type { Metadata } from 'next'

// import { Inter, Montserrat, Geist } from "next/font/google";
import { GeistSans } from 'geist/font/sans'

import AppProvider from '@/providers'

import './globals.css'

export const metadata: Metadata = {
  title: 'Tran Duc Tuan | Portfolio',
  description: "Duc Tuan's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={GeistSans.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
