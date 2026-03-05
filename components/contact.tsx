import Image from "next/image"

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28" style={{ backgroundColor: "var(--logo-navy)" }}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <div className="h-1 w-24 mb-8" style={{ backgroundColor: "var(--logo-gold)" }} />
          <h2 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white mb-4">
            Helping Individuals & Small Businesses
          </h2>
          <p className="text-white/90 mb-12 max-w-xl">
            With their financial needs. Call or email for a free consultation.
          </p>

          <div className="max-w-xs mx-auto mb-12 shadow-2xl">
            <Image
              src="/m-g-flyer.png"
              alt="M & G Tax Services - Services and contact information"
              width={320}
              height={480}
              className="w-full h-auto border-2"
              style={{ borderColor: "var(--logo-gold)" }}
            />
          </div>

          <div className="text-white space-y-2">
            <p className="font-bold text-lg">Maria Martinez</p>
            <p className="text-white/90">
              <a href="tel:7863621353" className="hover:text-white transition-colors">(786) 362-1353</a>
              {" · "}
              <a href="mailto:mgtaxservices1@yahoo.com" className="hover:text-white transition-colors">mgtaxservices1@yahoo.com</a>
            </p>
            <p className="text-white/70 text-sm">Miami, FL</p>
          </div>
        </div>
      </div>
    </section>
  )
}
