import type React from "react"
import "./globals.css"
import "./banner.css"
import "./about.css"
import "./skills.css"
import "./projects.css"
import "./contact.css"
import "./footer.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "animate.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sneh Shah Portfolio",
  description: "Portfolio website for Sneh Shah, Machine Learning Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add Bootstrap CSS via CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        {/* Add Animate.css via CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}

