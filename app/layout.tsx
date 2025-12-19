import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neeraj | Senior Full-Stack Engineer – Backend & Platform Systems",
  description:
    "Senior Full-Stack Engineer with 9+ years owning production backend systems, platform engineering, and scalable architecture. Node.js, Python, PostgreSQL, AWS/GCP expertise.",
  keywords: [
    "full-stack engineer",
    "backend engineer",
    "platform engineering",
    "Node.js developer",
    "Python developer",
    "PostgreSQL",
    "AWS",
    "GCP",
    "system architecture",
    "production systems",
    "scalable backend",
    "React developer",
    "senior software engineer",
  ],
  authors: [{ name: "Neeraj" }],
  creator: "Neeraj",
  icons: {
    icon: "/icon.svg?v=2",
    apple: "/apple-icon.png?v=2",
  },
  openGraph: {
    title: "Neeraj | Senior Full-Stack Engineer – Backend & Platform Systems",
    description:
      "Senior Full-Stack Engineer with 9+ years owning production backend systems, platform engineering, and scalable architecture. Node.js, Python, PostgreSQL, AWS/GCP expertise.",
    url: "https://nirv067.github.io",
    siteName: "Neeraj Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neeraj - Senior Full-Stack Engineer specializing in Backend & Platform Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neeraj | Senior Full-Stack Engineer – Backend & Platform Systems",
    description:
      "Senior Full-Stack Engineer with 9+ years owning production backend systems, platform engineering, and scalable architecture. Node.js, Python, PostgreSQL, AWS/GCP expertise.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://nirv067.github.io"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#5856D6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a1f1a" media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Neeraj",
              jobTitle: "Senior Full-Stack Engineer",
              description:
                "Senior Full-Stack Engineer specializing in backend systems, platform engineering, and production ownership",
              url: "https://nirv067.github.io",
              sameAs: [
                "https://www.linkedin.com/in/neeraj-singh-majestic-dev",
                "https://github.com/nirv067",
              ],
              knowsAbout: [
                "Backend Engineering",
                "Platform Engineering",
                "Node.js",
                "Python",
                "PostgreSQL",
                "AWS",
                "GCP",
                "System Architecture",
                "Full-Stack Development",
                "React",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.className} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
