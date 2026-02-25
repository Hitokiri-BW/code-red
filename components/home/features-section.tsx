import { GraduationCap, Clock, Globe, ShieldCheck, Layers, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description:
      "Learn from professionals with years of real-world experience in their fields.",
  },
  {
    icon: Clock,
    title: "Self-Paced Learning",
    description:
      "Study at your own pace. Access course materials anytime, anywhere on any device.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description:
      "Connect with fellow learners from around the world and grow together.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Certificates",
    description:
      "Earn recognized certificates upon completion to showcase your new skills.",
  },
  {
    icon: Layers,
    title: "Structured Curriculum",
    description:
      "Follow well-organized learning paths designed to build skills progressively.",
  },
  {
    icon: MessageSquare,
    title: "Dedicated Support",
    description:
      "Get help whenever you need it through our forums, Q&A, and mentoring programs.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-muted/50 py-20 md:py-28" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="features-heading"
            className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Why Learn With Us
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need for a world-class learning experience, completely free
            of charge.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="border-border bg-card transition-shadow hover:shadow-md"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <Icon className="h-6 w-6 text-primary" />
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
  )
}
