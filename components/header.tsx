"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 bg-background" style={{ borderColor: "var(--logo-gold)" }}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 max-w-5xl">
        <Logo size="sm" align="left" />

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm text-foreground hover:underline transition-colors [&:hover]:text-[oklch(0.55_0.12_290)]">
            Services
          </Link>
          <Link href="#about" className="text-sm text-foreground hover:underline transition-colors [&:hover]:text-[oklch(0.55_0.12_290)]">
            About
          </Link>
          <Link href="#contact" className="text-sm text-foreground hover:underline transition-colors [&:hover]:text-[oklch(0.55_0.12_290)]">
            Contact
          </Link>
          <a href="tel:7863621353" className="text-sm text-foreground hover:underline transition-colors [&:hover]:text-[oklch(0.55_0.12_290)]">
            (786) 362-1353
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container mx-auto flex flex-col gap-2 p-4 max-w-5xl">
            <Link href="#services" className="text-sm text-foreground" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="#about" className="text-sm text-foreground" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#contact" className="text-sm text-foreground" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <a href="tel:7863621353" className="text-sm text-foreground">
              (786) 362-1353
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
