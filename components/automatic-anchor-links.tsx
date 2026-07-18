"use client";

import React, { useMemo } from "react";
import Link from "next/link";

interface AnchorTerm {
  phrase: string;
  href: string;
}

const ANCHOR_TERMS: AnchorTerm[] = [
  {
    phrase: "educational clay mineralogy and soil science archive",
    href: "/mud/mud-architecture"
  },
  {
    phrase: "rammed earth sustainable building techniques guide",
    href: "/taxonomy/rammed-earth-tensile-in-saharan-arid-shield"
  },
  {
    phrase: "therapeutic mud minerals for natural skincare",
    href: "/taxonomy/colloidal-silt-suspension-in-jordan-rift-valley"
  },
  {
    phrase: "geotechnical engineering of spring mud season",
    href: "/taxonomy/silt-fraction-stability-in-siberian-permafrost"
  },
  {
    phrase: "ancient cob architecture and clay constructions",
    href: "/taxonomy/rammed-earth-tensile-in-kalahari-plateau"
  },
  {
    phrase: "mineral rich silt and alluvial soil geomorphology",
    href: "/taxonomy/clay-lattice-osmosis-in-amazonian-floodplain"
  },
  {
    phrase: "history of text based multi user dungeon gaming",
    href: "/taxonomy/packet-routing-protocol-in-sunda-shelf"
  },
  {
    phrase: "river thames mudlarking historical archaeology artifacts",
    href: "/taxonomy/anaerobic-foreshore-preservation-in-thames-estuary"
  },
  {
    phrase: "traditional southern Mississippi mud pie recipes",
    href: "/taxonomy/colloidal-pie-density-in-mississippi-delta"
  },
  {
    phrase: "off road automotive mud tire traction performance",
    href: "/taxonomy/centrifugal-evacuation-speed-in-appalachian-highlands"
  },
  // Shorter high-traffic terms
  {
    phrase: "river thames mudlarking",
    href: "/mud/mudlarking"
  },
  {
    phrase: "Mississippi mud pie",
    href: "/mud/mississippi-mud-pie"
  },
  {
    phrase: "mudlarking",
    href: "/mud/mudlarking"
  },
  {
    phrase: "rammed earth",
    href: "/mud/mud-architecture"
  },
  {
    phrase: "mud season",
    href: "/mud/mud-season"
  },
  {
    phrase: "mud tire",
    href: "/mud/mud-tires"
  },
  {
    phrase: "mud tires",
    href: "/mud/mud-tires"
  },
  {
    phrase: "cob architecture",
    href: "/mud/mud-architecture"
  },
  {
    phrase: "soil science",
    href: "/mud/mud-architecture"
  },
  {
    phrase: "clay mineralogy",
    href: "/mud/mud-architecture"
  },
  {
    phrase: "alluvial soil",
    href: "/taxonomy/clay-lattice-osmosis-in-amazonian-floodplain"
  },
  {
    phrase: "multi user dungeon",
    href: "/mud/mud-the-game"
  },
  {
    phrase: "sedimentology",
    href: "/"
  },
  {
    phrase: "geotechnical engineering",
    href: "/mud/mud-season"
  },
  {
    phrase: "geotech",
    href: "/mud/mud-season"
  }
];

interface AutomaticAnchorLinksProps {
  text: string;
}

export default function AutomaticAnchorLinks({ text }: AutomaticAnchorLinksProps) {
  const renderedContent = useMemo(() => {
    if (!text) return null;

    // Sort descending by length so that longer matches are evaluated first
    const sortedTerms = [...ANCHOR_TERMS].sort((a, b) => b.phrase.length - a.phrase.length);
    const escapedPhrases = sortedTerms.map(t => 
      t.phrase.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    );
    
    const regex = new RegExp(`\\b(${escapedPhrases.join('|')})\\b`, 'gi');
    const parts = text.split(regex);
    
    if (parts.length <= 1) {
      return text;
    }

    return parts.map((part, index) => {
      if (index % 2 === 1) {
        const matchedTerm = sortedTerms.find(
          t => t.phrase.toLowerCase() === part.toLowerCase()
        );
        if (matchedTerm) {
          return (
            <Link
              key={index}
              href={matchedTerm.href}
              className="text-amber-700 hover:text-amber-950 font-bold border-b border-amber-500/30 hover:border-amber-600 transition-all duration-200"
            >
              {part}
            </Link>
          );
        }
      }
      return part;
    });
  }, [text]);

  return <>{renderedContent}</>;
}
