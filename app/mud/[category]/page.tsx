import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink, ShieldAlert, Compass, Globe } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import { CATEGORY_FAQS } from "@/lib/faq-data";
import { SEMANTIC_MAP } from "@/lib/semantic-data";
import { GODADDY_URL } from "@/lib/config";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";
import { getPremiumMudImage } from "@/lib/images";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = CATEGORIES.find((cat) => cat.slug === slug);
  if (!category) return {};

  return generatePageMetadata({
    title: `${category.title} — ${category.subtitle}`,
    description: category.description,
    path: `/mud/${category.slug}`,
    image: getPremiumMudImage(category.slug, "magazine"),
    keywords: [
      category.title.toLowerCase(),
      category.subtitle.toLowerCase(),
      `${category.slug} industry`,
      `${category.slug} directory`,
      `organic ${category.slug}`,
      "mud.cc hub"
    ],
  });
}

export default async function CategoryHubPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = CATEGORIES.find((cat) => cat.slug === slug);

  if (!category) {
    notFound();
  }

  // Get related category links
  const relatedCategories = CATEGORIES.filter((cat) =>
    category.relatedSlugs.includes(cat.slug)
  );

  const baseUrl = getBaseUrl();
  const faqs = CATEGORY_FAQS[category.slug] || [];
  const sem = SEMANTIC_MAP[category.slug];

  // JSON-LD dynamic structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": sem?.specialtyType === "MedicalWebPage" ? "MedicalWebPage" : "WebPage",
        "@id": `${baseUrl}/mud/${category.slug}/#webpage`,
        "url": `${baseUrl}/mud/${category.slug}`,
        "name": `${category.title} Directory — mud.cc`,
        "description": category.description,
        "about": {
          "@type": "Thing",
          "name": category.title,
          "description": category.shortTeaser,
          "sameAs": sem?.sameAs || []
        },
        "audience": {
          "@type": "Audience",
          "audienceType": sem?.targetAudience || "General Public"
        },
        "mentions": (sem?.knowsAbout || []).map((topic) => ({
          "@type": "Thing",
          "name": topic
        })),
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
              "name": category.title,
              "item": `${baseUrl}/mud/${category.slug}`
            }
          ]
        }
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            },
          ]
        : [])
    ]
  };

  // Unique theme styles mapping
  const theme = category.theme;

  return (
    <div className={`w-full min-h-screen ${theme.bg} transition-colors duration-500`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Navigation */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Directory
        </Link>
      </header>

      {/* Hero Section with Overlapping Image Composition */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left text spread */}
        <div className="lg:col-span-7 space-y-6">
          <span className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${theme.badge}`}>
            <Globe size={12} /> {category.subtitle} Core Topic
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-stone-900 leading-tight">
            The Cultural & Physical Footprint of{" "}
            <span className="text-amber-600 block sm:inline">{category.title}</span>
          </h1>
          
          <p className="text-lg text-stone-600 leading-relaxed font-sans max-w-2xl">
            {category.description}
          </p>

          <div className="pt-2">
            <a
              href="#subpages-index"
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              Begin Research Inquiry <Compass size={14} />
            </a>
          </div>
        </div>

        {/* Right layered image composition (CSS Grid / absolute positioning) */}
        <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] w-full mt-8 lg:mt-0">
          
          {/* Base Layer Image (Offset left and back) */}
          <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-3xl overflow-hidden shadow-lg border border-stone-300 transform -rotate-3 transition-transform hover:rotate-0 duration-500 z-10">
            <Image
              src={getPremiumMudImage(category.slug, "layered1")}
              alt={`${category.title} background composite`}
              fill
              className="object-cover"
              sizes="35vw"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Focal Layer Image (Overlaps top layer, offset right and front) */}
          <div className="absolute bottom-0 right-0 w-[75%] h-[75%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 transition-transform hover:rotate-0 duration-500 z-20">
            <Image
              src={getPremiumMudImage(category.slug, "layered2")}
              alt={`${category.title} foreground composite`}
              fill
              className="object-cover"
              sizes="35vw"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Micro accent badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-stone-950 p-3 rounded-2xl shadow-xl font-mono text-[10px] font-bold tracking-wider uppercase z-30 transform hover:scale-110 transition-transform hidden sm:block">
            Registry Archive • {category.slug}
          </div>
        </div>

      </section>

      {/* Subpage Index Layout Links */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-4 mb-10">
          <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight text-stone-900">
            Factual Library Nodes
          </h2>
          <p className="text-stone-500 text-sm max-w-xl">
            Each library node below is custom engineered around a specific historical, industrial, or scientific angle of {category.title}, styled to index optimally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.subpages.map((sub, idx) => (
            <div
              key={sub.slug}
              className="bg-white border border-stone-200 hover:border-stone-300 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                  {sub.layout === "magazine" ? "Editorial Narrative" : sub.layout === "timeline" ? "Historical Chronicle" : "Taxonomical Study"}
                </span>
                <h3 className="text-xl font-bold font-display tracking-tight text-stone-900 hover:text-amber-600 transition-colors">
                  {sub.title}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed line-clamp-3">
                  {sub.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-400 font-mono">
                  VOLUME {idx + 1} • INDEXED
                </span>
                <Link
                  href={`/mud/${category.slug}/${sub.slug}`}
                  className={`inline-flex items-center gap-1 font-bold uppercase tracking-wider ${theme.accent}`}
                >
                  Enter Publication <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic SEO FAQs Section (Adaptive Theme Integration) */}
      {faqs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t ${category.slug === "mud-the-game" ? "border-emerald-850/40" : "border-stone-200/60"}`}>
            
            {/* Split layout: left column header block */}
            <div className="lg:col-span-4 space-y-4">
              <span className={`text-[10px] font-bold uppercase tracking-widest font-mono ${category.slug === "mud-the-game" ? "text-emerald-400" : "text-amber-600"}`}>
                TOPICAL REVELATIONS
              </span>
              <h2 className={`text-3xl font-bold font-display tracking-tight ${category.slug === "mud-the-game" ? "text-zinc-100" : "text-stone-900"}`}>
                Frequently Asked Questions
              </h2>
              <p className={`text-sm leading-relaxed font-sans ${category.slug === "mud-the-game" ? "text-zinc-400" : "text-stone-500"}`}>
                Curated authority insights, scientific explanations, and historical data points mapping the multi-disciplinary reach of {category.title}.
              </p>
            </div>

            {/* Split layout: right column question stack */}
            <div className="lg:col-span-8 space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
                    category.slug === "mud-the-game"
                      ? "bg-zinc-900/30 border-emerald-950/60 hover:border-emerald-800/40 hover:bg-zinc-900/50"
                      : "bg-white/50 border-stone-200/60 hover:border-stone-300/80 hover:bg-white/80"
                  }`}
                >
                  <h3 className={`text-base font-bold font-display flex items-start gap-3 ${
                    category.slug === "mud-the-game" ? "text-emerald-400" : "text-stone-900"
                  }`}>
                    <span className={`${category.slug === "mud-the-game" ? "text-emerald-500" : "text-amber-600"} font-mono text-sm shrink-0`}>
                      Q.
                    </span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className={`text-sm leading-relaxed font-sans mt-3 pl-6 border-l ${
                    category.slug === "mud-the-game"
                      ? "text-zinc-300 border-emerald-800/40"
                      : "text-stone-600 border-amber-500/30"
                  }`}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Repeated Inline Domain CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-bold uppercase text-amber-600 tracking-wider font-mono">Acquisition Registry</span>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-stone-900 tracking-tight">
              Looking to capture the absolute authority of {category.title}?
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Acquiring the rare short brand <span className="font-semibold text-stone-800">mud.cc</span> unlocks immediate authority across all 10 major verticals listed here. Skip years of SEO pipeline by purchasing the central keyword hub today.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <a
              href={GODADDY_URL}
              target="_blank"
              rel="noopener sponsored"
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-6 py-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              Acquire mud.cc on GoDaddy <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Sideways Internal Linking (Topical Relevance Network) */}
      <section className="bg-stone-100 border-t border-stone-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs uppercase tracking-widest font-mono text-stone-500 font-bold flex flex-wrap items-center gap-2">
            Topical Relevance Network
            <span className="text-stone-300">|</span>
            <a 
              href="https://bridge.ws" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-stone-800 transition-colors normal-case font-normal text-stone-400"
            >
              bridge.ws
            </a>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center">
            {relatedCategories.map((related) => (
              <Link
                key={related.slug}
                href={`/mud/${related.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-amber-600 transition-colors"
              >
                Explore {related.title} <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
