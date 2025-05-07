import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

const locales = ["en", "es"]
const defaultLocale = "es"

// Obtener el idioma preferido basado en el header Accept-Language
function getLocale(request: NextRequest) {
    // Negotiator espera un objeto con headers, no un objeto Headers
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // @ts-ignore - negotiator espera un objeto diferente
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    
    try {
        return matchLocale(languages, locales, defaultLocale)
    } catch (error) {
        console.error("Error matching locale:", error)
        return defaultLocale
    }
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Verificar si el pathname ya incluye un locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redireccionar si no hay locale en la URL
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Evitar todas las rutas internas (_next)
        "/((?!_next|api|favicon.ico).*)",
    ],
}
