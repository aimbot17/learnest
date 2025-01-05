import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { ErrorBoundary } from "@/components/error-boundary";
import { LoadingFallback } from "@/components/loading-fallback";
// import { Analytics } from "@/components/analytics";
// import { SpeedInsights } from "@/components/speed-insights";

import "./globals.css";

// Environment configuration with type safety
const ENV = {
  URL: process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000",
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV,
} as const;

// Enhanced metadata configuration with proper typing
export const metadata = {
  metadataBase: new URL(ENV.URL),
  title: {
    default: "Learnest",
    template: "%s | Learnest - Learning Platform",
  },
  description: "The fastest way to build apps with Next.js and Supabase",
  keywords: [
    "Next.js",
    "Supabase",
    "React",
    "Web Development",
    "Learning Platform",
  ],
  authors: [{ name: "Learnest Team" }],
  creator: "Learnest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: ENV.URL,
    title: "Learnest - Modern Learning Platform",
    description: "The fastest way to build apps with Next.js and Supabase",
    siteName: "Learnest",
    images: [
      {
        url: `${ENV.URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Learnest Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learnest - Modern Learning Platform",
    description: "The fastest way to build apps with Next.js and Supabase",
    creator: "@learnest",
    images: [`${ENV.URL}/twitter-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: `${ENV.URL}/manifest.json`,
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
} as const;

// Type-safe props interface
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full scroll-smooth antialiased"
    >
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {ENV.NODE_ENV === "production" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
          </>
        )}
      </head>
      <body className="relative min-h-screen bg-background font-sans text-foreground antialiased">
        <ErrorBoundary
          fallback={<div>Something went wrong. Please try again.</div>}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="learnest-theme"
          >
            <Suspense fallback={<LoadingFallback />}>
              <div className="relative flex min-h-screen flex-col">
                <main className="flex-1">{children}</main>
              </div>
            </Suspense>

            <Toaster />
          </ThemeProvider>
        </ErrorBoundary>

        {/* Analytics and Performance Monitoring
        {ENV.NODE_ENV === "production" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )} */}

        {/* Skip to main content for accessibility */}
        <div
          role="region"
          aria-label="Skip to main content"
          className="fixed top-0 left-0 z-50"
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:block focus:p-4 focus:bg-background focus:text-foreground"
          >
            Skip to main content
          </a>
        </div>
      </body>
    </html>
  );
}

// Error handling for the root layout
export function generateStaticParams() {
  return [];
}

export const dynamic = "force-static";
export const runtime = "nodejs";
export const preferredRegion = "auto";
export const revalidate = false;
