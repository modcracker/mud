import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Tag, ShieldCheck, Zap, Sparkles, TrendingUp, Search, HelpCircle, ChevronDown } from "lucide-react";
import { GODADDY_URL } from "@/lib/config";
import { CATEGORIES } from "@/lib/data";
import { getPremiumMudImage } from "@/lib/images";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Premium 3-Letter Dictionary Domain Showcase & Directory Hub",
  description: "Explore the authority of mud.cc. Discover a high-fidelity showcase and multi-industry directory mapping wellness, technology, sustainable architecture, culinary arts, and more.",
  path: "/",
  keywords: [
    "mud.cc",
    "premium three-letter domain",
    "dictionary domain for sale",
    "3-letter dictionary domains",
    "mud category directory",
    "premium digital real estate"
  ],
});

export default function HomePage() {
  const baseUrl = getBaseUrl();

  // JSON-LD structured data representing the domain, collection, and FAQ
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "mud.cc",
        "description": "Premium domain name mud.cc for sale.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${baseUrl}/?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
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
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Domain Acquisitions Desk",
          "url": GODADDY_URL
        },
        "knowsAbout": [
          "Domain Acquisitions",
          "Digital Real Estate",
          "Semantic Web",
          "Clay Mineralogy",
          "Medieval History",
          "Sustainable Architecture"
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": `${baseUrl}/#collectionpage`,
        "url": baseUrl,
        "name": "The mud.cc Digital Directory",
        "description": "Explore the incredible multi-industry versatility and SEO equity of the mud.cc domain.",
        "publisher": {
          "@id": `${baseUrl}/#organization`
        }
      },
      {
        "@type": "Product",
        "name": "mud.cc Domain Name",
        "description": "Premium three-letter dictionary domain name mud.cc available for immediate acquisition.",
        "image": getPremiumMudImage("mud_season", "magazine"),
        "brand": {
          "@type": "Brand",
          "name": "mud.cc"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": GODADDY_URL
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes mud.cc a premium domain asset?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "mud.cc is an exceptionally rare 3-letter dictionary domain. Short dictionary words represent the absolute gold standard of internet real estate. It offers immediate credibility, immense search engine optimization (SEO) benefits, and friction-free brand recall across diverse industries including health, skincare, dining, gaming, and environment."
            }
          },
          {
            "@type": "Question",
            "name": "How is the mud.cc directory structured?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The directory acts as a live SEO showcase, mapping 10 major global industries (skincare, soil building, sustainable architecture, culinary crafts, river historical exploration, and retro MUD gaming) containing 40+ hyper-focused subpages. This structures strong organic relevance and demonstrates the comprehensive versatility of the asset."
            }
          },
          {
            "@type": "Question",
            "name": "How does the mud.cc philanthropy pledge work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As stewards of mud.cc, we have pledged to donate exactly 10% of the domain's ultimate acquisition price to vital water filtration, sand-filter wells, and soil/wetlands conservation programs worldwide. This ties digital commerce to tangible environmental legacy."
            }
          },
          {
            "@type": "Question",
            "name": "Is the transaction process secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. All transactions and handshakes are fully broker-backed and hosted securely on GoDaddy's premium domain platform. Transfer of registry ownership and DNS setup is executed immediately upon verified payment clearance."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full">
      {/* JSON-LD Script injection for search crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 to-stone-50 py-24 px-6 md:py-32 border-b border-stone-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-70 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6 border border-amber-200">
            <Sparkles size={12} className="text-amber-600 animate-spin-slow" /> Domain Showcase
          </span>
          
          <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight text-stone-900 mb-6 select-none">
            mud<span className="text-amber-500">.cc</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-600 font-sans tracking-tight leading-relaxed max-w-2xl mx-auto mb-10">
            A rare, ultra-brandable <span className="font-semibold text-stone-800 underline decoration-amber-500 decoration-2 underline-offset-4">3-letter dictionary domain</span> mapping seamlessly across wellness, food, sports, history, politics, and technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GODADDY_URL}
              target="_blank"
              rel="noopener sponsored"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-4 rounded-xl text-sm tracking-tight transition-all shadow-lg shadow-amber-500/20 active:scale-98"
            >
              Acquire Securely on GoDaddy <ArrowRight size={16} />
            </a>
            <a
              href="#categories"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 hover:border-stone-300 font-semibold px-8 py-4 rounded-xl text-sm tracking-tight transition-all active:scale-98"
            >
              Explore Domain Authority
            </a>
          </div>
        </div>
      </section>

      {/* Domain Premium Asset Metrics */}
      <section className="bg-white py-16 px-6 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 space-y-3">
              <span className="inline-flex p-3 bg-amber-100 rounded-xl text-amber-700">
                <Zap size={20} />
              </span>
              <h3 className="text-lg font-bold font-display text-stone-900">3-Letter Scarcity</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Short 3-letter dictionary words represent the most liquid, premium, and memorable real estate on the web. Instantly memorable and easily typed.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 space-y-3">
              <span className="inline-flex p-3 bg-emerald-100 rounded-xl text-emerald-700">
                <TrendingUp size={20} />
              </span>
              <h3 className="text-lg font-bold font-display text-stone-900">Massive SEO Equity</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                &ldquo;Mud&rdquo; has huge monthly search volume across skincare (mud mask), dessert (mud pie), sport (mud run), retro gaming (MUDs), and off-roading.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 space-y-3">
              <span className="inline-flex p-3 bg-indigo-100 rounded-xl text-indigo-700">
                <ShieldCheck size={20} />
              </span>
              <h3 className="text-lg font-bold font-display text-stone-900">Immediate Authority</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Establish yourself as a global category leader. Perfect for VC-backed startups, lifestyle media empires, or targeted lead-generation networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Category Cards Section */}
      <section id="categories" className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-stone-900">
                One Domain, Ten Verticals
              </h2>
              <p className="text-stone-600 max-w-2xl text-base font-sans">
                Below is a live, crawling content directory showcasing how <span className="font-semibold text-stone-800">mud.cc</span> captures organic SEO value across completely diverse global industries.
              </p>
            </div>
            <div className="text-xs font-mono text-stone-400 flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
              <Search size={12} /> indexing active: 38 nodes mapped
            </div>
          </div>

          {/* Staggered asymmetric grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category, index) => {
              // Determine card dimensions and proportions for asymmetric layout
              const isLargeCard = index % 4 === 0;
              const isTallImage = index % 3 === 0;
              
              // Premium Unsplash image mapping based on the category slug
              const imgUrl = getPremiumMudImage(category.slug, isTallImage ? "tall" : "wide");

              return (
                <div
                  key={category.slug}
                  className={`group relative bg-white border border-stone-200 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-stone-300 flex flex-col justify-between ${
                    isLargeCard ? "md:col-span-2" : "col-span-1"
                  }`}
                >
                  <div className="p-6 md:p-8 space-y-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Badge */}
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border mb-4 ${category.theme.badge}`}>
                        {category.subtitle}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">
                        {category.title}
                      </h3>
                      
                      {/* Teaser */}
                      <p className="text-stone-600 text-sm leading-relaxed mb-6">
                        {category.shortTeaser}
                      </p>
                    </div>

                    {/* Image Block with fallbacks */}
                    <div className={`relative w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner ${
                      isTallImage ? "aspect-[4/3]" : "aspect-[16/10]"
                    }`}>
                      <Image
                        src={imgUrl}
                        alt={category.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Card Action footer bar */}
                  <div className="px-6 md:px-8 py-5 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-stone-400">
                      /mud/{category.slug}
                    </span>
                    <Link
                      href={`/mud/${category.slug}`}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${category.theme.accent}`}
                    >
                      Explore Vertical <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Dynamic, Search-Optimized FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-stone-200">
              <HelpCircle size={12} className="text-stone-500" /> Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-stone-900">
              Asset & Directory FAQs
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-base">
              Got questions about the mud.cc directory, the underlying domain asset, or our pledge structure? Find clear, direct answers below.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group border border-stone-200 rounded-2xl bg-stone-50/50 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 open:bg-stone-50 open:border-stone-300">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h3 className="text-base md:text-lg font-bold font-display text-stone-900 pr-4 select-none">
                  What makes mud.cc a premium domain asset?
                </h3>
                <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" />
              </summary>
              <div className="mt-4 text-sm md:text-base text-stone-600 leading-relaxed font-sans border-t border-stone-200/60 pt-4">
                <p>
                  <strong>mud.cc</strong> is an exceptionally rare 3-letter dictionary word domain. Short, single-word dictionary domains are highly coveted digital real estate due to their extreme scarcity, high brand recall, and massive organic SEO equity. It is easy to spell, impossible to forget, and represents an elite category identifier.
                </p>
              </div>
            </details>

            <details className="group border border-stone-200 rounded-2xl bg-stone-50/50 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 open:bg-stone-50 open:border-stone-300">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h3 className="text-base md:text-lg font-bold font-display text-stone-900 pr-4 select-none">
                  How is the mud.cc directory structured?
                </h3>
                <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" />
              </summary>
              <div className="mt-4 text-sm md:text-base text-stone-600 leading-relaxed font-sans border-t border-stone-200/60 pt-4">
                <p>
                  The directory is a dynamic content structure designed to capture organic search traffic across <strong>10 core vertical industries</strong> (including organic skincare, rammed earth architecture, retro text-based gaming, and mud pies) spanning <strong>40+ fully designed subpages</strong>. Each node is engineered as an authority hub to showcase the domain&apos;s massive programmatic utility.
                </p>
              </div>
            </details>

            <details className="group border border-stone-200 rounded-2xl bg-stone-50/50 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 open:bg-stone-50 open:border-stone-300">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h3 className="text-base md:text-lg font-bold font-display text-stone-900 pr-4 select-none">
                  How does the mud.cc philanthropy pledge work?
                </h3>
                <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" />
              </summary>
              <div className="mt-4 text-sm md:text-base text-stone-600 leading-relaxed font-sans border-t border-stone-200/60 pt-4">
                <p>
                  We believe in leaving a positive tangible footprint. Exactly <strong>10% of the final domain acquisition price</strong> of mud.cc is legally pledged to be donated directly to our featured charities: <strong>Evercove</strong> (driving healthcare software infrastructure), and pioneering non-profits focusing on soil/wetlands conservation and deep sand-filter wells for clean drinking water in water-scarce communities.
                </p>
              </div>
            </details>

            <details className="group border border-stone-200 rounded-2xl bg-stone-50/50 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 open:bg-stone-50 open:border-stone-300">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h3 className="text-base md:text-lg font-bold font-display text-stone-900 pr-4 select-none">
                  Is the acquisition process secure?
                </h3>
                <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" />
              </summary>
              <div className="mt-4 text-sm md:text-base text-stone-600 leading-relaxed font-sans border-t border-stone-200/60 pt-4">
                <p>
                  Yes. To guarantee 100% security and escrow safety for both parties, all transfers are facilitated through <strong>GoDaddy Premium Domain Auctions</strong>, the world&apos;s leading secure domain registrar and escrow broker. Transfer of ownership and DNS management is processed immediately upon successful broker clearance.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Domain Acquisition Direct CTA */}
      <section className="bg-amber-950 text-amber-50 py-24 px-6 border-t border-amber-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/20 uppercase tracking-widest">
            Immediate Transfer
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white">
            Secure mud.cc Today
          </h2>
          <p className="text-lg md:text-xl text-amber-200/80 max-w-2xl mx-auto leading-relaxed font-sans">
            Domain transactions are hosted securely through GoDaddy&apos;s premier registrar service. Upon successful purchase, DNS and registration control are unlocked immediately.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GODADDY_URL}
              target="_blank"
              rel="noopener sponsored"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold px-8 py-4 rounded-xl text-sm tracking-tight transition-all active:scale-98"
            >
              Acquire mud.cc on GoDaddy <ArrowRight size={16} />
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-amber-900/20 text-amber-300 hover:text-white border border-amber-500/30 font-semibold px-8 py-4 rounded-xl text-sm tracking-tight transition-all active:scale-98"
            >
              View Sitemap
            </Link>
          </div>
          <div className="text-xs text-amber-500/40">
            Part of the <a href="https://bridge.ws" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors underline decoration-dotted underline-offset-4">bridge.ws</a> premium asset network.
          </div>
        </div>
      </section>
    </div>
  );
}
