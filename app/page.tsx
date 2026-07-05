import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Tag, ShieldCheck, Zap, Sparkles, TrendingUp, Search, HelpCircle, ChevronDown } from "lucide-react";
import { GODADDY_URL } from "@/lib/config";
import { CATEGORIES } from "@/lib/data";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";
import { CategoryIllustration } from "@/components/category-illustration";

export const metadata: Metadata = generatePageMetadata({
  title: "International Mud Center & Digital Archive — mud.cc",
  description: "Discover the International Mud Center & Digital Archive (mud.cc). A comprehensive, multi-disciplinary research hub and directory mapping soil science, clay mineralogy, sustainable earthen architecture, and historical sediment studies.",
  path: "/",
  keywords: [
    "mud.cc",
    "soil science",
    "clay mineralogy",
    "rammed earth architecture",
    "alluvial mud",
    "sedimentology archive",
    "earthen research"
  ],
});

export default function HomePage() {
  const baseUrl = getBaseUrl();

  // JSON-LD structured data representing the educational database and sitemap
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "International Mud Center",
        "description": "Educational archive and research database dedicated to earthen materials, clays, and silt resources.",
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
        "name": "International Mud Center & Digital Archive",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/logo-home.jpg`
        },
        "sameAs": [
          "https://twitter.com/mud_cc_archive",
          "https://github.com/mud-cc"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Administrative Inquiries",
          "url": `${baseUrl}/contact`
        },
        "knowsAbout": [
          "Clay Mineralogy",
          "Sedimentology",
          "Geomorphology",
          "Rammed Earth Construction",
          "Soil Regeneration",
          "Wetlands Conservation"
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": `${baseUrl}/#collectionpage`,
        "url": baseUrl,
        "name": "The mud.cc Research Archive",
        "description": "Explore the structured, context-dense academic directory mapping ten distinct sectors of earthen research.",
        "publisher": {
          "@id": `${baseUrl}/#organization`
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the mission of the mud.cc archive?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "mud.cc is an independent digital archive dedicated to documenting the multi-disciplinary importance of fine sediment, clays, silts, and soil systems. From geological formations and ancient rammed earth architecture to modern mineral dermatology and retro text-based MUD gaming, our mission is to compile, preserve, and share knowledge regarding earthen resources."
            }
          },
          {
            "@type": "Question",
            "name": "How is this knowledge directory curated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our directory is divided into 10 key research verticals (such as skincare, construction, history, and culinary arts) comprising over 40 structured research pages. Each section is compiled by field contributors to provide scientific facts, historical timelines, and practical guides on soil and sediment applications."
            }
          },
          {
            "@type": "Question",
            "name": "How does the Conservation Program work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We believe in leaving a positive tangible footprint on the Earth's real sediment systems. Exactly 10% of all administrative, hosting, and patron resources are committed directly to soil preservation research, clean sand-filter wells, and regional wetlands conservation programs worldwide, turning digital scholarship into physical ecosystem preservation."
            }
          },
          {
            "@type": "Question",
            "name": "Who operates the mud.cc digital hub?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The mud.cc educational portal is operated in collaboration with the Department of Geochemical Studies and the International Earthen Research Network. We welcome submissions, research articles, and academic collaborations from soil scientists, historians, and ecological advocates."
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
            <Sparkles size={12} className="text-amber-600 animate-spin-slow" /> Earthen Sciences &amp; Heritage
          </span>
          
          <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight text-stone-900 mb-4 select-none">
            mud<span className="text-amber-500">.cc</span>
          </h1>
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-amber-850 font-mono mb-6">
            International Mud Center &amp; Archive
          </h2>
          
          <p className="text-base md:text-lg text-stone-600 font-sans tracking-tight leading-relaxed max-w-2xl mx-auto mb-10">
            A comprehensive, open-access knowledge repository dedicated to documenting the physical, geological, historical, structural, and therapeutic properties of the Earth&apos;s sediment resources.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/philanthropy"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 active:scale-98"
            >
              Support Environmental Preservation <ArrowRight size={14} />
            </Link>
            <a
              href="#categories"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 hover:border-stone-300 font-semibold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all active:scale-98"
            >
              Begin Research Exploration
            </a>
          </div>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="bg-white py-16 px-6 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 space-y-3">
              <span className="inline-flex p-3 bg-amber-100 rounded-xl text-amber-700">
                <Zap size={20} />
              </span>
              <h3 className="text-lg font-bold font-display text-stone-900">Geological Significance</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Silt and clay represent the primal foundation of terrestrial soil life, river deltas, and land fertility across every continent.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 space-y-3">
              <span className="inline-flex p-3 bg-emerald-100 rounded-xl text-emerald-700">
                <TrendingUp size={20} />
              </span>
              <h3 className="text-lg font-bold font-display text-stone-900">Cross-Disciplinary Archive</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Documenting earthen subjects spanning mineral-rich therapeutic skincare, ancient rammed earth building techniques, and text-based virtual worlds.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 space-y-3">
              <span className="inline-flex p-3 bg-indigo-100 rounded-xl text-indigo-700">
                <ShieldCheck size={20} />
              </span>
              <h3 className="text-lg font-bold font-display text-stone-900">Active Ecosystem Preservation</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Translating digital scholarship into real-world action by allocating administrative resources to wetlands and soil preservation projects.
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
                Ten Research Verticals
              </h2>
              <p className="text-stone-600 max-w-2xl text-base font-sans">
                Explore the complete digital encyclopedia of earthen sciences, history, architecture, and technology.
              </p>
            </div>
            <div className="text-xs font-mono text-stone-400 flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
              <Search size={12} /> database status: 38 nodes verified
            </div>
          </div>

          {/* Staggered asymmetric grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category, index) => {
              // Determine card dimensions and proportions for asymmetric layout
              const isLargeCard = index % 4 === 0;
              const isTallImage = index % 3 === 0;

              return (
                <Link
                  key={category.slug}
                  href={`/mud/${category.slug}`}
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

                    {/* Category Illustration Block */}
                    <div className={`relative w-full rounded-2xl overflow-hidden border border-stone-200/60 shadow-inner ${
                      isTallImage ? "aspect-[4/3]" : "aspect-[16/10]"
                    }`}>
                      <CategoryIllustration slug={category.slug} theme={category.theme} isLargeCard={isLargeCard} />
                    </div>
                  </div>

                      {/* Card Action footer bar */}
                      <div className="px-6 md:px-8 py-5 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                        <span className="text-xs font-mono text-stone-400">
                          /mud/{category.slug}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${category.theme.accent}`}
                        >
                          Explore Archive <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* Scientific & Educational FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-stone-200">
              <HelpCircle size={12} className="text-stone-500" /> Research &amp; Project FAQs
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-stone-900">
              Archive &amp; Environmental FAQs
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-base">
              Find detailed explanations regarding the research scope of the International Mud Center, soil preservation, and our conservation pledges.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group border border-stone-200 rounded-2xl bg-stone-50/50 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 open:bg-stone-50 open:border-stone-300">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h3 className="text-base md:text-lg font-bold font-display text-stone-900 pr-4 select-none">
                  What is the mission of the mud.cc archive?
                </h3>
                <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" />
              </summary>
              <div className="mt-4 text-sm md:text-base text-stone-600 leading-relaxed font-sans border-t border-stone-200/60 pt-4">
                <p>
                  <strong>mud.cc</strong> sits as an independent digital archive and registry operated in collaboration with the International Earthen Research Network. Our mission is to preserve, document, and study the diverse geological, historical, structural, biological, and dermatalogical facets of sediment and earthen mixtures globally.
                </p>
              </div>
            </details>

            <details className="group border border-stone-200 rounded-2xl bg-stone-50/50 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 open:bg-stone-50 open:border-stone-300">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h3 className="text-base md:text-lg font-bold font-display text-stone-900 pr-4 select-none">
                  How is this knowledge directory structured?
                </h3>
                <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" />
              </summary>
              <div className="mt-4 text-sm md:text-base text-stone-600 leading-relaxed font-sans border-t border-stone-200/60 pt-4">
                <p>
                  Our archive compiles scholarly and historical resources across <strong>10 core research verticals</strong> (including balneotherapy skincare, rammed earth architecture, text-based MUD environments, and culinary silts) comprising <strong>38+ fully documented library entries</strong>. Each node represents verified geochemical and historical perspectives.
                </p>
              </div>
            </details>

            <details className="group border border-stone-200 rounded-2xl bg-stone-50/50 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 open:bg-stone-50 open:border-stone-300">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h3 className="text-base md:text-lg font-bold font-display text-stone-900 pr-4 select-none">
                  How does the Conservation Program work?
                </h3>
                <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" />
              </summary>
              <div className="mt-4 text-sm md:text-base text-stone-600 leading-relaxed font-sans border-t border-stone-200/60 pt-4">
                <p>
                  We believe in leaving a positive tangible footprint on the Earth&apos;s real-world soil systems. Exactly <strong>10% of all administrative and patron resources</strong> are committed directly to global clean water filtration programs, high-yield soil preservation research, and regional wetlands restoration projects.
                </p>
              </div>
            </details>

            <details className="group border border-stone-200 rounded-2xl bg-stone-50/50 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 open:bg-stone-50 open:border-stone-300">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h3 className="text-base md:text-lg font-bold font-display text-stone-900 pr-4 select-none">
                  Who curates and manages the mud.cc digital hub?
                </h3>
                <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" />
              </summary>
              <div className="mt-4 text-sm md:text-base text-stone-600 leading-relaxed font-sans border-t border-stone-200/60 pt-4">
                <p>
                  The archive is operated by the Department of Geochemical Studies in affiliation with soil researchers and academic advocates. We accept submissions, data logs, and research articles through our secure communication puzzle.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Conservation Alliance Direct CTA */}
      <section className="bg-amber-950 text-amber-50 py-24 px-6 border-t border-amber-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/20 uppercase tracking-widest">
            Environmental Stewardship
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white">
            Support Soil &amp; Water Preservation
          </h2>
          <p className="text-base md:text-lg text-amber-200/80 max-w-2xl mx-auto leading-relaxed font-sans">
            By funding deep sand-filter wells, studying alluvial soils, and supporting wetlands preservation, we ensure a sustainable earthen heritage. Connect with our administrative board to participate.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/philanthropy"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all active:scale-98"
            >
              Support Earthen Conservation <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-amber-900/20 text-amber-300 hover:text-white border border-amber-500/30 font-semibold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all active:scale-98"
            >
              Academic Collaboration
            </Link>
          </div>
          <div className="text-xs text-amber-500/40 font-mono">
            Compiled by the Department of Geochemical Studies.
          </div>
        </div>
      </section>
    </div>
  );
}
