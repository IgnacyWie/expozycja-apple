import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exponata AI",
  description: "Modern Solutions for Customer Engagement",
  openGraph: {
    images: [
      {
        url: "/phone-capture.png",
        width: 1200,
        height: 630,
        alt: "Phone capture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/phone-capture.png",
        width: 1200,
        height: 630,
        alt: "Phone capture",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {children}
        <Analytics />
      </body>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </html>
  );
}
