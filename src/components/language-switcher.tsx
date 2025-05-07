"use client"

import { usePathname, useRouter } from "next/navigation"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Check, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Locale = "en" | "es"

export default function LanguageSwitcher({ dict }: { dict: any }) {
    const pathName = usePathname()
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    const locales: Locale[] = ["en", "es"]
    const currentLocale = pathName.split("/")[1] as Locale

    const onSelectChange = (locale: Locale) => {
        if (locale === currentLocale) return

        startTransition(() => {
            // Calcular la nueva ruta
            const newPath = pathName.replace(`/${currentLocale}`, `/${locale}`)
            router.push(newPath)
        })
    }

    const localeNames = {
        en: dict.localeSwitcher.locale.en,
        es: dict.localeSwitcher.locale.es,
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    <span className="hidden md:inline">{localeNames[currentLocale]}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {locales.map((locale) => (
                    <DropdownMenuItem
                        key={locale}
                        onClick={() => onSelectChange(locale)}
                        className="flex items-center justify-between gap-2"
                    >
                        {localeNames[locale]}
                        {locale === currentLocale && <Check className="h-4 w-4" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
