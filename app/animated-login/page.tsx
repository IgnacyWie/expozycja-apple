import { Component } from "@/components/ui/animated-characters-login-page";

export default function AnimatedLoginDemo({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) {
  const initialMode =
    searchParams?.mode === "signup" ? "signup" : ("login" as "login" | "signup");

  return <Component initialMode={initialMode} />;
}

