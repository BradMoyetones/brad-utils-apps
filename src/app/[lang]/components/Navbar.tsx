"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { ModeToggle } from "@/components/ModeToggle"
import LanguageSwitcher from "@/components/language-switcher"
import { useI18n } from "@/contexts/i18n-context"

export default function Navbar() {
    const { dict } = useI18n()
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center mx-auto">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold">Brad Tools</span>
                </Link>
                <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
                    <Link href="#features" className="transition-colors hover:text-primary">
                        {dict.homepage.header.solutions}
                    </Link>
                    <Link href="https://portfolio-brad.vercel.app" className="transition-colors hover:text-primary">
                        {dict.homepage.header.aboutMe}
                    </Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <LanguageSwitcher dict={dict} />
                    <ModeToggle />
                    <Link href="https://github.com/BradMoyetones" target="_blank" rel="noreferrer">
                        <Button variant="ghost" size="icon">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                        </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                        Contact
                    </Button>
                </div>
            </div>
        </header>
    )
}
