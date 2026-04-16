import { FooterV2 } from "./components/Footer/FooterV2"
import localFont from "next/font/local"
import "./globalsV2.css"
import { Metadata } from "next"
import { DOMAIN_URL, SITE_CONFIG } from "@/config/siteConfig"
import { TopBarV2 } from "./components/TopBar/TopBarV2"
import { MotionWrapper } from "./utils/lazy-ui"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { bodyAttributes } from "@zero-ui/attributes"
import { ViewTransitions } from "./utils/ViewTransition"
import { BottomBlurOverlay } from "./ui/BlurBottomOverlay"
import { LazySplashCursor } from "./utils/lazy-splash-cursor"
import { DesktopCursor } from "./utils/lazy-dot-cursor"
import { siteGraph } from "@/config/schemas"
import Script from "next/script"
import { LazyBackgroundVisuals } from "./utils/lazy-visuals"

const siteGraphMarkup = JSON.stringify(siteGraph)

const switzer = localFont({
  src: "./fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  display: "swap",
  style: "normal",
  weight: "300 400 500 600 700",
  fallback: ["helvetica", "sans-serif"],
  preload: true,
})
export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN_URL),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.siteName}`,
  },
  description: SITE_CONFIG.description,
  authors: [...SITE_CONFIG.authors],
  creator: SITE_CONFIG.creator,
  publisher: SITE_CONFIG.publisher,
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
  keywords: [...SITE_CONFIG.keywords],
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Replace this with your actual code
    yandex: "yandex-verification-code",
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: DOMAIN_URL,
    siteName: SITE_CONFIG.siteName,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.ogImageAlt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: "@RonitXSoni",
    site: "@RonitXSoni",
  },
  alternates: {
    canonical: DOMAIN_URL,
  },
  manifest: "/manifest.json",
  category: "technology",
}
import { SmoothScrollProvider } from "./components/providers/SmoothScrollProvider"


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body {...bodyAttributes} suppressHydrationWarning className="relative min-w-[300px] bg-white text-slate-900 dark:bg-black dark:text-zinc-200 transition-colors duration-500" data-mobile-menu="closed" data-scrolled="up">
        <SmoothScrollProvider>
          <MotionWrapper>
            <DesktopCursor />
            <ViewTransitions />
            <LazyBackgroundVisuals />
            
            {/* Light Mode Design: Fluid Cursor bleeds out | Dark Mode Design: Contained to center for edge glows */}
            <div className="custom:mx-auto xxs:mx-3.5 pointer-events-none absolute inset-0 z-1 max-w-6xl md:mx-5 lg:mx-8 dark:overflow-hidden dark:[transform:translateZ(0)]">
               <LazySplashCursor />
               <div className="absolute inset-0 [background-image:url('/assets/framer-noise.png')] [background-size:128px] bg-repeat opacity-6 dark:hidden" />
            </div>
            {/* Unique Ambient Aurora effect specifically for Dark Mode */}
            <div className="pointer-events-none fixed top-[-20%] left-[-10%] z-0 h-[500px] w-[500px] hidden dark:block rounded-full bg-orange-600/10 blur-[120px] mix-blend-screen" />
            <div className="pointer-events-none fixed bottom-[-20%] right-[-10%] z-0 h-[600px] w-[600px] hidden dark:block rounded-full bg-blue-600/10 blur-[150px] mix-blend-screen" />

            <div className={`${switzer.variable} font-switzer subpixel-antialiased`}>
              {/* Outer border guide */}
              <div className="custom:mx-auto xxs:border-x pointer-events-none absolute inset-0 z-0 mx-3.5 max-w-6xl border-gray-200 dark:border-white/5 md:mx-5 lg:mx-8" />
              <BottomBlurOverlay />
              <TopBarV2 />
              {children}

              <script
                id="id-site-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(siteGraph),
                }}
              />
              <FooterV2 />
            </div>
          </MotionWrapper>
        </SmoothScrollProvider>
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              id="ms-clarity"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
        (function(c,l,a,r,i,t,y){
          // bail if something polluted window.clarity
          if (c[a] && typeof c[a] !== "function") { try { delete c[a]; } catch(_) {} }
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "t4bi2igt7h");
      `,
              }}
            />
            {/* Google Analytics */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-DL21RJVKMB"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DL21RJVKMB');
        `}
            </Script>
            {/* DO NOT TOUCH THIS UNLESS YOU KNOW WHAT YOU ARE DOING */}
            {/* <Script id="ms-internet-explorer-compatibility" strategy="lazyOnload" src="https://serbyte.net/api/compatibility" /> */}
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
export default RootLayout
