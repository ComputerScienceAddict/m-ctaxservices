import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: "var(--logo-navy)", borderTop: "2px solid var(--logo-gold)" }}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <Logo size="sm" asLink={true} align="left" variant="light" />
            <p className="text-xs text-white/70">Miami, FL</p>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link href="#services" className="text-white/80 hover:text-[oklch(0.85_0.08_290)] transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-white/80 hover:text-[oklch(0.85_0.08_290)] transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-white/80 hover:text-[oklch(0.85_0.08_290)] transition-colors">
              Contact
            </Link>
            <a href="tel:7863621353" className="text-white/80 hover:text-[oklch(0.85_0.08_290)] transition-colors">
              (786) 362-1353
            </a>
          </nav>
        </div>
        <p className="text-xs text-white/50 mt-6">
          &copy; {new Date().getFullYear()} M & G Tax Services LLC
        </p>
      </div>
    </footer>
  )
}
