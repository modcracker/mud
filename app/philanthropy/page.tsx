import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Heart, Globe, Award, Leaf, Droplets, Home } from "lucide-react";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";
import { CategoryIllustration } from "@/components/category-illustration";

export const metadata: Metadata = generatePageMetadata({
  title: "Philanthropy & Conservation Initiatives",
  description: "Learn about the mud.cc environmental preservation commitment. We support pioneering digital health projects, high-yield soil preservation, and wetlands conservation programs globally.",
  path: "/philanthropy",
  keywords: [
    "mud.cc philanthropy",
    "social giving pledge",
    "environmental conservation",
    "clean water wells",
    "soil preservation",
    "evercove digital health"
  ],
});

export default function PhilanthropyPage() {
  const baseUrl = getBaseUrl();

  // JSON-LD dynamic structured data for the Philanthropy Page
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/philanthropy/#webpage`,
        "url": `${baseUrl}/philanthropy`,
        "name": "Philanthropy & Conservation Initiatives — mud.cc",
        "description": "Learn about our commitment to supporting digital health, wetlands, and clean water filtration programs globally.",
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
              "name": "Philanthropy",
              "item": `${baseUrl}/philanthropy`
            }
          ]
        }
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900 py-16 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Back navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Directory
        </Link>

        {/* Hero Section */}
        <div className="space-y-4 mb-16 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-rose-200">
            <Heart size={12} className="text-rose-500 fill-rose-500" /> Giving Back
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-stone-900">
            Causes We Care About
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl font-sans">
            As custodians of the mud.cc research archive, we believe in supporting pioneering platforms, sustainable ecology, and technical networks that elevate human potential and preserve vital resources.
          </p>
        </div>

        {/* Featured Cause: Evercove */}
        <div className="space-y-8">
          <h2 className="text-xs font-bold text-stone-400 uppercase tracking-widest border-b border-stone-200 pb-3">
            Featured Philanthropy Spotlight
          </h2>

          <div
            className="bg-white border border-stone-200 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group animate-fade-up"
            id="evercove-spotlight-card"
          >
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Evercove Logo & Links */}
              <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                
                {/* Scalable, high-fidelity Evercove Logo */}
                <div className="bg-emerald-50 border border-emerald-100/60 p-6 rounded-2xl flex items-center justify-center shadow-sm max-w-[240px] w-full aspect-[2/1] hover:bg-emerald-100/40 hover:border-emerald-400/60 hover:shadow-[inset_0_0_16px_rgba(16,185,129,0.15),0_6px_20px_rgba(16,185,129,0.08)] active:scale-95 transform transition-all duration-300">
                  <a
                    href="https://evercove.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group/tooltip w-full h-full flex items-center justify-center cursor-pointer"
                    title="Visit evercove.com"
                  >
                    {/* CSS-based Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover/tooltip:block bg-stone-900 text-stone-50 text-[11px] font-sans font-medium py-1.5 px-3 rounded-xl shadow-lg whitespace-nowrap z-50 pointer-events-none border border-stone-800">
                      Support Evercove Software Infrastructure
                      {/* Tooltip arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-900"></div>
                    </div>

                      <svg
                        viewBox="0 0 200 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-auto text-stone-900"
                        id="evercove-brand-logo-svg"
                        aria-labelledby="evercove-title evercove-desc"
                        role="img"
                        aria-label="Evercove Brand Logo - Support Evercove Software Infrastructure"
                      >
                        <title id="evercove-title">Evercove Brand Identity and Digital Health Software Infrastructure Logo</title>
                        <desc id="evercove-desc">The official brand emblem for Evercove, featuring an abstract nested cove wave in green and amber gradients representing dynamic clinical care, healthcare software systems, and virtual access connectivity.</desc>
                        <defs>
                        <linearGradient id="coveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#059669" /> {/* Emerald-600 */}
                          <stop offset="100%" stopColor="#10B981" /> {/* Emerald-500 */}
                        </linearGradient>
                        <linearGradient id="accentGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#34D399" /> {/* Emerald-400 */}
                          <stop offset="100%" stopColor="#F59E0B" /> {/* Amber-500 */}
                        </linearGradient>
                      </defs>
                      
                      {/* Abstract Wave / Nested Cove Icon */}
                      <g transform="translate(10, 8)">
                        {/* Outer Shield/Cove wall */}
                        <path
                          d="M22 2C11 2 2 11 2 22C2 33 11 42 22 42C33 42 42 33 42 22"
                          stroke="url(#coveGrad)"
                          strokeWidth="5"
                          strokeLinecap="round"
                          fill="none"
                        />
                        {/* Inner fluid wave representing dynamic care */}
                        <path
                          className="cove-wave"
                          d="M10 24C10 24 15 16 22 16C29 16 34 24 34 24C34 24 29 32 22 32C15 32 10 24 10 24Z"
                          fill="url(#accentGrad)"
                          opacity="0.85"
                        />
                        {/* Central harbor point */}
                        <circle cx="22" cy="24" r="4" fill="#FFFFFF" />
                      </g>

                      {/* Typography: evercove */}
                      <text
                        x="68"
                        y="37"
                        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                        fontWeight="700"
                        fontSize="26"
                        letterSpacing="-0.04em"
                        fill="#0F172A" /* Slate-900 */
                      >
                        evercove
                      </text>
                    </svg>
                  </a>
                </div>

                <div className="space-y-3 w-full">
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-emerald-100">
                      <Globe size={10} /> digital health
                    </span>
                    <span className="inline-flex items-center gap-1 bg-stone-100 text-stone-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-stone-200">
                      <Award size={10} /> technology partner
                    </span>
                  </div>

                  <a
                    href="https://evercove.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-stone-50 font-semibold px-5 py-3 rounded-xl text-xs transition-colors w-full lg:w-auto justify-center shadow-md active:scale-98"
                  >
                    Visit evercove.com <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Right Column: Narrative Copy */}
              <div className="lg:col-span-7 space-y-5 text-stone-600 text-sm md:text-base leading-relaxed font-sans">
                <h3 className="text-xl font-bold text-stone-900 font-display tracking-tight">
                  Pioneering Care Integration & Health Equity
                </h3>
                <p>
                  We are proud to champion and highlight <strong>Evercove</strong> (evercove.com) as a core technological cause that we support and care deeply about. Evercove works at the intersection of healthcare provision and software infrastructure, breaking down legacy barriers to bring high-quality patient services, clinical outcomes management, and virtual access straight to the communities that need them most.
                </p>
                <p>
                  By deploying secure, digital-first healthcare applications, Evercove optimizes health networks, minimizes administrative overhead, and maximizes human wellness. This matches our core commitment to organic, sustainable growth and positive societal impact.
                </p>
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 space-y-2 mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">Why Evercove Matters:</span>
                  <ul className="list-disc pl-4 text-xs text-stone-500 space-y-1.5 leading-relaxed">
                    <li><strong>Accelerating Access:</strong> Streamlines virtual consultation modules for remote areas.</li>
                    <li><strong>Data Integrity:</strong> Ensures robust, secure patient-records sync under strict, modern parameters.</li>
                    <li><strong>Social Support:</strong> Drives software resources directly into underprivileged community health centers.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Coaligned Environmental Causes */}
        <div className="mt-20 space-y-8">
          <h2 className="text-xs font-bold text-stone-400 uppercase tracking-widest border-b border-stone-200 pb-3">
            Other Initiatives We Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Wetlands / Soil conservation */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-flex p-3 bg-teal-50 rounded-xl text-teal-600 border border-teal-100">
                  <Leaf size={18} />
                </span>
                <h3 className="font-bold text-stone-900 font-display text-lg">Soil & Wetlands Conservation</h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  Supporting wetland restoration programs worldwide. Healthy mud, peat bogs, and coastal estuaries act as powerful natural carbon sinks, making their preservation crucial for planet biodiversity.
                </p>
              </div>
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-stone-100 shadow-inner mt-4 bg-teal-50/20 p-2">
                <CategoryIllustration
                  slug="mud-season"
                  theme={{
                    primary: "teal",
                    bg: "bg-teal-50/60",
                    text: "text-teal-900",
                    border: "border-teal-200",
                    accent: "text-teal-700"
                  }}
                />
              </div>
            </div>

            {/* Clean Water / Filtration */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-flex p-3 bg-sky-50 rounded-xl text-sky-600 border border-sky-100">
                  <Droplets size={18} />
                </span>
                <h3 className="font-bold text-stone-900 font-display text-lg">Clean Water Filtration & Sand Wells</h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  Backing clean water filtration initiatives in water-scarce zones. Helping construct deep sand-filter wells that filter muddy river runoffs into crystal-clear drinking water for villages.
                </p>
              </div>
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-stone-100 shadow-inner mt-4 bg-cyan-50/20 p-2">
                <CategoryIllustration
                  slug="dead-sea-mud"
                  theme={{
                    primary: "cyan",
                    bg: "bg-cyan-50/60",
                    text: "text-cyan-900",
                    border: "border-cyan-200",
                    accent: "text-cyan-700"
                  }}
                />
              </div>
            </div>

            {/* Adobe & Cob Restoration */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-flex p-3 bg-amber-50 rounded-xl text-amber-600 border border-amber-100">
                  <Home size={18} />
                </span>
                <h3 className="font-bold text-stone-900 font-display text-lg">Adobe &amp; Cob Preservation</h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  Funding educational programs for traditional rammed-earth, sun-baked adobe, and cob construction. Championing low-carbon vernacular architecture to lower energy footprints globally.
                </p>
              </div>
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-stone-100 shadow-inner mt-4 bg-amber-50/20 p-2">
                <CategoryIllustration
                  slug="mud-architecture"
                  theme={{
                    primary: "amber",
                    bg: "bg-amber-50/60",
                    text: "text-stone-900",
                    border: "border-amber-200",
                    accent: "text-amber-700"
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Closing Quote Block */}
        <div className="mt-20 pt-10 border-t border-stone-200 text-center text-xs text-stone-400 font-mono leading-relaxed max-w-lg mx-auto">
          &ldquo;Every digital asset holds a responsibility to represent real-world social impact. mud.cc is dedicated to driving visibility and resources back to these vital causes.&rdquo;
        </div>
      </div>
    </div>
  );
}
