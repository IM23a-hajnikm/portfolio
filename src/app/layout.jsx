"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

// Metadata cannot be exported from a client component
// Moving this to a separate layout file or using generateMetadata function would be the proper solution

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.className} flex flex-col min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#0f0a1e] dark:via-[#1a1333] dark:to-[#0d1a2d]`} 
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>)
  );
}

