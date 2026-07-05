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
}

export function CategoryIllustration({ slug, theme }: CategoryIllustrationProps) {
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

  // Switch to render corresponding detailed SVG illustration
  const renderSvg = () => {
    switch (slug) {
      case "dead-sea-mud":
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Ambient background drops */}
            <circle cx="45" cy="35" r="14" {...fillProps} className={`${resolved.fill} opacity-60`} />
            <circle cx="155" cy="85" r="18" {...fillProps} className={`${resolved.fill} opacity-60`} />
            
            {/* Therapeutic mud mud pool / mud contours */}
            <path d="M25,85 C55,75 75,95 105,85 C135,75 145,95 175,85 C185,81 190,92 190,100 L10,100 C10,92 15,81 25,85 Z" {...fillProps} />
            <path d="M25,85 C55,75 75,95 105,85 C135,75 145,95 175,85" {...lineProps} />
            <path d="M35,92 C65,85 85,100 115,92 C145,85 155,98 165,92" {...lineProps} strokeDasharray="3 4" />

            {/* Skincare jar/pot container */}
            <rect x="75" y="35" width="50" height="35" rx="6" {...fillProps} />
            <rect x="75" y="35" width="50" height="35" rx="6" {...lineProps} />
            {/* Jar lid */}
            <rect x="70" y="27" width="60" height="8" rx="3" {...lineProps} className={`${resolved.line} fill-white`} />
            
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

      case "mississippi-mud-pie":
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Subtle background steam/aroma waves */}
            <path d="M90,15 Q85,25 90,35 T90,55" {...lineProps} strokeDasharray="2 3" />
            <path d="M110,15 Q105,25 110,35 T110,55" {...lineProps} strokeDasharray="2 3" />
            
            {/* Dessert plate outline */}
            <ellipse cx="100" cy="95" rx="75" ry="14" {...fillProps} />
            <ellipse cx="100" cy="95" rx="75" ry="14" {...lineProps} />
            <ellipse cx="100" cy="95" rx="60" ry="10" {...lineProps} strokeDasharray="4 4" />

            {/* Exquisite layered slice of Mud Pie */}
            {/* Pie crust base */}
            <path d="M50,85 L140,88 L150,68 L60,65 Z" {...fillProps} />
            
            {/* Slice side profile */}
            <path d="M50,85 L135,88 L142,50 L50,85 Z" className="fill-white" />
            <path d="M50,85 L135,88 L142,50 L50,85" {...lineProps} />
            
            {/* Chocolate layer divisions */}
            <path d="M50,85 L135,88" {...lineProps} strokeWidth="2.5" /> {/* Bottom cookie crust */}
            <path d="M50,85 C75,76 105,79 137,76" {...lineProps} /> {/* Fudgy cake layer */}
            <path d="M50,85 C75,68 105,71 139,63" {...lineProps} /> {/* Silk pudding layer */}
            
            {/* Whipped cream / topping blobs */}
            <path d="M125,56 C130,48 140,48 145,52" {...lineProps} />
            <path d="M115,59 C120,51 128,52 133,56" {...lineProps} />
            <path d="M50,85 Q46,80 52,78 T60,82" {...lineProps} />

            {/* Shaved chocolate flakes / sparkles */}
            <path d="M90,48 L96,44" {...lineProps} strokeWidth="2" />
            <path d="M110,42 L114,38" {...lineProps} strokeWidth="2" />
            <path d="M125,38 L129,34" {...lineProps} strokeWidth="2" />

            {/* Elegant dessert fork profile */}
            <path d="M30,55 L35,80 L32,80 L25,50" {...lineProps} />
            <path d="M22,88 L25,102 C25,104 23,106 21,106" {...lineProps} />
            
            {/* Accent cherry/sparkle */}
            <circle cx="140" cy="46" r="4.5" {...accentProps} />
          </svg>
        );

      case "mud-run":
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Dynamic mud splashes on the side */}
            <circle cx="35" cy="85" r="5" {...accentProps} />
            <circle cx="48" cy="72" r="3" {...accentProps} />
            <circle cx="165" cy="80" r="4" {...accentProps} />
            <circle cx="152" cy="92" r="3" {...accentProps} />
            <path d="M20,100 Q45,75 55,90 T80,100" {...fillProps} />

            {/* Muddy incline barrier/obstacle */}
            <path d="M40,95 L140,45 L150,55 L50,105 Z" {...fillProps} />
            <path d="M40,95 L140,45 L150,55 L50,105 Z" {...lineProps} />
            
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

      case "mud-the-game":
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Retro PC/CRT Monitor outer frame */}
            <rect x="40" y="20" width="120" height="80" rx="12" {...fillProps} />
            <rect x="40" y="20" width="120" height="80" rx="12" {...lineProps} strokeWidth="2" />
            
            {/* Screen border */}
            <rect x="47" y="26" width="106" height="64" rx="6" {...lineProps} />
            
            {/* Command-line text lines inside screen */}
            <line x1="56" y1="38" x2="90" y2="38" {...lineProps} strokeWidth="2.5" />
            <line x1="56" y1="48" x2="135" y2="48" {...lineProps} strokeWidth="1.5" />
            <line x1="56" y1="58" x2="120" y2="58" {...lineProps} strokeWidth="1.5" strokeDasharray="60 100" />
            <line x1="56" y1="68" x2="110" y2="68" {...lineProps} strokeWidth="1.5" />
            
            {/* Command prompt marker */}
            <path d="M56,77 L62,80 L56,83" {...lineProps} strokeWidth="2" />
            <rect x="66" y="81" width="8" height="2" {...accentProps} className={`${resolved.accent} animate-pulse`} />

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

      case "mudslinging":
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Political Megaphone Left */}
            <g transform="translate(25, 30) rotate(15)">
              <path d="M10,25 L35,10 L35,40 Z" {...fillProps} />
              <path d="M10,25 L35,10 L35,40 Z" {...lineProps} />
              <path d="M35,10 C42,10 42,40 35,40" {...lineProps} />
              {/* Back handle */}
              <rect x="2" y="21" width="8" height="8" rx="2" {...lineProps} />
              <path d="M15,25 L12,40" {...lineProps} strokeWidth="2.5" />
            </g>

            {/* Political Megaphone Right */}
            <g transform="translate(175, 45) rotate(195)">
              <path d="M10,25 L35,10 L35,40 Z" {...fillProps} />
              <path d="M10,25 L35,10 L35,40 Z" {...lineProps} />
              <path d="M35,10 C42,10 42,40 35,40" {...lineProps} />
              {/* Back handle */}
              <rect x="2" y="21" width="8" height="8" rx="2" {...lineProps} />
              <path d="M15,25 L12,40" {...lineProps} strokeWidth="2.5" />
            </g>

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

      case "clear-as-mud":
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Background overlapping linguistic/Venn diagram circles representing confusion */}
            <circle cx="70" cy="55" r="30" {...fillProps} className={`${resolved.fill} opacity-40`} />
            <circle cx="130" cy="55" r="30" {...fillProps} className={`${resolved.fill} opacity-40`} />
            <circle cx="100" cy="72" r="24" {...fillProps} className={`${resolved.fill} opacity-30`} />
            
            <circle cx="70" cy="55" r="30" {...lineProps} strokeDasharray="3 3" />
            <circle cx="130" cy="55" r="30" {...lineProps} strokeDasharray="3 3" />

            {/* A majestic lightbulb representing clarity */}
            <path d="M85,55 C85,38 92,25 100,25 C108,25 115,38 115,55 C115,68 108,72 108,78 L92,78 C92,72 85,68 85,55 Z" className="fill-white" />
            <path d="M85,55 C85,38 92,25 100,25 C108,25 115,38 115,55 C115,68 108,72 108,78 L92,78 C92,72 85,68 85,55 Z" {...lineProps} strokeWidth="1.75" />
            
            {/* Inside filament is a winding maze / labyrinth (representing "clear as mud") */}
            <path d="M96,44 C96,40 104,40 104,44 C104,48 94,48 94,54 C94,60 106,60 106,66" {...lineProps} strokeWidth="1.25" />
            
            {/* Lightbulb brass base screw & contact point */}
            <rect x="94" y="78" width="12" height="4" rx="1" {...lineProps} className={`${resolved.line} fill-stone-200`} />
            <rect x="95" y="82" width="10" height="3" rx="1" {...lineProps} className={`${resolved.line} fill-stone-300`} />
            <path d="M98,85 L102,85" {...lineProps} strokeWidth="2" />

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

      case "mud-architecture":
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

            {/* Sun-dried Mudbrick / Adobe Dome Architecture */}
            <path d="M50,90 L50,65 Q50,35 100,35 Q150,35 150,65 L150,90 Z" className="fill-white" />
            <path d="M50,90 L50,65 Q50,35 100,35 Q150,35 150,65 L150,90 Z" {...lineProps} strokeWidth="2" />

            {/* Modular brick patterns on the dome wall */}
            <rect x="62" y="72" width="18" height="6" rx="1" {...lineProps} />
            <rect x="120" y="72" width="18" height="6" rx="1" {...lineProps} />
            <rect x="91" y="62" width="18" height="6" rx="1" {...lineProps} />
            <rect x="72" y="52" width="16" height="5" rx="1" {...lineProps} />
            <rect x="112" y="52" width="16" height="5" rx="1" {...lineProps} />

            {/* Elegant structural arched entryway */}
            <path d="M82,90 L82,72 Q82,58 100,58 Q118,58 118,72 L118,90 Z" {...fillProps} />
            <path d="M82,90 L82,72 Q82,58 100,58 Q118,58 118,72 L118,90 Z" {...lineProps} strokeWidth="1.5" />
            
            {/* Hanging decorative ceramic oil lamp */}
            <line x1="100" y1="35" x2="100" y2="48" {...lineProps} />
            <circle cx="100" cy="50" r="2.5" {...accentProps} />
          </svg>
        );

      case "mudlarking":
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Rhythmic flowing tidal riverbed waves (River Thames) */}
            <path d="M15,45 C45,35 65,55 95,45 C125,35 145,55 185,45" {...lineProps} strokeWidth="2" />
            <path d="M15,58 C45,48 65,68 95,58 C125,48 145,68 185,58" {...lineProps} strokeDasharray="6 4" />
            
            {/* Anaerobic deep silt layer below waves */}
            <path d="M15,82 C55,75 75,90 115,82 C155,74 165,88 185,82 L185,110 L15,110 Z" {...fillProps} />
            <path d="M15,82 C55,75 75,90 115,82 C155,74 165,88 185,82" {...lineProps} />

            {/* Historic artifacts half buried in the mud */}
            {/* 1. Roman key */}
            <g transform="translate(45, 82) rotate(-15)">
              <circle cx="15" cy="15" r="5" {...lineProps} className="fill-white" />
              <line x1="20" y1="15" x2="38" y2="15" {...lineProps} strokeWidth="2" />
              <line x1="34" y1="15" x2="34" y2="21" {...lineProps} />
              <line x1="38" y1="15" x2="38" y2="21" {...lineProps} />
            </g>

            {/* 2. Antique coins */}
            <circle cx="135" cy="88" r="8" {...fillProps} />
            <circle cx="135" cy="88" r="8" {...lineProps} />
            <circle cx="135" cy="88" r="5" {...lineProps} strokeDasharray="2 2" />
            <circle cx="112" cy="94" r="5.5" {...accentProps} />

            {/* 3. Old clay pipe silhouette */}
            <path d="M145,75 Q152,78 165,70 L168,75" {...lineProps} strokeWidth="1.5" />

            {/* Detective magnifying glass looking at artifact */}
            <g transform="translate(110, 40) rotate(10)">
              <circle cx="20" cy="20" r="14" className="fill-white" />
              <circle cx="20" cy="20" r="14" {...lineProps} strokeWidth="2" />
              <line x1="30" y1="30" x2="48" y2="48" {...lineProps} strokeWidth="3" />
              {/* Highlight shine */}
              <path d="M12,12 Q16,8 20,12" {...lineProps} strokeWidth="1.25" />
            </g>
          </svg>
        );

      case "mud-season":
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            {/* Melting Snow Mountains in the background */}
            <polygon points="20,85 55,40 90,85" {...fillProps} />
            <polygon points="20,85 55,40 90,85" {...lineProps} />
            <path d="M47,51 L55,59 L62,52 L55,40 Z" {...accentProps} /> {/* Snowy cap */}

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

            {/* Multi-layered waterlogged soil waves below */}
            <path d="M10,85 C40,75 60,95 90,85 C120,75 140,95 190,85 L190,110 L10,110 Z" {...fillProps} />
            <path d="M10,85 C40,75 60,95 90,85 C120,75 140,95 190,85" {...lineProps} strokeWidth="2" />
            <path d="M10,95 C40,85 60,105 90,95 C120,85 140,105 190,95" {...lineProps} strokeDasharray="4 4" />

            {/* Small newly growing organic leaf seedling out of the mud */}
            <path d="M72,85 Q75,70 82,65" {...lineProps} strokeWidth="1.75" />
            <path d="M82,65 Q87,62 84,68 C81,72 75,78 75,78" {...accentProps} />
            <path d="M82,65 Q87,62 84,68 C81,72 75,78 75,78" {...lineProps} />
          </svg>
        );

      case "mud-tires":
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

            {/* Heavy-duty knobby Off-road Tire Silhouette */}
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

            {/* Core metallic mechanical wheel bolts / axle hub */}
            <circle cx="100" cy="60" r="8" {...fillProps} />
            <circle cx="100" cy="60" r="8" {...lineProps} />
            <circle cx="100" cy="60" r="3" {...accentProps} />
          </svg>
        );

      default:
        // Elegant generic abstract sediment layering representation
        return (
          <svg viewBox="0 0 200 120" className="w-full h-full p-4">
            <path d="M15,85 C45,75 65,95 95,85 C125,75 145,95 185,85 L185,110 L15,110 Z" {...fillProps} />
            <path d="M15,85 C45,75 65,95 95,85 C125,75 145,95 185,85" {...lineProps} strokeWidth="2" />
            
            <path d="M15,55 C45,45 65,65 95,55 C125,45 145,65 185,55" {...lineProps} strokeDasharray="3 3" />
            <path d="M15,25 C45,15 65,35 95,25 C125,15 145,35 185,25" {...lineProps} />

            <circle cx="100" cy="55" r="10" {...accentProps} />
          </svg>
        );
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
      className={`w-full h-full flex items-center justify-center transition-all duration-500 group-hover:scale-105 ${resolved.bgClass}`}
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
    </div>
  );
}
