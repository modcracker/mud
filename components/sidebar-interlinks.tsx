"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { 
  Network, 
  BookOpen, 
  Calendar, 
  Layers, 
  GitBranch, 
  Compass, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { CATEGORIES } from "@/lib/data";

interface SidebarInterlinksProps {
  currentCategorySlug: string;
  currentSubpageSlug: string;
  maxLinks?: number;
}

// Map categories to high-level semantic tags for thematic overlap scoring
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

// Map tag keys to beautiful, human-readable labels for the match reasons
const TAG_LABELS: Record<string, string> = {
  health: "Clinical Wellness",
  science: "Analytical Science",
  mineral: "Mineralogical Composition",
  wellness: "Therapeutic Wellness",
  natural: "Natural Materials",
  therapy: "Balneological Therapy",
  history: "Historical Context",
  culinary: "Culinary Science",
  chocolate: "Chocolatier Chemistry",
  dessert: "Confectionary Arts",
  baking: "Baking Physics",
  south: "Southern Heritage",
  sport: "Athletic Endurance",
  adventure: "Outdoor Adventure",
  engineering: "Applied Engineering",
  military: "Tactical Defense",
  "off-road": "Off-Road Dynamics",
  tech: "Virtual Computing",
  software: "Software Systems",
  retro: "Retro History",
  gaming: "Mainframe Game Design",
  computers: "Computer History",
  politics: "Political Discourse",
  rhetoric: "Rhetorical Media",
  media: "Media Psychology",
  social: "Sociological Analysis",
  language: "Socio-linguistic Studies",
  idiom: "Etymological Idioms",
  literature: "English Literature",
  architecture: "Earthen Architecture",
  sustainable: "Ecological Building",
  construction: "Structural Construction",
  archaeology: "Historical Archaeology",
  river: "Waterlogged Stratigraphy",
  preservation: "Anaerobic Preservation",
  geotech: "Geotechnical Physics",
  weather: "Diurnal Metereology",
  automotive: "Automotive Mechanics"
};

export default function SidebarInterlinks({
  currentCategorySlug,
  currentSubpageSlug,
  maxLinks = 3
}: SidebarInterlinksProps) {
  
  const relatedLinks = useMemo(() => {
    const currentCategory = CATEGORIES.find(c => c.slug === currentCategorySlug);
    if (!currentCategory) return [];

    const currentSubpage = currentCategory.subpages.find(s => s.slug === currentSubpageSlug);
    const currentTags = CATEGORY_TAGS[currentCategorySlug] || [];
    
    // Flatten all subpages on the site for potential matches
    const allCandidates: Array<{
      categorySlug: string;
      categoryTitle: string;
      categorySubtitle: string;
      subpage: any;
      score: number;
      matchPercentage: number;
      matchReason: string;
    }> = [];

    // Stop words to filter out for title overlap
    const stopWords = new Set(["the", "and", "from", "with", "for", "that", "this", "your", "what", "how", "into", "their", "about"]);

    CATEGORIES.forEach(cat => {
      cat.subpages.forEach(sub => {
        // Skip current subpage
        if (cat.slug === currentCategorySlug && sub.slug === currentSubpageSlug) {
          return;
        }

        let score = 0;
        let matchedTag: string | null = null;

        // 1. Same category bonus (Sister pages)
        if (cat.slug === currentCategorySlug) {
          score += 50;
        }

        // 2. Explicit direct relation defined in CATEGORIES
        if (currentCategory.relatedSlugs?.includes(cat.slug)) {
          score += 40;
        }

        // 3. Explicit reverse relation
        if (cat.relatedSlugs?.includes(currentCategorySlug)) {
          score += 25;
        }

        // 4. Tag overlap calculation
        const candidateTags = CATEGORY_TAGS[cat.slug] || [];
        const sharedTags = currentTags.filter(t => candidateTags.includes(t));
        score += sharedTags.length * 15;

        if (sharedTags.length > 0) {
          matchedTag = sharedTags[0];
        }

        // 5. Shared word overlap in titles
        if (currentSubpage) {
          const currentWords = currentSubpage.title.toLowerCase().split(/[^a-zA-Z]/).filter(w => w.length > 3 && !stopWords.has(w));
          const candidateWords = sub.title.toLowerCase().split(/[^a-zA-Z]/).filter(w => w.length > 3 && !stopWords.has(w));
          const sharedWords = currentWords.filter(w => candidateWords.includes(w));
          score += sharedWords.length * 12;
        }

        // 6. Layout symmetry bonus
        if (currentSubpage && sub.layout === currentSubpage.layout) {
          score += 5;
        }

        // Generate high-quality match reason dynamically
        let matchReason = "Conceptual Semantic Link";
        if (matchedTag && TAG_LABELS[matchedTag]) {
          matchReason = `Shared Focus: ${TAG_LABELS[matchedTag]}`;
        } else if (cat.slug === currentCategorySlug) {
          matchReason = "Intra-Category Sister Chapter";
        } else if (currentCategory.relatedSlugs?.includes(cat.slug)) {
          matchReason = "Direct Network Affinity Node";
        } else if (score > 40) {
          matchReason = "Thematic Interdisciplinary Bridge";
        }

        // Map score to a beautiful, realistic match percentage (68% - 98%)
        const basePercentage = 68;
        const variablePercentage = Math.min(30, Math.round(score * 0.4));
        const matchPercentage = basePercentage + variablePercentage;

        allCandidates.push({
          categorySlug: cat.slug,
          categoryTitle: cat.title,
          categorySubtitle: cat.subtitle,
          subpage: sub,
          score,
          matchPercentage,
          matchReason
        });
      });
    });

    // Sort candidates by score descending and return top matches
    return allCandidates
      .sort((a, b) => b.score - a.score)
      .slice(0, maxLinks);
  }, [currentCategorySlug, currentSubpageSlug, maxLinks]);

  if (relatedLinks.length === 0) return null;

  // Helper to get corresponding layout icon
  const getLayoutIcon = (layout: string) => {
    switch (layout) {
      case "timeline":
        return <Calendar size={13} className="text-stone-400" />;
      case "masonry":
        return <Layers size={13} className="text-stone-400" />;
      default:
        return <BookOpen size={13} className="text-stone-400" />;
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-amber-500/10 text-amber-700 rounded-lg">
            <Network size={16} className="animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-display text-stone-900 leading-none">
              Knowledge Graph
            </h4>
            <span className="text-[9px] text-stone-400 font-mono">Semantic Interlinking</span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 text-[8px] font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/50 px-2 py-0.5 rounded-full">
          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
          ACTIVE GRAPH
        </span>
      </div>

      <div className="space-y-4">
        {relatedLinks.map((link) => (
          <Link
            key={link.subpage.slug}
            href={`/mud/${link.categorySlug}/${link.subpage.slug}`}
            className="group block p-3 rounded-2xl border border-stone-100 hover:border-amber-500/30 hover:bg-amber-50/10 transition-all duration-300 space-y-2"
          >
            <div className="flex justify-between items-center text-[10px]">
              <span className="font-mono text-stone-400 group-hover:text-amber-700 transition-colors font-semibold tracking-wider">
                {link.categoryTitle.toUpperCase()}
              </span>
              <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[9px]">
                {link.matchPercentage}% MATCH
              </span>
            </div>

            <div className="space-y-1">
              <h5 className="text-xs font-bold text-stone-900 group-hover:text-amber-600 transition-colors leading-tight flex items-center gap-1">
                {link.subpage.title}
              </h5>
              <p className="text-[10px] text-stone-500 line-clamp-2 leading-relaxed">
                {link.subpage.description}
              </p>
            </div>

            <div className="pt-1 flex items-center justify-between text-[9px] text-stone-400 border-t border-stone-50">
              <span className="font-sans italic text-stone-400 flex items-center gap-1 shrink-0">
                {link.matchReason}
              </span>
              <span className="font-mono flex items-center gap-1 group-hover:text-amber-600 transition-colors text-right pl-2 shrink-0">
                {getLayoutIcon(link.subpage.layout)}
                <span className="uppercase font-bold text-[8px]">{link.subpage.layout}</span>
                <ArrowRight size={10} className="transform group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-stone-50 rounded-2xl p-3 border border-stone-100 text-[10px] leading-relaxed text-stone-500 font-mono flex items-start gap-2">
        <GitBranch size={14} className="text-amber-600 shrink-0 mt-0.5" />
        <span>Contextual links are built in real-time mapping shared semantic properties of the mud.cc portfolio.</span>
      </div>
    </div>
  );
}
