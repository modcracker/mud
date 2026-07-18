"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Layers, Hash } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import { DETAIL_PAGES } from "@/lib/detail-data";
import { getTaxonomyListings } from "@/lib/taxonomy-data";

export const CATEGORY_TAGS: Record<string, string[]> = {
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

interface TagCloudProps {
  highlightedTag?: string;
  title?: string;
}

export default function TagCloud({ highlightedTag, title = "Semantic Tag Index" }: TagCloudProps) {
  const tagsWithCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    // Initialize all known tags
    Object.values(CATEGORY_TAGS).flat().forEach((tag) => {
      counts[tag] = 0;
    });

    // 1. Count categories and subpages
    CATEGORIES.forEach((cat) => {
      const catTags = CATEGORY_TAGS[cat.slug] || [];
      catTags.forEach((tag) => {
        // Count category itself
        counts[tag] = (counts[tag] || 0) + 1;
        // Count subpages
        counts[tag] = (counts[tag] || 0) + (cat.subpages?.length || 0);
      });
    });

    // 2. Count deep dives
    DETAIL_PAGES.forEach((page) => {
      const catTags = CATEGORY_TAGS[page.parentCategorySlug] || [];
      catTags.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });

    // 3. Count taxonomy nodes
    const taxonomyList = getTaxonomyListings();
    taxonomyList.forEach((node) => {
      const catTags = CATEGORY_TAGS[node.category] || [];
      catTags.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });

    // Transform into sorted array
    return Object.entries(counts)
      .map(([tag, count]) => ({
        tag,
        count,
        size: count > 30 ? "large" : count > 15 ? "medium" : "small"
      }))
      .sort((a, b) => b.count - a.count);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white/60 backdrop-blur-sm border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
      id="tag-cloud-container"
    >
      <div className="flex items-center justify-between border-b border-stone-100 pb-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest block">
            Discover Cross-Disciplinary Connections
          </span>
          <h3 className="text-lg font-bold font-display text-stone-900 tracking-tight flex items-center gap-2">
            <Layers size={16} className="text-stone-400" /> {title}
          </h3>
        </div>
        <div className="text-[10px] font-mono text-stone-400">
          Click any tag to view the scientific archive
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 items-center justify-center py-2">
        {tagsWithCounts.map(({ tag, count, size }) => {
          const isHighlighted = highlightedTag?.toLowerCase() === tag.toLowerCase();
          
          let sizeClass = "text-xs px-2.5 py-1";
          if (size === "large") {
            sizeClass = "text-sm px-3.5 py-1.5 font-semibold";
          } else if (size === "medium") {
            sizeClass = "text-xs px-3 py-1.2 font-medium";
          }

          return (
            <Link
              key={tag}
              href={`/archive/${tag}`}
              className={`inline-flex items-center gap-1 rounded-full border transition-all duration-300 ${
                isHighlighted
                  ? "bg-amber-500 border-amber-500 text-stone-950 font-bold scale-105 shadow-md"
                  : "bg-white hover:bg-amber-50/10 border-stone-200 hover:border-amber-500 text-stone-600 hover:text-amber-800 shadow-sm"
              } ${sizeClass}`}
            >
              <Hash size={10} className={isHighlighted ? "text-stone-950" : "text-stone-400"} />
              <span className="capitalize">{tag}</span>
              <span className={`text-[9px] ml-1 px-1.5 py-0.2 rounded-full ${
                isHighlighted 
                  ? "bg-stone-950/20 text-stone-950" 
                  : "bg-stone-100 text-stone-400 group-hover:bg-amber-100 group-hover:text-amber-700"
              }`}>
                {count}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
