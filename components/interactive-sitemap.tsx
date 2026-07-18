"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, FileText, Globe, Layers, BookOpen, Minimize2, Maximize2 } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import { DETAIL_PAGES } from "@/lib/detail-data";
import { getTaxonomyListings } from "@/lib/taxonomy-data";
import { CategoryIllustration } from "@/components/category-illustration";
import { motion, AnimatePresence } from "motion/react";

export default function InteractiveSitemap() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(
    CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat.slug]: true }), {})
  );

  const [taxonomyQuery, setTaxonomyQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const taxonomyListings = useMemo(() => {
    const list = getTaxonomyListings();
    const q = taxonomyQuery.toLowerCase().trim();
    return list.filter((item) => {
      const matchSearch = item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
      const matchRegion = selectedRegion === "All" || item.title.includes(`(${selectedRegion})`);
      return matchSearch && matchRegion;
    });
  }, [taxonomyQuery, selectedRegion]);

  const uniqueRegions = [
    "All",
    "Jordan Rift Valley",
    "Mississippi Delta",
    "Appalachian Highlands",
    "Thames Estuary",
    "Siberian Permafrost Basin",
    "Saharan Arid Shield",
    "Alpine Glacial moraine",
    "Amazonian Alluvial Floodplain",
    "Andean Volcanic Arc",
    "Great Barrier Mudflats",
    "Sunda Shelf Estuary",
    "Kalahari Duricrust Plateau",
    "Ganges-Brahmaputra Delta",
    "Rhine-Meuse-Scheldt Delta",
    "Laurentian Clay Belt"
  ];

  // Toggle category expansion
  const toggleCategory = (slug: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  // Expand or Collapse All categories
  const setAllCategories = (expanded: boolean) => {
    setExpandedCategories(
      CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat.slug]: expanded }), {})
    );
  };

  // Build the hierarchical tree and search/filter it
  const filteredTree = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) {
      return CATEGORIES.map((cat) => {
        const subpages = cat.subpages.map((sub) => {
          const details = DETAIL_PAGES.filter(
            (det) => det.parentCategorySlug === cat.slug && det.parentSubpageSlug === sub.slug
          );
          return { ...sub, details };
        });
        return { ...cat, subpages };
      });
    }

    return CATEGORIES.map((cat) => {
      // Filter subpages
      const matchingSubpages = cat.subpages.map((sub) => {
        // Filter detail pages matching query
        const matchingDetails = DETAIL_PAGES.filter(
          (det) =>
            det.parentCategorySlug === cat.slug &&
            det.parentSubpageSlug === sub.slug &&
            (det.title.toLowerCase().includes(query) ||
              det.subtitle.toLowerCase().includes(query) ||
              det.description.toLowerCase().includes(query) ||
              det.keywords.some((k) => k.toLowerCase().includes(query)))
        );

        const subpageMatches =
          sub.title.toLowerCase().includes(query) ||
          sub.description.toLowerCase().includes(query);

        if (subpageMatches || matchingDetails.length > 0) {
          // If subpage matches, include all its details, otherwise just matching details
          const finalDetails = subpageMatches
            ? DETAIL_PAGES.filter(
                (det) => det.parentCategorySlug === cat.slug && det.parentSubpageSlug === sub.slug
              )
            : matchingDetails;

          return { ...sub, details: finalDetails, isMatch: true };
        }
        return null;
      }).filter(Boolean) as any[];

      const categoryMatches =
        cat.title.toLowerCase().includes(query) ||
        cat.subtitle.toLowerCase().includes(query) ||
        cat.description.toLowerCase().includes(query);

      if (categoryMatches || matchingSubpages.length > 0) {
        // If category matches but subpages didn't match, include all subpages
        const finalSubpages = categoryMatches
          ? cat.subpages.map((sub) => {
              const details = DETAIL_PAGES.filter(
                (det) => det.parentCategorySlug === cat.slug && det.parentSubpageSlug === sub.slug
              );
              return { ...sub, details };
            })
          : matchingSubpages;

        return { ...cat, subpages: finalSubpages, isMatch: true };
      }
      return null;
    }).filter(Boolean) as any[];
  }, [searchQuery]);

  // Count total pages displayed
  const stats = useMemo(() => {
    let categoryCount = 0;
    let subpageCount = 0;
    let detailCount = 0;

    filteredTree.forEach((cat) => {
      categoryCount++;
      cat.subpages.forEach((sub: any) => {
        subpageCount++;
        detailCount += sub.details?.length || 0;
      });
    });

    return {
      total: categoryCount + subpageCount + detailCount,
      categories: categoryCount,
      subpages: subpageCount,
      details: detailCount,
    };
  }, [filteredTree]);

  return (
    <section id="interactive-sitemap-section" className="py-20 px-6 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-amber-200">
            <Layers size={12} className="text-amber-600" /> Webmasters Visual Directory
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-stone-900">
            Interactive Registry Sitemap
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-base">
            Explore our comprehensive, search-engine-optimized structure mapping the complete depth of our 40+ educational treatises and deep-dives.
          </p>
        </div>

        {/* Toolbar Controls */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 md:p-6 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative w-full md:max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by title, keywords, or research field..."
              className="w-full pl-11 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Toggle buttons and counts */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setAllCategories(true)}
              className="flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer"
              title="Expand all nodes"
            >
              <Maximize2 size={13} />
              <span>Expand All</span>
            </button>
            <button
              onClick={() => setAllCategories(false)}
              className="flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer"
              title="Collapse all nodes"
            >
              <Minimize2 size={13} />
              <span>Collapse All</span>
            </button>

            <div className="text-xs font-mono bg-amber-50 border border-amber-200/50 text-amber-900 px-3 py-2 rounded-xl flex gap-2">
              <span><strong>{stats.total}</strong> pages indexed</span>
              <span className="text-amber-300">|</span>
              <span className="hidden sm:inline">{stats.categories} Verticals • {stats.subpages} Hubs • {stats.details} Deep-Dives</span>
              <span className="sm:hidden">{stats.categories}V • {stats.subpages}H • {stats.details}D</span>
            </div>
          </div>
        </div>

        {/* Sitemap Visual Tree */}
        <div className="space-y-6">
          {filteredTree.length === 0 ? (
            <div className="text-center py-16 bg-white border border-stone-200 rounded-3xl">
              <p className="text-stone-500 text-sm">No matching pages found for your query.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-3 text-xs font-bold text-amber-700 hover:text-amber-800 underline"
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredTree.map((cat) => {
              const isExpanded = expandedCategories[cat.slug];

              return (
                <div
                  key={cat.slug}
                  className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm transition-all"
                >
                  {/* Category Row (Level 1) */}
                  <div
                    onClick={() => toggleCategory(cat.slug)}
                    className="flex items-center justify-between p-5 md:p-6 bg-stone-50/50 hover:bg-stone-50 border-b border-stone-100 cursor-pointer select-none transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className={`p-2.5 rounded-2xl ${cat.theme.badge} border flex-shrink-0`}>
                        <Globe size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-bold font-display text-stone-900 leading-tight">
                            {cat.title}
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                            (Vertical Index)
                          </span>
                        </div>
                        <p className="text-xs text-stone-500 truncate max-w-xl font-sans mt-0.5">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Link
                        href={`/mud/${cat.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors uppercase tracking-wider"
                      >
                        Visit Vertical →
                      </Link>
                      <span className="text-stone-400 p-1.5 hover:bg-stone-100 rounded-lg transition-colors">
                        {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                      </span>
                    </div>
                  </div>

                  {/* Collapsible Subpages Block */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 md:p-8 space-y-6 bg-white border-t border-stone-100/50">
                          {cat.subpages.map((sub: any) => (
                            <div key={sub.slug} className="relative pl-6 md:pl-8 border-l-2 border-stone-100 space-y-4">
                              {/* Connector Dot */}
                              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-200 border-2 border-white" />

                              {/* Subpage Header (Level 2) */}
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div className="space-y-0.5">
                                  <Link
                                    href={`/mud/${cat.slug}/${sub.slug}`}
                                    className="inline-flex items-center gap-1.5 text-sm font-bold text-stone-800 hover:text-amber-700 transition-colors"
                                  >
                                    <BookOpen size={14} className="text-stone-400 flex-shrink-0" />
                                    <span>{sub.title}</span>
                                  </Link>
                                  <p className="text-xs text-stone-500 max-w-2xl leading-normal font-sans">
                                    {sub.description}
                                  </p>
                                </div>
                                <Link
                                  href={`/mud/${cat.slug}/${sub.slug}`}
                                  className="text-[10px] font-mono text-stone-400 hover:text-amber-700 self-start sm:self-center bg-stone-50 border border-stone-200 rounded-lg px-2 py-1 transition-all whitespace-nowrap"
                                >
                                  /mud/{cat.slug}/{sub.slug}
                                </Link>
                              </div>

                              {/* Detail Pages Grid (Level 3) */}
                              {sub.details && sub.details.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 pl-4">
                                  {sub.details.map((det: any) => (
                                    <Link
                                      key={det.slug}
                                      href={`/mud/${cat.slug}/${sub.slug}/${det.slug}`}
                                      className="group p-4 bg-stone-50/50 hover:bg-stone-50 border border-stone-200 hover:border-amber-400/40 hover:shadow-sm rounded-2xl transition-all flex flex-col justify-between space-y-3"
                                    >
                                      <div className="space-y-1.5">
                                        <span className="text-[9px] font-mono text-stone-400 font-bold uppercase tracking-wider block">
                                          Deep-Dive Treaty
                                        </span>
                                        <h4 className="text-xs font-bold text-stone-850 group-hover:text-amber-700 transition-colors line-clamp-1">
                                          {det.title}
                                        </h4>
                                        <p className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed font-sans">
                                          {det.description}
                                        </p>
                                      </div>
                                      <div className="flex items-center justify-between text-[10px] text-stone-400 pt-1.5 border-t border-stone-200/40">
                                        <span className="font-mono flex items-center gap-1">
                                          <FileText size={10} />
                                          <span>{det.readTime || "6 min read"}</span>
                                        </span>
                                        <span className="font-bold uppercase tracking-wider group-hover:text-amber-600 transition-colors">
                                          Read →
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* --- GEOCAL HIGH-DENSITY TAXONOMY REGISTRY --- */}
        <div className="mt-20 border-t border-stone-200 pt-16 space-y-8" id="geochemical-taxonomy-registry">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
              <Layers size={11} /> 1,800+ Academic Nodes Indexed
            </span>
            <h3 className="text-2xl font-bold font-display text-stone-900 tracking-tight">
              Geochemical &amp; Historical Taxonomy Registry
            </h3>
            <p className="text-sm text-stone-500 max-w-3xl leading-relaxed font-sans">
              To support systematic sedimentological research, our registry compiles localized geostructural studies across variable tectonic boundaries and cultural landscapes. Select a region or filter terms below to discover specific research nodes.
            </p>
          </div>

          {/* Registry Search & Filters */}
          <div className="bg-white border border-stone-200 rounded-2xl p-4 md:p-6 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:max-w-xs">
                <Search size={14} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={taxonomyQuery}
                  onChange={(e) => setTaxonomyQuery(e.target.value)}
                  placeholder="Filter 1,800+ nodes..."
                  className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-sans focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="text-[10px] font-mono text-stone-400 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-lg">
                Showing <strong>{taxonomyListings.length}</strong> of <strong>180</strong> core configurations
              </div>
            </div>

            {/* Horizontal Region Pill Selectors */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-stone-200">
              {uniqueRegions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border transition-all whitespace-nowrap cursor-pointer ${
                    selectedRegion === region
                      ? "bg-amber-500 border-amber-500 text-stone-950 font-bold"
                      : "bg-stone-50 border-stone-200 text-stone-500 hover:bg-stone-100"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Taxonomy Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {taxonomyListings.length === 0 ? (
              <div className="col-span-full text-center py-12 bg-white border border-stone-100 rounded-2xl text-stone-400 text-xs font-sans">
                No registered nodes match your current search constraints.
              </div>
            ) : (
              taxonomyListings.map((node) => {
                const cat = CATEGORIES.find((c) => c.slug === node.category);
                return (
                  <Link
                    key={node.slug}
                    href={`/taxonomy/${node.slug}`}
                    className="group bg-white hover:bg-stone-50/50 border border-stone-200 hover:border-amber-500/50 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden justify-between space-y-0 h-full min-h-[300px]"
                  >
                    {/* Miniature Illustration Header */}
                    <div className="relative w-full h-24 overflow-hidden border-b border-stone-100 flex-shrink-0 bg-stone-50">
                      <CategoryIllustration
                        slug={node.category}
                        seed={node.slug}
                        theme={cat?.theme || {
                          name: "Amber",
                          primary: "amber",
                          bg: "bg-amber-50/10",
                          text: "text-amber-900",
                          border: "border-amber-200",
                          accent: "text-amber-600",
                          darkBg: "bg-amber-950",
                          darkText: "text-amber-100",
                          badge: "bg-amber-50 border-amber-200 text-amber-850",
                          gradient: "from-amber-500/10 to-transparent",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/5 to-transparent pointer-events-none" />
                    </div>

                    <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-stone-400">
                            {cat?.subtitle || "Registry Node"}
                          </span>
                          <span className={`inline-block w-1.5 h-1.5 rounded-full ${
                            cat?.theme.primary === "teal" ? "bg-teal-500" :
                            cat?.theme.primary === "emerald" ? "bg-emerald-500" :
                            cat?.theme.primary === "indigo" ? "bg-indigo-500" :
                            cat?.theme.primary === "amber" ? "bg-amber-500" :
                            "bg-amber-500"
                          }`} />
                        </div>
                        <h4 className="text-xs font-bold text-stone-850 group-hover:text-amber-800 transition-colors line-clamp-2 leading-snug">
                          {node.title}
                        </h4>
                        <p className="text-[10px] text-stone-500 line-clamp-3 leading-relaxed font-sans">
                          {node.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-stone-450 pt-1.5 border-t border-stone-100 mt-auto">
                        <span>Active Profile</span>
                        <span className="font-bold text-amber-700 group-hover:translate-x-0.5 transition-transform inline-block">
                          Study →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
