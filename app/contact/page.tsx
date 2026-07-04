import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Registry Contact & Support",
  description: "Get in touch with the mud.cc domain registry administration. Direct inquiries regarding domain transfer protocols, escrow procedures, and administrative registry records.",
  path: "/contact",
  keywords: [
    "mud.cc contact",
    "registry administration",
    "domain inquiry",
    "buy mud.cc",
    "godaddy domain escrow",
    "secure domain acquisition"
  ],
});

export default function ContactPage() {
  const baseUrl = getBaseUrl();

  // JSON-LD structured data for the Contact Page
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${baseUrl}/contact/#webpage`,
        "url": `${baseUrl}/contact`,
        "name": "Contact Registry Administration — mud.cc",
        "description": "Securely contact the custodians of the mud.cc domain registry to discuss acquisition, licensing, or joint-ventures.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": baseUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contact",
              "item": `${baseUrl}/contact`
            }
          ]
        }
      }
    ]
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col justify-center items-center py-16 px-6 bg-gradient-to-b from-stone-100 to-stone-50 text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-2xl w-full">
        {/* Back navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Directory
        </Link>

        {/* Core contact form container */}
        <ContactForm />
      </div>
    </div>
  );
}
