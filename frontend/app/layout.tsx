import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { Toaster } from '../components/ui/toaster'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Restaurant Table Booking',
  description: 'Book your table for a delightful dining experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans bg-gray-50 min-h-screen`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
} 