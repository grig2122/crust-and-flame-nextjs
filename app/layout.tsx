import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crust & Flame - Artisan Wood-Fired Pizza Catering',
  description: 'Authentic wood-fired pizza catering that brings the taste of Italy to your special events. Serving the Greater Los Angeles Area.',
  keywords: 'wood-fired pizza, pizza catering, Los Angeles catering, LA pizza catering, Italian pizza, mobile pizza oven, event catering',
  manifest: '/manifest.json',
  themeColor: '#EA580C',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'Crust & Flame - Artisan Wood-Fired Pizza Catering',
    description: 'Authentic wood-fired pizza catering for your special events',
    url: 'https://crustandflamepizza.com',
    siteName: 'Crust & Flame',
    images: [
      {
        url: 'https://crustandflamepizza.com/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crust & Flame - Wood-Fired Pizza Catering',
    description: 'Authentic wood-fired pizza catering for your special events',
    images: ['https://crustandflamepizza.com/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}