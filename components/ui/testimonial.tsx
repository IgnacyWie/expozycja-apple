"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  companyLogo?: string;
  quote: string;
  authorName: string;
  authorPosition: string;
  authorImage?: string;
  highlightedText?: string;
}

export const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  (
    {
      className,
      companyLogo,
      quote,
      authorName,
      authorPosition,
      authorImage,
      highlightedText,
      ...props
    },
    ref,
  ) => {
    const formattedQuote = highlightedText
      ? quote.replace(
        highlightedText,
        `<strong class="font-semibold">${highlightedText}</strong>`,
      )
      : quote;

    return (
      <div ref={ref} className={cn("py-16", className)} {...props}>
        <div className="mx-auto max-w-screen-xl px-4 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {companyLogo && (
              <div className="relative mb-7 h-12 w-48">
                <Image
                  src={companyLogo}
                  alt="Company logo"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            )}
            <p
              className="text-balance max-w-xl text-center text-xl text-foreground sm:text-2xl"
              dangerouslySetInnerHTML={{ __html: `"${formattedQuote}"` }}
            />
            <h5 className="mt-5 font-medium text-muted-foreground">{authorName}</h5>
            <h5 className="mt-1.5 font-medium text-foreground/40">{authorPosition}</h5>
            {authorImage && (
              <div className="relative mt-5 size-12 overflow-hidden rounded-full bg-muted">
                <Image
                  src={authorImage}
                  alt={authorName}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
);

Testimonial.displayName = "Testimonial";
