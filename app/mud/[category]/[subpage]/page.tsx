import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Calendar, BookOpen, Layers, Award } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import { DETAIL_PAGES } from "@/lib/detail-data";
import { SEMANTIC_MAP } from "@/lib/semantic-data";
import { GODADDY_URL } from "@/lib/config";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";
import { getPremiumMudImage } from "@/lib/images";
import SidebarInterlinks from "@/components/sidebar-interlinks";

interface SubpageProps {
  params: Promise<{ category: string; subpage: string }>;
}

export async function generateStaticParams() {
  const list: { category: string; subpage: string }[] = [];
  CATEGORIES.forEach((cat) => {
    cat.subpages.forEach((sub) => {
      list.push({
        category: cat.slug,
        subpage: sub.slug,
      });
    });
  });
  return list;
}

export async function generateMetadata({ params }: SubpageProps): Promise<Metadata> {
  const { category: catSlug, subpage: subSlug } = await params;
  const category = CATEGORIES.find((cat) => cat.slug === catSlug);
  if (!category) return {};
  const subpage = category.subpages.find((sub) => sub.slug === subSlug);
  if (!subpage) return {};

  return generatePageMetadata({
    title: `${subpage.title} — ${category.title}`,
    description: subpage.description,
    path: `/mud/${category.slug}/${subpage.slug}`,
    image: getPremiumMudImage(subpage.slug, "magazine"),
    keywords: [
      subpage.title.toLowerCase(),
      category.title.toLowerCase(),
      `${subpage.title.toLowerCase()} guide`,
      `${category.title.toLowerCase()} hub`,
      "mud.cc registry",
      "three-letter domain showcase"
    ],
    type: "article",
    author: "mud.cc Editorial Board",
    publishedTime: "2026-01-15T08:00:00Z"
  });
}

export default async function SubpageEntry({ params }: SubpageProps) {
  const { category: catSlug, subpage: subSlug } = await params;
  const category = CATEGORIES.find((cat) => cat.slug === catSlug);
  if (!category) notFound();
  const subpage = category.subpages.find((sub) => sub.slug === subSlug);
  if (!subpage) notFound();

  const baseUrl = getBaseUrl();

  // Find any deep-dive detail page associated with this subpage
  const detailPage = DETAIL_PAGES.find(
    (p) => p.parentCategorySlug === category.slug && p.parentSubpageSlug === subpage.slug
  );

  // Get other subpages in the same category (excluding the current one)
  const sisterSubpages = category.subpages.filter((sub) => sub.slug !== subSlug);

  // Get first subpages of related categories
  const relatedCategories = CATEGORIES.filter((cat) =>
    category.relatedSlugs.includes(cat.slug)
  );
  const relatedSubpages = relatedCategories.map((cat) => ({
    categorySlug: cat.slug,
    categoryTitle: cat.title,
    subpage: cat.subpages[0],
  })).filter((item) => item.subpage !== undefined);

  const sem = SEMANTIC_MAP[category.slug];

  // JSON-LD dynamic structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": sem?.specialtyType === "MedicalWebPage" ? "MedicalWebPage" : "Article",
        "@id": `${baseUrl}/mud/${category.slug}/${subpage.slug}/#article`,
        "url": `${baseUrl}/mud/${category.slug}/${subpage.slug}`,
        "name": subpage.title,
        "headline": subpage.title,
        "description": subpage.description,
        "image": getPremiumMudImage(subpage.slug, "magazine"),
        "datePublished": "2026-01-15T08:00:00Z",
        "dateModified": "2026-07-03T08:00:00Z",
        "wordCount": 1250,
        "articleSection": category.title,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${baseUrl}/mud/${category.slug}/${subpage.slug}`
        },
        "author": {
          "@type": "Organization",
          "name": "mud.cc Editorial Board",
          "url": `${baseUrl}/contact`
        },
        "publisher": {
          "@type": "Organization",
          "name": "mud.cc Registry",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/images/logo.png`
          }
        },
        "about": {
          "@type": "Thing",
          "name": category.title,
          "description": category.subtitle,
          "sameAs": sem?.sameAs || []
        },
        "audience": {
          "@type": "Audience",
          "audienceType": sem?.targetAudience || "General Public"
        },
        "mentions": (sem?.knowsAbout || []).map((topic) => ({
          "@type": "Thing",
          "name": topic
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/mud/${category.slug}/${subpage.slug}/#breadcrumb`,
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": subpage.title,
            "item": `${baseUrl}/mud/${category.slug}/${subpage.slug}`
          }
        ]
      }
    ]
  };

  const theme = category.theme;

  return (
    <div className={`w-full min-h-screen ${theme.bg} text-stone-900 pb-20 transition-colors duration-500 font-sans`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation and Breadcrumbs */}
      <header className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-4 border-b border-stone-200/60 mb-12">
        <div className="flex items-center gap-3 text-xs font-mono text-stone-400">
          <Link href="/" className="hover:text-stone-800 transition-colors">
            home
          </Link>
          <span>/</span>
          <Link href={`/mud/${category.slug}`} className="hover:text-stone-800 transition-colors">
            {category.slug}
          </Link>
          <span>/</span>
          <span className="text-stone-600 font-semibold">{subpage.slug}</span>
        </div>
        
        <Link
          href={`/mud/${category.slug}`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft size={12} /> Back to {category.title} Hub
        </Link>
      </header>

      {/* Layout Engine Dispatch */}
      {subpage.layout === "magazine" && (
        <MagazineLayout subpage={subpage} category={category} theme={theme} />
      )}
      {subpage.layout === "timeline" && (
        <TimelineLayout subpage={subpage} category={category} theme={theme} />
      )}
      {subpage.layout === "masonry" && (
        <MasonryLayout subpage={subpage} category={category} theme={theme} />
      )}

      {/* Deep-Dive Technical Treatise Link (Sub-Sub-Sub Page) */}
      {detailPage && (
        <section className="max-w-4xl mx-auto px-6 mt-16">
          <div className="relative group overflow-hidden rounded-3xl bg-amber-50/50 border border-amber-200/80 p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
              <div className="space-y-3 max-w-xl">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-amber-100 text-amber-950 border border-amber-200/60">
                  <Layers size={10} /> Exclusive Technical Deep-Dive
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-stone-900 tracking-tight group-hover:text-amber-700 transition-colors">
                  {detailPage.title}
                </h3>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-sans">
                  {detailPage.description}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-stone-400 font-mono">
                  <span>{detailPage.readTime}</span>
                  <span>•</span>
                  <span>Authored by {detailPage.author}</span>
                </div>
              </div>
              
              <Link
                href={`/mud/${category.slug}/${subpage.slug}/${detailPage.slug}`}
                className="inline-flex items-center justify-center gap-2 bg-stone-950 hover:bg-stone-800 text-white font-bold px-6 py-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shrink-0 group-hover:shadow-lg active:scale-95"
              >
                Access Treatise →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Cross-Disciplinary Treatises (Semantic Interlinking Web) */}
      <section className="max-w-4xl mx-auto px-6 mt-24 pt-12 border-t border-stone-200/80">
        <div className="space-y-2 mb-8">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-600 block">
            Academic Index Integration
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-display text-stone-900 tracking-tight">
            Cross-Disciplinary Treatises
          </h2>
          <p className="text-stone-500 text-sm max-w-xl font-sans">
            Explore the deep linkages between {category.title} and other domains within the wider mud.cc semantic framework.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Sister subpages */}
          {sisterSubpages.map((sub) => (
            <Link
              key={sub.slug}
              href={`/mud/${category.slug}/${sub.slug}`}
              className="group p-6 rounded-2xl bg-white border border-stone-200/80 hover:border-amber-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[9px] font-mono font-semibold uppercase text-stone-400 bg-stone-50 px-2 py-0.5 rounded border border-stone-100">
                  {category.title} • {sub.layout === "magazine" ? "Editorial Narrative" : sub.layout === "timeline" ? "Historical Chronicle" : "Taxonomical Study"}
                </span>
                <h4 className="font-bold text-stone-900 group-hover:text-amber-600 transition-colors text-base leading-tight">
                  {sub.title}
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed line-clamp-2">
                  {sub.description}
                </p>
              </div>
              <span className="text-[11px] font-bold text-stone-500 group-hover:text-amber-600 inline-flex items-center gap-1">
                Enter Publication <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          ))}

          {/* Related categories subpages */}
          {relatedSubpages.map((item) => (
            <Link
              key={item.subpage.slug}
              href={`/mud/${item.categorySlug}/${item.subpage.slug}`}
              className="group p-6 rounded-2xl bg-white border border-stone-200/80 hover:border-amber-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[9px] font-mono font-semibold uppercase text-amber-700 bg-amber-50/50 px-2 py-0.5 rounded border border-amber-100/50">
                  {item.categoryTitle} • {item.subpage.layout === "magazine" ? "Editorial" : item.subpage.layout === "timeline" ? "Chronicle" : "Treatise"}
                </span>
                <h4 className="font-bold text-stone-900 group-hover:text-amber-600 transition-colors text-base leading-tight">
                  {item.subpage.title}
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed line-clamp-2">
                  {item.subpage.description}
                </p>
              </div>
              <span className="text-[11px] font-bold text-stone-500 group-hover:text-amber-600 inline-flex items-center gap-1">
                Cross-Reference Treatises <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Common Footer Stewardship Alliance Box */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-950 text-zinc-100 p-8 md:p-12 border border-zinc-800 shadow-2xl space-y-6">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="space-y-3 relative z-10">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-amber-400 tracking-widest bg-amber-950/40 px-2.5 py-1 rounded-full border border-amber-900">
              <Award size={10} /> Silt &amp; Soil Stewardship Alliance
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight">
              Sustaining the Earth's Sediment Heritage
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
              The <strong>mud.cc</strong> library is curated in affiliation with the International Earthen Research Network. We are committed to documenting the geological complexity, historical structures, and biological importance of fine silt and alluvial clay resources worldwide.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 relative z-10">
            <Link
              href="/philanthropy"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all active:scale-95 animate-pulse"
            >
              Support Environmental Preservation
            </Link>
            <Link
              href={`/mud/${category.slug}`}
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-zinc-900 text-zinc-200 border border-zinc-800 px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all active:scale-95"
            >
              Back to {category.title} Hub
            </Link>
          </div>
          <div className="text-[10px] text-zinc-600 pt-2 border-t border-zinc-900 relative z-10">
            Documentary archive compiled by the Department of Geochemical Studies.
          </div>
        </div>
      </section>
    </div>
  );
}

/* 1. MAGAZINE LAYOUT COMPONENT */
function MagazineLayout({
  subpage,
  category,
  theme,
}: {
  subpage: any;
  category: any;
  theme: any;
}) {
  const firstSection = subpage.sections[0];
  const remainingSections = subpage.sections.slice(1);

  return (
    <article className="max-w-7xl mx-auto px-6">
      {/* Grid wrapper for split view on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Editorial Column */}
        <div className="lg:col-span-8 space-y-10">
          {/* Title */}
          <div className="space-y-4">
            <span className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${theme.badge}`}>
              <BookOpen size={12} /> Editorial Feature
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-stone-900 leading-tight">
              {subpage.title}
            </h1>
            <p className="text-stone-500 text-sm italic font-sans">
              Curated by mud.cc Educational Board • Content-Dense Registry Page
            </p>
          </div>

          {/* Main Image */}
          <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-md border border-stone-200/80">
            <Image
              src={getPremiumMudImage(subpage.slug, "magazine")}
              alt={subpage.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content with Drop Cap */}
          <div className="space-y-8 font-sans text-stone-700 text-base md:text-lg leading-relaxed">
            {firstSection && (
              <div className="space-y-4">
                {firstSection.heading && (
                  <h2 className="text-2xl font-bold font-display text-stone-900 tracking-tight">
                    {firstSection.heading}
                  </h2>
                )}
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-amber-600 first-letter:font-display">
                  {firstSection.text}
                </p>
              </div>
            )}

            {/* Elegant pull quote block */}
            <div className="border-l-4 border-amber-500 pl-6 italic my-10 text-lg text-stone-800 bg-stone-100/50 py-5 pr-4 rounded-r-2xl font-display">
              &ldquo;The chemical, historical, and geological layers of {category.title} provide a rare framework for study, reflecting the exact multi-disciplinary relevance of our digital root, mud.cc.&rdquo;
            </div>

            {remainingSections.map((sec: any, index: number) => (
              <div key={index} className="space-y-4">
                {sec.heading && (
                  <h3 className="text-xl font-bold font-display text-stone-900 tracking-tight pt-2">
                    {sec.heading}
                  </h3>
                )}
                <p>{sec.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Column */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="lg:sticky lg:top-8 space-y-6">
            {/* Context Card */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4">
              <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest block">
                Archival Context
              </span>
              <h4 className="text-lg font-bold font-display text-stone-900">
                {category.title} Overview
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {category.description}
              </p>
              <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <span>Syllabus Category:</span>
                  <span className="font-mono text-stone-800 font-medium">{category.subtitle}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <span>Authority Node:</span>
                  <span className="font-mono text-stone-800 font-medium">{category.slug}.mud.cc</span>
                </div>
              </div>
            </div>

            {/* Automated Interlinking Graph */}
            <SidebarInterlinks
              currentCategorySlug={category.slug}
              currentSubpageSlug={subpage.slug}
            />

            {/* Micro-Research Note */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 space-y-3">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                Editorial Review Board
              </h5>
              <p className="text-xs text-stone-500 leading-relaxed">
                This dynamic treatise undergoes monthly peer-reviewed revisions to align with contemporary soil-science, culinary history, and digital asset taxonomy standards.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

/* 2. TIMELINE LAYOUT COMPONENT */
function TimelineLayout({
  subpage,
  category,
  theme,
}: {
  subpage: any;
  category: any;
  theme: any;
}) {
  return (
    <article className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Timeline Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <span className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${theme.badge}`}>
              <Calendar size={12} /> Historical Timeline
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-stone-900 leading-tight">
              {subpage.title}
            </h1>
            <p className="text-stone-500 text-sm font-sans leading-relaxed">
              {subpage.description}
            </p>
          </div>

          {/* Intro Text Section */}
          {subpage.sections && subpage.sections[0] && (
            <div className="bg-white border border-stone-200 p-8 rounded-3xl shadow-sm text-stone-600 leading-relaxed">
              <p className="text-base md:text-lg">{subpage.sections[0].text}</p>
            </div>
          )}

          {/* Timeline core tree */}
          <div className="relative border-l-2 border-stone-200 pl-6 sm:pl-10 space-y-12 py-4">
            {subpage.timeline?.map((item: any, idx: number) => (
              <div key={idx} className="relative group">
                {/* Dot Indicator */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-amber-500 ring-4 ring-white group-hover:scale-125 transition-transform">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white" />
                </span>

                {/* Time node card */}
                <div className="bg-white border border-stone-200 group-hover:border-stone-300 rounded-2xl p-6 shadow-sm group-hover:shadow-md transition-all duration-300 space-y-3">
                  <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold font-display text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Column */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="lg:sticky lg:top-8 space-y-6">
            {/* Context Card */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4">
              <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest block">
                Archival Context
              </span>
              <h4 className="text-lg font-bold font-display text-stone-900">
                {category.title} Overview
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {category.description}
              </p>
              <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <span>Syllabus Category:</span>
                  <span className="font-mono text-stone-800 font-medium">{category.subtitle}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <span>Authority Node:</span>
                  <span className="font-mono text-stone-800 font-medium">{category.slug}.mud.cc</span>
                </div>
              </div>
            </div>

            {/* Automated Interlinking Graph */}
            <SidebarInterlinks
              currentCategorySlug={category.slug}
              currentSubpageSlug={subpage.slug}
            />
          </div>
        </aside>
      </div>
    </article>
  );
}

/* 3. MASONRY LAYOUT COMPONENT */
function MasonryLayout({
  subpage,
  category,
  theme,
}: {
  subpage: any;
  category: any;
  theme: any;
}) {
  return (
    <article className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Masonry Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <span className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${theme.badge}`}>
              <Layers size={12} /> Multi-faceted Breakdown
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-stone-900 leading-tight">
              {subpage.title}
            </h1>
            <p className="text-stone-500 text-sm font-sans leading-relaxed">
              {subpage.description}
            </p>
          </div>

          {/* Introductory Lead */}
          {subpage.sections && subpage.sections[0] && (
            <div className="bg-white border border-stone-200 p-6 md:p-8 rounded-3xl shadow-sm text-stone-600 text-sm leading-relaxed">
              <p>{subpage.sections[0].text}</p>
            </div>
          )}

          {/* Masonry-Style Flex Grid */}
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {subpage.masonry?.map((card: any, idx: number) => {
              const isLarge = card.size === "large";

              return (
                <div
                  key={idx}
                  className={`break-inside-avoid bg-white border border-stone-200 hover:border-stone-300 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between ${
                    isLarge ? "p-8 md:p-10" : ""
                  }`}
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-bold text-stone-400 bg-stone-100 px-2.5 py-1 rounded uppercase tracking-wider">
                      Facet {idx + 1} • {card.size === "large" ? "Principal Analysis" : card.size === "medium" ? "Focused Perspective" : "Key Insight"}
                    </span>
                    <h3 className={`font-bold font-display text-stone-900 ${
                      isLarge ? "text-xl md:text-2xl" : "text-lg"
                    }`}>
                      {card.title}
                    </h3>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      {card.text}
                    </p>
                  </div>

                  {card.image && (
                    <div className={`relative w-full rounded-2xl overflow-hidden border border-stone-100 shadow-inner mt-4 ${
                      isLarge ? "aspect-[4/3]" : "aspect-[16/10]"
                    }`}>
                      <Image
                        src={getPremiumMudImage(card.image, isLarge ? "tall" : "wide")}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 30vw"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar Column */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="lg:sticky lg:top-8 space-y-6">
            {/* Context Card */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4">
              <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest block">
                Archival Context
              </span>
              <h4 className="text-lg font-bold font-display text-stone-900">
                {category.title} Overview
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {category.description}
              </p>
              <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <span>Syllabus Category:</span>
                  <span className="font-mono text-stone-800 font-medium">{category.subtitle}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <span>Authority Node:</span>
                  <span className="font-mono text-stone-800 font-medium">{category.slug}.mud.cc</span>
                </div>
              </div>
            </div>

            {/* Automated Interlinking Graph */}
            <SidebarInterlinks
              currentCategorySlug={category.slug}
              currentSubpageSlug={subpage.slug}
            />
          </div>
        </aside>
      </div>
    </article>
  );
}
