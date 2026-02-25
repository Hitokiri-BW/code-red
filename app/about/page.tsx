import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Eye, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Code Red's mission to provide free, world-class education for everyone, everywhere.",
}

const values = [
  {
    icon: Heart,
    title: "Accessibility",
    description:
      "Education should be available to everyone regardless of background, location, or financial situation.",
  },
  {
    icon: Target,
    title: "Quality",
    description:
      "Every course is built with rigorous standards, reviewed by experts, and continuously updated.",
  },
  {
    icon: Eye,
    title: "Community",
    description:
      "Learning is better together. We foster a supportive global community of curious minds.",
  },
]

const team = [
  {
    name: "Dr. Amara Patel",
    role: "Founder & CEO",
    bio: "Former university professor with 15 years in education technology. Passionate about making learning accessible to all.",
  },
  {
    name: "David Okonkwo",
    role: "Head of Curriculum",
    bio: "Curriculum design expert who has created learning programs for organizations across 30 countries.",
  },
  {
    name: "Lina Johansson",
    role: "Head of Engineering",
    bio: "Full-stack engineer and open-source advocate dedicated to building inclusive learning platforms.",
  },
  {
    name: "Carlos Mendez",
    role: "Community Lead",
    bio: "Education outreach specialist focused on building engaged and supportive learner communities worldwide.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b border-border bg-muted/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Our Mission: Education for Everyone
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              EduLearn was founded on the belief that quality education is a
              right, not a privilege. We connect world-class instructors with
              curious learners around the globe, completely free of charge.
            </p>
          </div>
        </div>
      </section>

      {/* Story + Image */}
      <section className="py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
          <div className="relative flex-1">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/about.jpg"
                alt="Our collaborative learning environment"
                width={600}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              From a Small Idea to a Global Platform
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              EduLearn started in 2021 when a group of educators realized that
              millions of people lacked access to quality learning resources.
              What began as a handful of courses has grown into a platform
              serving over 50,000 learners across 120 countries.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Today, we offer more than 200 courses spanning technology,
              business, design, and the arts. Our dedicated team of instructors
              and volunteers work tirelessly to ensure every learner has the
              tools they need to succeed.
            </p>
            <Button asChild className="mt-2 w-fit gap-2">
              <Link href="/courses">
                Explore Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-16 md:py-20" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            id="values-heading"
            className="text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          >
            Our Core Values
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-border bg-card text-center">
                <CardContent className="flex flex-col items-center gap-4 p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="team-heading"
              className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            >
              Meet Our Team
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              The passionate people behind EduLearn working to democratize
              education globally.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(({ name, role, bio }) => (
              <Card key={name} className="border-border bg-card">
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    {name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{name}</h3>
                    <p className="text-sm text-primary">{role}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
