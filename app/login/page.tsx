import { AuthForm } from "@/components/auth-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login | TEARAPY",
  description: "Access your TEARAPY account.",
}

export default function LoginPage() {
  return <AuthForm mode="login" />
}
