import Image from "next/image"
import { Logo } from "@/components/logo"

export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="mb-2">
              <Logo size="lg" asLink={false} align="left" />
            </h1>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 border"
              style={{ color: "var(--logo-navy)", borderColor: "var(--logo-gold)" }}
            >
              Miami, FL
            </span>

            <p className="text-lg text-foreground leading-relaxed">
              Tax preparation and bookkeeping for individuals and small businesses.
            </p>

            <div className="flex flex-wrap gap-6 py-5 border-y" style={{ borderColor: "var(--logo-gold)" }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--logo-gold)" }} />
                <span className="text-sm"><strong className="text-foreground">12+</strong> services</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--logo-gold)" }} />
                <span className="text-sm"><strong className="text-foreground">Expert</strong> CPAs & EAs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--logo-gold)" }} />
                <span className="text-sm">Serving Miami area</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center border-2 px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.02] w-fit hover:border-[oklch(0.55_0.12_290)]"
                style={{ borderColor: "var(--logo-gold)", color: "var(--logo-navy)" }}
              >
                Contact Us
              </a>
              <a
                href="tel:7863621353"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:opacity-90 w-fit"
                style={{ backgroundColor: "var(--logo-gold)" }}
              >
                (786) 362-1353
              </a>
            </div>
          </div>

          <div className="hidden md:block aspect-[3/4] max-w-sm overflow-hidden border border-border">
            <Image
              src="/hero-phone.png"
              alt="M & G Tax Services - Call (786) 362-1353"
              width={350}
              height={467}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
