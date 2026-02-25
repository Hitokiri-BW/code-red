import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  Platform: [
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  Subjects: [
    { href: "/courses", label: "Web Development" },
    { href: "/courses", label: "Data Science" },
    { href: "/courses", label: "Design" },
  ],
  Resources: [
    { href: "/about", label: "Community" },
    { href: "/contact", label: "Support" },
    { href: "/about", label: "Blog" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3" aria-label="Code Red Home">
              <Image
                src="/images/logo.png"
                alt="Code Red logo"
                width={36}
                height={36}
                className="rounded-full object-contain"
              />
              <span className="text-lg font-bold text-foreground">Code Red</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Free, high-quality education for everyone. Learn at your own pace from
              industry experts around the world.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">{category}</h3>
              <ul className="flex flex-col gap-3" role="list">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            2026 Code Red. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
