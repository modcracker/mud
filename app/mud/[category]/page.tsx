import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink, ShieldAlert, Compass, Globe } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import { CATEGORY_FAQS } from "@/lib/faq-data";
import { SEMANTIC_MAP } from "@/lib/semantic-data";
import { GODADDY_URL } from "@/lib/config";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";
import { getPremiumMudImage } from "@/lib/images";
import { CategoryIllustration } from "@/components/category-illustration";
import { CCDomainShowcase } from "@/components/cc-domain-showcase";
import { ExtraCategoryLayers } from "@/components/extra-category-layers";

const SEO_HIGHLIGHTS: Record<string, {
  title: string;
  subtitle: string;
  content: string;
  fact1Label: string;
  fact1Value: string;
  fact2Label: string;
  fact2Value: string;
}> = {
  "dead-sea-mud": {
    title: "Geochemical Purity & Cellular Osmosis",
    subtitle: "The Mineral Dynamics of the Dead Sea Basin",
    content: "Beyond simple topical application, the therapeutic efficacy of Dead Sea mud lies in its unique saline saturation. Boasting a salt concentration of over 34%, the surrounding waters infuse the sedimentary clay with ionic minerals that cannot be replicated in synthetic laboratories. As the mud cures on the skin, it establishes a transdermal gradient that drives active magnesium and calcium ions into the extracellular matrix. This biochemical exchange supports barrier defense, accelerates lipid synthesis, and mitigates inflammatory pathways associated with psoriasis and rheumatoid arthritis. Our archive tracks these precise mineralogical ratios to provide a definitive scientific baseline for balneological therapy.",
    fact1Label: "Salinity Concentration",
    fact1Value: "34.2% TDS",
    fact2Label: "Primary Ionic Active",
    fact2Value: "Magnesium Rich"
  },
  "mississippi-mud-pie": {
    title: "The Culinary Evolution of Southern Mud Pie",
    subtitle: "From Reconstruction-Era Comfort to World-Famous Dessert",
    content: "The history of Mississippi Mud Pie is deeply intertwined with the culinary culture of the Mississippi Delta. Originally conceived as a simple, dense chocolate pudding baked in a flaky crust, the dessert's name was inspired by the dark, heavy alluvial soils left behind by the seasonal floods of the Mississippi River. Over the decades, this humble confection evolved into a sophisticated multi-tiered masterwork, incorporating chocolate cookie crust, flourless chocolate cake, rich fudge filling, and a pillowy whipped cream topping. This archive preserves the traditional recipes, regional variations, and cultural stories that elevated Mississippi Mud Pie from a localized delta comfort food into a globally recognized symbol of American baking craft.",
    fact1Label: "Nomenclature Origin",
    fact1Value: "Alluvial Silt",
    fact2Label: "Traditional Texture",
    fact2Value: "Decadent Layering"
  },
  "mud-run": {
    title: "Biomechanical Endurance & Obstacle Dynamics",
    subtitle: "Navigating Extreme Terrain and Earthen Barriers",
    content: "The modern mud run is more than an athletic competition; it is a grueling test of functional human movement against primal elemental forces. Navigating clay pits, deep silt trenches, and slick muddy slopes requires unique biomechanical adaptations. Runners must maintain low center of gravity, engage core stabilizer muscles, and execute explosive vertical thrusts to conquer steep earthen barriers. The physical viscosity of mud increases mechanical resistance, demanding higher cardiovascular output and testing mental resilience. This section of our repository explores the physical dynamics of extreme muddy courses, providing participants with training science, safety protocols, and biomechanical strategies to master the earth.",
    fact1Label: "Physical Resistance",
    fact1Value: "Viscous Drag",
    fact2Label: "Core Engagement",
    fact2Value: "Stabilizer Focus"
  },
  "mud-the-game": {
    title: "The Architectural Legacy of Text-Based Virtual Worlds",
    subtitle: "From MUD1 to Modern Multiplayer Networking",
    content: "Before high-definition graphics and virtual reality headsets, the entire cosmos of online gaming was rendered in the minds of players via text. Multi-User Dungeons (MUDs), pioneered in the late 1970s, established the core software architectures, community moderation protocols, and database structures that still power today's massive multiplayer online role-playing games (MMORPGs). Operating over low-bandwidth academic networks, early developers had to create rich, text-based simulation engines that could handle real-time spatial positioning, item persistence, and social interaction. Our repository curates the source code fragments, historical design documents, and network logs of these pioneering virtual spaces.",
    fact1Label: "Interface Paradigm",
    fact1Value: "Command-Line text",
    fact2Label: "Core Protocol",
    fact2Value: "Academic TCP/IP"
  },
  "mudslinging": {
    title: "The Rhetorical Mechanics of Political Slander",
    subtitle: "A Historical Analysis of Adversarial Campaigning",
    content: "Though often associated with modern 24-hour news cycles and digital social feeds, the practice of mudslinging—using personal attacks and character defamation to undermine a political opponent—has ancient rhetorical roots. From the vitriolic speeches of Roman senators to the highly partisan broadsheets of the early American republic, political combatants have long recognized that negative messaging often has higher cognitive retention than positive policy proposals. Our database analyzes the rhetorical devices, media delivery channels, and psychological impacts of mudslinging throughout history, charting how public opinion is shaped by adversarial narratives and how democratic institutions adapt to negative campaigning.",
    fact1Label: "Cognitive Impact",
    fact1Value: "Retention Bias",
    fact2Label: "Historical Root",
    fact2Value: "Ancient Rhetoric"
  },
  "clear-as-mud": {
    title: "Linguistic Idioms & Cognitive Ambiguity",
    subtitle: "The Semantics of Irony and Communication Failures",
    content: "The popular idiom 'clear as mud' serves as a classic linguistic example of sarcasmus—using irony to express the absolute opposite of literal meaning. Human communication relies heavily on these idiomatic expressions to convey complex emotional states and shared cultural understanding. When a message is described as 'clear as mud,' it highlights a breakdown in cognitive clarity, often due to over-engineering, jargon-heavy phrasing, or deliberate obfuscation. Our linguistic archive examines the historical origin of this phrase, its usage in literature and technical documentation, and the cognitive science behind how our brains process ironic statements to resolve mixed signals in everyday communication.",
    fact1Label: "Rhetorical Device",
    fact1Value: "Sarcastic Irony",
    fact2Label: "Linguistic Cost",
    fact2Value: "Cognitive Overload"
  },
  "mud-architecture": {
    title: "Vernacular Earthen Engineering & Thermal Mass",
    subtitle: "The Ancient Science of Sustainable Adobe Construction",
    content: "Mud and raw earth represent the most historically significant and ecologically sound building materials on Earth. From the ancient high-rise cities of Shibam in Yemen to the stunning adobe mosques of Mali, earthen architecture has housed humanity for millennia. The secret to its enduring success is thermal mass: thick mud walls naturally absorb heat during the scorching desert day and slowly release it during the freezing night, maintaining a stable indoor microclimate without active cooling systems. Furthermore, raw earth is 100% biodegradable and requires minimal embodied energy to produce. This archive documents the engineering specifications, chemical stabilizer mixtures, and preservation techniques of historical mud brick and rammed-earth structures.",
    fact1Label: "Climatic Regulation",
    fact1Value: "Thermal Inertia",
    fact2Label: "Environmental Impact",
    fact2Value: "Zero Embodied Carbon"
  },
  "mudlarking": {
    title: "Tidal Archaeology & the Thames Foreshore",
    subtitle: "Unlocking Centuries of History in Anaerobic River Silt",
    content: "Mudlarking—the practice of searching the river foreshore for historical artifacts—is a unique form of public archaeology. Along the banks of the River Thames, the thick, anaerobic (oxygen-deprived) mud acts as an exceptional preservative, protecting organic materials like leather shoes, wooden tools, and metallic pins from decay for hundreds of years. Every low tide reveals a fresh layer of historical detritus, spanning from Roman coins and medieval buckles to Victorian clay pipes. Our digital repository collaborates with licensed mudlarks and museum registrars to catalogue these direct physical links to London's working-class past, helping to preserve the stories of everyday people that are often omitted from official history books.",
    fact1Label: "Conservation Method",
    fact1Value: "Anaerobic Mud",
    fact2Label: "Deposition Cycle",
    fact2Value: "Tidal Sifting"
  },
  "mud-season": {
    title: "Seasonal Cryosphere Melt & Saturated Soils",
    subtitle: "The Hydrological Physics of Northern Spring Transitions",
    content: "In cold-temperate climates, the transition from winter to spring is marked by a challenging hydrological phenomenon known simply as 'mud season.' As snowpacks melt and spring rains arrive, the top layers of frozen soil thaw, releasing large volumes of liquid water. However, because the deeper subsoil layers remain frozen as solid permafrost, the water cannot drain downward. This creates an extremely saturated, low-shear-strength slurry of soil and water on unpaved roads and forest trails. Our scientific archive monitors these freezing-thawing cycles, studying how soil composition, vegetation cover, and changing climate patterns affect the duration and severity of mud season, impacting local logistics, forestry, and ecosystem health.",
    fact1Label: "Hydrological Trap",
    fact1Value: "Permafrost Layer",
    fact2Label: "Structural Failure",
    fact2Value: "Shear Collapse"
  },
  "mud-tires": {
    title: "Tread Geometry & Hydrodynamic Soil Evacuation",
    subtitle: "The Physics of Off-Road Traction on Saturated Clay",
    content: "Maintaining traction on deep, slick muddy terrain requires highly specialized tire engineering. Standard street tires quickly become packed with mud, turning into slick rubber cylinders with zero grip. Mud tires are engineered with extremely deep, aggressive tread blocks and wide void ratios. These wide channels utilize centrifugal force to eject packed mud as the tire rotates, continuously exposing clean rubber edges to bite into the underlying terrain. Additionally, mud tires feature reinforced sidewalls to prevent punctures from submerged debris and allow for running at low inflation pressures (airing down) to maximize the contact patch. Our engineering archive explores the fluid mechanics of self-cleaning tread designs.",
    fact1Label: "Evacuation Action",
    fact1Value: "Centrifugal Ejection",
    fact2Label: "Contact Optimization",
    fact2Value: "Low-Pressure Traction"
  }
};

const CATEGORY_TAGS: Record<string, { text: string; weight: number }[]> = {
  "dead-sea-mud": [
    { text: "Balneotherapy", weight: 3 },
    { text: "Therapeutic Clay", weight: 2 },
    { text: "Halite Sediments", weight: 1 },
    { text: "Magnesium Osmosis", weight: 3 },
    { text: "Psoriasis Remediation", weight: 2 },
    { text: "Rift Valley Basin", weight: 1 },
    { text: "Mineralogical Density", weight: 3 },
    { text: "Transdermal Ionic Exchange", weight: 2 },
    { text: "Epidermal Barrier Protection", weight: 1 },
    { text: "Silt Suspension", weight: 2 },
    { text: "Hydrosols", weight: 1 }
  ],
  "mississippi-mud-pie": [
    { text: "Delta Foodways", weight: 3 },
    { text: "Alluvial Flourless Cake", weight: 2 },
    { text: "Mississippi Delta", weight: 1 },
    { text: "Fudge Glaze Layering", weight: 3 },
    { text: "Graham Cracker Crust", weight: 2 },
    { text: "Whipped Custard", weight: 1 },
    { text: "Reconstruction Era Baking", weight: 3 },
    { text: "Cacao Solids", weight: 2 },
    { text: "Southern Comfort Confections", weight: 2 },
    { text: "Culinary Heritage", weight: 1 }
  ],
  "mud-run": [
    { text: "Obstacle Biomechanics", weight: 3 },
    { text: "Saturated Clay Incline", weight: 2 },
    { text: "Viscous Drag Resistance", weight: 1 },
    { text: "Endurance Physiology", weight: 3 },
    { text: "Anaerobic Muscle Strain", weight: 2 },
    { text: "Traction Stabilization", weight: 1 },
    { text: "Earthen Barriers", weight: 3 },
    { text: "Silt Pit Navigations", weight: 2 },
    { text: "Physical Resilience", weight: 1 }
  ],
  "mud-the-game": [
    { text: "Multi-User Dungeon", weight: 3 },
    { text: "Text-Based Virtual Worlds", weight: 2 },
    { text: "MUD1 Legacy", weight: 1 },
    { text: "Telnet TCP/IP", weight: 3 },
    { text: "Command-Line Parsers", weight: 2 },
    { text: "Spatial Pathfinding", weight: 1 },
    { text: "Persistent Inventory Database", weight: 3 },
    { text: "ANSI Escape Codes", weight: 2 },
    { text: "Multiplayer Concurrency", weight: 1 },
    { text: "Early Internet Culture", weight: 2 }
  ],
  "mudslinging": [
    { text: "Adversarial Rhetoric", weight: 3 },
    { text: "Character Defamation", weight: 2 },
    { text: "Partisan Broadsheets", weight: 1 },
    { text: "Cognitive Retention Bias", weight: 3 },
    { text: "Slander Campaign Metrics", weight: 2 },
    { text: "Negative Advertisement", weight: 1 },
    { text: "Sophist Political Debate", weight: 3 },
    { text: "Public Sentiment Manipulation", weight: 2 },
    { text: "Democratic Institutional Friction", weight: 1 }
  ],
  "clear-as-mud": [
    { text: "Sarcastic Irony", weight: 3 },
    { text: "Idiomatic Semantic Shift", weight: 2 },
    { text: "Cognitive Ambiguity", weight: 1 },
    { text: "Information Obfuscation", weight: 3 },
    { text: "Jargon Over-Engineering", weight: 2 },
    { text: "Linguistic Interpretations", weight: 1 },
    { text: "Mixed Signal Processing", weight: 3 },
    { text: "Colloquial Metaphor", weight: 2 },
    { text: "Rhetorical Contradiction", weight: 1 }
  ],
  "mud-architecture": [
    { text: "Vernacular Architecture", weight: 3 },
    { text: "Thermal Inertia Dynamics", weight: 2 },
    { text: "Sun-Dried Adobe Brick", weight: 1 },
    { text: "Rammed-Earth Stabilizers", weight: 3 },
    { text: "Shibam Skyscraper Engineering", weight: 2 },
    { text: "Embodied Carbon Minimization", weight: 1 },
    { text: "Alkali-Silica Reactions", weight: 3 },
    { text: "Sustainable Clay Plasters", weight: 2 },
    { text: "Earthen Cob Construction", weight: 1 }
  ],
  "mudlarking": [
    { text: "Tidal Foreshore Archaeology", weight: 3 },
    { text: "Anaerobic Preservation", weight: 2 },
    { text: "Thames Silt Deposits", weight: 1 },
    { text: "Roman Coinage Retrieval", weight: 3 },
    { text: "Clay Pipe Stratigraphy", weight: 2 },
    { text: "Registrar Licensing Protocols", weight: 1 },
    { text: "Working-Class Material Culture", weight: 3 },
    { text: "Artifact Cataloguing", weight: 2 },
    { text: "Estuary Sediment Dynamics", weight: 1 }
  ],
  "mud-season": [
    { text: "Hydrological Spring Thaw", weight: 3 },
    { text: "Permafrost Drainage Barrier", weight: 2 },
    { text: "Saturated Silt Shear Collapse", weight: 1 },
    { text: "Cryosphere Meltwater Pulse", weight: 3 },
    { text: "Soil Shear Strength Failure", weight: 2 },
    { text: "Unpaved Logistic Disruption", weight: 1 },
    { text: "Ecosystem Frost Heaving", weight: 3 },
    { text: "Runoff Waterlogging", weight: 2 }
  ],
  "mud-tires": [
    { text: "Tread Void Ratio", weight: 3 },
    { text: "Centrifugal Mud Evacuation", weight: 2 },
    { text: "Off-Road Drag Mechanics", weight: 1 },
    { text: "Low-Pressure Air-Down Grip", weight: 3 },
    { text: "Staggered Shoulder Knobs", weight: 2 },
    { text: "Saturated Clay Traversal", weight: 1 },
    { text: "Sidewall Reinforcement", weight: 3 },
    { text: "Self-Cleaning Tread Mechanics", weight: 2 }
  ]
};

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = CATEGORIES.find((cat) => cat.slug === slug);
  if (!category) return {};

  return generatePageMetadata({
    title: `${category.title} — ${category.subtitle}`,
    description: category.description,
    path: `/mud/${category.slug}`,
    image: getPremiumMudImage(category.slug, "magazine"),
    keywords: [
      category.title.toLowerCase(),
      category.subtitle.toLowerCase(),
      `${category.slug} industry`,
      `${category.slug} directory`,
      `organic ${category.slug}`,
      "mud.cc hub"
    ],
  });
}

export default async function CategoryHubPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = CATEGORIES.find((cat) => cat.slug === slug);

  if (!category) {
    notFound();
  }

  // Get related category links
  const relatedCategories = CATEGORIES.filter((cat) =>
    category.relatedSlugs.includes(cat.slug)
  );

  const baseUrl = getBaseUrl();
  const faqs = CATEGORY_FAQS[category.slug] || [];
  const sem = SEMANTIC_MAP[category.slug];
  const seoInfo = SEO_HIGHLIGHTS[category.slug];
  const tags = CATEGORY_TAGS[category.slug] || [];

  // JSON-LD dynamic structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": sem?.specialtyType === "MedicalWebPage" ? "MedicalWebPage" : "WebPage",
        "@id": `${baseUrl}/mud/${category.slug}/#webpage`,
        "url": `${baseUrl}/mud/${category.slug}`,
        "name": `${category.title} Directory — mud.cc`,
        "description": category.description,
        "about": {
          "@type": "Thing",
          "name": category.title,
          "description": category.shortTeaser,
          "sameAs": sem?.sameAs || []
        },
        "audience": {
          "@type": "Audience",
          "audienceType": sem?.targetAudience || "General Public"
        },
        "mentions": (sem?.knowsAbout || []).map((topic) => ({
          "@type": "Thing",
          "name": topic
        })),
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": baseUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": category.title,
              "item": `${baseUrl}/mud/${category.slug}`
            }
          ]
        }
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            },
          ]
        : [])
    ]
  };

  // Unique theme styles mapping
  const theme = category.theme;

  return (
    <div className={`w-full min-h-screen ${theme.bg} transition-colors duration-500`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Navigation */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Directory
        </Link>
      </header>

      {/* Hero Section with Overlapping Image Composition */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left text spread */}
        <div className="lg:col-span-7 space-y-6">
          <span className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${theme.badge}`}>
            <Globe size={12} /> {category.subtitle} Core Topic
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-stone-900 leading-tight">
            The Cultural & Physical Footprint of{" "}
            <span className="text-amber-600 block sm:inline">{category.title}</span>
          </h1>
          
          <p className="text-lg text-stone-600 leading-relaxed font-sans max-w-2xl">
            {category.description}
          </p>

          <div className="pt-2">
            <a
              href="#subpages-index"
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              Begin Research Inquiry <Compass size={14} />
            </a>
          </div>
        </div>

        {/* Right layered image composition (CSS Grid / absolute positioning) */}
        <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] w-full mt-8 lg:mt-0">
          
          {/* Base Layer Image (Offset left and back) */}
          <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-3xl overflow-hidden shadow-lg border border-stone-300 transform -rotate-3 transition-transform hover:rotate-0 duration-500 z-10">
            <Image
              src={getPremiumMudImage(category.slug, "layered1")}
              alt={`${category.title} background composite`}
              fill
              className="object-cover"
              sizes="35vw"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Focal Layer Image (Overlaps top layer, offset right and front) */}
          <div className="absolute bottom-0 right-0 w-[75%] h-[75%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 transition-transform hover:rotate-0 duration-500 z-20">
            <Image
              src={getPremiumMudImage(category.slug, "layered2")}
              alt={`${category.title} foreground composite`}
              fill
              className="object-cover"
              sizes="35vw"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Micro accent badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-stone-950 p-3 rounded-2xl shadow-xl font-mono text-[10px] font-bold tracking-wider uppercase z-30 transform hover:scale-110 transition-transform hidden sm:block">
            Registry Archive • {category.slug}
          </div>
        </div>

      </section>

      {/* New Middle Layer: Deep SEO Editorial & Custom Artwork */}
      {seoInfo && (
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20" id="editorial-deep-dive">
          <div className={`relative rounded-3xl overflow-hidden border p-8 md:p-12 shadow-sm ${
            category.slug === "mud-the-game" 
              ? "bg-zinc-900/40 border-emerald-950/60" 
              : "bg-white/40 border-stone-200/60"
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Visual Artwork (Exquisite Framed CategoryIllustration) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className={`w-full max-w-sm aspect-square rounded-2xl overflow-hidden border p-4 shadow-inner ${
                  category.slug === "mud-the-game"
                    ? "bg-zinc-950/80 border-emerald-950/40"
                    : "bg-stone-50 border-stone-200/40"
                }`}>
                  <CategoryIllustration slug={category.slug} theme={category.theme} />
                </div>
              </div>

              {/* Right Column: Deep-Dive Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest font-mono ${
                    category.slug === "mud-the-game" ? "text-emerald-400" : "text-amber-600"
                  }`}>
                    GEOLOGICAL &amp; SCIENTIFIC ARCHIVE • {category.subtitle}
                  </span>
                  <h2 className={`text-2xl md:text-3xl font-bold font-display tracking-tight ${
                    category.slug === "mud-the-game" ? "text-zinc-100" : "text-stone-900"
                  }`}>
                    {seoInfo.title}
                  </h2>
                  <p className={`text-xs font-semibold ${
                    category.slug === "mud-the-game" ? "text-emerald-500/80" : "text-amber-700"
                    }`}>
                    {seoInfo.subtitle}
                  </p>
                </div>

                <p className={`text-sm leading-relaxed ${
                  category.slug === "mud-the-game" ? "text-zinc-300" : "text-stone-600"
                }`}>
                  {seoInfo.content}
                </p>

                {/* Micro-metrics/facts row */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200/40">
                  <div className="space-y-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider font-mono ${
                      category.slug === "mud-the-game" ? "text-zinc-500" : "text-stone-400"
                    }`}>
                      {seoInfo.fact1Label}
                    </span>
                    <p className={`text-sm font-bold font-display ${
                      category.slug === "mud-the-game" ? "text-emerald-400" : "text-stone-900"
                    }`}>
                      {seoInfo.fact1Value}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider font-mono ${
                      category.slug === "mud-the-game" ? "text-zinc-500" : "text-stone-400"
                    }`}>
                      {seoInfo.fact2Label}
                    </span>
                    <p className={`text-sm font-bold font-display ${
                      category.slug === "mud-the-game" ? "text-emerald-400" : "text-stone-900"
                    }`}>
                      {seoInfo.fact2Value}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* New Middle Layer 2: Semantic Metadata & High-End Tag Cloud */}
      {tags.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-8" id="semantic-tag-cloud">
          <div className={`rounded-3xl border p-6 md:p-8 ${
            category.slug === "mud-the-game"
              ? "bg-zinc-900/20 border-emerald-950/40"
              : "bg-stone-50/50 border-stone-200/40"
          }`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div className="space-y-1">
                <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${
                  category.slug === "mud-the-game" ? "text-emerald-400" : "text-amber-700"
                }`}>
                  SEO Taxonomy Indexing &amp; Key Entities
                </span>
                <h3 className={`text-lg font-bold font-display tracking-tight ${
                  category.slug === "mud-the-game" ? "text-zinc-200" : "text-stone-900"
                }`}>
                  Semantic Terminology Cloud
                </h3>
              </div>
              <p className={`text-xs max-w-md ${
                category.slug === "mud-the-game" ? "text-zinc-400" : "text-stone-500"
              }`}>
                Explore key ontological classifications, conceptual frameworks, and scientific terminology linked directly to our curated archive of {category.title}.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 md:gap-3 items-center justify-start py-2">
              {tags.map((tag, idx) => {
                // Style based on weight for editorial beauty
                const isGame = category.slug === "mud-the-game";
                let sizeClass = "text-xs px-2.5 py-1";
                let colorClass = "";

                if (tag.weight === 3) {
                  sizeClass = "text-sm font-semibold px-4 py-1.5";
                  colorClass = isGame 
                    ? "bg-emerald-950/40 text-emerald-300 border-emerald-500/40 shadow-sm" 
                    : "bg-amber-50 text-amber-900 border-amber-300/60 shadow-sm";
                } else if (tag.weight === 2) {
                  sizeClass = "text-xs font-medium px-3 py-1";
                  colorClass = isGame
                    ? "bg-zinc-800/60 text-zinc-300 border-emerald-950/40"
                    : "bg-white text-stone-700 border-stone-200";
                } else {
                  sizeClass = "text-[11px] px-2.5 py-0.5";
                  colorClass = isGame
                    ? "bg-zinc-900/40 text-zinc-400 border-zinc-800/40 opacity-75"
                    : "bg-stone-100/40 text-stone-500 border-stone-100 opacity-80";
                }

                return (
                  <span
                    key={idx}
                    className={`inline-block rounded-full border transition-all duration-300 hover:scale-105 select-none ${sizeClass} ${colorClass}`}
                  >
                    {tag.text}
                  </span>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CCDomainShowcase Layer (Unique Dark Theme Layout) */}
      <CCDomainShowcase slug={category.slug} />

      {/* 6 Additional Rich Dynamic Content & Interactive Layers */}
      <ExtraCategoryLayers slug={category.slug} theme={category.theme} />

      {/* Subpage Index Layout Links */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-4 mb-10">
          <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight text-stone-900">
            Factual Library Nodes
          </h2>
          <p className="text-stone-500 text-sm max-w-xl">
            Each library node below is custom engineered around a specific historical, industrial, or scientific angle of {category.title}, styled to index optimally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.subpages.map((sub, idx) => (
            <div
              key={sub.slug}
              className="bg-white border border-stone-200 hover:border-stone-300 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                  {sub.layout === "magazine" ? "Editorial Narrative" : sub.layout === "timeline" ? "Historical Chronicle" : "Taxonomical Study"}
                </span>
                <h3 className="text-xl font-bold font-display tracking-tight text-stone-900 hover:text-amber-600 transition-colors">
                  {sub.title}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed line-clamp-3">
                  {sub.description}
                </p>
                <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-stone-100 shadow-inner bg-stone-50/10 p-1">
                  <CategoryIllustration slug={category.slug} theme={theme} />
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-400 font-mono">
                  VOLUME {idx + 1} • INDEXED
                </span>
                <Link
                  href={`/mud/${category.slug}/${sub.slug}`}
                  className={`inline-flex items-center gap-1 font-bold uppercase tracking-wider ${theme.accent}`}
                >
                  Enter Publication <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic SEO FAQs Section (Adaptive Theme Integration) */}
      {faqs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t ${category.slug === "mud-the-game" ? "border-emerald-850/40" : "border-stone-200/60"}`}>
            
            {/* Split layout: left column header block */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-4">
                <span className={`text-[10px] font-bold uppercase tracking-widest font-mono ${category.slug === "mud-the-game" ? "text-emerald-400" : "text-amber-600"}`}>
                  TOPICAL REVELATIONS
                </span>
                <h2 className={`text-3xl font-bold font-display tracking-tight ${category.slug === "mud-the-game" ? "text-zinc-100" : "text-stone-900"}`}>
                  Frequently Asked Questions
                </h2>
                <p className={`text-sm leading-relaxed font-sans ${category.slug === "mud-the-game" ? "text-zinc-400" : "text-stone-500"}`}>
                  Curated authority insights, scientific explanations, and historical data points mapping the multi-disciplinary reach of {category.title}.
                </p>
              </div>
              <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden border p-2 shadow-inner ${
                category.slug === "mud-the-game"
                  ? "bg-zinc-950/80 border-emerald-950/40"
                  : "bg-white border-stone-200/60"
              }`}>
                <CategoryIllustration slug={category.slug} theme={theme} />
              </div>
            </div>

            {/* Split layout: right column question stack */}
            <div className="lg:col-span-8 space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
                    category.slug === "mud-the-game"
                      ? "bg-zinc-900/30 border-emerald-950/60 hover:border-emerald-800/40 hover:bg-zinc-900/50"
                      : "bg-white/50 border-stone-200/60 hover:border-stone-300/80 hover:bg-white/80"
                  }`}
                >
                  <h3 className={`text-base font-bold font-display flex items-start gap-3 ${
                    category.slug === "mud-the-game" ? "text-emerald-400" : "text-stone-900"
                  }`}>
                    <span className={`${category.slug === "mud-the-game" ? "text-emerald-500" : "text-amber-600"} font-mono text-sm shrink-0`}>
                      Q.
                    </span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className={`text-sm leading-relaxed font-sans mt-3 pl-6 border-l ${
                    category.slug === "mud-the-game"
                      ? "text-zinc-300 border-emerald-800/40"
                      : "text-stone-600 border-amber-500/30"
                  }`}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Repeated Inline Domain CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-bold uppercase text-amber-600 tracking-wider font-mono">Soil &amp; Sediment Stewardship</span>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-stone-900 tracking-tight">
              Sustaining the Earth&apos;s Sediment Heritage
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              The <span className="font-semibold text-stone-800">mud.cc</span> scientific library is compiled in partnership with the International Earthen Research Network. We are dedicated to documenting the mineral, geological, historical, and biological importance of clay, silt, and earthen resources globally.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <Link
              href="/philanthropy"
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-6 py-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              Support Earthen Conservation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sideways Internal Linking (Topical Relevance Network) */}
      <section className="bg-stone-100 border-t border-stone-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs uppercase tracking-widest font-mono text-stone-500 font-bold flex flex-wrap items-center gap-2">
            Earthen Research Network
            <span className="text-stone-300">|</span>
            <span className="normal-case font-normal text-stone-400">
              Department of Geochemical Studies
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center">
            {relatedCategories.map((related) => (
              <Link
                key={related.slug}
                href={`/mud/${related.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-amber-600 transition-colors"
              >
                Explore {related.title} <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
