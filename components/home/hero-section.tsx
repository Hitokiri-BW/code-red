import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:py-28 lg:flex-row lg:gap-16">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <BookOpen className="h-4 w-4" />
            100% Free Education
          </span>
          <h1 className="max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Learn Without
            <span className="text-primary"> Limits,</span> Grow Without
            <span className="text-primary"> Boundaries</span>
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Access world-class courses from expert instructors at zero cost.
            Build real skills in web development, data science, design, and
            more.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/courses">
                Explore Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Free Courses</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Active Learners</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative flex-1">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Students learning together in a modern setting"
              width={640}
              height={460}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card p-4 shadow-lg md:-bottom-6 md:-left-6">
            <p className="text-sm font-medium text-foreground">Join 50,000+ learners</p>
            <p className="text-xs text-muted-foreground">Start learning today</p>
          </div>
        </div>
      </div>
    </section>
  )
}
