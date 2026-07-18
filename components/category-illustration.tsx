"use client";

import React from "react";

interface CategoryIllustrationProps {
  slug: string;
  theme: {
    primary: string;
    bg: string;
    text: string;
    border: string;
    accent: string;
  };
  isLargeCard?: boolean;
  seed?: string;
}

export function CategoryIllustration({ slug, theme, seed }: CategoryIllustrationProps) {
  // Generate deterministic seed values for making every card illustration completely unique
  const getSeedVals = () => {
    const activeSeed = seed || slug;
    if (!activeSeed) return null;
    let hash = 0;
    for (let i = 0; i < activeSeed.length; i++) {
      hash = (hash << 5) - hash + activeSeed.charCodeAt(i);
      hash |= 0;
    }
    const r = (offset: number) => {
      const val = Math.abs(Math.sin(hash + offset));
      return Math.round(val * 10000) / 10000;
    };
    return {
      r1: r(1),
      r2: r(2),
      r3: r(3),
      r4: r(4),
      r5: r(5),
      r6: r(6),
      r7: r(7),
      r8: r(8),
      r9: r(9),
    };
  };

  const seedVals = getSeedVals();

  // Resolve colors based on primary color mapping for exquisite consistency
  const colorMap: Record<string, { line: string; fill: string; accent: string; bgClass: string }> = {
    teal: {
      line: "stroke-teal-950",
      fill: "fill-teal-600/15",
      accent: "fill-teal-500",
      bgClass: "bg-teal-50/60"
    },
    amber: {
      line: "stroke-amber-950",
      fill: "fill-amber-600/15",
      accent: "fill-amber-500",
      bgClass: "bg-amber-50/60"
    },
    orange: {
      line: "stroke-orange-950",
      fill: "fill-orange-600/15",
      accent: "fill-orange-500",
      bgClass: "bg-orange-50/60"
    },
    emerald: {
      line: "stroke-emerald-950",
      fill: "fill-emerald-600/15",
      accent: "fill-emerald-500",
      bgClass: "bg-emerald-50/60"
    },
    red: {
      line: "stroke-red-950",
      fill: "fill-red-600/15",
      accent: "fill-red-500",
      bgClass: "bg-red-50/60"
    },
    indigo: {
      line: "stroke-indigo-950",
      fill: "fill-indigo-600/15",
      accent: "fill-indigo-500",
      bgClass: "bg-indigo-50/60"
    },
    stone: {
      line: "stroke-stone-950",
      fill: "fill-stone-600/15",
      accent: "fill-stone-500",
      bgClass: "bg-stone-50/60"
    },
    cyan: {
      line: "stroke-cyan-950",
      fill: "fill-cyan-600/15",
      accent: "fill-cyan-500",
      bgClass: "bg-cyan-50/60"
    },
    lime: {
      line: "stroke-lime-950",
      fill: "fill-lime-600/15",
      accent: "fill-lime-500",
      bgClass: "bg-lime-50/60"
    },
    zinc: {
      line: "stroke-zinc-950",
      fill: "fill-zinc-600/15",
      accent: "fill-zinc-500",
      bgClass: "bg-zinc-100"
    }
  };

  const resolved = colorMap[theme.primary] || {
    line: "stroke-stone-900",
    fill: "fill-stone-600/15",
    accent: "fill-stone-500",
    bgClass: "bg-stone-50/60"
  };

  // Base SVG stroke and fill styling
  const lineProps = {
    strokeWidth: "1.75",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: `${resolved.line} fill-none`
  };

  const accentProps = {
    className: `${resolved.accent}`
  };

  const fillProps = {
    className: `${resolved.fill}`
  };

  // Switch to render corresponding detailed SVG illustration with extensive seed-based visual differentiation
  const renderSvg = () => {
    // Determine a deterministic variant index (0, 1, or 2) if seedVals exists
    const variant = seedVals ? Math.floor(seedVals.r1 * 3) : 0;

    switch (slug) {
      case "dead-sea-mud": {
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Ambient background drops */}
            <circle cx={seedVals ? 30 + seedVals.r2 * 30 : 45} cy={seedVals ? 25 + seedVals.r3 * 20 : 35} r="14" {...fillProps} className={`${resolved.fill} opacity-60`} />
            <circle cx={seedVals ? 140 + seedVals.r4 * 30 : 155} cy={seedVals ? 75 + seedVals.r5 * 20 : 85} r="18" {...fillProps} className={`${resolved.fill} opacity-60`} />
            
            {/* Therapeutic mud mud pool / mud contours */}
            <path d={`M25,85 C55,${seedVals ? 70 + seedVals.r6 * 10 : 75} 75,${seedVals ? 90 + seedVals.r7 * 10 : 95} 105,85 C135,${seedVals ? 70 + seedVals.r8 * 10 : 75} 145,${seedVals ? 90 + seedVals.r9 * 10 : 95} 175,85 C185,81 190,92 190,100 L10,100 C10,92 15,81 25,85 Z`} {...fillProps} />
            <path d={`M25,85 C55,${seedVals ? 70 + seedVals.r6 * 10 : 75} 75,${seedVals ? 90 + seedVals.r7 * 10 : 95} 105,85 C135,${seedVals ? 70 + seedVals.r8 * 10 : 75} 145,${seedVals ? 90 + seedVals.r9 * 10 : 95} 175,85`} {...lineProps} />
            <path d="M35,92 C65,85 85,100 115,92 C145,85 155,98 165,92" {...lineProps} strokeDasharray="3 4" />

            {/* Deterministic Container Style */}
            {variant === 0 ? (
              <>
                {/* Variant 0: High-end cylindrical cosmetic jar */}
                <rect x="75" y="35" width="50" height="35" rx="6" {...fillProps} />
                <rect x="75" y="35" width="50" height="35" rx="6" {...lineProps} />
                <rect x="70" y="27" width="60" height="8" rx="3" {...lineProps} className={`${resolved.line} fill-white`} />
              </>
            ) : variant === 1 ? (
              <>
                {/* Variant 1: Organic round elixir flask */}
                <circle cx="100" cy="55" r="21" {...fillProps} />
                <circle cx="100" cy="55" r="21" {...lineProps} />
                <rect x="91" y="26" width="18" height="10" rx="2" {...lineProps} className={`${resolved.line} fill-white`} />
                <line x1="88" y1="26" x2="112" y2="26" {...lineProps} />
              </>
            ) : (
              <>
                {/* Variant 2: Ancient wide-mouth sediment pot / crucible */}
                <path d="M72,38 L128,38 L122,72 L78,72 Z" {...fillProps} />
                <path d="M72,38 L128,38 L122,72 L78,72 Z" {...lineProps} />
                <rect x="68" y="32" width="64" height="6" rx="2.5" {...lineProps} className={`${resolved.line} fill-white`} />
                <line x1="78" y1="52" x2="122" y2="52" {...lineProps} strokeDasharray="2 3" />
              </>
            )}
            
            {/* Concentric botanical leaf/fern branches (pure elegant line-art) */}
            <path d="M145,25 Q135,45 155,65" {...lineProps} />
            <path d="M145,25 Q138,28 136,33" {...lineProps} />
            <path d="M141,34 Q132,38 131,43" {...lineProps} />
            <path d="M138,44 Q128,49 128,54" {...lineProps} />
            <path d="M148,32 Q156,29 158,24" {...lineProps} />
            <path d="M151,42 Q160,39 161,34" {...lineProps} />
            <path d="M154,51 Q163,48 163,43" {...lineProps} />

            {/* Radiant skincare dropper details */}
            <path d="M100,52 C100,56 97,58 97,62 C97,65 100,68 100,68 C100,68 103,65 103,62 C103,58 100,52 100,52 Z" {...accentProps} />
            <circle cx="100" cy="18" r="3" {...accentProps} />
          </svg>
        );
      }
 
      case "mississippi-mud-pie": {
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Subtle background steam/aroma waves */}
            <path d={`M${seedVals ? 85 + seedVals.r1 * 10 : 90},15 Q85,25 90,35 T90,55`} {...lineProps} strokeDasharray="2 3" />
            <path d={`M${seedVals ? 105 + seedVals.r2 * 10 : 110},15 Q105,25 110,35 T110,55`} {...lineProps} strokeDasharray="2 3" />
            
            {/* Dessert plate outline */}
            <ellipse cx="100" cy="95" rx="75" ry="14" {...fillProps} />
            <ellipse cx="100" cy="95" rx="75" ry="14" {...lineProps} />
            <ellipse cx="100" cy="95" rx="60" ry="10" {...lineProps} strokeDasharray="4 4" />

            {variant === 0 ? (
              <>
                {/* Variant 0: Exquisite layered slice of Mud Pie */}
                <path d="M50,85 L140,88 L150,68 L60,65 Z" {...fillProps} />
                <path d="M50,85 L135,88 L142,50 L50,85 Z" className="fill-white" />
                <path d="M50,85 L135,88 L142,50 L50,85" {...lineProps} />
                <path d="M50,85 L135,88" {...lineProps} strokeWidth="2.5" />
                <path d="M50,85 C75,76 105,79 137,76" {...lineProps} />
                <path d="M50,85 C75,68 105,71 139,63" {...lineProps} />
                <path d="M125,56 C130,48 140,48 145,52" {...lineProps} />
                <path d="M115,59 C120,51 128,52 133,56" {...lineProps} />
                <path d="M50,85 Q46,80 52,78 T60,82" {...lineProps} />
              </>
            ) : variant === 1 ? (
              <>
                {/* Variant 1: Miniature fluted tart/pie with lattice work */}
                <ellipse cx="100" cy="80" rx="40" ry="14" {...fillProps} />
                <ellipse cx="100" cy="80" rx="40" ry="14" {...lineProps} strokeWidth="1.5" />
                <ellipse cx="100" cy="76" rx="34" ry="10" {...lineProps} />
                <path d="M70,76 Q100,79 130,76" {...lineProps} />
                <path d="M75,72 Q100,75 125,72" {...lineProps} strokeDasharray="2 2" />
                <path d="M90,66 Q90,82 90,86" {...lineProps} />
                <path d="M110,66 Q110,82 110,86" {...lineProps} />
              </>
            ) : (
              <>
                {/* Variant 2: Multi-layered luxury parfait / mud pudding glass */}
                <path d="M82,35 L118,35 L112,80 L88,80 Z" {...fillProps} />
                <path d="M82,35 L118,35 L112,80 L88,80 Z" {...lineProps} strokeWidth="1.5" />
                <line x1="84" y1="48" x2="116" y2="48" {...lineProps} strokeWidth="2" />
                <line x1="86" y1="62" x2="114" y2="62" {...lineProps} />
                <path d="M82,35 Q100,42 118,35" {...lineProps} />
                {/* Whipped spoon handle protruding */}
                <line x1="102" y1="80" x2="124" y2="20" {...lineProps} strokeWidth="2.5" />
                <circle cx="124" cy="20" r="3.5" {...accentProps} />
              </>
            )}

            {/* Shaved chocolate flakes / sparkles */}
            <path d="M90,48 L96,44" {...lineProps} strokeWidth="2" />
            <path d="M110,42 L114,38" {...lineProps} strokeWidth="2" />
            <path d="M125,38 L129,34" {...lineProps} strokeWidth="2" />

            {/* Elegant dessert fork profile */}
            <path d="M30,55 L35,80 L32,80 L25,50" {...lineProps} />
            <path d="M22,88 L25,102 C25,104 23,106 21,106" {...lineProps} />
            
            {/* Accent cherry/sparkle */}
            <circle cx={seedVals ? 120 + seedVals.r5 * 30 : 140} cy="46" r="4.5" {...accentProps} />
          </svg>
        );
      }

      case "mud-run": {
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Dynamic mud splashes on the side */}
            <circle cx={seedVals ? 25 + seedVals.r1 * 20 : 35} cy="85" r="5" {...accentProps} />
            <circle cx={seedVals ? 40 + seedVals.r2 * 20 : 48} cy="72" r="3" {...accentProps} />
            <circle cx="165" cy="80" r="4" {...accentProps} />
            <circle cx="152" cy="92" r="3" {...accentProps} />
            <path d="M20,100 Q45,75 55,90 T80,100" {...fillProps} />

            {variant === 0 ? (
              <>
                {/* Variant 0: Muddy incline ramp barrier/obstacle */}
                <path d="M40,95 L140,45 L150,55 L50,105 Z" {...fillProps} />
                <path d="M40,95 L140,45 L150,55 L50,105 Z" {...lineProps} />
              </>
            ) : variant === 1 ? (
              <>
                {/* Variant 1: Steep athletic unyielding climbing wall with anchor steps */}
                <rect x="65" y="38" width="70" height="57" rx="3" {...fillProps} />
                <rect x="65" y="38" width="70" height="57" rx="3" {...lineProps} strokeWidth="1.75" />
                <line x1="65" y1="56" x2="135" y2="56" {...lineProps} />
                <line x1="65" y1="74" x2="135" y2="74" {...lineProps} />
                <circle cx="80" cy="47" r="2" {...accentProps} />
                <circle cx="120" cy="47" r="2" {...accentProps} />
                <circle cx="100" cy="65" r="2" {...accentProps} />
              </>
            ) : (
              <>
                {/* Variant 2: Elevated series of stepping platforms in high-density mud */}
                <rect x="30" y="85" width="28" height="12" rx="4" {...fillProps} />
                <rect x="30" y="85" width="28" height="12" rx="4" {...lineProps} />
                <rect x="75" y="74" width="28" height="12" rx="4" {...fillProps} />
                <rect x="75" y="74" width="28" height="12" rx="4" {...lineProps} />
                <rect x="120" y="63" width="28" height="12" rx="4" {...fillProps} />
                <rect x="120" y="63" width="28" height="12" rx="4" {...lineProps} />
              </>
            )}
            
            {/* Climb rope hanging down */}
            <path d="M135,10 Q120,38 100,55 T80,85" {...lineProps} strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="100" cy="55" r="3.5" {...accentProps} />
            <circle cx="80" cy="85" r="3.5" {...accentProps} />

            {/* High action runner trail or stepping stones */}
            <ellipse cx="65" cy="95" rx="10" ry="4" {...lineProps} />
            <ellipse cx="95" cy="80" rx="12" ry="4" {...lineProps} />
            <ellipse cx="125" cy="65" rx="10" ry="3.5" {...lineProps} />

            {/* Finish Line Flag at the peak */}
            <line x1="145" y1="47" x2="145" y2="15" {...lineProps} strokeWidth="2" />
            <path d="M145,15 L170,23 L145,31 Z" {...accentProps} />
            <path d="M145,15 L170,23 L145,31 Z" {...lineProps} />

            {/* Splash/speed lines */}
            <line x1="30" y1="65" x2="15" y2="60" {...lineProps} />
            <line x1="32" y1="78" x2="18" y2="82" {...lineProps} />
          </svg>
        );
      }

      case "mud-the-game": {
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {variant === 0 ? (
              <>
                {/* Variant 0: Retro PC/CRT Monitor outer frame with text command-line inside */}
                <rect x="40" y="20" width="120" height="80" rx="12" {...fillProps} />
                <rect x="40" y="20" width="120" height="80" rx="12" {...lineProps} strokeWidth="2" />
                <rect x="47" y="26" width="106" height="64" rx="6" {...lineProps} />
                
                <line x1="56" y1="38" x2="90" y2="38" {...lineProps} strokeWidth="2.5" />
                <line x1="56" y1="48" x2="135" y2="48" {...lineProps} strokeWidth="1.5" />
                <line x1="56" y1="58" x2="120" y2="58" {...lineProps} strokeWidth="1.5" strokeDasharray="60 100" />
                <line x1="56" y1="68" x2="110" y2="68" {...lineProps} strokeWidth="1.5" />
                
                <path d="M56,77 L62,80 L56,83" {...lineProps} strokeWidth="2" />
                <rect x="66" y="81" width="8" height="2" {...accentProps} className={`${resolved.accent} animate-pulse`} />
              </>
            ) : variant === 1 ? (
              <>
                {/* Variant 1: Interactive schematic dungeon map of rooms connected by nodes */}
                <rect x="35" y="15" width="130" height="90" rx="8" {...fillProps} />
                <rect x="35" y="15" width="130" height="90" rx="8" {...lineProps} strokeWidth="1.5" />
                
                {/* Room Nodes */}
                <rect x="45" y="45" width="18" height="14" rx="2" {...lineProps} />
                <rect x="91" y="25" width="18" height="14" rx="2" {...lineProps} />
                <rect x="91" y="65" width="18" height="14" rx="2" {...lineProps} />
                <rect x="135" y="45" width="18" height="14" rx="2" {...lineProps} />
                
                {/* Path Lines */}
                <line x1="63" y1="52" x2="91" y2="32" {...lineProps} strokeDasharray="3 3" />
                <line x1="63" y1="52" x2="91" y2="72" {...lineProps} strokeDasharray="3 3" />
                <line x1="109" y1="32" x2="135" y2="52" {...lineProps} strokeDasharray="3 3" />
                <line x1="109" y1="72" x2="135" y2="52" {...lineProps} strokeDasharray="3 3" />
                
                {/* Glowing player node position */}
                <circle cx="91" cy="32" r="3.5" {...accentProps} />
              </>
            ) : (
              <>
                {/* Variant 2: High-action console battle HUD representation */}
                <rect x="40" y="20" width="120" height="80" rx="6" {...fillProps} />
                <rect x="40" y="20" width="120" height="80" rx="6" {...lineProps} strokeWidth="2" />
                
                {/* Life meter */}
                <rect x="52" y="32" width="40" height="6" rx="1.5" {...lineProps} />
                <rect x="52" y="32" width="28" height="6" rx="1.5" {...accentProps} />
                
                {/* Mana meter */}
                <rect x="108" y="32" width="40" height="6" rx="1.5" {...lineProps} />
                <rect x="108" y="32" width="35" height="6" rx="1.5" className="fill-indigo-500" />
                
                {/* Combat scrolls */}
                <line x1="52" y1="50" x2="148" y2="50" {...lineProps} strokeWidth="1" />
                <line x1="52" y1="62" x2="128" y2="62" {...lineProps} strokeWidth="1" />
                <line x1="52" y1="74" x2="140" y2="74" {...lineProps} strokeWidth="1.5" />
                <line x1="52" y1="84" x2="110" y2="84" {...lineProps} strokeWidth="1" />
              </>
            )}

            {/* Classic network connection nodes (Multi-User representation) */}
            <circle cx="155" cy="35" r="4" {...accentProps} />
            <line x1="155" y1="35" x2="175" y2="50" {...lineProps} strokeDasharray="2 2" />
            <circle cx="175" cy="50" r="5" {...fillProps} />
            <circle cx="175" cy="50" r="5" {...lineProps} />

            <circle cx="25" cy="75" r="4" {...accentProps} />
            <line x1="25" y1="75" x2="40" y2="68" {...lineProps} strokeDasharray="2 2" />

            {/* Small glowing computer status dots */}
            <circle cx="115" cy="106" r="2" {...accentProps} />
            <circle cx="125" cy="106" r="2" {...accentProps} opacity="0.4" />
            
            {/* Monitor Stand */}
            <path d="M85,100 L75,110 L125,110 L115,100 Z" {...lineProps} className={`${resolved.line} fill-white`} />
          </svg>
        );
      }

      case "mudslinging": {
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {variant === 0 ? (
              <>
                {/* Variant 0: Political Megaphone Left and Right blasting character attacks */}
                <g transform="translate(25, 30) rotate(15)">
                  <path d="M10,25 L35,10 L35,40 Z" {...fillProps} />
                  <path d="M10,25 L35,10 L35,40 Z" {...lineProps} />
                  <path d="M35,10 C42,10 42,40 35,40" {...lineProps} />
                  <rect x="2" y="21" width="8" height="8" rx="2" {...lineProps} />
                  <path d="M15,25 L12,40" {...lineProps} strokeWidth="2.5" />
                </g>
                <g transform="translate(175, 45) rotate(195)">
                  <path d="M10,25 L35,10 L35,40 Z" {...fillProps} />
                  <path d="M10,25 L35,10 L35,40 Z" {...lineProps} />
                  <path d="M35,10 C42,10 42,40 35,40" {...lineProps} />
                  <rect x="2" y="21" width="8" height="8" rx="2" {...lineProps} />
                  <path d="M15,25 L12,40" {...lineProps} strokeWidth="2.5" />
                </g>
              </>
            ) : variant === 1 ? (
              <>
                {/* Variant 1: Slander dissemination tabloid headline layout */}
                <rect x="35" y="15" width="130" height="90" rx="4" {...fillProps} />
                <rect x="35" y="15" width="130" height="90" rx="4" {...lineProps} strokeWidth="2" />
                
                {/* Tabloid banner */}
                <rect x="42" y="22" width="116" height="15" rx="1" className={`${resolved.line} fill-white`} />
                <line x1="48" y1="30" x2="152" y2="30" {...lineProps} strokeWidth="2.5" />
                
                {/* Headline text stripes */}
                <line x1="42" y1="48" x2="158" y2="48" {...lineProps} strokeWidth="4.5" />
                <line x1="42" y1="58" x2="128" y2="58" {...lineProps} strokeWidth="3" />
                
                {/* Columns */}
                <line x1="42" y1="70" x2="95" y2="70" {...lineProps} />
                <line x1="42" y1="78" x2="90" y2="78" {...lineProps} />
                <line x1="42" y1="86" x2="85" y2="86" {...lineProps} />
                
                <line x1="105" y1="70" x2="158" y2="70" {...lineProps} />
                <line x1="105" y1="78" x2="154" y2="78" {...lineProps} />
                <line x1="105" y1="86" x2="148" y2="86" {...lineProps} />
              </>
            ) : (
              <>
                {/* Variant 2: Interconnected network graph of propaganda diffusion */}
                <rect x="40" y="20" width="120" height="80" rx="8" {...fillProps} />
                <rect x="40" y="20" width="120" height="80" rx="8" {...lineProps} />
                
                {/* Core source node */}
                <circle cx="100" cy="60" r="14" {...fillProps} />
                <circle cx="100" cy="60" r="14" {...lineProps} strokeWidth="1.5" />
                <circle cx="100" cy="60" r="5" {...accentProps} />
                
                {/* Outer spreading nodes */}
                <circle cx="60" cy="40" r="6" {...lineProps} />
                <circle cx="140" cy="40" r="6" {...lineProps} />
                <circle cx="60" cy="80" r="6" {...lineProps} />
                <circle cx="140" cy="80" r="6" {...lineProps} />
                
                <line x1="100" y1="60" x2="60" y2="40" {...lineProps} strokeDasharray="3 3" />
                <line x1="100" y1="60" x2="140" y2="40" {...lineProps} strokeDasharray="3 3" />
                <line x1="100" y1="60" x2="60" y2="80" {...lineProps} strokeDasharray="3 3" />
                <line x1="100" y1="60" x2="140" y2="80" {...lineProps} strokeDasharray="3 3" />
              </>
            )}

            {/* Mud/dirt splats clashing in the center */}
            <path d="M85,55 C70,45 65,65 50,50 C65,35 85,38 92,48 Z" {...accentProps} />
            <path d="M115,65 C130,75 135,55 150,70 C135,85 115,82 108,72 Z" {...accentProps} />
            
            <circle cx="100" cy="58" r="8" {...fillProps} />
            <circle cx="100" cy="58" r="8" {...lineProps} strokeWidth="1.5" />
            
            {/* Clashing shockwave / mud ring elements */}
            <path d="M78,35 A30,30 0 0,1 122,35" {...lineProps} strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M74,85 A30,30 0 0,0 126,85" {...lineProps} strokeWidth="1.5" strokeDasharray="3 3" />
            
            {/* Slander strike arrows */}
            <path d="M60,25 L85,42" {...lineProps} strokeWidth="2" />
            <polygon points="85,42 81,36 77,40" className={`${resolved.line}`} />

            <path d="M140,95 L115,78" {...lineProps} strokeWidth="2" />
            <polygon points="115,78 119,84 123,80" className={`${resolved.line}`} />
          </svg>
        );
      }

      case "clear-as-mud": {
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Background overlapping linguistic/Venn diagram circles representing confusion */}
            <circle cx="70" cy="55" r="30" {...fillProps} className={`${resolved.fill} opacity-40`} />
            <circle cx="130" cy="55" r="30" {...fillProps} className={`${resolved.fill} opacity-40`} />
            <circle cx="100" cy="72" r="24" {...fillProps} className={`${resolved.fill} opacity-30`} />
            
            <circle cx="70" cy="55" r="30" {...lineProps} strokeDasharray="3 3" />
            <circle cx="130" cy="55" r="30" {...lineProps} strokeDasharray="3 3" />

            {variant === 0 ? (
              <>
                {/* Variant 0: A majestic lightbulb representing clarity with maze filament */}
                <path d="M85,55 C85,38 92,25 100,25 C108,25 115,38 115,55 C115,68 108,72 108,78 L92,78 C92,72 85,68 85,55 Z" className="fill-white" />
                <path d="M85,55 C85,38 92,25 100,25 C108,25 115,38 115,55 C115,68 108,72 108,78 L92,78 C92,72 85,68 85,55 Z" {...lineProps} strokeWidth="1.75" />
                <path d="M96,44 C96,40 104,40 104,44 C104,48 94,48 94,54 C94,60 106,60 106,66" {...lineProps} strokeWidth="1.25" />
                <rect x="94" y="78" width="12" height="4" rx="1" {...lineProps} className={`${resolved.line} fill-stone-200`} />
                <rect x="95" y="82" width="10" height="3" rx="1" {...lineProps} className={`${resolved.line} fill-stone-300`} />
                <path d="M98,85 L102,85" {...lineProps} strokeWidth="2" />
              </>
            ) : variant === 1 ? (
              <>
                {/* Variant 1: Scientific balance scales comparing pristine water vs dense silt */}
                <line x1="100" y1="20" x2="100" y2="85" {...lineProps} strokeWidth="2.5" />
                <path d="M85,85 L115,85" {...lineProps} strokeWidth="3" />
                {/* Scale crossbar (tilted slightly depending on r3) */}
                <g transform="translate(100,28) rotate(-6)">
                  <line x1="-42" y1="0" x2="42" y2="0" {...lineProps} strokeWidth="2" />
                  {/* Left hanger */}
                  <line x1="-40" y1="0" x2="-40" y2="30" {...lineProps} />
                  <ellipse cx="-40" cy="30" rx="15" ry="5" {...fillProps} />
                  <ellipse cx="-40" cy="30" rx="15" ry="5" {...lineProps} />
                  
                  {/* Right hanger */}
                  <line x1="40" y1="0" x2="40" y2="30" {...lineProps} />
                  <ellipse cx="40" cy="30" rx="15" ry="5" {...fillProps} />
                  <ellipse cx="40" cy="30" rx="15" ry="5" {...lineProps} />
                  {/* Mud splat on right (heavier) */}
                  <circle cx="40" cy="27" r="4.5" {...accentProps} />
                </g>
              </>
            ) : (
              <>
                {/* Variant 2: Winding infinite Mobius strip / optical illusion ring representing confusion */}
                <path d="M60,55 C60,35 140,35 140,55 C140,75 60,75 60,55" {...fillProps} />
                <path d="M60,55 C60,35 140,35 140,55 C140,75 60,75 60,55" {...lineProps} strokeWidth="2.5" />
                <path d="M80,55 C80,45 120,45 120,55 C120,65 80,65 80,55" className="fill-white" />
                <path d="M80,55 C80,45 120,45 120,55 C120,65 80,65 80,55" {...lineProps} strokeWidth="1.5" />
                <line x1="100" y1="35" x2="100" y2="45" {...lineProps} />
                <line x1="100" y1="65" x2="100" y2="75" {...lineProps} />
              </>
            )}

            {/* Radiant light rays (ironic clarity stars) */}
            <path d="M100,12 L100,18" {...lineProps} strokeWidth="1.5" />
            <path d="M72,30 L77,34" {...lineProps} strokeWidth="1.5" />
            <path d="M128,30 L123,34" {...lineProps} strokeWidth="1.5" />
            <path d="M62,55 L68,55" {...lineProps} strokeWidth="1.5" />
            <path d="M138,55 L132,55" {...lineProps} strokeWidth="1.5" />

            {/* Elegant Question Marks floating */}
            <path d="M52,78 C52,72 60,70 60,74 C60,77 56,78 56,81" {...lineProps} strokeWidth="1.5" />
            <circle cx="56" cy="85" r="1.25" {...accentProps} />

            <path d="M148,78 C148,72 140,70 140,74 C140,77 144,78 144,81" {...lineProps} strokeWidth="1.5" />
            <circle cx="144" cy="85" r="1.25" {...accentProps} />
          </svg>
        );
      }

      case "mud-architecture": {
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Radiant desert/building sun rays */}
            <circle cx="160" cy="30" r="12" {...accentProps} />
            <line x1="160" y1="12" x2="160" y2="16" {...lineProps} />
            <line x1="142" y1="30" x2="146" y2="30" {...lineProps} />
            <line x1="148" y1="18" x2="151" y2="21" {...lineProps} />
            
            {/* Earthen foundation strata */}
            <rect x="15" y="90" width="170" height="15" rx="3" {...fillProps} />
            <line x1="15" y1="90" x2="185" y2="90" {...lineProps} />
            <line x1="25" y1="97" x2="175" y2="97" {...lineProps} strokeDasharray="5 5" />

            {variant === 0 ? (
              <>
                {/* Variant 0: Sun-dried Mudbrick / Adobe Dome Architecture */}
                <path d="M50,90 L50,65 Q50,35 100,35 Q150,35 150,65 L150,90 Z" className="fill-white" />
                <path d="M50,90 L50,65 Q50,35 100,35 Q150,35 150,65 L150,90 Z" {...lineProps} strokeWidth="2" />

                {/* Modular brick patterns on the dome wall */}
                <rect x="62" y="72" width="18" height="6" rx="1" {...lineProps} />
                <rect x="120" y="72" width="18" height="6" rx="1" {...lineProps} />
                <rect x="91" y="62" width="18" height="6" rx="1" {...lineProps} />
                <rect x="72" y="52" width="16" height="5" rx="1" {...lineProps} />
                <rect x="112" y="52" width="16" height="5" rx="1" {...lineProps} />
              </>
            ) : variant === 1 ? (
              <>
                {/* Variant 1: Rammed-earth structural layered pillars */}
                <rect x="55" y="32" width="34" height="58" rx="2" {...fillProps} />
                <rect x="55" y="32" width="34" height="58" rx="2" {...lineProps} strokeWidth="1.75" />
                
                <rect x="110" y="32" width="34" height="58" rx="2" {...fillProps} />
                <rect x="110" y="32" width="34" height="58" rx="2" {...lineProps} strokeWidth="1.75" />
                
                {/* Horizon horizontal compaction bands */}
                <line x1="55" y1="46" x2="89" y2="46" {...lineProps} />
                <line x1="55" y1="60" x2="89" y2="60" {...lineProps} strokeDasharray="3 2" />
                <line x1="55" y1="74" x2="89" y2="74" {...lineProps} />
                
                <line x1="110" y1="46" x2="144" y2="46" {...lineProps} />
                <line x1="110" y1="60" x2="144" y2="60" {...lineProps} strokeDasharray="3 2" />
                <line x1="110" y1="74" x2="144" y2="74" {...lineProps} />
                
                {/* Connecting arch beam */}
                <path d="M45,32 L155,32 L150,22 L50,22 Z" {...fillProps} />
                <path d="M45,32 L155,32 L150,22 L50,22 Z" {...lineProps} strokeWidth="2" />
              </>
            ) : (
              <>
                {/* Variant 2: Traditional sustainable curved circular cob dwelling */}
                <path d="M40,90 Q40,40 100,40 Q160,40 160,90 Z" {...fillProps} />
                <path d="M40,90 Q40,40 100,40 Q160,40 160,90 Z" {...lineProps} strokeWidth="2" />
                
                {/* Thatch roof eaves outline */}
                <path d="M30,48 Q100,28 170,48" {...lineProps} strokeWidth="2.5" />
                <line x1="100" y1="30" x2="100" y2="15" {...lineProps} />
                
                {/* Porthole aesthetic round window */}
                <circle cx="100" cy="58" r="8" className="fill-white" />
                <circle cx="100" cy="58" r="8" {...lineProps} />
                <line x1="92" y1="58" x2="108" y2="58" {...lineProps} />
                <line x1="100" y1="50" x2="100" y2="66" {...lineProps} />
              </>
            )}

            {/* Elegant structural arched entryway */}
            <path d="M82,90 L82,72 Q82,58 100,58 Q118,58 118,72 L118,90 Z" {...fillProps} />
            <path d="M82,90 L82,72 Q82,58 100,58 Q118,58 118,72 L118,90 Z" {...lineProps} strokeWidth="1.5" />
            
            {/* Hanging decorative ceramic oil lamp */}
            <line x1="100" y1="35" x2="100" y2="48" {...lineProps} />
            <circle cx="100" cy="50" r="2.5" {...accentProps} />
          </svg>
        );
      }

      case "mudlarking": {
        const r1 = seedVals?.r1 ?? 0.5;
        const r2 = seedVals?.r2 ?? 0.3;
        const r3 = seedVals?.r3 ?? 0.7;
        const r4 = seedVals?.r4 ?? 0.2;
        const r5 = seedVals?.r5 ?? 0.8;
        const r6 = seedVals?.r6 ?? 0.4;
        const r7 = seedVals?.r7 ?? 0.6;
        const r8 = seedVals?.r8 ?? 0.1;
        const r9 = seedVals?.r9 ?? 0.9;

        // Dynamic waves based on seeds
        const wave1Y1 = 45 + r1 * 8;
        const wave1CtrlY1 = 35 + r2 * 8;
        const wave1CtrlY2 = 55 - r3 * 8;
        const wave1Y2 = 45 + r4 * 8;
        const wave1CtrlY3 = 35 - r5 * 8;
        const wave1CtrlY4 = 55 + r6 * 8;
        const wave1Y3 = 45 - r7 * 8;

        const wave2Y1 = 58 + r2 * 6;
        const wave2CtrlY1 = 48 - r3 * 6;
        const wave2CtrlY2 = 68 + r4 * 6;
        const wave2Y2 = 58 - r5 * 6;
        const wave2CtrlY3 = 48 + r6 * 6;
        const wave2CtrlY4 = 68 - r7 * 6;
        const wave2Y3 = 58 + r8 * 6;

        // Dynamic silt layer boundary
        const siltY1 = 82 + r3 * 6;
        const siltCtrlY1 = 75 + r4 * 6;
        const siltCtrlY2 = 90 - r5 * 6;
        const siltY2 = 82 + r6 * 6;
        const siltCtrlY3 = 74 - r7 * 6;
        const siltCtrlY4 = 88 + r8 * 6;
        const siltY3 = 82 - r9 * 6;

        // Dynamic artifact transform
        const artifactX = 40 + r4 * 15;
        const artifactY = 78 + r5 * 8;
        const artifactRot = -25 + r6 * 50;

        // Dynamic coin positions
        const coin1X = 125 + r7 * 15;
        const coin1Y = 83 + r8 * 10;
        const coin1R = 6.5 + r9 * 3;

        const coin2X = 105 + r9 * 15;
        const coin2Y = 90 + r1 * 8;
        const coin2R = 4.5 + r2 * 2.5;

        // Dynamic clay pipe transform
        const pipeX = r3 * 16 - 8;
        const pipeY = r4 * 8 - 4;
        const pipeRot = r5 * 30 - 15;

        // Dynamic magnifying glass transform
        const glassX = 95 + r2 * 30;
        const glassY = 32 + r3 * 16;
        const glassRot = -15 + r4 * 45;

        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Rhythmic flowing tidal riverbed waves (River Thames) */}
            <path d={`M15,${wave1Y1} C45,${wave1CtrlY1} 65,${wave1CtrlY2} 95,${wave1Y2} C125,${wave1CtrlY3} 145,${wave1CtrlY4} 185,${wave1Y3}`} {...lineProps} strokeWidth="2" />
            <path d={`M15,${wave2Y1} C45,${wave2CtrlY1} 65,${wave2CtrlY2} 95,${wave2Y2} C125,${wave2CtrlY3} 145,${wave2CtrlY4} 185,${wave2Y3}`} {...lineProps} strokeDasharray="6 4" />
            
            {/* Anaerobic deep silt layer below waves */}
            <path d={`M15,${siltY1} C55,${siltCtrlY1} 75,${siltCtrlY2} 115,${siltY2} C155,${siltCtrlY3} 165,${siltCtrlY4} 185,${siltY3} L185,110 L15,110 Z`} {...fillProps} />
            <path d={`M15,${siltY1} C55,${siltCtrlY1} 75,${siltCtrlY2} 115,${siltY2} C155,${siltCtrlY3} 165,${siltCtrlY4} 185,${siltY3}`} {...lineProps} />

            {/* Historic artifacts half buried in the mud */}
            <g transform={`translate(${artifactX}, ${artifactY}) rotate(${artifactRot})`}>
              {variant === 0 ? (
                <>
                  {/* Variant 0: Ancient Roman bronze key */}
                  <circle cx="15" cy="15" r="5" {...lineProps} className="fill-white" />
                  <line x1="20" y1="15" x2="38" y2="15" {...lineProps} strokeWidth="2" />
                  <line x1="34" y1="15" x2="34" y2="21" {...lineProps} />
                  <line x1="38" y1="15" x2="38" y2="21" {...lineProps} />
                </>
              ) : variant === 1 ? (
                <>
                  {/* Variant 1: Medieval buckle clasp artifact */}
                  <rect x="10" y="10" width="18" height="18" rx="4" {...fillProps} />
                  <rect x="10" y="10" width="18" height="18" rx="4" {...lineProps} strokeWidth="1.5" />
                  <circle cx="19" cy="19" r="4" className="fill-white" />
                  <circle cx="19" cy="19" r="4" {...lineProps} />
                  <line x1="12" y1="19" x2="26" y2="19" {...lineProps} strokeWidth="2" />
                </>
              ) : (
                <>
                  {/* Variant 2: Fragmented Victorian pharmaceutical pot lid */}
                  <path d="M10,25 C10,15 25,10 40,15 L35,28 Z" {...fillProps} />
                  <path d="M10,25 C10,15 25,10 40,15 L35,28 Z" {...lineProps} strokeWidth="1.5" />
                  <path d="M18,20 Q28,16 34,19" {...lineProps} strokeDasharray="2 2" />
                </>
              )}
            </g>

            {/* Antique coins */}
            <circle cx={coin1X} cy={coin1Y} r={coin1R} {...fillProps} />
            <circle cx={coin1X} cy={coin1Y} r={coin1R} {...lineProps} />
            <circle cx={coin1X} cy={coin1Y} r={coin1R * 0.625} {...lineProps} strokeDasharray="2 2" />
            <circle cx={coin2X} cy={coin2Y} r={coin2R} {...accentProps} />

            {/* Old clay pipe silhouette */}
            <g transform={`translate(${pipeX}, ${pipeY}) rotate(${pipeRot}, 155, 75)`}>
              <path d="M145,75 Q152,78 165,70 L168,75" {...lineProps} strokeWidth="1.5" />
            </g>

            {/* Detective magnifying glass looking at artifact */}
            <g transform={`translate(${glassX}, ${glassY}) rotate(${glassRot})`}>
              <circle cx="20" cy="20" r="14" className="fill-white" />
              <circle cx="20" cy="20" r="14" {...lineProps} strokeWidth="2" />
              <line x1="30" y1="30" x2="48" y2="48" {...lineProps} strokeWidth="3" />
              <path d="M12,12 Q16,8 20,12" {...lineProps} strokeWidth="1.25" />
            </g>
          </svg>
        );
      }

      case "mud-season": {
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Melting Snow Mountains in the background */}
            <polygon points="20,85 55,40 90,85" {...fillProps} />
            <polygon points="20,85 55,40 90,85" {...lineProps} />
            <path d="M47,51 L55,59 L62,52 L55,40 Z" {...accentProps} />

            <polygon points="75,85 105,50 135,85" {...fillProps} />
            <polygon points="75,85 105,50 135,85" {...lineProps} />
            <path d="M98,59 L105,66 L112,58 L105,50 Z" {...accentProps} />

            {/* Raining / melting cloud overlay */}
            <g transform="translate(120, 22)">
              <rect x="10" y="10" width="40" height="15" rx="7.5" {...fillProps} />
              <circle cx="20" cy="12" r="10" className="fill-white" />
              <circle cx="20" cy="12" r="10" {...lineProps} />
              <circle cx="36" cy="10" r="12" className="fill-white" />
              <circle cx="36" cy="10" r="12" {...lineProps} />
              <path d="M10,22 L50,22" {...lineProps} />
              
              {/* Raindrops dripping down */}
              <line x1="18" y1="28" x2="14" y2="38" {...lineProps} strokeDasharray="3 3" />
              <line x1="32" y1="28" x2="28" y2="38" {...lineProps} strokeDasharray="3 3" />
              <line x1="44" y1="28" x2="40" y2="38" {...lineProps} strokeDasharray="3 3" />
            </g>

            {variant === 0 ? (
              <>
                {/* Variant 0: Multi-layered waterlogged soil waves below */}
                <path d="M10,85 C40,75 60,95 90,85 C120,75 140,95 190,85 L190,110 L10,110 Z" {...fillProps} />
                <path d="M10,85 C40,75 60,95 90,85 C120,75 140,95 190,85" {...lineProps} strokeWidth="2" />
                <path d="M10,95 C40,85 60,105 90,95 C120,85 140,105 190,95" {...lineProps} strokeDasharray="4 4" />
              </>
            ) : variant === 1 ? (
              <>
                {/* Variant 1: Rutted dirt road with deep tire grooves filled with water */}
                <path d="M15,90 C35,80 55,100 85,90 C115,80 135,100 185,90" {...lineProps} strokeWidth="3" />
                <path d="M15,102 C35,92 55,112 85,102 C115,92 135,112 185,102" {...lineProps} strokeWidth="3" />
                <path d="M35,92 C55,82 75,102 105,92 C135,82 155,102 175,92" {...fillProps} className={`${resolved.fill} opacity-60`} />
              </>
            ) : (
              <>
                {/* Variant 2: Thermal freezing frost heave ice wedges cracking soil */}
                <path d="M20,90 Q100,75 180,90" {...lineProps} strokeWidth="2" />
                <path d="M60,82 L70,98 L80,84 L95,104 L110,82" {...lineProps} strokeWidth="1.5" />
                <circle cx="75" cy="90" r="3" {...accentProps} />
                <circle cx="100" cy="94" r="2" {...accentProps} />
              </>
            )}

            {/* Small newly growing organic leaf seedling out of the mud */}
            <path d="M72,85 Q75,70 82,65" {...lineProps} strokeWidth="1.75" />
            <path d="M82,65 Q87,62 84,68 C81,72 75,78 75,78" {...accentProps} />
            <path d="M82,65 Q87,62 84,68 C81,72 75,78 75,78" {...lineProps} />
          </svg>
        );
      }

      case "mud-tires": {
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Spinning rotational motion rings */}
            <circle cx="100" cy="60" r="52" {...lineProps} strokeDasharray="10 12" opacity="0.3" />
            <circle cx="100" cy="60" r="45" {...lineProps} strokeDasharray="4 6" opacity="0.5" />
            
            {/* Debris/mud spray arcs launching out */}
            <path d="M45,85 Q20,95 10,75" {...lineProps} strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M50,92 Q25,110 15,95" {...lineProps} strokeWidth="2" />
            
            <circle cx="18" cy="85" r="4.5" {...accentProps} />
            <circle cx="28" cy="102" r="3" {...accentProps} />
            <circle cx="178" cy="92" r="4" {...accentProps} />

            {variant === 0 ? (
              <>
                {/* Variant 0: Heavy-duty knobby Off-road Tire Silhouette */}
                <circle cx="100" cy="60" r="38" {...fillProps} />
                <circle cx="100" cy="60" r="38" {...lineProps} strokeWidth="2.5" />
                <circle cx="100" cy="60" r="24" className="fill-white" />
                <circle cx="100" cy="60" r="24" {...lineProps} strokeWidth="2.1" />

                {/* Tire Tread blocks (staggered outer boxes around circumference) */}
                <g transform="translate(100,60)">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 360) / 12;
                    return (
                      <rect
                        key={i}
                        x="-4"
                        y="-43"
                        width="8"
                        height="6"
                        rx="1.5"
                        transform={`rotate(${angle})`}
                        {...lineProps}
                        className={`${resolved.line} fill-white`}
                      />
                    );
                  })}
                </g>
              </>
            ) : variant === 1 ? (
              <>
                {/* Variant 1: Dual parallel tires representing heavy vehicle rear axle */}
                <g transform="translate(-15, 0)">
                  <ellipse cx="100" cy="60" rx="14" ry="38" {...fillProps} />
                  <ellipse cx="100" cy="60" rx="14" ry="38" {...lineProps} strokeWidth="2" />
                  <line x1="86" y1="60" x2="114" y2="60" {...lineProps} />
                </g>
                <g transform="translate(15, 0)">
                  <ellipse cx="100" cy="60" rx="14" ry="38" {...fillProps} />
                  <ellipse cx="100" cy="60" rx="14" ry="38" {...lineProps} strokeWidth="2" />
                </g>
                <rect x="80" y="56" width="40" height="8" rx="2" {...lineProps} className="fill-white" />
              </>
            ) : (
              <>
                {/* Variant 2: Cross-section flat tread pattern schematic layout */}
                <rect x="50" y="25" width="100" height="70" rx="4" {...fillProps} />
                <rect x="50" y="25" width="100" height="70" rx="4" {...lineProps} strokeWidth="2" />
                {/* Center groove */}
                <line x1="100" y1="25" x2="100" y2="95" {...lineProps} strokeWidth="3" />
                {/* Tread block details */}
                <rect x="62" y="35" width="22" height="8" rx="1" {...lineProps} className="fill-white" />
                <rect x="116" y="42" width="22" height="8" rx="1" {...lineProps} className="fill-white" />
                <rect x="62" y="55" width="22" height="8" rx="1" {...lineProps} className="fill-white" />
                <rect x="116" y="62" width="22" height="8" rx="1" {...lineProps} className="fill-white" />
                <rect x="62" y="75" width="22" height="8" rx="1" {...lineProps} className="fill-white" />
                <rect x="116" y="82" width="22" height="8" rx="1" {...lineProps} className="fill-white" />
              </>
            )}

            {/* Core metallic mechanical wheel bolts / axle hub */}
            <circle cx="100" cy="60" r="8" {...fillProps} />
            <circle cx="100" cy="60" r="8" {...lineProps} />
            <circle cx="100" cy="60" r="3" {...accentProps} />
          </svg>
        );
      }

      default: {
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {variant === 0 ? (
              <>
                {/* Variant 0: Distinct organic wavy geological layers */}
                <path d="M15,85 C45,75 65,95 95,85 C125,75 145,95 185,85 L185,110 L15,110 Z" {...fillProps} />
                <path d="M15,85 C45,75 65,95 95,85 C125,75 145,95 185,85" {...lineProps} strokeWidth="2" />
                
                <path d="M15,55 C45,45 65,65 95,55 C125,45 145,65 185,55" {...lineProps} strokeDasharray="3 3" />
                <path d="M15,25 C45,15 65,35 95,25 C125,15 145,35 185,25" {...lineProps} />
                <circle cx="100" cy="55" r="10" {...accentProps} />
              </>
            ) : variant === 1 ? (
              <>
                {/* Variant 1: Geometrical crystallographic mineral core */}
                <rect x="50" y="20" width="100" height="80" rx="8" {...fillProps} />
                <rect x="50" y="20" width="100" height="80" rx="8" {...lineProps} strokeWidth="1.5" />
                <polygon points="100,30 135,50 120,85 80,85 65,50" {...fillProps} className={`${resolved.fill} opacity-60`} />
                <polygon points="100,30 135,50 120,85 80,85 65,50" {...lineProps} />
                <line x1="100" y1="30" x2="100" y2="85" {...lineProps} />
                <line x1="65" y1="50" x2="135" y2="50" {...lineProps} />
              </>
            ) : (
              <>
                {/* Variant 2: Columnar core sample tube diagram */}
                <rect x="85" y="15" width="30" height="90" rx="3" {...fillProps} />
                <rect x="85" y="15" width="30" height="90" rx="3" {...lineProps} strokeWidth="2" />
                <line x1="85" y1="35" x2="115" y2="35" {...lineProps} />
                <line x1="85" y1="55" x2="115" y2="55" {...lineProps} strokeDasharray="3 3" />
                <line x1="85" y1="75" x2="115" y2="75" {...lineProps} />
                <line x1="85" y1="90" x2="115" y2="90" {...lineProps} strokeDasharray="1 2" />
                <circle cx="100" cy="45" r="4" {...accentProps} />
                <circle cx="100" cy="82" r="3" {...accentProps} />
              </>
            )}
          </svg>
        );
      }
    }
  };

  const getIllustrationTitle = (s: string) => {
    switch (s) {
      case "dead-sea-mud": return "Dead Sea Mineral Silt Structure Model";
      case "mississippi-mud-pie": return "Mississippi Mud Pie Structural Layers";
      case "mud-run": return "Obstacle Mud Run Biomechanical Force Diagram";
      case "mud-the-game": return "MUD1 Telnet Text Terminal Command Flow";
      case "mudslinging": return "Political Mudslinging Rhetoric Propagation Graph";
      case "clear-as-mud": return "Clear as Mud Double Negative Cognitive Spectrum";
      case "mud-architecture": return "Eco-sustainable Rammed Earth & Adobe Wall Section";
      case "mudlarking": return "Foreshore Mudlarking Archaeological Preservation Stratum";
      case "mud-season": return "Geological Solifluction Frost Heave Soil Profile";
      case "mud-tires": return "Off-Road Tire Void Ratio & Self-Cleaning Traction Schematic";
      default: return "Geological Sediment Layering Chart";
    }
  };

  const getIllustrationCaption = (s: string) => {
    switch (s) {
      case "dead-sea-mud": return "High-fidelity geological schematic of mineral-rich sedimentary clay of the Dead Sea Basin";
      case "mississippi-mud-pie": return "Interactive schematic showing the layered chocolate, biscuit crust, and whipped cream profiles of the Mississippi Mud Pie";
      case "mud-run": return "Biomechanics of traction, drag, and grip forces during a high-endurance muddy obstacle course run";
      case "mud-the-game": return "Flowchart of connection parsing, room descriptions, and command interpretation of standard Multi-User Dungeons";
      case "mudslinging": return "Rhetorical vectors representing character slander, negative advertising, and psychological projection propagation";
      case "clear-as-mud": return "Cognitive load and verbal irony scale mapping standard idioms from maximum translucent clarity to complete opaque ambiguity";
      case "mud-architecture": return "Sub-grade thermal mass layout of rammed earth bricks, clay soils, binder stabilizers, and gravel footers";
      case "mudlarking": return "Geochemical anaerobic mud preservation of ancient metal, glass, and leather artifacts on riverbeds";
      case "mud-season": return "Sub-surface shear failure, unpaved road saturation, and structural sub-grade breakdown during spring freeze-thaw cycles";
      case "mud-tires": return "Heavy-duty off-road tire tread lugs, ejector channels, and centripetal mud expulsion force vectors";
      default: return "Therapeutic sediment geological layering and mineral crystallization patterns";
    }
  };

  const getIllustrationDescription = (s: string) => {
    switch (s) {
      case "dead-sea-mud": return "An architectural outline illustrating the crystallization, osmotic mineral exchange, and sedimentary layering of Dead Sea therapeutic mud.";
      case "mississippi-mud-pie": return "A technical cross-section schematic mapping the viscosity and structure of the classic chocolate dessert's layers.";
      case "mud-run": return "An illustration of drag coefficient and soil shear strength under athletic activity, demonstrating biomechanical force paths.";
      case "mud-the-game": return "A blueprint mapping socket connections, command strings, parser modules, and dynamic state feedback loops in MUD gaming architecture.";
      case "mudslinging": return "A logical flow mapping slander distribution channels, accusation echoes, and candidate feedback cycles in modern media mudslinging campaigns.";
      case "clear-as-mud": return "An empirical chart illustrating cognitive friction, grammatical irony, and communication opacity of traditional English idioms.";
      case "mud-architecture": return "A detailed structural blueprint of sustainable clay-earthen architecture, depicting compaction ratios, vapor barriers, and thermal regulation.";
      case "mudlarking": return "A profile illustrating anaerobic river silt depth, artifact deposition, tidal erosion, and historical preservation zones.";
      case "mud-season": return "A geological cross-section mapping water-logged clay saturation, liquid limits, and gravel road sub-grade failures during Mud Season.";
      case "mud-tires": return "A technical blueprint illustrating tread block placement, void ratio, and shear traction formulas for off-road mud tires.";
      default: return "An organic representation mapping sedimentary soil accretion, crystallization, and structural moisture retention.";
    }
  };

  const baseUrl = "https://mud.cc";
  const imageUrl = `${baseUrl}/images/illustrations/${slug}.svg`;
  const title = getIllustrationTitle(slug);
  const caption = getIllustrationCaption(slug);
  const description = getIllustrationDescription(slug);

  return (
    <div
      id={`illustration-${slug}`}
      itemScope
      itemType="https://schema.org/ImageObject"
      className={`relative w-full h-full flex items-center justify-center transition-all duration-500 group-hover:scale-105 ${resolved.bgClass}`}
    >
      <meta itemProp="name" content={title} />
      <meta itemProp="caption" content={caption} />
      <meta itemProp="description" content={description} />
      <meta itemProp="contentUrl" content={imageUrl} />
      <meta itemProp="thumbnailUrl" content={imageUrl} />
      <span itemProp="author" itemScope itemType="https://schema.org/Organization" className="hidden">
        <span itemProp="name">mud.cc Registry</span>
      </span>
      <span itemProp="provider" itemScope itemType="https://schema.org/Organization" className="hidden">
        <span itemProp="name">mud.cc Registry</span>
      </span>
      {renderSvg()}

      {seedVals && (
        <svg viewBox="0 0 200 120" className="absolute inset-0 w-full h-full p-4 pointer-events-none select-none z-10">
          {/* 1. X-Ray Diffraction Spectrogram Peak (Subtle telemetry waveform in background) */}
          <path
            d={`M 15,108 
                Q 40,${105 + (seedVals.r1 * 10 - 5)} 60,${105 + (seedVals.r2 * 8 - 4)} 
                T 95,${seedVals.r3 > 0.4 ? 105 - (seedVals.r4 * 25 + 5) : 105} 
                T 130,${105 + (seedVals.r5 * 10 - 5)} 
                T 165,${105 + (seedVals.r6 * 6 - 3)} 
                L 185,108`}
            fill="none"
            strokeWidth="1"
            className={`${resolved.line} opacity-[0.25]`}
            strokeDasharray="1.5 2.5"
          />

          {/* 2. Micro Crystalline Lattice Structures (Deterministic mineral nodes connected by delicate links) */}
          {(() => {
            // Place crystal constellation on left or right side depending on r7
            const sideFactor = seedVals.r7 > 0.5 ? 1 : 0;
            const cx = sideFactor === 1 ? (145 + seedVals.r8 * 20) : (25 + seedVals.r8 * 20);
            const cy = 25 + seedVals.r9 * 30; // height offset
            
            // Crystal 1 (Rhombus shape representing clay smectite crystal)
            const cSize = 6 + seedVals.r1 * 5;
            const pts1 = `${cx},${cy - cSize} ${cx + cSize * 0.75},${cy} ${cx},${cy + cSize} ${cx - cSize * 0.75},${cy}`;
            
            // Crystal 2 (Smaller, linked off-center)
            const cSize2 = 3.5 + seedVals.r2 * 3;
            const cx2 = cx + (seedVals.r3 > 0.5 ? 12 : -12);
            const cy2 = cy + (seedVals.r4 > 0.5 ? 8 : -8);
            const pts2 = `${cx2},${cy2 - cSize2} ${cx2 + cSize2 * 0.75},${cy2} ${cx2},${cy2 + cSize2} ${cx2 - cSize2 * 0.75},${cy2}`;
            
            return (
              <g className="opacity-[0.45]">
                {/* Connecting delicate line */}
                <line x1={cx} y1={cy} x2={cx2} y2={cy2} strokeWidth="0.75" className={`${resolved.line}`} strokeDasharray="1 1.5" />
                
                {/* Core Crystal Shapes */}
                <polygon points={pts1} className={`${resolved.fill}`} strokeWidth="1" />
                <polygon points={pts1} className={`${resolved.line}`} strokeWidth="0.75" />
                
                <polygon points={pts2} className={`${resolved.fill}`} strokeWidth="1" />
                <polygon points={pts2} className={`${resolved.line}`} strokeWidth="0.75" />

                {/* Microscopic vertex spark stars */}
                <circle cx={cx} cy={cy - cSize} r="1.5" className={`${resolved.accent}`} />
                <circle cx={cx2} cy={cy2 + cSize2} r="1" className={`${resolved.accent}`} />
              </g>
            );
          })()}

          {/* 3. Small Technical Calibration/Crosshair stamp */}
          {(() => {
            // Deterministic position (e.g. bottom-left or top-right)
            const x = seedVals.r6 > 0.5 ? 175 : 25;
            const y = seedVals.r6 > 0.5 ? 95 : 22;
            return (
              <g className="opacity-[0.35]">
                {/* Reticle circle */}
                <circle cx={x} cy={y} r="4" fill="none" strokeWidth="0.75" className={`${resolved.line}`} strokeDasharray="2 2" />
                {/* Crosshairs */}
                <line x1={x - 6} y1={y} x2={x + 6} y2={y} strokeWidth="0.5" className={`${resolved.line}`} />
                <line x1={x} y1={y - 6} x2={x} y2={y + 6} strokeWidth="0.5" className={`${resolved.line}`} />
              </g>
            );
          })()}

          {/* 4. Serialized Micro Registry Node code label */}
          {(() => {
            const nodeId = (seed || "").substring(0, 3).toUpperCase() + "-" + Math.floor(seedVals.r5 * 900 + 100);
            const x = seedVals.r7 > 0.5 ? 20 : 180;
            const textAnchor = seedVals.r7 > 0.5 ? "start" : "end";
            return (
              <text
                x={x}
                y="15"
                textAnchor={textAnchor}
                className="text-[5.5px] font-mono fill-stone-400 font-bold opacity-60 uppercase tracking-widest pointer-events-none select-none"
              >
                {nodeId}
              </text>
            );
          })()}
        </svg>
      )}
    </div>
  );
}
