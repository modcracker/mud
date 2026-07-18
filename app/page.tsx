import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Tag, ShieldCheck, Zap, Sparkles, TrendingUp, Search, HelpCircle, ChevronDown } from "lucide-react";
import { GODADDY_URL } from "@/lib/config";
import { CATEGORIES } from "@/lib/data";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";
import InteractiveSitemap from "@/components/interactive-sitemap";
import ResearchExplorer from "@/components/research-explorer";

export const metadata: Metadata = generatePageMetadata({
  title: "International Mud Center & Digital Archive — mud.cc",
  description: "Explore mud.cc, a premium 3-letter domain & digital real estate asset hosting a global research archive of clay mineralogy, rammed earth, & soil science.",
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

      {/* Research Explorer Section with Dynamic Tag Filtering */}
      <ResearchExplorer />

      {/* Academic Semantic Registry Section (SEO Direct Internal Linking Hub) */}
      <section className="py-20 px-6 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-amber-200">
              <TrendingUp size={12} className="text-amber-600" /> Academic Semantic Registry
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-stone-900">
              Trending Research Publications
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-base">
              Direct access index to high-citation literature and deep-dives compiled across our multidisciplinary database.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Link 1: History of Mud Wrestling */}
            <Link
              href="/mud/mud-run/mud-wrestling/tribological-shear-thinning"
              className="group p-6 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 hover:border-amber-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-amber-600 font-bold uppercase tracking-widest block">ETHNOGRAPHY &amp; PHYSICAL EDUCATION</span>
                <h3 className="text-lg font-bold font-display text-stone-900 group-hover:text-amber-600 transition-colors">
                  The History of Mud Wrestling
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  A historical exploration tracing mud wrestling from ancient folk grappling and ritual crop celebrations to 1930s carnival spectacles and modern entertainment.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs font-mono text-stone-400 group-hover:text-amber-600 transition-colors">
                <span>Ref: /mud-wrestling/history</span>
                <span className="font-bold inline-flex items-center gap-1">Read Publication <ArrowRight size={12} /></span>
              </div>
            </Link>

            {/* Link 2: Adventurous vs. Stick in the mud */}
            <Link
              href="/mud/clear-as-mud/stick-in-the-mud/obstructionist-psychology"
              className="group p-6 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 hover:border-amber-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-indigo-600 font-bold uppercase tracking-widest block">BEHAVIORAL PSYCHOLOGY &amp; IDIOMS</span>
                <h3 className="text-lg font-bold font-display text-stone-900 group-hover:text-indigo-600 transition-colors">
                  Adventurous vs. Stick in the Mud
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Deconstructing the Big Five personality axis comparing highly adventurous, novelty-seeking minds with the status-quo bias of the cautious &quot;stick-in-the-mud&quot;.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs font-mono text-stone-400 group-hover:text-indigo-600 transition-colors">
                <span>Ref: /stick-in-the-mud/psych</span>
                <span className="font-bold inline-flex items-center gap-1">Read Publication <ArrowRight size={12} /></span>
              </div>
            </Link>

            {/* Link 3: What causes Frost Heaving? */}
            <Link
              href="/mud/mud-season/new-england-mud-season/frost-heave-geotechnics"
              className="group p-6 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 hover:border-amber-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-widest block">GEOTECHNICAL ENGINEERING</span>
                <h3 className="text-lg font-bold font-display text-stone-900 group-hover:text-emerald-600 transition-colors">
                  What Causes Frost Heaving?
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The physics of ice lens growth and capillary suction in silty soils during spring thaw, detailing severe shear collapse and road maintenance.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs font-mono text-stone-400 group-hover:text-emerald-600 transition-colors">
                <span>Ref: /frost-heave/geotech</span>
                <span className="font-bold inline-flex items-center gap-1">Read Publication <ArrowRight size={12} /></span>
              </div>
            </Link>

            {/* Link 4: Sustainable Mud Architecture */}
            <Link
              href="/mud/mud-architecture/adobe-and-cob-construction"
              className="group p-6 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 hover:border-amber-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-stone-600 font-bold uppercase tracking-widest block">VERNACULAR CONSTRUCTION &amp; ENGINEERING</span>
                <h3 className="text-lg font-bold font-display text-stone-900 group-hover:text-stone-700 transition-colors">
                  Sustainable Mud Architecture
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  A comprehensive comparative study on the physical properties of earthen architecture, specifically mapping Adobe brick structures vs. monolithic Cob houses.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs font-mono text-stone-400 group-hover:text-stone-700 transition-colors">
                <span>Ref: /mud-architecture/adobe-cob</span>
                <span className="font-bold inline-flex items-center gap-1">Read Publication <ArrowRight size={12} /></span>
              </div>
            </Link>

            {/* Link 5: Mudslinging definition & origin */}
            <Link
              href="/mud/mudslinging"
              className="group p-6 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 hover:border-amber-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-red-600 font-bold uppercase tracking-widest block">SOCIOLINGUISTICS &amp; ETHOLOGY</span>
                <h3 className="text-lg font-bold font-display text-stone-900 group-hover:text-red-600 transition-colors">
                  Mudslinging &amp; Political Rhetoric
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The history, definition, and sociological impact of mudslinging campaigns, from physical stock pelting in Tudor times to modern negative digital media.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs font-mono text-stone-400 group-hover:text-red-600 transition-colors">
                <span>Ref: /mudslinging/rhetoric</span>
                <span className="font-bold inline-flex items-center gap-1">Read Publication <ArrowRight size={12} /></span>
              </div>
            </Link>

            {/* Link 6: Mississippi Mud Pie Definition */}
            <Link
              href="/mud/mississippi-mud-pie/classic-recipe-lore"
              className="group p-6 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 hover:border-amber-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-rose-600 font-bold uppercase tracking-widest block">CULINARY ANTHROPOLOGY</span>
                <h3 className="text-lg font-bold font-display text-stone-900 group-hover:text-rose-600 transition-colors">
                  Definition of Mississippi Mud Pie
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  A comprehensive culinary definition and folklore history of Mississippi Mud Pie, explaining the geological inspiration behind its dense layers.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs font-mono text-stone-400 group-hover:text-rose-600 transition-colors">
                <span>Ref: /mud-pie/definition</span>
                <span className="font-bold inline-flex items-center gap-1">Read Publication <ArrowRight size={12} /></span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Complete visual directory and interactive sitemap */}
      <InteractiveSitemap />

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
