import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type React from "react"
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Deploy Duo - Software Development Company",
  description: "From idea to production, Deploy Duo turns complex problems into clean, scalable digital products.",
  openGraph: {
    title: "Deploy Duo - Software Development Company",
    description: "From idea to production, Deploy Duo turns complex problems into clean, scalable digital products.",
    url: "https://deployduo.vercel.app",
    type: "website",
    images: "/f.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deploy Duo - Software Development Company",
    description: "From idea to production, Deploy Duo turns complex problems into clean, scalable digital products.",
    images: ["/f.png"],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg text-text w-full font-body antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
