import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"

type Logo = {
  src: string
  alt: string
  width?: number
  height?: number
}

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[]
}

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative mx-auto max-w-3xl bg-gradient-to-r from-secondary via-transparent to-secondary py-6 md:border-x">
      <div className="pointer-events-none absolute left-1/2 -top-px w-screen -translate-x-1/2 border-t" />

      <InfiniteSlider gap={42} reverse speed={60} speedOnHover={20}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-4 select-none dark:brightness-0 dark:invert md:h-5"
            height={logo.height || "auto"}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || "auto"}
          />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute left-0 top-0 h-full w-[160px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute right-0 top-0 h-full w-[160px]"
        direction="right"
      />

      <div className="pointer-events-none absolute left-1/2 -bottom-px w-screen -translate-x-1/2 border-b" />
    </div>
  )
}
