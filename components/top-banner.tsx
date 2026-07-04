"use client";

import { useState } from "react";
import { ExternalLink, X, Tag } from "lucide-react";
import { GODADDY_URL } from "@/lib/config";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-50 w-full bg-amber-950 border-b border-amber-800 text-amber-50 px-4 py-2.5 shadow-md bg-opacity-95">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center bg-amber-500 text-amber-950 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
            <Tag size={12} className="mr-1 inline" /> For Sale
          </span>
          <span className="font-medium tracking-tight">
            <span className="font-bold text-amber-400">mud.cc</span> is available for acquisition. Own the ultimate brandable 3-letter domain.
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <a
            href={GODADDY_URL}
            target="_blank"
            rel="noopener sponsored"
            className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-amber-950 font-semibold px-4 py-1.5 rounded-md text-xs tracking-tight transition-all shadow-sm hover:shadow-amber-500/20 active:scale-95"
          >
            Buy on GoDaddy <ExternalLink size={12} />
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-amber-300/70 hover:text-amber-100 p-1 rounded hover:bg-amber-900/40 transition-colors"
            title="Dismiss banner"
            aria-label="Dismiss banner"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
