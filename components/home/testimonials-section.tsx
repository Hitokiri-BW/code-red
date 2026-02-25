import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Web Developer",
    content:
      "EduLearn completely changed my career path. I went from zero coding knowledge to landing my first developer job in six months.",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "Data Analyst",
    content:
      "The data science courses are incredibly well-structured. The hands-on projects gave me the confidence to apply for positions I never thought I could.",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    role: "UX Designer",
    content:
      "I love that everything is free. The quality rivals paid platforms, and the community support is fantastic. Highly recommend it.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 md:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="testimonials-heading"
            className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            What Our Learners Say
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Thousands of learners have transformed their careers with EduLearn.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map(({ name, role, content, rating }) => (
            <Card key={name} className="border-border bg-card">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {`"${content}"`}
                </p>
                <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
