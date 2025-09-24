import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Haworth - Exclusive Lighting Collection",
  description: "Portfolio project showcasing Haworth lighting design",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/your-kit-id.css" />
        <style>{`
html {
  font-family: "neue-haas-grotesk-text", sans-serif;
  --font-sans: "neue-haas-grotesk-text", sans-serif;
  --font-display: "Neue Haas Grotesk Display Pro 55 Roman", sans-serif;
  --font-nav: "Helvetica Neue LT Pro 55 Roman", sans-serif;
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
