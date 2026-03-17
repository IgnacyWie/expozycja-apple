import { cn } from "@/lib/utils"
import { LogoCloud } from "@/components/ui/logo-cloud-4"

export default function DemoOne() {
  return (
    <div className="relative min-h-screen w-full place-content-center px-4">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-1/2 -top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
          "blur-[30px]",
        )}
      />
      <div className="w-full">
        <h2 className="mb-5 text-center">
          <span className="block text-2xl font-medium text-muted-foreground">
            Already used by
          </span>
          <span className="text-2xl font-black tracking-tight text-primary md:text-3xl">
            Best in the Game
          </span>
        </h2>

        <LogoCloud logos={logos} />
      </div>
    </div>
  )
}

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
]
