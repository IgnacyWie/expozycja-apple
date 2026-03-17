"use client"

import React, { useEffect } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const CALENDLY_URL =
  "https://calendly.com/mati-asailabs/30min?hide_gdpr_banner=1&primary_color=6b6b6b"

interface CalendlyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  className?: string
}

export function CalendlyModal({
  open,
  onOpenChange,
  className,
}: CalendlyModalProps) {
  useEffect(() => {
    if (open && typeof window !== "undefined" && !(window as unknown as { __calendlyScriptLoaded?: boolean }).__calendlyScriptLoaded) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)
        ; (window as unknown as { __calendlyScriptLoaded?: boolean }).__calendlyScriptLoaded = true
    }
  }, [open])

  if (typeof document === "undefined" || !open) return null

  const content = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a call"
      className={cn("fixed inset-0 z-50 flex items-center justify-center p-4", className)}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden
        onClick={() => onOpenChange(false)}
      />
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-background shadow-xl">
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute right-3 top-3 z-20 flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>
        <div
          className="calendly-inline-widget min-h-[700px] w-full"
          data-url={CALENDLY_URL}
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </div>
  )

  return createPortal(content, document.body)
}
