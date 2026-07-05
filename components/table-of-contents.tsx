"use client";

import { useEffect, useState, useRef } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const isClickingRef = useRef<boolean>(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    // Set initial active ID
    setActiveId(items[0].id);

    const handleScroll = () => {
      if (isClickingRef.current) return;

      const scrollPosition = window.scrollY + 160; // offset to activate heading a bit earlier

      // Find the heading that is closest to but above the scroll position
      let currentActiveId = items[0].id;

      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= offsetTop) {
            currentActiveId = item.id;
          } else {
            break; // Headings are sequential, stop once we exceed scrollPosition
          }
        }
      }

      setActiveId(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      isClickingRef.current = true;
      setActiveId(id);

      // Scroll to the element, accounting for headers/padding with scroll-margin-top
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = setTimeout(() => {
        isClickingRef.current = false;
      }, 800); // Lock scroll listener temporarily during smooth scroll transition
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-md space-y-4">
      <div className="space-y-1">
        <span className="text-[9px] text-amber-600 font-mono font-bold uppercase tracking-widest block">
          NAVIGATION INDEX
        </span>
        <h3 className="text-base font-bold font-display text-stone-900 flex items-center gap-2">
          <List size={16} className="text-amber-600" /> Table of Contents
        </h3>
      </div>

      <nav className="relative pl-3 border-l border-stone-200/80 space-y-3 text-xs">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`block transition-all duration-300 font-sans leading-relaxed text-left relative -left-[14px] pl-3 border-l-2 py-0.5 ${
                isActive
                  ? "text-amber-800 border-amber-500 font-bold translate-x-1"
                  : "text-stone-500 border-transparent hover:text-stone-900 hover:border-stone-300"
              }`}
            >
              {item.text}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
