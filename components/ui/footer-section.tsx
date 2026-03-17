'use client'

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Facebook, Frame, Instagram, Linkedin, Youtube } from "lucide-react"
import type { ComponentProps, ReactNode } from "react"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "#features" },
      { title: "Pricing", href: "#pricing" },
      { title: "Testimonials", href: "#testimonials" },
      { title: "Integration", href: "/" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "FAQs", href: "/faqs" },
      { title: "About Us", href: "/about" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Services", href: "/terms" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "Changelog", href: "/changelog" },
      { title: "Brand", href: "/brand" },
      { title: "Help", href: "/help" },
    ],
  },
  {
    label: "Social Links",
    links: [
      { title: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
      { title: "Instagram", href: "https://www.instagram.com/asai_labs/", icon: Instagram },
      { title: "Youtube", href: "https://www.youtube.com/", icon: Youtube },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/asailabs", icon: Linkedin },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute left-1/2 right-1/2 top-0 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="ASAI Labs logo" className="h-8 w-auto" />
            <Frame className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} ASAI Labs. All rights reserved.
          </p>
          <div className="space-y-1 text-sm text-muted-foreground">
            <div>
              Email:{" "}
              <Link href="mailto:hello@asailabs.com" className="underline underline-offset-2">
                hello@asailabs.com
              </Link>
            </div>
            <div>
              Support:{" "}
              <Link href="mailto:support@asailabs.com" className="underline underline-offset-2">
                support@asailabs.com
              </Link>
            </div>
          </div>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground">{section.label}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1 transition-all duration-300 hover:text-foreground"
                      >
                        {link.icon && <link.icon className="me-1 h-4 w-4" />}
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
