import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-16">
        {/* Top: Logo + Nav + Socials */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo + Tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="font-mono text-accent text-sm">//</span>
              <span className="font-display text-xl font-bold text-text">
                Deploy Duo
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Built with intention. Deployed with confidence.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col items-start gap-3 md:items-center">
            <span className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
              Navigation
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start gap-3 md:items-end">
            <span className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
              Connect
            </span>
            <div className="flex gap-4">
              <Link
                href="https://github.com/Karam-Abbas"
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/karamabbas"
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Deploy Duo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
