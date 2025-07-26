import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crust & Flame - Artisan Wood-Fired Pizza Catering',
  description: 'Authentic wood-fired pizza catering that brings the taste of Italy to your special events. Serving the Greater Los Angeles Area.',
  keywords: 'wood-fired pizza, pizza catering, Los Angeles catering, LA pizza catering, Italian pizza, mobile pizza oven, event catering',
  manifest: '/manifest.json',
  metadataBase: new URL('https://crustandflamepizza.com'),
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#EA580C',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Crust & Flame",
              "description": "Authentic wood-fired pizza catering that brings the taste of Italy to your special events. Serving the Greater Los Angeles Area.",
              "url": "https://crustandflamepizza.com",
              "telephone": "(323) 561-2750",
              "email": "catering@crustandflamepizza.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "servesCuisine": "Italian",
              "priceRange": "$$",
              "image": "https://crustandflamepizza.com/og-image.jpg",
              "potentialAction": [
                {
                  "@type": "ViewAction",
                  "name": "View Our Services",
                  "target": "https://crustandflamepizza.com/#services"
                },
                {
                  "@type": "ViewAction",
                  "name": "View Our Menu",
                  "target": "https://crustandflamepizza.com/#menu"
                },
                {
                  "@type": "ViewAction",
                  "name": "Contact Us",
                  "target": "https://crustandflamepizza.com/#contact"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17393503763"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17393503763');
          `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R5G4F7RDZV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R5G4F7RDZV');
          `}
        </Script>
        <Header />
        {children}
      </body>
    </html>
  )
}