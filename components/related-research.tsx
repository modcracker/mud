"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { Compass, ArrowRight, BookOpen, Layers, Calendar, GraduationCap, ChevronRight } from "lucide-react";
import { DETAIL_PAGES, type DetailPageData } from "@/lib/detail-data";
import { CATEGORIES } from "@/lib/data";

interface RelatedResearchProps {
  currentCategorySlug: string;
  currentSubpageSlug: string;
  currentDetailSlug: string;
}

const CATEGORY_TAGS: Record<string, string[]> = {
  "dead-sea-mud": ["health", "science", "mineral", "wellness", "natural", "therapy", "history"],
  "mississippi-mud-pie": ["culinary", "chocolate", "dessert", "baking", "history", "south"],
  "mud-run": ["sport", "adventure", "engineering", "military", "off-road"],
  "mud-the-game": ["tech", "software", "retro", "gaming", "history", "computers"],
  "mudslinging": ["politics", "rhetoric", "history", "media", "social"],
  "clear-as-mud": ["language", "idiom", "literature", "history", "rhetoric"],
  "mud-architecture": ["architecture", "engineering", "sustainable", "construction", "natural", "science"],
  "mudlarking": ["history", "archaeology", "science", "river", "preservation"],
  "mud-season": ["engineering", "geotech", "science", "weather", "construction"],
  "mud-tires": ["engineering", "automotive", "off-road", "sport"]
};

export default function RelatedResearch({
  currentCategorySlug,
  currentSubpageSlug,
  currentDetailSlug,
}: RelatedResearchProps) {
  
  const relatedPages = useMemo(() => {
    const currentDetail = DETAIL_PAGES.find(
      (p) =>
        p.parentCategorySlug === currentCategorySlug &&
        p.parentSubpageSlug === currentSubpageSlug &&
        p.slug === currentDetailSlug
    );

    const currentKeywords = currentDetail?.keywords || [];
    const currentTags = CATEGORY_TAGS[currentCategorySlug] || [];
    const stopWords = new Set(["the", "and", "from", "with", "for", "that", "this", "your", "what", "how", "into", "their", "about", "study", "analysis", "technical"]);

    // Find candidate pages in *other* categories to improve interdisciplinary exploration
    const candidates = DETAIL_PAGES.filter(
      (p) => p.parentCategorySlug !== currentCategorySlug
    );

    const scored = candidates.map((page) => {
      let score = 0;

      // 1. Tag overlap (based on high-level categories)
      const pageTags = CATEGORY_TAGS[page.parentCategorySlug] || [];
      const sharedTags = currentTags.filter((t) => pageTags.includes(t));
      score += sharedTags.length * 20;

      // 2. Keyword overlap
      page.keywords.forEach((kw) => {
        if (
          currentKeywords.some(
            (ckw) =>
              ckw.toLowerCase().includes(kw.toLowerCase()) ||
              kw.toLowerCase().includes(ckw.toLowerCase())
          )
        ) {
          score += 15;
        }
      });

      // 3. Shared title words
      if (currentDetail) {
        const currentTitleWords = currentDetail.title
          .toLowerCase()
          .split(/[^a-zA-Z]/)
          .filter((w) => w.length > 3 && !stopWords.has(w));
        const pageTitleWords = page.title
          .toLowerCase()
          .split(/[^a-zA-Z]/)
          .filter((w) => w.length > 3 && !stopWords.has(w));
        
        const sharedWords = currentTitleWords.filter((w) =>
          pageTitleWords.includes(w)
        );
        score += sharedWords.length * 10;
      }

      // Add a slight deterministic random factor based on title length to break ties cleanly
      score += page.title.length * 0.1;

      return { page, score, sharedTags };
    });

    // Sort descending by score, then publishDate
    return scored
      .sort(
        (a, b) =>
          b.score - a.score ||
          new Date(b.page.publishDate).getTime() - new Date(a.page.publishDate).getTime()
      )
      .slice(0, 3)
      .map((item) => {
        const cat = CATEGORIES.find((c) => c.slug === item.page.parentCategorySlug);
        return {
          ...item.page,
          categoryTitle: cat?.title || "Research Node",
          categoryTheme: cat?.theme || { bg: "bg-stone-50", border: "border-stone-200", primary: "amber" },
          score: item.score,
          sharedTags: item.sharedTags
        };
      });
  }, [currentCategorySlug, currentSubpageSlug, currentDetailSlug]);

  if (relatedPages.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-stone-200/80" id="intelligent-related-research">
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-amber-500/10 text-amber-700 rounded-lg animate-pulse">
            <Compass size={16} className="text-amber-600" />
          </span>
          <span className="text-[10px] font-mono text-amber-600 font-bold uppercase tracking-widest block">
            Intelligent Semantic Recommendations
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
          <h3 className="text-xl md:text-2xl font-bold font-display text-stone-900 tracking-tight">
            Intelligent Related Research
          </h3>
          <p className="text-xs text-stone-500 max-w-md font-sans">
            Algorithmically generated recommendations highlighting interdisciplinary links and shared research tags.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPages.map((page) => (
          <Link
            key={`${page.parentCategorySlug}-${page.parentSubpageSlug}-${page.slug}`}
            href={`/mud/${page.parentCategorySlug}/${page.parentSubpageSlug}/${page.slug}`}
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-stone-200/70 hover:border-amber-500/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-stone-400 group-hover:text-amber-600 transition-colors">
                  {page.categoryTitle}
                </span>
                <span className="inline-flex items-center gap-1 text-[8px] font-mono font-bold bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full border border-amber-100">
                  <GraduationCap size={10} /> Research Node
                </span>
              </div>
              
              <div className="space-y-1">
                <h4 className="text-sm font-bold font-display text-stone-900 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
                  {page.title}
                </h4>
                <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed font-sans">
                  {page.description}
                </p>
              </div>

              {/* Shared Semantic Tags list */}
              {page.sharedTags && page.sharedTags.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-1">
                  {page.sharedTags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] font-mono font-bold bg-amber-50/80 text-amber-800 px-1.5 py-0.5 rounded border border-amber-100/40 uppercase tracking-tight"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[10px] font-mono text-stone-400 group-hover:text-amber-600 transition-colors">
              <span className="flex items-center gap-1">
                <Calendar size={11} /> {new Date(page.publishDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
              </span>
              <span className="font-bold flex items-center gap-0.5">
                Read Publication <ChevronRight size={12} className="transform group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
