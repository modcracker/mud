"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Compass, ChevronDown, ChevronUp, BookOpen, FileText } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import { DETAIL_PAGES } from "@/lib/detail-data";
import { motion, AnimatePresence } from "motion/react";

export default function ArchiveNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const handleCategoryClick = (slug: string) => {
    setIsOpen(false);
    // Locate category card and scroll to it smoothly
    const element = document.getElementById(`category-card-${slug}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="no-print relative w-full mb-8" id="archive-mobile-quick-navigation">
      {/* Mobile Swipeable List for ultra-fast access */}
      <div className="flex md:hidden items-center justify-between gap-3 bg-stone-100 p-2 rounded-xl border border-stone-200">
        <div className="flex items-center gap-1.5 px-2 text-stone-500 font-medium text-xs font-mono uppercase tracking-wider">
          <Compass size={13} className="text-amber-600" />
          <span>Quick Jump:</span>
        </div>
        
        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-3 py-1.5 rounded-lg text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
        >
          {isOpen ? <X size={12} /> : <Menu size={12} />}
          <span>Verticals</span>
        </button>
      </div>

      {/* Horizontal scrolling chips below header for quick mobile swiping */}
      <div className="flex md:hidden overflow-x-auto scrollbar-none gap-2 py-2 mt-1 -mx-2 px-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleCategoryClick(cat.slug)}
            className="flex-shrink-0 bg-white border border-stone-200 hover:border-amber-400 text-stone-700 hover:text-amber-800 text-[11px] font-medium px-3 py-1 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer"
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Dropdown overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click-away backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-12 mt-1 bg-white border border-stone-200 rounded-2xl shadow-xl p-4 z-50 md:hidden max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-100">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Select a Vertical</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-stone-400 hover:text-stone-700 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              <nav className="grid grid-cols-1 gap-1">
                {CATEGORIES.map((cat) => {
                  const isExpanded = expandedSlug === cat.slug;
                  const catSubpages = cat.subpages || [];

                  return (
                    <div key={cat.slug} className="border-b border-stone-100 last:border-none py-1">
                      {/* Accordion Row Header */}
                      <div className="flex items-center justify-between w-full">
                        <button
                          onClick={() => setExpandedSlug(isExpanded ? null : cat.slug)}
                          className="flex-1 flex items-center justify-between text-left p-2 rounded-xl hover:bg-stone-50 transition-colors group text-sm font-semibold text-stone-800"
                        >
                          <div className="flex items-center gap-2">
                            <span className={`inline-flex w-2 h-2 rounded-full ${
                              cat.theme.primary === "teal" ? "bg-teal-500" :
                              cat.theme.primary === "emerald" ? "bg-emerald-500" :
                              cat.theme.primary === "indigo" ? "bg-indigo-500" :
                              cat.theme.primary === "amber" ? "bg-amber-500" :
                              "bg-amber-500"
                            }`} />
                            <span className="truncate max-w-[200px]">{cat.title}</span>
                          </div>
                          <span className="p-1 rounded text-stone-400 group-hover:text-stone-700 transition-colors">
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </span>
                        </button>

                        {/* Scroll Shortcut */}
                        <button
                          onClick={() => handleCategoryClick(cat.slug)}
                          title="Scroll to section"
                          className="p-2 text-stone-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all cursor-pointer mr-1"
                        >
                          <Compass size={14} />
                        </button>
                      </div>

                      {/* Accordion Expanded Quick-Jump Area */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="overflow-hidden bg-stone-50/70 rounded-xl mx-1 mb-2 border border-stone-200/50"
                          >
                            <div className="p-3 space-y-3 text-xs">
                              {/* Destination Shortlinks */}
                              <div className="grid grid-cols-2 gap-2">
                                <button
                                  onClick={() => handleCategoryClick(cat.slug)}
                                  className="flex items-center justify-center gap-1.5 p-2 bg-white border border-stone-200 hover:border-amber-400/50 hover:bg-amber-50/20 text-stone-700 rounded-lg font-medium transition-colors text-[10px]"
                                >
                                  <Compass size={11} className="text-amber-500" />
                                  <span>Scroll to Section</span>
                                </button>
                                <Link
                                  href={`/mud/${cat.slug}`}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center justify-center gap-1.5 p-2 bg-white border border-stone-200 hover:border-amber-400/50 hover:bg-amber-50/20 text-stone-700 rounded-lg font-medium transition-colors text-[10px]"
                                >
                                  <ArrowRight size={11} className="text-amber-500" />
                                  <span>Open Hub Page</span>
                                </Link>
                              </div>

                              {/* Hierarchical Subpage Listings */}
                              {catSubpages.length > 0 && (
                                <div className="space-y-1.5">
                                  <span className="text-[9px] font-mono font-bold text-stone-400 uppercase tracking-wider block">
                                    Quick-Jump Research Papers
                                  </span>
                                  <div className="space-y-1">
                                    {catSubpages.map((sub) => {
                                      const matchingDetails = DETAIL_PAGES.filter(
                                        (det) => det.parentCategorySlug === cat.slug && det.parentSubpageSlug === sub.slug
                                      );

                                      return (
                                        <div key={sub.slug} className="space-y-1 border-l border-stone-200 pl-2 ml-1">
                                          {/* Subpage Link */}
                                          <Link
                                            href={`/mud/${cat.slug}/${sub.slug}`}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-start gap-1.5 py-1 text-stone-600 hover:text-amber-800 transition-colors font-medium text-xs leading-tight"
                                          >
                                            <BookOpen size={11} className="text-stone-400 mt-0.5 flex-shrink-0" />
                                            <span>{sub.title}</span>
                                          </Link>

                                          {/* Detail Page Link */}
                                          {matchingDetails.map((det) => (
                                            <Link
                                              key={det.slug}
                                              href={`/mud/${cat.slug}/${sub.slug}/${det.slug}`}
                                              onClick={() => setIsOpen(false)}
                                              className="flex items-start gap-1.5 pl-4 py-0.5 text-stone-500 hover:text-amber-800 transition-colors font-sans text-[11px] italic leading-snug"
                                            >
                                              <FileText size={10} className="text-stone-300 mt-0.5 flex-shrink-0" />
                                              <span>{det.title}</span>
                                            </Link>
                                          ))}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
