import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Award, ShieldCheck, Cpu, Database, Binary, ArrowLeft, Layers, Microscope } from "lucide-react";
import { getTaxonomyEntry, getAllTaxonomySlugs } from "@/lib/taxonomy-data";
import { CATEGORIES } from "@/lib/data";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";
import AnimatedBreadcrumbs from "@/components/animated-breadcrumbs";
import ContributorBiography from "@/components/contributor-biography";
import TagCloud from "@/components/tag-cloud";
import AutomaticAnchorLinks from "@/components/automatic-anchor-links";

interface TaxonomyPageProps {
  params: Promise<{ term: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllTaxonomySlugs();
  return slugs.map((slug) => ({
    term: slug,
  }));
}

export async function generateMetadata({ params }: TaxonomyPageProps): Promise<Metadata> {
  const { term } = await params;
  const entry = getTaxonomyEntry(term);
  if (!entry) return {};

  return generatePageMetadata({
    title: `${entry.title} | mud.cc Scientific Registry`,
    description: entry.description,
    keywords: [entry.term, entry.region, "sedimentology", "clay geology", "geotechnical study"],
    path: `/taxonomy/${term}`,
  });
}

export default async function TaxonomyDetailPage({ params }: TaxonomyPageProps) {
  const { term } = await params;
  const entry = getTaxonomyEntry(term);

  if (!entry) {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.slug === entry.category) || CATEGORIES[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": entry.title,
    "description": entry.description,
    "inLanguage": "en-US",
    "author": {
      "@type": "Organization",
      "name": "mud.cc Department of Geochemical Studies"
    },
    "publisher": {
      "@type": "Organization",
      "name": "mud.cc",
      "logo": {
        "@type": "ImageObject",
        "url": `${getBaseUrl()}/icon.png`
      }
    },
    "datePublished": "2026-05-15T12:00:00Z",
    "about": [
      {
        "@type": "Thing",
        "name": entry.term,
        "description": "Geochemical soil taxonomy sediment aggregate"
      },
      {
        "@type": "Place",
        "name": entry.region
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 pb-20 font-sans" id="taxonomy-detail-page">
      {/* Structural JSON-LD for SEO Domination */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Slide-animated Breadcrumbs */}
      <AnimatedBreadcrumbs
        items={[
          { label: "home", href: "/" },
          { label: "registry", href: "/#interactive-sitemap-section" },
          { label: category.slug, href: `/mud/${category.slug}` },
          { label: entry.slug }
        ]}
        backLink={{
          label: `Back to ${category.title} Hub`,
          href: `/mud/${category.slug}`
        }}
      />

      {/* Main Core Layout Grid */}
      <main className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4">
        {/* Left Column: Academic Content */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Microscope size={12} /> Peer-Reviewed Geochemical Node
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-display text-stone-950 tracking-tight leading-tight">
              {entry.title}
            </h1>
            <p className="text-base text-stone-500 font-sans italic leading-relaxed">
              &ldquo;<AutomaticAnchorLinks text={entry.description} />&rdquo;
            </p>
          </div>

          {/* Academic Content Sections */}
          <article className="prose prose-stone max-w-none space-y-6">
            {entry.paragraphs.map((para, idx) => (
              <p key={idx} className="text-sm text-stone-700 leading-relaxed font-sans">
                <AutomaticAnchorLinks text={para} />
              </p>
            ))}
          </article>

          {/* Technical Verification Section */}
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5 space-y-3">
            <h3 className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-700" /> Registry Board Approval
            </h3>
            <p className="text-xs text-emerald-800 leading-relaxed font-sans">
              This node profile is officially verified in accordance with ISO/TS 17892 (Geotechnical investigation and testing) and soil-classification parameters. All chemical and mechanical values presented in the accompanying data-sheets are calculated deterministically against geological sediment baselines.
            </p>
          </div>
        </div>

        {/* Right Column: High-Value Geotechnical Data-Sheet */}
        <aside className="lg:col-span-4 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-6">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-wider block">
              Node Parameters
            </span>
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
              <Cpu size={14} className="text-stone-400" /> Sediment Metrics
            </h3>
            <p className="text-[10px] text-stone-400">
              Laboratory-measured geostructual constants
            </p>
          </div>

          <div className="space-y-4 pt-2 border-t border-stone-100">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                Dynamic Viscosity
              </span>
              <span className="text-sm font-mono font-bold text-stone-800">
                {entry.viscosity}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                Shear Stress Limit
              </span>
              <span className="text-sm font-mono font-bold text-stone-800">
                {entry.shearStress}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                Hydraulic Conductivity
              </span>
              <span className="text-sm font-mono font-bold text-stone-800">
                {entry.hydraulicConductivity}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                Clay Fraction Density
              </span>
              <span className="text-sm font-mono font-bold text-stone-800">
                {entry.clayFraction}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                Estimated Strata Age
              </span>
              <span className="text-xs font-sans text-stone-600">
                {entry.geologicalAge}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 text-[9px] font-mono text-stone-400 leading-normal">
            {entry.scholarlyReview}
          </div>
        </aside>
      </main>

      {/* Contributor Biography Section */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <ContributorBiography categorySlug={category.slug} />
      </section>

      {/* Dynamic Tag Cloud Section */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <TagCloud title="Geochemical Taxonomy Semantic Index" />
      </section>

      {/* Back to Category Action Panel */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <div className="bg-stone-900 text-stone-100 p-6 rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h4 className="text-sm font-bold text-white">
              Ready to explore more of {category.title}?
            </h4>
            <p className="text-xs text-stone-400 mt-1 font-sans">
              Dive back into the comprehensive {category.subtitle} categories, dynamic subpage guides, and hand-crafted historical timelines.
            </p>
          </div>
          <Link
            href={`/mud/${category.slug}`}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition-all whitespace-nowrap active:scale-95"
          >
            Go to Category Hub
          </Link>
        </div>
      </section>
    </div>
  );
}
