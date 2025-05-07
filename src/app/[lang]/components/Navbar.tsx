"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Mail, Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/ModeToggle"
import LanguageSwitcher from "@/components/language-switcher"
import { useI18n } from "@/contexts/i18n-context"
import { useState } from "react"

export default function Navbar() {
  const { dict } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`md:sticky fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4`}>
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between">
            <div className="flex gap-4">
                <Link href="/" className="flex items-center space-x-2 mr-4">
                    <span className="font-bold">Brad Tools</span>
                </Link>

                <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
                    <Link href="#features" className="transition-colors hover:text-primary">
                        {dict.homepage.header.solutions}
                    </Link>
                    <Link href="https://portfolio-brad.vercel.app" className="transition-colors hover:text-primary">
                        {dict.homepage.header.aboutMe}
                    </Link>
                </nav>
            </div>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center space-x-4">
                <LanguageSwitcher dict={dict} />
                <ModeToggle />
                <Link href="https://github.com/BradMoyetones" target="_blank" rel="noreferrer">
                    <Button variant="ghost" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                    </Button>
                </Link>
                <Button variant="ghost" size="sm">Contact</Button>
            </div>

            {/* Mobile menu toggle */}
            <button
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
        </div>

      {/* Mobile menu */}
        {menuOpen && (
            <div className="md:hidden pt-2 space-y-2 text-sm font-medium">
                <Link href="#features" className="block transition-colors hover:text-primary p-2">
                    {dict.homepage.header.solutions}
                </Link>
                <Link href="https://portfolio-brad.vercel.app" className="block transition-colors hover:text-primary p-2">
                    {dict.homepage.header.aboutMe}
                </Link>
                <div className="flex justify-between pt-2 border-t border-border/40 space-y-2">
                    <LanguageSwitcher dict={dict} />
                    <ModeToggle />
                    <Link href="https://github.com/BradMoyetones" target="_blank" rel="noreferrer">
                        <Button variant="ghost" size="icon">
                            <Github className="h-4 w-4 mr-2" />
                            <span className="sr-only">GitHub</span>
                        </Button>
                    </Link>
                    <Button variant="ghost" size="icon">
                        <Mail className="h-4 w-4 mr-2" />
                        <span className="sr-only">Contact</span>
                    </Button>
                </div>
            </div>
        )}
    </header>
  )
}
