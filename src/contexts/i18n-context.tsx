"use client"

import { createContext, useContext, type ReactNode } from "react"
import es from "@/dictionaries/es.json"

type Dictionary = typeof es

type I18nContextType = {
    dict: Dictionary
    lang: string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({
    children,
    dict,
    lang,
}: {
    children: ReactNode
    dict: Dictionary
    lang: string
}) {
    return <I18nContext.Provider value={{ dict, lang }}>{children}</I18nContext.Provider>
}

export function useI18n() {
    const context = useContext(I18nContext)
    if (!context) {
        throw new Error("useI18n must be used within an I18nProvider")
    }
    return context
}
