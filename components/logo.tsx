import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  asLink?: boolean
  align?: "left" | "center"
  variant?: "default" | "light"
  className?: string
}

const sizeClasses = {
  sm: {
    top: "text-lg",
    bottom: "text-[10px]",
    line: "mt-1",
  },
  md: {
    top: "text-2xl",
    bottom: "text-xs",
    line: "mt-1.5",
  },
  lg: {
    top: "text-4xl md:text-5xl",
    bottom: "text-sm md:text-base",
    line: "mt-2",
  },
}

function LogoContent({
  size = "md",
  align = "left",
  variant = "default",
  className,
}: {
  size?: "sm" | "md" | "lg"
  align?: "left" | "center"
  variant?: "default" | "light"
  className?: string
}) {
  const s = sizeClasses[size]
  const bottomColor = variant === "light" ? "white" : "var(--logo-navy)"
  return (
    <div className={cn("flex flex-col w-fit", align === "center" ? "items-center" : "items-start", className)}>
      <span
        className={cn(s.top, "font-semibold tracking-tight")}
        style={{ fontFamily: "var(--font-logo), Georgia, serif", color: "var(--logo-gold)" }}
      >
        M & G
      </span>
      <span
        className={cn(s.bottom, "font-bold uppercase tracking-wider")}
        style={{ color: bottomColor }}
      >
        TAX SERVICES LLC
      </span>
      <div
        className={cn("h-0.5 w-full", s.line)}
        style={{ backgroundColor: "var(--logo-gold)" }}
      />
    </div>
  )
}

export function Logo({ size = "md", asLink = true, align = "left", variant = "default", className }: LogoProps) {
  if (asLink) {
    return (
      <Link href="/" className="block w-fit">
        <LogoContent size={size} align={align} variant={variant} className={className} />
      </Link>
    )
  }
  return <LogoContent size={size} align={align} variant={variant} className={className} />
}
