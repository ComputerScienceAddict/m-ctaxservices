import type { Metadata } from 'next'
import { Syne, DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'M & G Tax Services LLC | Professional Tax & Financial Services',
  description: 'M & G Tax Services LLC — Helping individuals & small businesses with their financial needs. Tax preparation, bookkeeping, payroll. Miami, FL.',
  keywords: ['tax services', 'bookkeeping', 'Miami', 'M & G Tax Services', 'tax preparation'],
  openGraph: {
    title: 'M & G Tax Services LLC',
    description: 'M & G Tax Services LLC — Helping individuals & small businesses with their financial needs. Tax preparation, bookkeeping, payroll. Miami, FL.',
    type: 'website',
    images: ['/m-g-flyer.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M & G Tax Services LLC',
    description: 'M & G Tax Services LLC — Helping individuals & small businesses with their financial needs. Miami, FL.',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
