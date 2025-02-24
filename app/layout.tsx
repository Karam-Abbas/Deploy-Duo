import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans, GeistMono } from "geist/font";


export const metadata: Metadata = {
  title: "Deploy Duo - Software Development Company",
  description: "Professional software development services by Deploy Duo",
  openGraph: {
    title: "Deploy Duo - Software Development Company",
    description: "Professional software development services by Deploy Duo",
    url: "https://deployduo.vercel.app", 
    type: "website",
    images: "/f.png", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Deploy Duo - Software Development Company",
    description: "Professional software development services by Deploy Duo",
    images: ["/f.png"], // Correct way for Twitter
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`min-h-screen bg-background text-foreground w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}