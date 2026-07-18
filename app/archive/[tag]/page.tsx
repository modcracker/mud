import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { CATEGORIES } from "@/lib/data";
import { DETAIL_PAGES } from "@/lib/detail-data";
import { getTaxonomyListings } from "@/lib/taxonomy-data";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";
import AnimatedBreadcrumbs from "@/components/animated-breadcrumbs";
import TagCloud, { CATEGORY_TAGS } from "@/components/tag-cloud";
import { BookOpen, Layers, GraduationCap, Compass, Microscope, Award } from "lucide-react";

interface ArchivePageProps {
  params: Promise<{ tag: string }>;
}

// Master list of all tags for generateStaticParams
const ALL_TAGS = Array.from(
  new Set(Object.values(CATEGORY_TAGS).flat())
);

export async function generateStaticParams() {
  return ALL_TAGS.map((tag) => ({
    tag,
  }));
}

export async function generateMetadata({ params }: ArchivePageProps): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag).toLowerCase();

  if (!ALL_TAGS.includes(decodedTag)) return {};

  return generatePageMetadata({
    title: `Scientific Research Archive: ${decodedTag.toUpperCase()} | mud.cc`,
    description: `Browse peer-reviewed scientific studies, historical research timelines, and advanced geochemical taxonomy nodes registered under the ${decodedTag} semantic index.`,
    keywords: [decodedTag, "geology", "sedimentology", "archival research", "mud.cc registry"],
    path: `/archive/${decodedTag}`,
  });
}

export default async function ArchiveTagPage({ params }: ArchivePageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag).toLowerCase();

  if (!ALL_TAGS.includes(decodedTag)) {
    notFound();
  }

  // 1. Gather all categories sharing this tag
  const matchingCategories = CATEGORIES.filter((cat) => {
    const tags = CATEGORY_TAGS[cat.slug] || [];
    return tags.includes(decodedTag);
  });

  // 2. Gather all subpages sharing this tag (via parent category)
  const matchingSubpages: any[] = [];
  CATEGORIES.forEach((cat) => {
    const tags = CATEGORY_TAGS[cat.slug] || [];
    if (tags.includes(decodedTag)) {
      cat.subpages.forEach((sub) => {
        matchingSubpages.push({
          ...sub,
          parentCategory: cat,
        });
      });
    }
  });

  // 3. Gather all deep dives sharing this tag (via parent category)
  const matchingDeepDives = DETAIL_PAGES.filter((page) => {
    const tags = CATEGORY_TAGS[page.parentCategorySlug] || [];
    return tags.includes(decodedTag);
  }).map((page) => {
    const parentCat = CATEGORIES.find((c) => c.slug === page.parentCategorySlug);
    return {
      ...page,
      parentCategoryName: parentCat?.title || "Research Node",
    };
  });

  // 4. Gather all taxonomy nodes sharing this tag (via base category)
  const matchingTaxonomy = getTaxonomyListings().filter((node) => {
    const tags = CATEGORY_TAGS[node.category] || [];
    return tags.includes(decodedTag);
  }).map((node) => {
    const parentCat = CATEGORIES.find((c) => c.slug === node.category);
    return {
      ...node,
      parentCategoryName: parentCat?.title || "Registry Node",
    };
  });

  const totalResults =
    matchingCategories.length +
    matchingSubpages.length +
    matchingDeepDives.length +
    matchingTaxonomy.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${decodedTag.toUpperCase()} Research Archive | mud.cc`,
    "description": `Comprehensive collection of articles and geological nodes catalogued under the semantic tag ${decodedTag}.`,
    "url": `${getBaseUrl()}/archive/${decodedTag}`,
    "numberOfItems": totalResults,
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 pb-20 font-sans" id="archive-tag-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AnimatedBreadcrumbs
        items={[
          { label: "home", href: "/" },
          { label: "archive", href: "/#interactive-sitemap-section" },
          { label: decodedTag }
        ]}
        backLink={{
          label: "Back to Home",
          href: "/"
        }}
      />

      <main className="max-w-4xl mx-auto px-6 space-y-12 mt-4">
        {/* Page Header */}
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Layers size={11} /> Global Semantic Archive
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display text-stone-950 tracking-tight capitalize leading-none">
            Topic Index: {decodedTag}
          </h1>
          <p className="text-sm text-stone-500 leading-relaxed font-sans max-w-2xl">
            This dynamically compiled archive displays all registered research nodes, peer-reviewed deep-dives, historical timelines, and category hubs sharing the <strong className="text-stone-800 font-bold">&ldquo;{decodedTag}&rdquo;</strong> classification parameter.
          </p>
          <div className="text-xs font-mono text-stone-400">
            Found <strong>{totalResults}</strong> scientific resources matching this index
          </div>
        </div>

        {/* Categories Section */}
        {matchingCategories.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold font-display text-stone-900 border-b border-stone-200 pb-2 flex items-center gap-2">
              <Compass size={16} className="text-amber-600" /> Category Hubs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {matchingCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/mud/${cat.slug}`}
                  className="group p-5 bg-white hover:bg-amber-50/10 border border-stone-200 hover:border-amber-500/40 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 space-y-2"
                >
                  <span className="text-[9px] font-mono text-amber-600 font-bold uppercase tracking-wider block">
                    Core Category Hub
                  </span>
                  <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                  <span className="text-[10px] font-bold text-amber-600 inline-flex items-center gap-0.5 pt-2">
                    Enter Hub →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Subpages Section */}
        {matchingSubpages.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold font-display text-stone-900 border-b border-stone-200 pb-2 flex items-center gap-2">
              <BookOpen size={16} className="text-amber-600" /> Research Treatises &amp; Timelines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {matchingSubpages.map((sub, idx) => (
                <Link
                  key={`${sub.parentCategory.slug}-${sub.slug}`}
                  href={`/mud/${sub.parentCategory.slug}/${sub.slug}`}
                  className="group p-5 bg-white hover:bg-amber-50/10 border border-stone-200 hover:border-amber-500/40 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-stone-400 font-bold uppercase tracking-wider">
                      {sub.layout === "timeline" ? "Historical Timeline" : sub.layout === "masonry" ? "Breakdown Study" : "Editorial Study"}
                    </span>
                    <span className="text-[9px] font-mono text-amber-600 font-bold bg-amber-50/50 px-2 py-0.5 rounded border border-amber-100">
                      in {sub.parentCategory.title}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed font-sans">
                    {sub.description}
                  </p>
                  <span className="text-[10px] font-bold text-amber-600 inline-flex items-center gap-0.5 pt-2">
                    Open Treatise →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Deep Dives Section */}
        {matchingDeepDives.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold font-display text-stone-900 border-b border-stone-200 pb-2 flex items-center gap-2">
              <Microscope size={16} className="text-amber-600" /> Exclusive Technical Deep-Dives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {matchingDeepDives.map((page) => (
                <Link
                  key={`${page.parentCategorySlug}-${page.parentSubpageSlug}-${page.slug}`}
                  href={`/mud/${page.parentCategorySlug}/${page.parentSubpageSlug}/${page.slug}`}
                  className="group p-5 bg-white hover:bg-amber-50/10 border border-stone-200 hover:border-amber-500/40 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      Deep-Dive
                    </span>
                    <span className="text-[9px] font-mono text-stone-400 font-semibold">
                      {page.parentCategoryName}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed font-sans">
                    {page.description}
                  </p>
                  <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 pt-2 border-t border-stone-50">
                    <span>{page.readTime}</span>
                    <span className="font-bold text-amber-600">Access Deep-Dive →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Taxonomy Section */}
        {matchingTaxonomy.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold font-display text-stone-900 border-b border-stone-200 pb-2 flex items-center gap-2">
              <Award size={16} className="text-amber-600" /> Scientific Taxonomy Nodes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {matchingTaxonomy.map((node) => (
                <Link
                  key={node.slug}
                  href={`/taxonomy/${node.slug}`}
                  className="group p-4 bg-white hover:bg-amber-50/10 border border-stone-200 hover:border-amber-500/40 rounded-xl shadow-sm hover:shadow transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-amber-600 font-bold uppercase tracking-wider block">
                      Registry Node • {node.parentCategoryName}
                    </span>
                    <h4 className="text-xs font-bold text-stone-850 group-hover:text-amber-800 transition-colors line-clamp-2 leading-snug">
                      {node.title}
                    </h4>
                    <p className="text-[10px] text-stone-400 line-clamp-2 leading-relaxed font-sans">
                      {node.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[9px] font-mono text-stone-400 pt-1.5 border-t border-stone-50">
                    <span>Lab Record</span>
                    <span className="font-bold text-amber-700">Study →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Global Tag Cloud Selector */}
        <div className="pt-12">
          <TagCloud highlightedTag={decodedTag} title="Browse Other Research Verticals" />
        </div>
      </main>
    </div>
  );
}
