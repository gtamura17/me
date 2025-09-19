import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const locales = ['pt', 'en', 'es']
const defaultLocale = 'pt'

function getLocale(request: NextRequest): string {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const acceptLanguage = request.headers.get('accept-language') || ''

    for (const locale of locales) {
      if (acceptLanguage.includes(locale)) {
        return locale
      }
    }

    return defaultLocale
  }

  return locales.find(locale => pathname.startsWith(`/${locale}`)) || defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    const url = new URL(`/${locale}${pathname}`, request.url)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|assets|downloads).*)',
  ],
}
