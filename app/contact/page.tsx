import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Landmark, Info, ShieldAlert } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";
import { CategoryIllustration } from "@/components/category-illustration";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Research Administration & Support",
  description: "Get in touch with the mud.cc administrative and research team. Submit research inquiries, data logs, or academic collaborations regarding soil science, clay mineralogy, and earthen studies.",
  path: "/contact",
  keywords: [
    "mud.cc contact",
    "research administration",
    "academic inquiry",
    "soil science partnership",
    "earthen conservation support"
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
        "name": "Contact Research Administration — mud.cc",
        "description": "Securely contact the custodians of the mud.cc scientific archive to discuss academic submissions, research partnerships, or wetlands conservation programs.",
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
    <div className="w-full min-h-screen py-16 px-6 bg-gradient-to-b from-stone-100 to-stone-50 text-stone-900 selection:bg-amber-100 selection:text-amber-900 flex justify-center items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl w-full">
        {/* Back navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Back to Directory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-amber-200">
                <Landmark size={10} /> Administrative Registry
              </span>
              <h1 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-stone-900">
                Inquire & Submit Logs
              </h1>
              <p className="text-stone-600 text-sm max-w-lg font-sans">
                Contact the curators of the mud.cc digital archive regarding research contributions, academic partnerships, or regional soil logging inquiries.
              </p>
            </div>
            
            <ContactForm />
          </div>

          {/* Right Column: Schema Artwork & Context Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Admin Base Schema Card */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-md space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] text-amber-600 font-mono font-bold uppercase tracking-widest block">ADMINISTRATIVE CORE</span>
                <h3 className="text-lg font-bold font-display text-stone-900">Research Base Blueprint</h3>
              </div>
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-stone-100 shadow-inner bg-stone-50/20 p-2">
                <CategoryIllustration
                  slug="mud-architecture"
                  theme={{
                    primary: "stone",
                    bg: "bg-stone-50/60",
                    text: "text-stone-900",
                    border: "border-stone-200",
                    accent: "text-stone-700"
                  }}
                />
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Visualizing the sustainable structural clay layers that underlay mud.cc administrative and educational operations worldwide.
              </p>
            </div>

            {/* Submission Guidelines Notes */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 space-y-4 shadow-sm">
              <h4 className="text-xs font-mono font-bold uppercase text-stone-400 flex items-center gap-1.5">
                <Info size={14} className="text-stone-400" /> Administrative Notice
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                All submissions, academic papers, and clay-soil telemetry readings undergo strict geological peer-review by the mud.cc Editorial Board before registry cataloging.
              </p>
              <div className="pt-3 border-t border-stone-200/60 text-[10px] text-stone-500 flex items-start gap-1.5 leading-snug">
                <ShieldAlert size={12} className="text-amber-600 shrink-0 mt-0.5" />
                <span>To report data errors or claim a sub-domain, specify your registry ID in the message body.</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
