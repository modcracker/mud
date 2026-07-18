"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Search, Globe, FileText, ArrowRight, X, Command, Sparkles, Compass } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import { DETAIL_PAGES } from "@/lib/detail-data";
import { getTaxonomyListings } from "@/lib/taxonomy-data";
import { GODADDY_URL } from "@/lib/config";
import { motion, AnimatePresence } from "motion/react";

interface SearchItem {
  title: string;
  subtitle: string;
  description: string;
  type: "Category" | "Subpage" | "System" | "Deep-Dive" | "Scientific Node";
  url: string;
  categoryName: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const modalInputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // 1. Compile all searchable routes across 40+ pages
  const searchItems: SearchItem[] = [
    {
      title: "mud.cc Research Archive",
      subtitle: "Main Showcase",
      description: "An open-access digital archive compiling 10 distinct verticals of fine sediment, clay, and soil sciences.",
      type: "System",
      url: "/",
      categoryName: "Home",
    },
    {
      title: "Philanthropy & Conservation Initiatives",
      subtitle: "Environmental Action",
      description: "Our commitment to donate 10% of administrative resources to clean sand-filter wells and soil preservation programs.",
      type: "System",
      url: "/philanthropy",
      categoryName: "About",
    },
    {
      title: "Research Inquiry & Academic Contact",
      subtitle: "Human Verification Contact Portal",
      description: "Complete the secure human-verification puzzle to contact our administrative and research teams.",
      type: "System",
      url: "/contact",
      categoryName: "Contact",
    },
  ];

  CATEGORIES.forEach((cat) => {
    // Add category itself
    searchItems.push({
      title: cat.title,
      subtitle: cat.subtitle,
      description: cat.description,
      type: "Category",
      url: `/mud/${cat.slug}`,
      categoryName: cat.title,
    });

    // Add all of its subpages
    cat.subpages.forEach((sub) => {
      searchItems.push({
        title: sub.title,
        subtitle: cat.title,
        description: sub.description,
        type: "Subpage",
        url: `/mud/${cat.slug}/${sub.slug}`,
        categoryName: cat.title,
      });
    });
  });

  // Add all of its deep-dive details
  DETAIL_PAGES.forEach((page) => {
    const categoryName = CATEGORIES.find((c) => c.slug === page.parentCategorySlug)?.title || "Research";
    searchItems.push({
      title: page.title,
      subtitle: page.subtitle,
      description: page.description,
      type: "Deep-Dive",
      url: `/mud/${page.parentCategorySlug}/${page.parentSubpageSlug}/${page.slug}`,
      categoryName,
    });
  });

  // Add taxonomy listings
  getTaxonomyListings().forEach((entry) => {
    const categoryName = CATEGORIES.find((c) => c.slug === entry.category)?.title || "Taxonomy";
    searchItems.push({
      title: entry.title,
      subtitle: "Scientific Node Reference",
      description: entry.description,
      type: "Scientific Node",
      url: `/taxonomy/${entry.slug}`,
      categoryName,
    });
  });

  // Track scroll position to style header dynamically
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Filter logic based on query
  const getFilteredResults = () => {
    if (!searchQuery.trim()) return [];
    
    const queryWords = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
    
    return searchItems.filter((item) => {
      const matchText = `${item.title} ${item.subtitle} ${item.description} ${item.categoryName} ${item.type}`.toLowerCase();
      return queryWords.every((word) => matchText.includes(word));
    });
  };

  const filteredResults = getFilteredResults();

  // Handle hotkeys (CMD+K, CTRL+K, /) to trigger search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Pre-fill query from URL search parameters (Sitelinks Searchbox support)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");
    if (query) {
      const timer = setTimeout(() => {
        setSearchQuery(query);
        setIsOpen(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-focus input when modal opens & handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        modalInputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setSearchQuery("");
  };

  // Keyboard navigation inside search results
  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if (filteredResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredResults.length);
      // Scroll into view
      scrollActiveIntoView((activeIndex + 1) % filteredResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
      // Scroll into view
      scrollActiveIntoView((activeIndex - 1 + filteredResults.length) % filteredResults.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const targetItem = filteredResults[activeIndex];
      if (targetItem) {
        handleNavigate(targetItem.url);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      handleClose();
    }
  };

  const scrollActiveIntoView = (index: number) => {
    if (!resultsContainerRef.current) return;
    const container = resultsContainerRef.current;
    const items = container.querySelectorAll("[data-search-item]");
    const activeItem = items[index] as HTMLElement;
    
    if (activeItem) {
      const containerTop = container.scrollTop;
      const containerBottom = containerTop + container.clientHeight;
      const itemTop = activeItem.offsetTop;
      const itemBottom = itemTop + activeItem.clientHeight;

      if (itemTop < containerTop) {
        container.scrollTop = itemTop;
      } else if (itemBottom > containerBottom) {
        container.scrollTop = itemBottom - container.clientHeight;
      }
    }
  };

  const handleNavigate = (url: string) => {
    router.push(url);
    handleClose();
  };

  // Term Highlighter Helper
  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return <span>{text}</span>;
    const words = query.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return <span>{text}</span>;

    const escapedWords = words.map(w => w.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'));
    const regex = new RegExp(`(${escapedWords.join('|')})`, 'gi');
    
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) => 
          regex.test(part) ? (
            <mark key={i} className="bg-amber-100 text-amber-900 rounded-sm font-semibold px-0.5">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const featuredSearches = [
    { title: "Dead Sea Mud", query: "dead sea", subtitle: "Skincare & Wellness" },
    { title: "Mudlarking", query: "mudlarking", subtitle: "Hobby & History" },
    { title: "Mississippi Mud Pie", query: "pie", subtitle: "Cuisine & Baking" },
    { title: "Rammed Earth", query: "rammed", subtitle: "Sustainable Architecture" },
    { title: "Mud Runs", query: "runs", subtitle: "Extreme Sports" },
  ];

  return (
    <>
      {/* 1. Global Navigation Header */}
      <header
        className={`w-full z-40 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-stone-200/90 py-3 shadow-sm"
            : "bg-stone-50/70 backdrop-blur-sm border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold font-display tracking-tight text-stone-900 transition-colors group-hover:text-amber-600">
              mud<span className="text-amber-500">.cc</span>
            </span>
            <span className="hidden sm:inline-flex items-center text-[10px] font-bold tracking-wider uppercase bg-stone-100 text-stone-500 px-2 py-0.5 rounded border border-stone-200 group-hover:border-amber-200 group-hover:text-amber-700 transition-all">
              Archive
            </span>
          </Link>

          {/* Center search pill triggering overlay */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <button
              onClick={() => setIsOpen(true)}
              className="w-full flex items-center justify-between gap-3 bg-white hover:bg-stone-100/70 border border-stone-200 hover:border-stone-300 px-4 py-2 rounded-xl text-stone-400 text-sm tracking-tight text-left transition-all shadow-sm group"
            >
              <div className="flex items-center gap-2.5">
                <Search size={16} className="text-stone-400 group-hover:text-stone-600 transition-colors" />
                <span className="group-hover:text-stone-500 transition-colors">Search categories & subpages...</span>
              </div>
              <span className="inline-flex items-center gap-0.5 text-[10px] font-mono bg-stone-100 border border-stone-200 text-stone-400 rounded-md px-1.5 py-0.5">
                <Command size={10} />
                <span>K</span>
              </span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 sm:gap-4">
            <Link
              href="/philanthropy"
              className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors px-3 py-1.5 rounded-lg ${
                pathname === "/philanthropy"
                  ? "text-amber-800 bg-amber-50/50 font-bold"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              }`}
            >
              Philanthropy
            </Link>
            <Link
              href="/contact"
              className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors px-3 py-1.5 rounded-lg ${
                pathname === "/contact"
                  ? "text-amber-800 bg-amber-50/50 font-bold"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              }`}
            >
              Contact
            </Link>

            {/* Mobile Search button */}
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-stone-500 hover:text-stone-900 md:hidden hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Open Search"
            >
              <Search size={18} />
            </button>

            {/* Conservation support link */}
            <Link
              href="/philanthropy"
              className="hidden lg:inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-all"
            >
              Support Conservation <ArrowRight size={12} />
            </Link>
          </nav>
        </div>
      </header>

      {/* 2. Command Palette Overlay (Modal) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4">
            
            {/* Backdrop Fade-In */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm"
            />

            {/* Search Card Drop-Down */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white border border-stone-200 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh] relative z-10 font-sans"
              id="search-palette-modal"
            >
              {/* Search Box Header */}
              <div className="flex items-center gap-3 border-b border-stone-100 px-4 py-3.5 bg-stone-50">
                <Search size={18} className="text-stone-400" />
                <input
                  ref={modalInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setActiveIndex(0);
                  }}
                  onKeyDown={handleModalKeyDown}
                  placeholder="Type to search 40+ categories, hubs, and guides..."
                  className="w-full bg-transparent text-stone-800 placeholder-stone-400 text-sm font-sans focus:outline-none"
                />
                
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="p-1 rounded hover:bg-stone-200 text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    <X size={14} />
                  </button>
                )}
                
                <span className="inline-flex text-[10px] bg-stone-200 text-stone-500 px-2 py-0.5 rounded border border-stone-300 font-mono">
                  ESC
                </span>
              </div>

              {/* Search Content Body */}
              <div
                ref={resultsContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[50vh] scroll-smooth"
              >
                {/* Case A: Query is empty — Show helpful Quick Suggestions */}
                {!searchQuery.trim() && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5 mb-2.5">
                        <Sparkles size={12} className="text-amber-500" /> Featured Collections
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {featuredSearches.map((feat) => (
                          <button
                            key={feat.title}
                            onClick={() => {
                              setSearchQuery(feat.query);
                              modalInputRef.current?.focus();
                            }}
                            className="flex items-center justify-between text-left p-3 rounded-xl border border-stone-100 hover:bg-amber-50/40 hover:border-amber-200 transition-all group"
                          >
                            <div>
                              <span className="block text-xs font-semibold text-stone-800 group-hover:text-amber-950">
                                {feat.title}
                              </span>
                              <span className="block text-[10px] text-stone-400">
                                {feat.subtitle}
                              </span>
                            </div>
                            <ArrowRight size={12} className="text-stone-300 group-hover:text-amber-600 transform group-hover:translate-x-0.5 transition-all" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                      <h4 className="text-xs font-bold text-stone-500 mb-1 flex items-center gap-1.5">
                        <Compass size={12} className="text-stone-400" /> Search Tips
                      </h4>
                      <p className="text-[11px] text-stone-400 leading-relaxed font-sans">
                        Filter by any keyword such as <span className="font-semibold text-stone-600">spas</span>, <span className="font-semibold text-stone-600">baking</span>, <span className="font-semibold text-stone-600">history</span>, <span className="font-semibold text-stone-600">politics</span>, or <span className="font-semibold text-stone-600">building</span> to immediately uncover dynamic hubs and detailed analytical reports.
                      </p>
                    </div>
                  </div>
                )}

                {/* Case B: Has results */}
                {searchQuery.trim() && filteredResults.length > 0 && (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-stone-400 text-[10px] font-bold uppercase tracking-wider px-2 pb-2 mb-1 border-b border-stone-100">
                      <span>Matches</span>
                      <span>{filteredResults.length} found</span>
                    </div>

                    {filteredResults.map((item, index) => {
                      const isActive = index === activeIndex;
                      return (
                        <button
                          key={item.url}
                          data-search-item
                          onClick={() => handleNavigate(item.url)}
                          className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 border ${
                            isActive
                              ? "bg-amber-50/50 border-amber-300 shadow-sm"
                              : "border-transparent hover:bg-stone-50"
                          }`}
                          role="option"
                          aria-selected={isActive ? "true" : "false"}
                        >
                          <div
                            className={`p-2 rounded-lg mt-0.5 transition-colors ${
                              isActive ? "bg-amber-100 text-amber-700" : "bg-stone-100 text-stone-500"
                            }`}
                          >
                            {item.type === "Category" ? (
                              <Globe size={15} />
                            ) : item.type === "System" ? (
                              <Compass size={15} />
                            ) : item.type === "Deep-Dive" ? (
                              <Sparkles size={15} />
                            ) : item.type === "Scientific Node" ? (
                              <Compass size={15} />
                            ) : (
                              <FileText size={15} />
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-baseline gap-x-2">
                              <span className="text-sm font-bold text-stone-800 leading-snug">
                                {highlightMatch(item.title, searchQuery)}
                              </span>
                              
                              <span className="text-[10px] font-semibold text-stone-400 capitalize px-1.5 py-0.5 bg-stone-100 rounded border border-stone-200">
                                {item.type}
                              </span>
                            </div>

                            {(item.type === "Subpage" || item.type === "Deep-Dive" || item.type === "Scientific Node") && (
                              <span className="block text-[10px] font-bold text-amber-600 uppercase tracking-tight mt-0.5">
                                in {item.categoryName}
                              </span>
                            )}

                            <p className="text-xs text-stone-500 line-clamp-1 mt-1 leading-normal">
                              {highlightMatch(item.description, searchQuery)}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Case C: Active query but no results */}
                {searchQuery.trim() && filteredResults.length === 0 && (
                  <div className="py-12 text-center max-w-xs mx-auto space-y-2">
                    <div className="inline-flex p-3 bg-stone-50 border border-stone-100 rounded-full text-stone-400">
                      <Search size={22} />
                    </div>
                    <h4 className="text-sm font-bold text-stone-700">
                      No results for &ldquo;{searchQuery}&rdquo;
                    </h4>
                    <p className="text-xs text-stone-400 leading-relaxed font-sans">
                      Try refining your query or search general categories like <span className="font-semibold text-stone-600">Dead Sea</span>, <span className="font-semibold text-stone-600">biking</span>, or <span className="font-semibold text-stone-600">cuisine</span>.
                    </p>
                  </div>
                )}
              </div>

              {/* Keyboard Instruction Footer */}
              <div className="px-4 py-2 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400 font-mono">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="border border-stone-300 bg-white px-1 py-0.5 rounded">↓↑</span> Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="border border-stone-300 bg-white px-1 py-0.5 rounded">⏎</span> Select
                  </span>
                </div>
                <span>ESC to close</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
