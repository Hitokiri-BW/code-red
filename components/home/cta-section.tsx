import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Start Your Learning Journey Today
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Join thousands of learners already building new skills and transforming their
          careers. Sign in with your Google account to get started instantly.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="gap-2"
          >
            <Link href="/courses">
              Browse Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
