const services = [
  "Individual Taxes",
  "Corporate Taxes",
  "Sales and Use Taxes",
  "Estimated Taxes",
  "Payroll Taxes / EFTPS",
  "Business Recording (AP/AR)",
  "Bank Reconciliations",
  "Financial Reports",
  "Business Formation",
  "Annual Reports",
  "Workers' Comp Exemption",
  "BOI Reports",
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 border-t-2 bg-white" style={{ borderColor: "var(--logo-gold)" }}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mb-6">
          <h2
            className="text-3xl md:text-4xl font-bold font-display tracking-tight"
            style={{ color: "var(--logo-gold)" }}
          >
            Services
          </h2>
          <div
            className="h-1 w-16 mt-2"
            style={{ backgroundColor: "var(--logo-gold)" }}
          />
        </div>
        <p className="text-foreground font-medium mb-10 max-w-xl">
          Individual and business tax preparation, bookkeeping, payroll, and more.
        </p>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-3 list-none pl-0">
          {services.map((service, i) => (
            <li key={i} className="text-foreground font-medium flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: "var(--logo-gold)" }}
              />
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
