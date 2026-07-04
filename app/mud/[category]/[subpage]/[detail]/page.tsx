import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, BookOpen, Layers, Award, ShieldCheck, Cpu, Database, Binary } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import { DETAIL_PAGES } from "@/lib/detail-data";
import { SEMANTIC_MAP } from "@/lib/semantic-data";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";
import { getPremiumMudImage } from "@/lib/images";
import InteractiveSimulator from "@/components/interactive-simulator";
import SidebarInterlinks from "@/components/sidebar-interlinks";

interface DetailPageProps {
  params: Promise<{ category: string; subpage: string; detail: string }>;
}

export async function generateStaticParams() {
  return DETAIL_PAGES.map((page) => ({
    category: page.parentCategorySlug,
    subpage: page.parentSubpageSlug,
    detail: page.slug,
  }));
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { category: catSlug, subpage: subSlug, detail: detSlug } = await params;
  const page = DETAIL_PAGES.find(
    (p) =>
      p.parentCategorySlug === catSlug &&
      p.parentSubpageSlug === subSlug &&
      p.slug === detSlug
  );
  if (!page) return {};

  return generatePageMetadata({
    title: `${page.title} — Technical Deep Dive`,
    description: page.description,
    path: `/mud/${page.parentCategorySlug}/${page.parentSubpageSlug}/${page.slug}`,
    image: getPremiumMudImage(page.parentSubpageSlug, "magazine"),
    keywords: page.keywords,
    type: "article",
    author: page.author,
    publishedTime: page.publishDate,
  });
}

export default async function DetailEntryPage({ params }: DetailPageProps) {
  const { category: catSlug, subpage: subSlug, detail: detSlug } = await params;
  
  const category = CATEGORIES.find((cat) => cat.slug === catSlug);
  if (!category) notFound();

  const subpage = category.subpages.find((sub) => sub.slug === subSlug);
  if (!subpage) notFound();

  const page = DETAIL_PAGES.find(
    (p) =>
      p.parentCategorySlug === catSlug &&
      p.parentSubpageSlug === subSlug &&
      p.slug === detSlug
  );
  if (!page) notFound();

  const baseUrl = getBaseUrl();
  const theme = category.theme;
  const sem = SEMANTIC_MAP[category.slug];

  // JSON-LD Article and Breadcrumb schemas
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${baseUrl}/mud/${category.slug}/${subpage.slug}/${page.slug}/#article`,
        "url": `${baseUrl}/mud/${category.slug}/${subpage.slug}/${page.slug}`,
        "name": page.title,
        "headline": page.title,
        "description": page.description,
        "image": getPremiumMudImage(subpage.slug, "magazine"),
        "datePublished": page.publishDate,
        "dateModified": "2026-07-03T08:00:00Z",
        "wordCount": 2100,
        "articleSection": category.title,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${baseUrl}/mud/${category.slug}/${subpage.slug}/${page.slug}`
        },
        "author": {
          "@type": "Person",
          "name": page.author
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
          "name": page.title,
          "description": page.subtitle,
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
        "@id": `${baseUrl}/mud/${category.slug}/${subpage.slug}/${page.slug}/#breadcrumb`,
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
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": page.title,
            "item": `${baseUrl}/mud/${category.slug}/${subpage.slug}/${page.slug}`
          }
        ]
      }
    ]
  };

  return (
    <div className={`w-full min-h-screen ${theme.bg} text-stone-900 pb-24 transition-colors duration-500 font-sans`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav header */}
      <header className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-4 border-b border-stone-200/60 mb-12">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-400">
          <Link href="/" className="hover:text-stone-800 transition-colors">home</Link>
          <span>/</span>
          <Link href={`/mud/${category.slug}`} className="hover:text-stone-800 transition-colors">{category.slug}</Link>
          <span>/</span>
          <Link href={`/mud/${category.slug}/${subpage.slug}`} className="hover:text-stone-800 transition-colors">{subpage.slug}</Link>
          <span>/</span>
          <span className="text-stone-600 font-semibold">{page.slug}</span>
        </div>
        
        <Link
          href={`/mud/${category.slug}/${subpage.slug}`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft size={12} /> Back to {subpage.title}
        </Link>
      </header>

      {/* Main Core Content Container */}
      <main className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Academic Treatise Text */}
        <article className="lg:col-span-8 space-y-12">
          
          {/* Header titles */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 items-center">
              <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${theme.badge}`}>
                <Layers size={10} /> Technical Deep-Dive
              </span>
              <span className="text-stone-400 font-mono text-xs">{page.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-stone-900 leading-none">
              {page.title}
            </h1>
            <p className="text-stone-500 text-lg md:text-xl font-medium font-sans border-l-2 border-amber-500/30 pl-4 py-1 italic leading-relaxed">
              &ldquo;{page.subtitle}&rdquo;
            </p>
          </div>

          {/* Interactive Simulator Section */}
          <div className="pt-2">
            <InteractiveSimulator slug={page.slug} />
          </div>

          {/* Render Sections */}
          <div className="space-y-10">
            {page.sections.map((section, idx) => (
              <section key={idx} className="space-y-4 bg-white/40 border border-stone-200/50 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl md:text-2xl font-bold font-display text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-xs font-mono bg-stone-200 text-stone-600 w-5 h-5 flex items-center justify-center rounded-full">
                    {idx + 1}
                  </span>
                  {section.heading}
                </h2>
                <p className="text-stone-700 text-sm md:text-base leading-relaxed font-sans">
                  {section.text}
                </p>

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="list-none space-y-2.5 pt-2">
                    {section.bulletPoints.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-stone-600">
                        <span className="inline-flex mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>

        {/* Right Column: Console / Technical Specifications & Cross links */}
        <aside className="lg:col-span-4 space-y-8 sticky top-8">
          
          {/* Specifications Box */}
          <div className="bg-zinc-950 text-zinc-100 rounded-3xl p-6 border border-zinc-800 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />
            
            <div className="space-y-1.5 border-b border-zinc-800 pb-4">
              <span className="text-[10px] text-amber-500 font-mono font-bold uppercase tracking-wider block">TECHNICAL LOG</span>
              <h3 className="text-lg font-bold font-display text-zinc-100 flex items-center gap-2">
                <Binary size={16} className="text-amber-500" /> System Specs
              </h3>
            </div>

            <div className="space-y-4 font-sans text-xs">
              {page.technicalSpecs.map((spec, sIdx) => (
                <div key={sIdx} className="flex justify-between items-center border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500 font-medium">{spec.label}</span>
                  <span className="text-zinc-200 font-mono text-right font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[10px] text-zinc-600 font-mono leading-relaxed flex items-center gap-1.5 border-t border-zinc-900 mt-2">
              <ShieldCheck size={12} className="text-emerald-500 shrink-0" /> Certified by mud.cc Editorial Board
            </div>
          </div>

          {/* Related Cross Links Box */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-md space-y-4">
            <div className="space-y-1">
              <span className="text-[9px] text-amber-600 font-mono font-bold uppercase tracking-widest block">INTERDISCIPLINARY</span>
              <h3 className="text-base font-bold font-display text-stone-900">Semantic Links</h3>
            </div>

            <div className="space-y-4">
              {page.crossLinks.map((link, lIdx) => (
                <Link
                  key={lIdx}
                  href={link.href}
                  className="group block p-3.5 rounded-xl border border-stone-100 hover:border-amber-500/40 hover:bg-amber-50/20 transition-all duration-300"
                >
                  <h4 className="font-bold text-xs text-stone-900 group-hover:text-amber-600 transition-colors leading-tight">
                    {link.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 leading-snug mt-1.5 font-sans group-hover:text-stone-600">
                    {link.reason}
                  </p>
                  <span className="text-[10px] font-bold text-amber-600 inline-flex items-center gap-0.5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Access Research →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Automated Interlinking Graph */}
          <SidebarInterlinks
            currentCategorySlug={category.slug}
            currentSubpageSlug={subpage.slug}
          />

        </aside>
      </main>

      {/* Semantic Integration Showcase Banner */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-zinc-900 text-zinc-100 p-8 rounded-3xl border border-zinc-800 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <span className="text-[9px] font-mono text-amber-500 font-bold uppercase tracking-wider block">Environmental Preservation Commitment</span>
            <h3 className="text-xl font-bold font-display">Geological & Wetlands Conservation Initiative</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              The <strong>mud.cc</strong> educational repository actively supports natural habitat preservation. Exactly 10% of all administrative and patron resources are committed directly to global clean water filtration programs, high-yield soil preservation research, and regional wetlands restoration projects.
            </p>
          </div>
          <Link
            href="/philanthropy"
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3.5 rounded-xl text-xs tracking-tight transition-colors shrink-0"
          >
            Explore Conservation Program
          </Link>
        </div>
      </section>
    </div>
  );
}
