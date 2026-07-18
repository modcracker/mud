"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Zap, TrendingUp, ShieldCheck, Search, Tag, X, Filter } from "lucide-react";
import { CATEGORIES, Category } from "@/lib/data";
import { CategoryIllustration } from "@/components/category-illustration";
import ArchiveNavigation from "@/components/archive-navigation";

// Define the mapping of category slugs to their respective tags
const CATEGORY_TAGS: Record<string, ("Geological" | "Educational" | "Conservation")[]> = {
  "dead-sea-mud": ["Geological", "Educational"],
  "mississippi-mud-pie": ["Educational"],
  "mud-run": ["Educational"],
  "mud-the-game": ["Educational"],
  "mudslinging": ["Educational"],
  "clear-as-mud": ["Educational"],
  "mud-architecture": ["Conservation", "Geological"],
  "mudlarking": ["Conservation", "Educational"],
  "mud-season": ["Geological", "Conservation"],
  "mud-tires": ["Geological", "Educational"],
};

export default function ResearchExplorer() {
  const [activeFilter, setActiveFilter] = useState<"Geological" | "Educational" | "Conservation" | null>(null);

  const toggleFilter = (filter: "Geological" | "Educational" | "Conservation") => {
    if (activeFilter === filter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter);
    }
  };

  const filteredCategories = CATEGORIES.filter((category) => {
    if (!activeFilter) return true;
    const tags = CATEGORY_TAGS[category.slug] || [];
    return tags.includes(activeFilter);
  });

  return (
    <>
      {/* Research Pillars as Interactive Filtering Cards */}
      <section className="bg-white py-16 px-6 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
              Interactive Navigation Hub
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-stone-900">
              Explore Our Three Core Pillars
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto text-sm">
              Click any of the pillars below to dynamically filter the research verticals and discover curated materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Geological Significance */}
            <button
              onClick={() => toggleFilter("Geological")}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 space-y-4 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                activeFilter === "Geological"
                  ? "bg-amber-50/50 border-amber-400 shadow-md ring-1 ring-amber-400"
                  : activeFilter !== null
                  ? "bg-stone-50/40 border-stone-150 opacity-50 hover:opacity-80"
                  : "bg-stone-50 border-stone-200/60 hover:bg-stone-100/50 hover:shadow-md hover:scale-[1.01]"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className={`inline-flex p-3 rounded-xl transition-colors ${
                  activeFilter === "Geological" ? "bg-amber-100 text-amber-800" : "bg-amber-50 text-amber-700"
                }`}>
                  <Zap size={20} />
                </span>
                <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                  activeFilter === "Geological" ? "bg-amber-200 text-amber-900" : "bg-stone-200 text-stone-600"
                }`}>
                  {activeFilter === "Geological" ? "Filter Active" : "Geological"}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-display text-stone-900 group-hover:text-amber-800 transition-colors">
                  Geological Significance
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Silt and clay represent the primal foundation of terrestrial soil life, river deltas, and land fertility across every continent.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>{activeFilter === "Geological" ? "Click to reset" : "Click to filter verticals"}</span>
                <ArrowRight size={12} className={`transition-transform duration-300 ${
                  activeFilter === "Geological" ? "rotate-90 text-amber-600" : "group-hover:translate-x-1"
                }`} />
              </div>
            </button>

            {/* Pillar 2: Cross-Disciplinary Archive */}
            <button
              onClick={() => toggleFilter("Educational")}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 space-y-4 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                activeFilter === "Educational"
                  ? "bg-emerald-50/50 border-emerald-400 shadow-md ring-1 ring-emerald-400"
                  : activeFilter !== null
                  ? "bg-stone-50/40 border-stone-150 opacity-50 hover:opacity-80"
                  : "bg-stone-50 border-stone-200/60 hover:bg-stone-100/50 hover:shadow-md hover:scale-[1.01]"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className={`inline-flex p-3 rounded-xl transition-colors ${
                  activeFilter === "Educational" ? "bg-emerald-100 text-emerald-800" : "bg-emerald-50 text-emerald-700"
                }`}>
                  <TrendingUp size={20} />
                </span>
                <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                  activeFilter === "Educational" ? "bg-emerald-200 text-emerald-900" : "bg-stone-200 text-stone-600"
                }`}>
                  {activeFilter === "Educational" ? "Filter Active" : "Educational"}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-display text-stone-900 group-hover:text-emerald-800 transition-colors">
                  Cross-Disciplinary Archive
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Documenting earthen subjects spanning mineral-rich therapeutic skincare, ancient rammed earth building techniques, and text-based virtual worlds.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>{activeFilter === "Educational" ? "Click to reset" : "Click to filter verticals"}</span>
                <ArrowRight size={12} className={`transition-transform duration-300 ${
                  activeFilter === "Educational" ? "rotate-90 text-emerald-600" : "group-hover:translate-x-1"
                }`} />
              </div>
            </button>

            {/* Pillar 3: Active Ecosystem Preservation */}
            <button
              onClick={() => toggleFilter("Conservation")}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 space-y-4 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                activeFilter === "Conservation"
                  ? "bg-indigo-50/50 border-indigo-400 shadow-md ring-1 ring-indigo-400"
                  : activeFilter !== null
                  ? "bg-stone-50/40 border-stone-150 opacity-50 hover:opacity-80"
                  : "bg-stone-50 border-stone-200/60 hover:bg-stone-100/50 hover:shadow-md hover:scale-[1.01]"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className={`inline-flex p-3 rounded-xl transition-colors ${
                  activeFilter === "Conservation" ? "bg-indigo-100 text-indigo-800" : "bg-indigo-50 text-indigo-700"
                }`}>
                  <ShieldCheck size={20} />
                </span>
                <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                  activeFilter === "Conservation" ? "bg-indigo-200 text-indigo-900" : "bg-stone-200 text-stone-600"
                }`}>
                  {activeFilter === "Conservation" ? "Filter Active" : "Conservation"}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-display text-stone-900 group-hover:text-indigo-800 transition-colors">
                  Active Ecosystem Preservation
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Translating digital scholarship into real-world action by allocating administrative resources to wetlands and soil preservation projects.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>{activeFilter === "Conservation" ? "Click to reset" : "Click to filter verticals"}</span>
                <ArrowRight size={12} className={`transition-transform duration-300 ${
                  activeFilter === "Conservation" ? "rotate-90 text-indigo-600" : "group-hover:translate-x-1"
                }`} />
              </div>
            </button>

          </div>
        </div>
      </section>

      {/* Industry Category Cards Section */}
      <section id="categories" className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-stone-900">
                Ten Research Verticals
              </h2>
              <p className="text-stone-600 max-w-2xl text-base font-sans">
                Explore the complete digital encyclopedia of earthen sciences, history, architecture, and technology.
              </p>
            </div>
            <div className="text-xs font-mono text-stone-400 flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 self-start md:self-end">
              <Search size={12} /> database status: 38 nodes verified
            </div>
          </div>

          {/* Filtering Status Bar & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-stone-100/50 border border-stone-200/60 p-4 rounded-2xl">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                <Filter size={13} className="text-stone-400" /> Filter State:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setActiveFilter(null)}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                    activeFilter === null
                      ? "bg-stone-850 text-white shadow-sm"
                      : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  All Verticals
                </button>
                {(["Geological", "Educational", "Conservation"] as const).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleFilter(tag)}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-all inline-flex items-center gap-1 ${
                      activeFilter === tag
                        ? tag === "Geological"
                          ? "bg-amber-600 text-white shadow-sm"
                          : tag === "Educational"
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-indigo-600 text-white shadow-sm"
                        : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    <Tag size={10} />
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {activeFilter && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-500 font-mono">
                  Showing <strong>{filteredCategories.length}</strong> of 10 matches
                </span>
                <button
                  onClick={() => setActiveFilter(null)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-lg transition-all"
                >
                  Clear Filter <X size={12} />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Quick Navigation Menu for Research Archive */}
          <ArchiveNavigation />

          {/* Staggered asymmetric grid layout with Framer Motion layout animations */}
          <motion.div 
            layout="position"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCategories.map((category, index) => {
                // Determine card dimensions and proportions for asymmetric layout based on filtered order
                const isLargeCard = index % 4 === 0;
                const isTallImage = index % 3 === 0;
                const tags = CATEGORY_TAGS[category.slug] || [];

                return (
                  <motion.div
                    key={category.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className={`${isLargeCard ? "md:col-span-2" : "col-span-1"}`}
                  >
                    <Link
                      id={`category-card-${category.slug}`}
                      href={`/mud/${category.slug}`}
                      className="group relative bg-white border border-stone-200 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-stone-300 flex flex-col justify-between h-full"
                    >
                      <div className="p-6 md:p-8 space-y-6 flex-grow flex flex-col justify-between">
                        <div>
                          {/* Badges/Tags Header Block */}
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${category.theme.badge}`}>
                              {category.subtitle}
                            </span>
                            {tags.map((t) => (
                              <span
                                key={t}
                                className={`inline-flex items-center gap-1 text-[9px] font-mono border px-2 py-0.5 rounded-md transition-colors duration-300 ${
                                  activeFilter === t
                                    ? t === "Geological"
                                      ? "bg-amber-100 text-amber-800 border-amber-300 font-bold"
                                      : t === "Educational"
                                      ? "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold"
                                      : "bg-indigo-100 text-indigo-800 border-indigo-300 font-bold"
                                    : "bg-stone-100 text-stone-500 border-stone-200"
                                }`}
                              >
                                <Tag size={8} /> {t}
                              </span>
                            ))}
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">
                            {category.title}
                          </h3>
                          
                          {/* Teaser */}
                          <p className="text-stone-600 text-sm leading-relaxed mb-6">
                            {category.shortTeaser}
                          </p>
                        </div>

                        {/* Category Illustration Block */}
                        <div className={`relative w-full rounded-2xl overflow-hidden border border-stone-200/60 shadow-inner ${
                          isTallImage ? "aspect-[4/3]" : "aspect-[16/10]"
                        }`}>
                          <CategoryIllustration slug={category.slug} seed={`${category.slug}-main`} theme={category.theme} isLargeCard={isLargeCard} />
                        </div>
                      </div>

                      {/* Card Action footer bar */}
                      <div className="px-6 md:px-8 py-5 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                        <span className="text-xs font-mono text-stone-400">
                          /mud/{category.slug}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${category.theme.accent}`}
                        >
                          Explore Archive <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </>
  );
}
