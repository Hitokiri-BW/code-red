import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the EduLearn team. We'd love to hear from you.",
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@edulearn.org",
    description: "We typically respond within 24 hours.",
  },
  {
    icon: MapPin,
    title: "Our Office",
    detail: "San Francisco, CA",
    description: "Global team, working remotely worldwide.",
  },
  {
    icon: Clock,
    title: "Office Hours",
    detail: "Mon - Fri, 9am - 6pm PST",
    description: "Community forums available 24/7.",
  },
]

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border bg-muted/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Have a question, suggestion, or just want to say hello? We would
            love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground">
                Contact Information
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Reach out through any of the channels below, or fill in the
                form and we will get back to you as soon as possible.
              </p>
              <div className="flex flex-col gap-6 pt-2">
                {contactInfo.map(({ icon: Icon, title, detail, description }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{title}</p>
                      <p className="text-sm font-medium text-primary">{detail}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <Card className="border-border bg-card lg:col-span-3">
              <CardContent className="p-6 md:p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
