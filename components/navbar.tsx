"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { AuthButton } from "@/components/auth-button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3"
        aria-label="Main navigation"
      >
        {/* Logo + brand */}
        <Link href="/" className="flex items-center gap-3" aria-label="Code Red Home">
          <Image
            src="/images/logo.png"
            alt="Code Red logo"
            width={40}
            height={40}
            className="rounded-full object-contain"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Code Red
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Auth */}
        <div className="hidden md:block">
          <AuthButton />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4" role="list">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
            <li className="pt-2">
              <AuthButton />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
