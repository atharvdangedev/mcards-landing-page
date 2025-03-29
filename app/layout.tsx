import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "mCards | Customizable Digital Business Cards & More",
  description:
    "Create customized NFC business cards, QR review cards, and digital invitation cards with mCards. Design your own card and get a personal website.",
  keywords: [
    "digital business cards",
    "NFC business cards",
    "QR business cards",
    "metal business cards",
    "Google review cards",
    "digital invitation cards",
    "customizable cards",
    "personal website",
  ],
  openGraph: {
    title: "mCards | Customizable Digital Business Cards & More",
    description:
      "Create customized NFC business cards, QR review cards, and digital invitation cards with mCards. Design your own card and get a personal website.",
    url: "https://mcards.com",
    siteName: "mCards",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "mCards - Modern Digital Business Cards",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mCards | Customizable Digital Business Cards & More",
    description:
      "Create customized NFC business cards, QR review cards, and digital invitation cards with mCards. Design your own card and get a personal website.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://mcards.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'