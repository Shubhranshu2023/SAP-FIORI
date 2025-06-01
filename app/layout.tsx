import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SAP FIORI Quiz',
  description: 'SAP FIORI Quiz',
  generator: 'SAP FIORI Quiz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
