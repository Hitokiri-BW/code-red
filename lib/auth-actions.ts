"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { headers } from "next/headers"

export async function signInWithGoogle() {
  const supabase = await createClient()
  const headerStore = await headers()
  const origin = headerStore.get("origin") || headerStore.get("x-forwarded-host")
  const protocol = headerStore.get("x-forwarded-proto") || "https"
  const baseUrl = origin ? `${protocol}://${origin}` : ""

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${baseUrl}/auth/callback`,
    },
  })

  if (error) {
    redirect("/auth/error")
  }

  if (data.url) {
    redirect(data.url)
  }
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/")
}
