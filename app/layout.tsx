import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://gabriel-tamura.vercel.app'),
  title: 'Gabriel Tamura - Head de Tecnologia',
  description: 'Head de Tecnologia com 6+ anos em transformação digital e arquitetura enterprise. Especializado em redução de custos operacionais e otimização de times.',
  keywords: 'head de tecnologia, desenvolvedor, full stack, react, nextjs, javascript, typescript, nodejs, arquitetura enterprise',
  authors: [{ name: 'Gabriel Tamura' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Gabriel Tamura - Head de Tecnologia',
    description: 'Head de Tecnologia com 6+ anos em transformação digital e arquitetura enterprise.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gabriel-tamura.vercel.app',
    siteName: 'Gabriel Tamura - Currículo Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Tamura - Head de Tecnologia',
    description: 'Head de Tecnologia com 6+ anos em transformação digital e arquitetura enterprise.',
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
