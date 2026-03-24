'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Menu, X, Mic, Car, Brain, LayoutDashboard, ChevronDown, Instagram, Linkedin, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Testimonial } from '@/components/ui/testimonial'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { LogoCloud } from '@/components/ui/logo-cloud-3'
import { PulseVoiceRecorder } from '@/components/ui/pulse-voice-recorder'
import { Tabs, type ITab } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { TextRevealByWord } from '@/components/ui/text-reveal-by-word'
import { Timeline, type TimelineEntry } from '@/components/ui/timeline'
import { CalendlyModal } from '@/components/ui/calendly-modal'
import { Tooltip } from '@/components/ui/tooltip'
import { Features } from '@/components/ui/features-8'
import { cn } from '@/lib/utils'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

const HERO_DASHBOARD_TABS: ITab[] = [
  { title: 'Dashboard', value: 'main' },
  { title: 'Sound analytics', value: 'sound' },
  { title: 'Graphs', value: 'graphs' },
]
const HERO_DASHBOARD_IMAGES: Record<string, { src: string; alt: string }> = {
  main: { src: '/apple.png', alt: 'MantAI dashboard' },
  sound: { src: '/sound-dash-details.png', alt: 'Sound analytics - track your car noises' },
  graphs: { src: '/2-home-dash.png', alt: 'Analytics graphs' },
}

export function HeroSection() {
  const [calendlyOpen, setCalendlyOpen] = React.useState(false)
  const [heroDashboardTab, setHeroDashboardTab] = React.useState('main')
  return (
    <>
      <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} />
      <HeroHeader onGetStartedClick={() => setCalendlyOpen(true)} />

      <main className="overflow-x-hidden">
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section id="home" className="scroll-mt-24">
          <div className="relative pt-24 md:pt-36">
            <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <div className="bg-muted group mx-auto flex w-fit items-center gap-2 rounded-full border px-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    <span className="text-foreground font-medium">
                      Made in Europe
                    </span>

                    <span className="text-foreground text-2xl font-medium">
                      🇪🇺
                    </span>

                  </div>
                  <h1
                    className="mt-8 max-w-4xl mx-auto text-balance font-semibold text-7xl md:text-8xl lg:mt-16 xl:text-[6rem]">
                    Master the bake. Automate the rest.
                  </h1>
                  <p
                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                    Transform your display into data. Real-time counter recognition designed for high-volume bakeries.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[14px] border p-0.5">
                    <Button
                      size="lg"
                      className="rounded-xl px-5 text-base"
                      onClick={(e) => {
                        e.preventDefault()
                        setCalendlyOpen(true)
                      }}
                    >
                      <span className="text-nowrap">Request a Demo</span>
                    </Button>
                  </div>
                </AnimatedGroup>
              </div>
            </div>


            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}>
              <div className="relative -mr-56 mt-1 overflow-hidden px-2 sm:mr-0 sm:mt-2 md:mt-2">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-7xl overflow-hidden shadow-lg shadow-zinc-950/15 ring-1">
                  <motion.img
                    key={heroDashboardTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block w-full object-cover"
                    src={HERO_DASHBOARD_IMAGES[heroDashboardTab]?.src ?? HERO_DASHBOARD_IMAGES.main.src}
                    alt={HERO_DASHBOARD_IMAGES[heroDashboardTab]?.alt ?? HERO_DASHBOARD_IMAGES.main.alt}
                    width={2700}
                    height={1440}
                  />
                  <motion.img
                    key={`${heroDashboardTab}-light`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden w-full object-cover"
                    src={HERO_DASHBOARD_IMAGES[heroDashboardTab]?.src ?? HERO_DASHBOARD_IMAGES.main.src}
                    alt={HERO_DASHBOARD_IMAGES[heroDashboardTab]?.alt ?? HERO_DASHBOARD_IMAGES.main.alt}
                    width={2700}
                    height={1440}
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section >
        <section className="bg-background pb-16 pt-16 md:pb-32">
          <div className="relative mx-auto max-w-3xl px-6">
            <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
              <div className="flex flex-col space-y-2">
                <span className="">Trusted by experts.</span>
                <span className="text-muted-foreground text-lg">Used by the leaders.</span>
              </div>
            </h2>
            <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

            {/*<LogoCloud logos={logos} />*/}

            <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
          </div>
        </section>
        <section className="scroll-mt-24 bg-background pb-16 pt-16 md:pb-32">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center h-[50vh] pb-32 flex flex-col justify-center">
              <h2 className="mb-4 md:mb-6 text-2xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Tired of empty display cases?
                <br />
                Stop letting missed sales cut into your margins.
              </h2>
              <p id="how-it-works" className="text-lg md:text-xl text-muted-foreground font-medium">
                We have the solution for you.
              </p>
            </div>
            <h3 className="mb-8 md:mb-0 text-center font-medium text-foreground text-4xl tracking-tight md:text-6xl">
              <span className="font-semibold">How It Works</span>
            </h3>
            <Timeline data={HOW_IT_WORKS_TIMELINE} />
          </div>
        </section>
        <Features />
        <FomoCtaSection onGetStartedClick={() => setCalendlyOpen(true)} />
        <FaqSection onBookCallClick={() => setCalendlyOpen(true)} />
        <FooterSection />
      </main >
    </>
  )
}

function FomoCtaSection({ onGetStartedClick }: { onGetStartedClick: () => void }) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <TextRevealByWord
          className="border-t border-border h-[85vh] md:h-[90vh]"
          text="Every empty shelf is a missed sale. Join ASAI Labs now—automate your inventory before today’s stockout becomes tomorrow’s lost revenue."
          footer={
            <div className="bg-foreground/10 rounded-[14px] border p-0.5">
              <Button size="lg" className="rounded-xl px-6 text-base" onClick={onGetStartedClick}>
                <span className="text-nowrap">Get started</span>
              </Button>
            </div>
          }
        />
      </div>
    </section>
  )
}

const FAQS = [
  {
    q: 'Do I need to install expensive cameras?',
    a: 'Zero hardware required. Your team simply uses the smartphones or tablets they already own. No wiring, no installers, and no complex maintenance—just an app that works.',
  },
  {
    q: 'Are you recording my customers?',
    a: 'Never. Our AI is built with privacy-first architecture. It is trained to ignore faces and focus exclusively on "inventory geometry"—extracting fill ratios from your counters while keeping your customers anonymous.',
  },
  {
    q: 'Will this replace my employees?',
    a: 'Not at all. We believe bakers should be baking, not holding clipboards. Our system empowers your staff by removing the most tedious part of their job: manual inventory counting.',
  },
  {
    q: 'How does this differ from my POS data?',
    a: 'Your POS tells you what you sold; we tell you what is actually left on the shelf. We bridge the "visibility gap" to identify theft, waste, and restocking opportunities that sales data alone cannot see.',
  },
  {
    q: 'How accurate is the recognition?',
    a: 'Surgical. Our custom-trained vision models can distinguish between sourdough, rye, and baguettes even when they are overlapping or tightly packed in display baskets.',
  },
  {
    q: 'How fast can we see results?',
    a: 'Immediately. Once the first photo is snapped, our ML model processes the fill ratios in seconds, and your dashboard populates with actionable data instantly.',
  },
  {
    q: 'Can it handle low-light or crowded counters?',
    a: 'Yes. The system was designed for the "beautiful chaos" of a busy bakery morning. It compensates for varied lighting and recognizes products even through glass display cases.',
  },
  {
    q: 'What happens to the images after processing?',
    a: 'Security is paramount. Images are processed through an encrypted pipeline. Once the inventory data is extracted, you have full control over whether images are archived for audit trails or instantly deleted.',
  },
]

function FaqSection({ onBookCallClick }: { onBookCallClick?: () => void }) {
  return (
    <section id="faq" className="scroll-mt-24 bg-gray-50 pb-16 pt-4 md:pb-32 md:pt-6 dark:bg-transparent">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">FAQ</h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Everything you need to know before you install.
          </p>
        </div>

        <div className="grid gap-3">
          {FAQS.map((item) => (
            <Card key={item.q} className="border-zinc-300/80 bg-zinc-50/80 dark:border-white/10 dark:bg-white/5">
              <CardContent className="p-0">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                    <span className="text-base md:text-lg font-semibold text-foreground">{item.q}</span>
                    <ChevronDown className="size-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                </details>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}


const ErrorTypeTabs = () => {
  const [selectedError, setSelectedError] = React.useState('wheel-hub-bearings');

  const errorTabs: ITab[] = [
    {
      title: 'Wheel Hub Bearings',
      value: 'wheel-hub-bearings',
      tooltip: 'Grinding or rumbling noise that increases with speed'
    },
    {
      title: 'Ball-Joints',
      value: 'ball-joints',
      tooltip: 'Clunking noise when turning or going over bumps'
    },
    {
      title: 'Tensioner Belt',
      value: 'tensioner-belt',
      tooltip: 'High-pitched squealing sound, especially on cold starts'
    },
    {
      title: 'Motor Bearings',
      value: 'motor-bearings',
      tooltip: 'Deep rumbling or grinding noise from the engine'
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs
        selected={selectedError}
        setSelected={setSelectedError}
        tabs={errorTabs}
        variant="primary"
      />
      <div className="mt-8 md:mt-12">
        <PulseVoiceRecorder selectedErrorType={selectedError} />
      </div>
    </div>
  );
};

const HOW_IT_WORKS_TIMELINE: TimelineEntry[] = [
  {
    title: 'Step 1',
    content: (
      <>
        <h4 className="text-lg md:text-xl font-semibold text-black dark:text-white">
          Snap a quick photo
        </h4>
        <p className="mt-2 text-sm md:text-base text-black/80 dark:text-white/80">
          Your staff receives a gentle notification to take a picture of the display cases. No complex hardware installations or clunky scanning wands are required—just a quick photo using any smartphone or tablet.
        </p>
        <div className="mt-6">
          <img
            src="/phone-capture.png"
            alt="Employee taking a photo of a bakery counter"
            className="w-full max-w-3xl rounded-xl object-contain"
          />
        </div>
      </>
    ),
  },
  {
    title: 'Step 2',
    content: (
      <>
        <h4 className="text-lg md:text-xl font-semibold text-black dark:text-white">
          Custom vision AI processes the image
        </h4>
        <p className="mt-2 text-sm md:text-base text-black/80 dark:text-white/80">
          The images are instantly routed to our custom-trained Machine Learning vision model. Designed specifically for bakeries, it effortlessly recognizes overlapping artisan loaves, intricate pastries, and varying tray layouts.
        </p>
        <div className="mt-6">
          <img
            src="/ai-processing.png"
            alt="AI vision model identifying different types of bread"
            className="w-full max-w-3xl rounded-xl object-contain"
          />
        </div>
      </>
    ),
  },
  {
    title: 'Step 3',
    content: (
      <>
        <h4 className="text-lg md:text-xl font-semibold text-black dark:text-white">
          Extract precise fill ratios
        </h4>
        <p className="mt-2 text-sm md:text-base text-black/80 dark:text-white/80">
          The system analyzes the visual data to calculate exact fill ratios for every shelf and basket. It knows immediately what is fully stocked, what is running low, and what has sold out, with clinical precision.
        </p>
        <div className="mt-6">
          <img
            src="/fill-ratio.png"
            alt="Visual overlay showing percentage of counter fill ratios"
            className="w-full max-w-3xl rounded-xl object-contain"
          />
        </div>
      </>
    ),
  },
  {
    title: 'Step 4',
    content: (
      <>
        <h4 className="text-lg md:text-xl font-semibold text-black dark:text-white">
          Manage everything from a sleek dashboard
        </h4>
        <p className="mt-2 text-sm md:text-base text-black/80 dark:text-white/80">
          All extracted data is instantly aggregated into a centralized, minimalist dashboard. Monitor real-time availability, track sales velocity, and reduce end-of-day waste without ever doing a manual count.
        </p>
        <div className="mt-6">
          <img
            src="/test.png"
            alt="Minimalist SaaS dashboard showing bakery inventory analytics"
            className="w-full max-w-3xl rounded-xl object-contain"
          />
        </div>
      </>
    ),
  },
]

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Features', href: '#savings' },
  { name: 'FAQ', href: '#faq' },
]

const logos = [
  {
    src: "/goraco.png",
    alt: "Goraco Polecam",
    href: "https://goraco-polecam.pl/"
  },
  {
    src: "/jush.png",
    alt: "Zabka Jush",
    href: "https://jush.pl/"
  },
  {
    src: "/enata.png",
    alt: "Enata Bread",
    href: "https://enatabread.pl/"
  },
  {
    src: "/bakery.png",
    alt: "The Bakery",
    href: "https://www.instagram.com/thebakerywarszawa/"
  },
  {
    src: "/szalata.png",
    alt: "Szalata i szok",
    href: "https://www.instagram.com/szalata_i_szok/"
  },
]

const HeroHeader = ({ onGetStartedClick }: { onGetStartedClick?: () => void }) => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('#home')

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sectionIds = ['home', 'how-it-works', 'savings', 'faq']
      let currentId = '#home'
      let minOffset = Number.POSITIVE_INFINITY

      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const viewportOffset = Math.abs(rect.top - 96) // ~nav height offset

        if (viewportOffset < minOffset && rect.bottom > 96) {
          minOffset = viewportOffset
          currentId = `#${id}`
        }
      })

      setActiveSection(currentId)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-20 w-full px-2 group">
        <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="https://asailabs.com"
                aria-label="home"
                className="flex items-center space-x-2">
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setActiveSection(item.href)}
                      className={cn(
                        'relative block rounded-full px-3 py-1 text-muted-foreground duration-150 hover:text-accent-foreground',
                        activeSection === item.href && 'text-foreground',
                      )}>
                      <span className="relative z-10">{item.name}</span>
                      {activeSection === item.href && (
                        <motion.div
                          layoutId="nav-lamp"
                          className="absolute inset-0 -z-0 w-full rounded-full bg-primary/5"
                          initial={false}
                          transition={{
                            type: 'spring',
                            stiffness: 320,
                            damping: 30,
                          }}
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full">
                            <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-primary/10 blur-lg" />
                            <div className="absolute -top-2 h-4 w-12 rounded-full bg-primary/5 blur-xl" />
                            <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-primary/10 blur-md" />
                          </div>
                        </motion.div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveSection(item.href)
                          setMenuState(false)
                        }}
                        className={cn(
                          'block duration-150 text-muted-foreground hover:text-accent-foreground',
                          activeSection === item.href && 'text-accent-foreground font-semibold',
                        )}>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(isScrolled && 'lg:hidden')}>
                </Button>
                <Button
                  size="sm"
                  className={cn(isScrolled && 'lg:hidden')}
                  onClick={onGetStartedClick}>
                  <span>Get Started</span>
                </Button>
                <Button
                  size="sm"
                  className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}
                  onClick={onGetStartedClick}>
                  <span>Get Started</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

function FooterSection() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">Perfect your bake.</h2>
            <p className="mb-6 text-sm md:text-base text-zinc-400">
              Join our newsletter for the latest in bakery automation and visual inventory insights.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-sm text-zinc-50 placeholder:text-zinc-400 outline-none ring-0 transition focus:border-white/20"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-9 w-9 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Product</h3>
            <nav className="space-y-2 text-sm text-zinc-300">
              <Link href="#how-it-works" className="block transition-colors hover:text-white">
                How it works
              </Link>
              <Link href="#savings" className="block transition-colors hover:text-white">
                ROI & Savings
              </Link>
              <Link href="#faq" className="block transition-colors hover:text-white">
                FAQ
              </Link>
              <Link href="#link" className="block transition-colors hover:text-white">
                Pricing
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <address className="space-y-2 text-sm not-italic text-zinc-300">
              <p>Bakery Intelligence & Ops</p>
              <p>
                Email:{' '}
                <Link href="mailto:hello@asailabs.com" className="underline underline-offset-2">
                  hello@asailabs.com
                </Link>
              </p>
              <p>Support:{' '}
                <Link href="mailto:hello@asailabs.com" className="underline underline-offset-2">
                  support@asailabs.com
                </Link>
              </p>
            </address>
          </div>

          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow ASAI</h3>
            <div className="mb-6 flex flex-wrap gap-3">
              <Tooltip text="LinkedIn">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10 hover:text-white"
                >
                  <Link
                    href="https://www.linkedin.com/company/asailabs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </Tooltip>
              <Tooltip text="Instagram">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10 hover:text-white"
                >
                  <Link href="https://www.instagram.com/asai_labs/" target="_blank" rel="noreferrer">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
              </Tooltip>
            </div>
            <p className="text-sm text-zinc-400">
              Transforming bakery operations with visual intelligence.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} ASAI Labs. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300">
            <Link href="#link" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#link" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

const Logo = ({ className }: { className?: string }) => {
  return (
    <span className={cn('text-lg font-semibold tracking-tight', className)}>
      <img className="h-5"
        src="/logo.png"
      />
    </span>
  )
}
