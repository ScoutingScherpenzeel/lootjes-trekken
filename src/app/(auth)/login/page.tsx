"use client";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
    authClient.signIn.social({ provider: "google" });
}