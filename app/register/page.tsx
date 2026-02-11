import { AuthForm } from "@/components/auth-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join the Crew | TEARAPY",
  description: "Create your TEARAPY account and start ordering.",
}

export default function RegisterPage() {
  return <AuthForm mode="register" />
}
