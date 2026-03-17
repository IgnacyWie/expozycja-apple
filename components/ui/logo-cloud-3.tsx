import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  text?: string;
  className?: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  // Repeat the provided logos so the marquee has enough content to animate smoothly
  const minimumLogos = 6;
  const repeatedLogos =
    logos.length >= minimumLogos || logos.length === 0
      ? logos
      : Array.from(
        { length: Math.ceil(minimumLogos / logos.length) },
        () => logos
      )
        .flat()
        .slice(0, minimumLogos);

  return (
    <div
      {...props}
      className={cn(
        "w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent 0%,black 12%,black 88%,transparent 100%)]",
        className
      )}
    >
      <InfiniteSlider gap={42} reverse speed={80} speedOnHover={25}>
        {repeatedLogos.map((logo, index) => {
          if (logo.text) {
            return (
              <span
                key={`logo-${logo.alt}-${index}`}
                aria-label={logo.alt}
                className={cn(
                  "pointer-events-none select-none whitespace-nowrap text-xl md:text-2xl font-semibold",
                  logo.className,
                )}
              >
                {logo.text}
              </span>
            );
          }

          return (
            <img
              alt={logo.alt}
              className={cn(
                "pointer-events-none h-12 select-none md:h-12 lg:h-12 dark:brightness-0 dark:invert",
                logo.className,
              )}
              height={logo.height || "auto"}
              key={`logo-${logo.alt}-${index}`}
              loading="lazy"
              src={logo.src!}
              width={logo.width || "auto"}
            />
          );
        })}
      </InfiniteSlider>
    </div>
  );
}
