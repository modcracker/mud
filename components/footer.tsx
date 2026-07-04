"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Fingerprint, Copy, Check, ExternalLink, HelpCircle, RefreshCw } from "lucide-react";
import { GODADDY_URL, EMAIL_PARTS } from "@/lib/config";
import { CATEGORIES } from "@/lib/data";
import { DETAIL_PAGES } from "@/lib/detail-data";

interface Card {
  id: number;
  symbol: string;
  name: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const PUZZLE_ITEMS = [
  { symbol: "🥾", name: "muddy-boots" },
  { symbol: "🐷", name: "mud-pig" },
  { symbol: "🧱", name: "adobe-brick" },
  { symbol: "🚜", name: "off-roader" },
];

export default function Footer() {
  const [isPuzzleOpen, setIsPuzzleOpen] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [isSolved, setIsSolved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");

  // Initialize and shuffle puzzle
  const initPuzzle = () => {
    const doubled = [...PUZZLE_ITEMS, ...PUZZLE_ITEMS];
    const shuffled = doubled
      .map((item, idx) => ({
        id: idx,
        symbol: item.symbol,
        name: item.name,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);
    
    setCards(shuffled);
    setSelectedCards([]);
    setIsSolved(false);
    setCopied(false);
    setEmailAddress("");
  };

  // Handle card click
  const handleCardClick = (index: number) => {
    if (
      cards[index].isFlipped ||
      cards[index].isMatched ||
      selectedCards.length >= 2 ||
      isSolved
    ) {
      return;
    }

    const updatedCards = [...cards];
    updatedCards[index].isFlipped = true;
    setCards(updatedCards);

    const newSelected = [...selectedCards, index];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      const [firstIdx, secondIdx] = newSelected;
      if (cards[firstIdx].name === cards[secondIdx].name) {
        // Match!
        setTimeout(() => {
          const matchedCards = [...updatedCards];
          matchedCards[firstIdx].isMatched = true;
          matchedCards[secondIdx].isMatched = true;
          setCards(matchedCards);
          setSelectedCards([]);

          // Check if solved
          const allMatched = matchedCards.every((c) => c.isMatched);
          if (allMatched) {
            setIsSolved(true);
            // Assemble munged email dynamically client-side only
            setEmailAddress(`${EMAIL_PARTS.user}@${EMAIL_PARTS.domain}.${EMAIL_PARTS.tld}`);
          }
        }, 400);
      } else {
        // No match - flip back
        setTimeout(() => {
          const flippedBackCards = [...updatedCards];
          flippedBackCards[firstIdx].isFlipped = false;
          flippedBackCards[secondIdx].isFlipped = false;
          setCards(flippedBackCards);
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  const copyToClipboard = () => {
    if (emailAddress) {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-4">
          <Link href="/" className="text-2xl font-bold font-display text-amber-500 tracking-tight flex items-center gap-1.5 hover:text-amber-400 transition-colors">
            mud<span className="text-zinc-500">.cc</span>
          </Link>
          <p className="text-sm text-zinc-500 leading-relaxed">
            A premium, ultra-flexible three-letter domain name indexing multi-industry relevance across wellness, food, sports, history, politics, and technology.
          </p>
          <div className="pt-2">
            <a
              href={GODADDY_URL}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center gap-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 px-4 py-2 rounded-lg text-xs font-semibold tracking-tight transition-all"
            >
              Acquire mud.cc on GoDaddy <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Directory Links 1-5 */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Wellness & Culture</h4>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.slice(0, 5).map((cat) => (
              <li key={cat.slug}>
                <Link href={`/mud/${cat.slug}`} className="hover:text-zinc-200 transition-colors block">
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Directory Links 6-10 */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Science & Industry</h4>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.slice(5).map((cat) => (
              <li key={cat.slug}>
                <Link href={`/mud/${cat.slug}`} className="hover:text-zinc-200 transition-colors block">
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Schema Links & Legal */}
        <div className="space-y-4 text-sm text-zinc-500">
          <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Domain Asset</h4>
          <div className="space-y-2.5">
            <div>
              <span className="block text-xs font-semibold text-zinc-400">Registry Status:</span>
              <span className="text-emerald-500 font-medium">Available for Transfer</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-zinc-400">SEO Footprint:</span>
              <span className="text-zinc-400">38+ Context-Dense Index Pages</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-zinc-400">Authority Network:</span>
              <a 
                href="https://bridge.ws" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-500 hover:text-amber-500 transition-colors"
              >
                bridge.ws
              </a>
            </div>
            <div className="text-xs pt-1 border-t border-zinc-900 leading-relaxed">
              Domain listed securely through escrow. Instantly swap DNS upon completion.
            </div>
            <div className="pt-2 border-t border-zinc-900 space-y-1.5 text-xs">
              <Link href="/philanthropy" className="block text-zinc-400 hover:text-amber-500 transition-colors font-medium">
                ♥ Causes We Care About
              </Link>
              <Link href="/contact" className="block text-zinc-400 hover:text-amber-500 transition-colors font-medium">
                ✉ Contact Registry Admin
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Deep Registry Sitemap */}
      <div className="max-w-7xl mx-auto mt-16 pt-12 border-t border-zinc-900">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Complete Registry Directory &amp; Sitemap
            </h3>
            <p className="text-xs text-zinc-500">
              A comprehensive index of all context-dense pages, semantic hubs, and technical deep-dives mapped across the mud.cc network.
            </p>
          </div>
          <span className="self-start sm:self-center text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800">
            3-Tier Architecture Index
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {Array.from({ length: 5 }).map((_, colIdx) => {
            const cat1 = CATEGORIES[colIdx];
            const cat2 = CATEGORIES[colIdx + 5];
            const colCats = [cat1, cat2].filter(Boolean);

            return (
              <div key={colIdx} className="space-y-8">
                {colCats.map((cat) => (
                  <div key={cat.slug} className="space-y-3">
                    <Link
                      href={`/mud/${cat.slug}`}
                      className="block text-xs font-bold text-zinc-300 hover:text-amber-500 uppercase tracking-wider transition-colors"
                    >
                      {cat.title}
                    </Link>
                    <ul className="space-y-2 border-l border-zinc-800 pl-3">
                      {cat.subpages.map((sub) => {
                        const matchingDetails = DETAIL_PAGES.filter(
                          (det) =>
                            det.parentCategorySlug === cat.slug &&
                            det.parentSubpageSlug === sub.slug
                        );

                        return (
                          <li key={sub.slug} className="space-y-1">
                            <Link
                              href={`/mud/${cat.slug}/${sub.slug}`}
                              className="block text-xs text-zinc-500 hover:text-zinc-200 transition-colors leading-tight"
                            >
                              {sub.title}
                            </Link>
                            {matchingDetails.length > 0 && (
                              <ul className="space-y-1 pl-3 border-l border-zinc-900 mt-1">
                                {matchingDetails.map((det) => (
                                  <li key={det.slug}>
                                    <Link
                                      href={`/mud/${cat.slug}/${sub.slug}/${det.slug}`}
                                      className="block text-[10px] text-zinc-600 hover:text-amber-400/90 transition-colors leading-tight font-sans"
                                    >
                                      • {det.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <div>
          © {new Date().getFullYear()} mud.cc. All rights reserved. Managed by domain administrative team.
        </div>
        
        {/* Secret Contact Area Trigger */}
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-zinc-400 transition-colors">Sitemap</Link>
          <span className="text-zinc-800">|</span>
          <a 
            href="https://bridge.ws" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-zinc-400 transition-colors"
          >
            bridge.ws
          </a>
          <span className="text-zinc-800">|</span>
          <button
            onClick={() => {
              initPuzzle();
              setIsPuzzleOpen(true);
            }}
            className="group inline-flex items-center gap-1.5 text-zinc-700 hover:text-amber-500 transition-all font-mono tracking-wider focus:outline-none"
            title="Secure administrative contact"
          >
            <Fingerprint size={16} className="text-zinc-800 group-hover:text-amber-600 transition-colors animate-pulse" />
            <span className="border-b border-dashed border-zinc-800 group-hover:border-amber-600">contact</span>
          </button>
        </div>
      </div>

      {/* Interactive Mud Memory Puzzle Overlay */}
      {isPuzzleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl text-center">
            
            <button
              onClick={() => setIsPuzzleOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors font-mono text-lg"
            >
              ×
            </button>

            <div className="mb-4">
              <span className="inline-flex items-center justify-center p-2.5 bg-amber-500/10 rounded-full text-amber-500 mb-2">
                <Fingerprint size={24} />
              </span>
              <h3 className="text-lg font-bold font-display text-zinc-100">Prove You Are Human</h3>
              <p className="text-xs text-zinc-500 mt-1 max-w-[280px] mx-auto">
                Flip the tiles to match the mud-themed pairs and reveal our direct admin email.
              </p>
            </div>

            {/* Grid of cards */}
            <div className="grid grid-cols-4 gap-2 my-6">
              {cards.map((card, idx) => {
                const isOpen = card.isFlipped || card.isMatched;
                return (
                  <button
                    key={card.id}
                    onClick={() => handleCardClick(idx)}
                    className={`aspect-square rounded-xl flex items-center justify-center text-2xl transition-all duration-300 transform border select-none ${
                      isOpen
                        ? "bg-amber-950/40 border-amber-500/40 text-amber-200 rotate-180"
                        : "bg-zinc-800 hover:bg-zinc-700/80 border-zinc-700 text-zinc-600 hover:scale-105 active:scale-95"
                    }`}
                  >
                    <span className={isOpen ? "rotate-180" : "opacity-0"}>
                      {card.symbol}
                    </span>
                    {!isOpen && <HelpCircle size={16} className="text-zinc-600" />}
                  </button>
                );
              })}
            </div>

            {/* Solved state / email revealed */}
            {isSolved ? (
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 text-sm animate-fade-in">
                <p className="text-xs text-emerald-500 font-mono mb-1.5 font-bold uppercase tracking-widest">Email Unlocked</p>
                <div className="flex items-center justify-center gap-2 mt-2 bg-zinc-950 px-3 py-2 rounded-lg border border-zinc-800 select-all font-mono">
                  <span>{emailAddress}</span>
                  <button
                    onClick={copyToClipboard}
                    className="p-1 rounded hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-emerald-300"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
                {copied && <p className="text-[10px] text-emerald-500/80 mt-1 font-sans">Copied to clipboard!</p>}
              </div>
            ) : (
              <div className="flex items-center justify-between text-xs text-zinc-500 pt-1">
                <span>Select matching tiles</span>
                <button
                  onClick={initPuzzle}
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-colors font-mono"
                >
                  <RefreshCw size={10} /> Reset
                </button>
              </div>
            )}

            <button
              onClick={() => setIsPuzzleOpen(false)}
              className="mt-6 w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-xl text-xs font-semibold tracking-tight transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
