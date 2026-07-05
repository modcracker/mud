import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import TopBanner from "@/components/top-banner";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getBaseUrl } from "@/lib/metadata";
import { GODADDY_URL } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mud.cc"),
  title: "mud.cc — Premium Domain for Sale",
  description: "A content-rich exploration of the mud.cc domain. Own a rare, brandable, and SEO-prime 3-letter digital asset covering wellness, cuisine, adventure, gaming, politics, and sustainable building.",
  keywords: [
    "mud.cc",
    "premium domain",
    "3 letter domain name",
    "three-letter domain registry",
    "digital real estate portfolio",
    "organic mud wellness",
    "mud runs sport",
    "cob housing architecture",
    "MUD games history",
    "Mississippi mud pie",
    "skincare clays",
    "mudlarking",
    "mud tires",
    "domain acquisition",
    "mineral mud skincare",
    "rammed earth engineering",
    "retro text-based gaming",
    "political campaign rhetoric",
    "idiom etymology studies",
    "Thames river archaeology",
    "offroad traction mechanics",
    "geotechnical spring thaw"
  ],
  authors: [{ name: "mud.cc Registry" }],
  creator: "mud.cc Registry",
  publisher: "mud.cc Registry",
  alternates: {
    canonical: "https://www.mud.cc",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "mud.cc — Premium Domain for Sale",
    description: "Own a rare, brandable, and SEO-prime 3-letter digital asset covering wellness, cuisine, adventure, gaming, politics, and sustainable building.",
    url: "https://www.mud.cc",
    siteName: "mud.cc",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "mud.cc Premium Domain Asset",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mud.cc — Premium Domain for Sale",
    description: "Own a rare, brandable, and SEO-prime 3-letter digital asset covering wellness, cuisine, adventure, gaming, politics, and sustainable building.",
    images: ["/images/og-home.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = getBaseUrl();
  
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "mud.cc Domain Registry",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/images/logo-home.jpg`
    },
    "sameAs": [
      "https://twitter.com/mud_cc_registry",
      "https://github.com/mud-cc"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-480-463-8354",
        "contactType": "Domain Acquisitions Desk",
        "url": GODADDY_URL,
        "email": "acquisitions@mud.cc",
        "areaServed": "Worldwide",
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "Registry Support",
        "url": `${baseUrl}/contact`,
        "email": "support@mud.cc",
        "areaServed": "Worldwide",
        "availableLanguage": ["English"]
      }
    ],
    "knowsAbout": [
      "Domain Acquisitions",
      "Digital Real Estate",
      "Semantic Web",
      "Clay Mineralogy",
      "Medieval History",
      "Sustainable Architecture"
    ]
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}/#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-stone-50 text-stone-900 font-sans flex flex-col antialiased selection:bg-amber-100 selection:text-amber-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <div className="sticky top-0 z-40 flex flex-col w-full">
          <TopBanner />
          <Header />
        </div>
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
