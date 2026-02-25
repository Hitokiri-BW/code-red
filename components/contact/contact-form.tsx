"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
          <CheckCircle className="h-7 w-7 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Message Sent!</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-2"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="Jane" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Doe" required />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="jane@example.com" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" placeholder="How can we help?" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us more about your question or feedback..."
          rows={5}
          required
        />
      </div>
      <Button type="submit" className="w-full gap-2 sm:w-auto sm:self-end">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  )
}
