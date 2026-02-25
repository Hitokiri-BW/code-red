import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Authentication Error",
}

export default function AuthErrorPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-background px-6">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle className="h-8 w-8 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Authentication Error</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Something went wrong during sign in. Please try again.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </section>
  )
}
