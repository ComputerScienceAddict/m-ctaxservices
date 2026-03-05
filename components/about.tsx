import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-border overflow-hidden" style={{ backgroundColor: "oklch(0.98 0.015 290)" }}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] overflow-hidden border-2 border-foreground/10">
            <Image
              src="/about-bookkeeping.png"
              alt="Bookkeeping and financial services"
              width={600}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="mb-6">
              <h2
                className="text-3xl md:text-4xl font-bold font-display tracking-tight"
                style={{ color: "var(--logo-gold)" }}
              >
                About Us
              </h2>
              <div
                className="h-1 w-16 mt-2"
                style={{ backgroundColor: "var(--logo-gold)" }}
              />
            </div>
            <p className="text-lg text-foreground leading-relaxed mb-4 font-medium">
              M & G Tax Services is led by Maria Martinez. We do taxes and bookkeeping for individuals and small businesses in Miami.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              Tax preparation, payroll, business formation, bank reconciliations, and more. We handle the numbers so you can focus on your business.
            </p>
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--logo-navy)" }}
            >
              Call or email for a free consultation. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
