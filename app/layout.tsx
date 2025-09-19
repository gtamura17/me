import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://gabriel-tamura.vercel.app'),
  title: 'gabriel tamura - head de tecnologia',
  description: 'head de tecnologia com 6+ anos em transformação digital e arquitetura enterprise. especializado em redução de custos operacionais e otimização de times.',
  keywords: 'head de tecnologia, desenvolvedor, full stack, react, nextjs, javascript, typescript, nodejs, arquitetura enterprise',
  authors: [{ name: 'Gabriel Tamura' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'gabriel tamura - head de tecnologia',
    description: 'head de tecnologia com 6+ anos em transformação digital e arquitetura enterprise.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gabriel-tamura.vercel.app',
    siteName: 'gabriel tamura - currículo digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gabriel tamura - head de tecnologia',
    description: 'head de tecnologia com 6+ anos em transformação digital e arquitetura enterprise.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
