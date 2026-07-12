export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface CrossLink {
  title: string;
  href: string;
  reason: string;
}

export interface DetailSection {
  heading: string;
  text: string;
  bulletPoints?: string[];
}

export interface DetailPageData {
  slug: string;
  parentSubpageSlug: string;
  parentCategorySlug: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
  readTime: string;
  publishDate: string;
  author: string;
  sections: DetailSection[];
  technicalSpecs: TechnicalSpec[];
  crossLinks: CrossLink[];
}

// The 5 core hand-crafted historical and technical treatises
const STATIC_DETAIL_PAGES: DetailPageData[] = [
  {
    slug: "ionic-exchanges",
    parentSubpageSlug: "mineral-mud-masks",
    parentCategorySlug: "dead-sea-mud",
    title: "Dermal Absorption & Ionic Exchanges",
    subtitle: "Cellular Bio-Mechanisms of Clay Mud Wraps",
    description: "A chemical study on the active transport of magnesium, calcium, and sulfur ions across the human skin barrier during mud balneotherapy.",
    keywords: ["dermal absorption", "ionic exchange", "magnesium absorption", "stratum corneum", "clay mineralogy", "dead sea mud science"],
    readTime: "7 min read",
    publishDate: "2026-02-18T09:00:00Z",
    author: "mud.cc Biochemistry Lab",
    sections: [
      {
        heading: "The Stratum Corneum and Osmotic Pressure",
        text: "The stratum corneum, the outermost layer of the human epidermis, acts as a highly resilient hydrophobic barrier preventing water loss and shielding against external pollutants. During a Dead Sea mud application, however, we introduce an extremely high concentration of dissolved ions (including magnesium, sodium, potassium, and calcium) suspended in an aqueous clay slurry. This creates a powerful concentration gradient between the mud and the intracellular spaces of the epidermis. The resulting osmotic pressure temporarily alters the cellular volume of the corneocytes, hydrating the extracellular lipid matrix and expanding microscopic transport pathways.",
        bulletPoints: [
          "Magnesium Concentration: Dead Sea mud contains up to 15 times higher magnesium levels than standard ocean water.",
          "Lipid Hydration: Prolonged contact with moist clay softens the lipid bilayer, reducing the mechanical barrier resistance.",
          "Transcellular Migration: Solutes pass through both intracellular channels and follicle openings."
        ]
      },
      {
        heading: "Magnesium Transport and Intracellular Homeostasis",
        text: "Magnesium ions (Mg2+) play a critical role in cellular repair, acting as cofactors for over 300 enzymatic reactions, including DNA replication and protein synthesis. Because of their charge and hydration shell, free Mg2+ ions cannot easily pass through the lipophilic cell membrane. Instead, they leverage specialized ion channels and transient receptor potential (TRP) channels. Once absorbed, magnesium inhibits the release of inflammatory cytokines, decreases localized histamine reactions, and enhances the synthesis of ceramides, which are essential for maintaining a strong, hydrated skin barrier.",
        bulletPoints: [
          "TRPM7 Channels: Prime molecular channels involved in cutaneous magnesium absorption.",
          "Ceramide Synthesis: Magnesium acts as an essential catalyst for serine palmitoyltransferase.",
          "Cytokine Suppression: Reduces IL-1α and TNF-α expression in response to environmental stressors."
        ]
      },
      {
        heading: "Sulfur Oxidation and Antimicrobial Action",
        text: "The presence of elemental sulfur and organosulfur compounds in the mud slurry triggers a series of biochemical oxidation reactions upon contact with skin. Keratinocytes metabolize these sulfur compounds into hydrogen sulfide and polythionic acids, which exhibit natural keratolytic, antifungal, and antibacterial properties. This mild, controlled peeling process dissolves the keratin plugs that block oil glands, making it an incredibly effective clinical treatment for chronic acne vulgaris, seborrheic dermatitis, and plaque psoriasis.",
        bulletPoints: [
          "Keratolysis: Mild degradation of cell-adhesion desmosomes, prompting healthy cell shedding.",
          "Antiseptic Action: Polythionic acids inhibit Propionibacterium acnes growth in the follicular canal.",
          "Synergistic Effect: Enhanced when combined with natural trace copper and zinc ions present in the clay."
        ]
      }
    ],
    technicalSpecs: [
      { label: "Active pH Range", value: "5.8 – 6.4 (Bio-compatible)" },
      { label: "Magnesium Density", value: "92,000 mg/kg of dry weight" },
      { label: "Clay Mineral Type", value: "Montmorillonite & Illite complex" },
      { label: "Dermal Penetration Depth", value: "Epidermal interface (0.12 mm)" }
    ],
    crossLinks: [
      {
        title: "Thermal Mass Thermodynamics & Tensile Load Chemistry",
        href: "/mud/mud-architecture/adobe-and-cob-construction/earthen-thermodynamics",
        reason: "Explore how the mineralogy of clay lattices in human therapy parallels the structural thermal properties of rammed earth walls."
      },
      {
        title: "Thames Silt Preservation Chemistry",
        href: "/mud/mudlarking/thames-mudlarking/anaerobic-preservation",
        reason: "Understand how fine-grained anaerobic silt excludes oxidation to preserve historical artifacts and biological matter."
      }
    ]
  },
  {
    slug: "cocoa-crystallization",
    parentSubpageSlug: "classic-recipe-lore",
    parentCategorySlug: "mississippi-mud-pie",
    title: "Cocoa Alkalization & Structural Crystallization",
    subtitle: "The Food Science of Southern Silt Cakes",
    description: "The physics of the perfect Dutch-process chocolate bake and its chemical impact on the structural density of chocolate silt layers.",
    keywords: ["cocoa alkalization", "dutch process chocolate", "lipid crystallization", "food science", "mississippi mud pie chemistry", "baking physics"],
    readTime: "6 min read",
    publishDate: "2026-03-12T10:00:00Z",
    author: "mud.cc Culinary Science Institute",
    sections: [
      {
        heading: "Dutch Processing: Chemical Alkalization of Cocoa",
        text: "At the heart of the Mississippi Mud Pie's dense, nearly black base layer is the use of Dutch-process cocoa powder. Unlike natural cocoa powder, which is acidic (pH 5.3 to 5.8), Dutch-process cocoa is treated with an alkaline solution (potassium carbonate) to neutralize its acidity, raising the pH to a stable 7.0 or even 8.0. This chemical neutralization drastically alters the cocoa's behavior. It reduces the harsh astringency, intensifies the dark color, and increases the solubility of the cocoa particles in lipid-based mixtures.",
        bulletPoints: [
          "pH Neutralization: Elevating pH from ~5.5 to 7.2 softenes bitter tannins.",
          "Starch Gelatinization: High pH promotes faster starch swelling in the presence of hot liquids.",
          "Color Shift: Darkening occurs due to the structural rearrangement of polyphenolic compounds."
        ]
      },
      {
        heading: "Lipid Polymorphism and Cocoa Butter Crystallization",
        text: "The unique fudgy, melt-in-the-mouth texture of a mud pie is governed by the crystallization of cocoa butter—a complex triglyceride mixture. Cocoa butter is polymorphic, meaning it can solidify into six distinct crystal forms (Form I through Form VI). For a mud pie to achieve its dense, stable, and velvety consistency without turning chalky, bakers must encourage the formation of stable Form V crystals (Beta-prime). This is achieved through careful thermal management: melting the chocolate slowly with butter and cooling it at a controlled rate, avoiding rapid temperature shocks that yield crumbly, unstable Form IV lattices.",
        bulletPoints: [
          "Form V Beta-prime: The ideal crystal structure, melting at precisely 33.8°C (human body temperature).",
          "Fat Bloom Mitigation: Controlled cooling keeps the fat crystals small, preventing surface migration (whitish bloom).",
          "Viscosity Control: Emulsifiers like soy lecithin in chocolate assist in keeping cocoa solids suspended in the fat matrix."
        ]
      },
      {
        heading: "Gluten Suppression and the Physics of Silt Layers",
        text: "In bread or standard sponge cakes, flour is beaten with liquids to develop a strong, elastic gluten network that traps carbon dioxide bubbles. In a Mississippi Mud Pie, however, we want to achieve a dense, heavy, river-silt texture. To accomplish this, the recipe utilizes minimal flour and eliminates chemical leaveners entirely. The high concentration of sugar and fat physically coats the flour proteins (gliadin and glutenin), preventing them from linking together to form gluten. Lacking a structural gluten web, the starch granules gelatinize in a rich pool of melted butter and sugar, producing an ultra-dense, moist cake layer that feels like wet, rich delta mud.",
        bulletPoints: [
          "Shortening the Crumb: High fat-to-flour ratio prevents cohesive gluten chains.",
          "No Aeration: Mixing is done gently to avoid whipping air into egg whites, maintaining a heavy density.",
          "Espresso Enhancement: Adding a tiny dose of coffee amplifies the cocoa flavor by blocking adenosine receptors that mute sweetness."
        ]
      }
    ],
    technicalSpecs: [
      { label: "Optimal Cocoa pH", value: "7.2 – 7.8 (Alkaline)" },
      { label: "Lipid Melting Point", value: "33.8°C (92.8°F)" },
      { label: "Water Activity (Aw)", value: "0.78 (Soft-moist threshold)" },
      { label: "Gluten Content", value: "Minimal (< 2% structural contribution)" }
    ],
    crossLinks: [
      {
        title: "Dermal Absorption & Ionic Exchanges",
        href: "/mud/dead-sea-mud/mineral-mud-masks/ionic-exchanges",
        reason: "Compare the osmotic draw of Dead Sea mud masks with the moisture-retention capabilities of highly saturated baking syrups."
      },
      {
        title: "The Physics of Rammed Earth Walls",
        href: "/mud/mud-architecture/adobe-and-cob-construction/earthen-thermodynamics",
        reason: "Explore how aggregate blending (gravel-sand-clay) in architecture mirrors the lipid-starch ratios needed to bake a stable cake foundation."
      }
    ]
  },
  {
    slug: "pdp10-parsing",
    parentSubpageSlug: "mud-origins",
    parentCategorySlug: "mud-the-game",
    title: "DEC PDP-10 Terminal Parsing Mechanics",
    subtitle: "Architecture of the First Shared Virtual Space",
    description: "An analysis of the lexical parsers, command lines, and shared socket buffers that enabled the world's first real-time multi-user network dungeon.",
    keywords: ["pdp-10", "mud origins", "terminal parsing", "lexical analysis", "retrocomputing", "command line parse", "multiplayer game architecture"],
    readTime: "8 min read",
    publishDate: "2026-04-05T11:00:00Z",
    author: "mud.cc Retro-Computing Archives",
    sections: [
      {
        heading: "The DEC PDP-10 System Architecture",
        text: "The birth of MUD1 in 1978 was entirely dependent on the unique computing environment of the Digital Equipment Corporation PDP-10 mainframe computer. Running on the TOPS-10 or TENEX/TOPS-20 operating system, the PDP-10 utilized a 36-bit word length—a significant departure from modern 8-bit byte structures. This 36-bit layout allowed developers to pack five 7-bit ASCII characters into a single word with one bit left over, optimizing memory and file sizes. Roy Trubshaw and Richard Bartle programmed the initial MUD in MACRO-10 (assembly language) and BCPL, a direct ancestor of the C programming language, designed specifically to operate within these tight mainframe boundaries.",
        bulletPoints: [
          "36-Bit Memory Words: Allowed efficient string storage via 7-bit ASCII packaging.",
          "Timesharing Sockets: Enabled dozens of remote physical terminals (teletypes) to connect to a single central processor.",
          "Virtual Address Limits: Program code and data had to fit within a 256-kiloword (approx. 1.15 MB) address space."
        ]
      },
      {
        heading: "Lexical Analysis of Early Command Parsers",
        text: "Since graphics were non-existent, the player's interaction with the game was entirely conversational. The parser acted as the gatekeeper, translating raw text input into state changes. Early parsers used simple Verb-Noun matching structures. The code grabbed the first word of the user input, searched a pre-compiled verb table (e.g., 'GET', 'KILL', 'OPEN'), and then scanned the remaining words for nouns matching items in the player's current room. If a match was found, the server modified the entity database—updating the object's parent container from 'Room ID 45' to 'Player Inventory'—and returned a formatted string confirming the action.",
        bulletPoints: [
          "String Tokenization: Splitting terminal input into distinct command verb and object tokens.",
          "Abbreviation Matching: Allowing users to type 'G SW' instead of 'GET SWORD' to save valuable dial-up typing time.",
          "Context-Sensitive Synonyms: Mapping multiple strings ('TAKE', 'GRAB', 'GET') to a single internal command identifier."
        ]
      },
      {
        heading: "The Shared Database and Socket Buffer Synchronization",
        text: "To support multiple users in a single virtual world, the server had to process actions concurrently without corrupting the game state. MUD1 achieved this by utilizing a single-threaded main loop that polled terminal socket buffers. Incoming terminal characters were collected in small ring buffers. During each tick (approx. 100ms), the game engine processed pending commands sequentially, updated the state database, and broadcast the resulting text updates back to the affected terminals. Because disk reads were too slow, the entire virtual world—rooms, items, player positions—was stored directly in core random-access memory, marking a revolutionary milestone in real-time, shared database design.",
        bulletPoints: [
          "Socket Polling: The PDP-10's SCNSER (Scanner Service) reported character availability on virtual serial terminals.",
          "State Locking: Sequential execution prevented classic database race conditions where two players try to pick up the same sword simultaneously.",
          "Asynchronous Output: System-level output buffers queued message delivery, ensuring slow teletype terminals did not block faster dial-up users."
        ]
      }
    ],
    technicalSpecs: [
      { label: "Mainframe Hardware", value: "DEC PDP-10 (KL10 Processor)" },
      { label: "Operating System", value: "TOPS-10 / TOPS-20" },
      { label: "Compiler/Language", value: "BCPL (Basic Combined Programming Language)" },
      { label: "Maximum Concurrent Users", value: "36 Active dial-up connections" }
    ],
    crossLinks: [
      {
        title: "The Slander Smear: Modern Mudslinging Media",
        href: "/mud/mudslinging/negative-campaigning",
        reason: "Understand how text-based parsing and linguistic structures used to organize MUD virtual spaces parallel the narrative patterns found in political propaganda."
      },
      {
        title: "Thames Sifting & Treasure Archaeology",
        href: "/mud/mudlarking/thames-mudlarking/treasure-hunting",
        reason: "Compare the search-and-find database indexes of virtual dungeons with the physical sifting process used to locate ancient roman artifacts in river clay."
      }
    ]
  },
  {
    slug: "earthen-thermodynamics",
    parentSubpageSlug: "adobe-and-cob-construction",
    parentCategorySlug: "mud-architecture",
    title: "Thermal Mass Thermodynamics & Tensile Load Chemistry",
    subtitle: "The Structural Material Science of Mud Architecture",
    description: "A structural engineering analysis of the thermodynamic and molecular bonding of straw-fiber clay lattices in modern rammed earth walls.",
    keywords: ["rammed earth engineering", "thermal mass", "clay crystallography", "tensile load", "sustainable building physics", "mud architecture science"],
    readTime: "7 min read",
    publishDate: "2026-05-14T12:00:00Z",
    author: "mud.cc Sustainable Architecture Lab",
    sections: [
      {
        heading: "Clay Mineralogy: Crystalline Lattices and Hydrogen Bonding",
        text: "Clay is not a simple soil type; it is a complex crystalline mineral composed of microscopic sheet-like silicate structures. The two most common clay families used in construction are kaolinite (a 1:1 layer clay) and montmorillonite (a 2:1 layer clay). At a molecular level, when water is introduced, water molecules lodge between these silicate sheets. The negative electrical charges on the clay platelet surfaces form strong hydrogen bonds with the polar water molecules, acting as a highly cohesive, viscous binder. Upon curing, as the water evaporates, these sheets pack tightly together, creating an incredibly strong, natural geological binder that locks sand and gravel aggregate in place.",
        bulletPoints: [
          "Kaolinite Crystals: Highly stable, low-shrinkage clay sheets ideal for structural cob walls.",
          "Cation Exchange Capacity: High charge density allows clay to lock mineral salts and repel fungal growth.",
          "Curing Shrinkage: Controlled aggregate grading (sand/gravel) is vital to keep structural shrinkage under 2%."
        ]
      },
      {
        heading: "Thermodynamics of High Thermal Mass Materials",
        text: "Earthen walls are renowned for their thermal performance, a result of their high thermal mass. Unlike insulation materials (like fiberglass or foam), which resist heat flow, rammed earth acts as a thermal heat sink. The thermal diffusivity of dense earth is extremely low. When solar radiation strikes an 18-inch rammed earth wall during the hot day, the heat energy is absorbed slowly by the clay lattice. It takes approximately 10 to 12 hours for the thermal wave to migrate from the outer surface to the interior. This delay—known as thermal lag—results in warm heat reaching the interior during the cold night, stabilizing indoor temperatures naturally without HVAC consumption.",
        bulletPoints: [
          "Thermal Lag: 18 inches of compacted clay-gravel yields a consistent 10-to-12-hour temperature offset.",
          "Heat Capacity: Compacted rammed earth has a volumetric heat capacity of ~1800 kJ/m³K.",
          "Diurnal Swings: Flattens external temperature variations of up to 25°C into a comfortable indoor range of ±3°C."
        ]
      },
      {
        heading: "Micro-Reinforcement: Tensile Strength of Straw-Clay Lattices",
        text: "While compacted clay-sand aggregates possess immense compressive strength, they are inherently weak under tension or shear forces, making them susceptible to brittle cracking during seismic activity or seasonal settling. To mitigate this, ancient and modern builders incorporate straw fiber. Under tension, micro-cracks form in the clay matrix. When a crack encounters a straw fiber, the tensile stress is transferred from the brittle clay to the elastic straw. This fiber-bridging mechanism drastically increases the material's fracture toughness, converting a brittle mud wall into a highly resilient composite structure.",
        bulletPoints: [
          "Fiber Bridging: Distributes shear stresses, preventing micro-cracks from propagating into catastrophic structural failures.",
          "Flexural Strength: Straw additions increase the flexural load capacity of adobe bricks by up to 240%.",
          "Anaerobic Durability: Encased deep inside dense, alkaline clay, straw fibers are starved of oxygen and moisture, preventing decay for centuries."
        ]
      }
    ],
    technicalSpecs: [
      { label: "Compressive Strength", value: "2.4 – 4.5 MPa (Rammed Earth)" },
      { label: "Volumetric Heat Capacity", value: "1,850 kJ/m³K" },
      { label: "Optimal Clay Content", value: "15% – 20% (Kaolinite heavy)" },
      { label: "Thermal Conductivity (k)", value: "1.15 – 1.25 W/m·K" }
    ],
    crossLinks: [
      {
        title: "Dermal Absorption & Ionic Exchanges",
        href: "/mud/dead-sea-mud/mineral-mud-masks/ionic-exchanges",
        reason: "Understand how the crystalline charge density of therapeutic clay mirrors the binders that stabilize structural rammed earth walls."
      },
      {
        title: "The Science of Cocoa Alkalization",
        href: "/mud/mississippi-mud-pie/classic-recipe-lore/cocoa-crystallization",
        reason: "Compare the binding properties of structural clay aggregates with the starch-and-fat binding ratios required for stable baking."
      }
    ]
  },
  {
    slug: "anaerobic-preservation",
    parentSubpageSlug: "thames-mudlarking",
    parentCategorySlug: "mudlarking",
    title: "Anaerobic Silt Preservation & Metal Oxidation Chemistry",
    subtitle: "The Science of the River's Silt Time Capsule",
    description: "An archaeological chemistry analysis of the anaerobic properties of River Thames mud that halt iron corrosion and preserve organic artifacts.",
    keywords: ["anaerobic preservation", "thames mudlarking science", "metal oxidation", "archaeological chemistry", "iron corrosion prevention", "river silt chemistry"],
    readTime: "7 min read",
    publishDate: "2026-06-02T13:00:00Z",
    author: "mud.cc Archaeological Chemistry Lab",
    sections: [
      {
        heading: "The Chemical Exclusion of Gaseous Oxygen",
        text: "The River Thames foreshore is composed of London Clay—a highly dense, fine-grained, and sticky marine silt deposited during the Eocene epoch. Because of the extremely small particle size of this clay, the interstitial spaces between silt grains are incredibly minute and saturated with water. This waterlogged, tightly packed structure prevents the downward diffusion of dissolved gaseous oxygen. Within just a few millimeters below the mud surface, the environment shifts from aerobic to highly reducing anaerobic. Without oxygen, standard aerobic bacteria and fungi cannot survive, halting the biological decomposition of organic items like leather shoes, wooden boat planks, and horn handles.",
        bulletPoints: [
          "Fine Silt Particle Size: Silt grains average less than 4 micrometers, establishing a tight mechanical seal.",
          "Oxygen Depletion: Aerobic bacteria consume initial trace oxygen in the top 2mm of silt, creating a permanent dead zone below.",
          "Organic Longevity: Leather, wood, and bone artifacts survive in pristine structural condition for over 2,000 years."
        ]
      },
      {
        heading: "Electrochemical Passivation of Metals in Clay",
        text: "Under standard atmospheric conditions, iron artifacts undergo rapid electrochemical corrosion: iron reacts with oxygen and moisture to form hydrated iron oxide (rust), which expands and structurally destroys the metal. Deep within the anaerobic Thames silt, however, this reaction is halted. In the highly reducing mud environment, a process known as chemical passivation occurs. Dissolved hydrogen sulfide (produced by anaerobic sulfate-reducing bacteria) reacts with the surface iron, forming a thin, black, insoluble layer of iron sulfide (FeS). This thin sulfide skin acts as a protective shield, sealing the underlying metal and halting further corrosion.",
        bulletPoints: [
          "Passivation Film: Microscopic iron sulfide layers stop active oxygen-driven rust cycles.",
          "Copper Patina: Bronze and copper alloys develop stable cuprite coatings, preserving fine decorative engravings.",
          "Silver Preservation: Silver coins react with sulfur to form black argentite (Ag2S), which shields the metal from wearing away."
        ]
      },
      {
        heading: "Sulfate-Reducing Bacteria and the Sulfur Cycle",
        text: "While anaerobic mud prevents oxygen-driven corrosion, it hosts a unique ecosystem of specialized micro-organisms: sulfate-reducing bacteria (SRB). These bacteria utilize dissolved sulfate ions instead of oxygen for cellular respiration, producing hydrogen sulfide (H2S) as a metabolic byproduct. This dissolved H2S reacts with trace metals and organic compounds in the mud. For organic artifacts, the sulfur compounds can react with wood lignin and collagen, cross-linking the organic polymers and making them resistant to decay. This subtle biochemical fossilization process contributes to the remarkable preservation of medieval leather and Tudor fabrics recovered by mudlarks.",
        bulletPoints: [
          "Sulfate Respirators: Desulfovibrio bacteria thrive in waterlogged, organic-rich clay environments.",
          "H2S Production: The characteristic 'rotten egg' smell of deep Thames mud signifies active anaerobic protection.",
          "Polymer Cross-Linking: Bio-chemical stabilization of cellulose and keratin structures by sulfur minerals."
        ]
      }
    ],
    technicalSpecs: [
      { label: "Oxidation-Reduction (Eh)", value: "-150 to -350 mV (Highly Reducing)" },
      { label: "Clay Density", value: "1.92 g/cm³" },
      { label: "Average Grain Diameter", value: "2.8 micrometers" },
      { label: "Sulfate Concentration", value: "1,200 mg/L of pore water" }
    ],
    crossLinks: [
      {
        title: "Dermal Absorption & Ionic Exchanges",
        href: "/mud/dead-sea-mud/mineral-mud-masks/ionic-exchanges",
        reason: "Compare the sulfur chemistry that preserves antiquities in the Thames with the dermatological oxidation of sulfur used to sanitize human skin."
      },
      {
        title: "DEC PDP-10 Database Engineering",
        href: "/mud/mud-the-game/mud-origins/pdp10-parsing",
        reason: "Compare the physical 'anaerobic shielding' of organic history in mud layers with the digital 'buffer pooling' that preserves server state."
      }
    ]
  }
];

// Compact structured dictionary for the other 25 detail pages
interface CompactDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
  specs: { label: string; value: string }[];
  headings: string[];
  texts: string[];
  bullets: string[][];
}

const EXTRA_DETAILS_DICTIONARY: Record<string, Record<string, CompactDetail>> = {
  "dead-sea-mud": {
    "dead-sea-mud-history": {
      slug: "climatotherapy-mechanics",
      title: "Climatotherapy & Solar Radiation Mechanics",
      subtitle: "Low-Altitude Solar Filtration at the Dead Sea Basin",
      description: "An atmospheric physics study on how the unique low elevation of the Dead Sea basin filters solar ultraviolet light to optimize skin treatments.",
      keywords: ["climatotherapy", "solar filtration", "uvb attenuation", "dead sea elevation"],
      specs: [
        { label: "Basin Elevation", value: "-430 meters below sea level" },
        { label: "UVB Attenuation", value: "32% reduction vs sea level" },
        { label: "Barometric Pressure", value: "1062 hPa (Oxygen enriched)" },
        { label: "Sulfate Air Fraction", value: "Elevated therapeutic aerosol levels" }
      ],
      headings: [
        "Atmospheric Thickness and UV Attenuation",
        "The Aerosol Shield and Selective Dispersion",
        "High Barometric Pressure and Oxygen Saturation"
      ],
      texts: [
        "The Dead Sea basin lies at the lowest dry land point on Earth. This extreme depression creates an additional 400 meters of atmospheric column that solar rays must penetrate before reaching the surface. This extra air mass acts as a natural filter, specifically scattering and attenuating high-energy ultraviolet-B (UVB) radiation while permitting therapeutic UVA to pass safely.",
        "Heavy evaporation from the hyper-saline waters of the lake produces a constant, fine mineral-rich aerosol haze suspended in the atmosphere. These aerosol droplets, containing high levels of bromine, magnesium, and sodium, scatter incoming light through Rayleigh dispersion, further dampening harmful erythema-inducing wavelengths.",
        "The barometric pressure at -430m is significantly higher than at standard sea level, measuring around 1062 hPa. This high pressure increases the partial pressure of oxygen by 8%, promoting cellular respiration and skin healing during therapeutic exposure."
      ],
      bullets: [
        ["Additional Air Mass: Solar rays traverse 430m of denser atmosphere.", "Selective Scattering: UVB waves are heavily scattered, reducing sunburn risks."],
        ["Aerosol Haze: Suspended magnesium and sodium chloride droplets reflect light.", "Bromine Relaxation: High bromine concentrations in air promote relaxation."],
        ["Barometric Pressure: Enhanced oxygen absorption speeds wound healing.", "Inhalation Therapy: Dense air aids respiratory functions during therapy."]
      ]
    },
    "mud-spa-treatments": {
      slug: "balneological-thermodynamics",
      title: "Thermodynamics of Balneological Mud Wraps",
      subtitle: "Heat Retention & Cutaneous Vasodilation Dynamics",
      description: "A thermodynamic study on how the high heat capacity of mineral clays stimulates blood circulation and relaxes muscle tissues.",
      keywords: ["balneotherapy", "thermal heat capacity", "vasodilation", "mineral clay thermodynamics"],
      specs: [
        { label: "Specific Heat", value: "2.15 J/g·K (Ultra high)" },
        { label: "Application Temp", value: "38.5°C – 41.5°C" },
        { label: "Cutaneous Vasodilation", value: "+140% localized blood flow" },
        { label: "Thermal Conductivity", value: "0.68 W/m·K (Slow release)" }
      ],
      headings: [
        "High Volumetric Specific Heat Capacity",
        "Cutaneous Vasodilation and Hyperemia",
        "Mechanical Pressure and Lymphatic Drainage"
      ],
      texts: [
        "Pelotherapy clays exhibit high volumetric heat capacity and low thermal conductivity. When heated to 40°C, the mud retains its thermal energy for long durations, transferring heat to the human body at a slow, uniform rate. This prevents thermal shock while ensuring continuous heat transfer to deeper muscle layers.",
        "The sustained thermal transfer triggers localized vasodilation—the widening of blood vessels. This increases blood flow, delivering vital nutrients to damaged tissues while accelerating the removal of metabolic waste products like lactic acid.",
        "The density of wet clay wraps exerts gentle hydrostatic pressure on the skin. This mechanical pressure stimulates the lymphatic system, assisting in the drainage of interstitial fluids and reducing swelling in joints."
      ],
      bullets: [
        ["Sustained Heat: Clay retains temperature 3x longer than water.", "Slow Release: Gradual thermal flow prevents localized skin burns."],
        ["Blood Flow Surge: Local microcirculation increases up to 2.5 times.", "Enzymatic Activation: Heat stimulates metabolic processes inside muscle fibers."],
        ["Hydrostatic Compression: Promotes fluid movement from joints.", "Lymphatic Stimulation: Aids in detoxification and localized edema reduction."]
      ]
    }
  },
  "mississippi-mud-pie": {
    "mud-cake-vs-mud-pie": {
      slug: "polysaccharide-emulsions",
      title: "Polysaccharide Emulsions & Marshmallow Viscosity",
      subtitle: "Colloidal Stability of Aerated Southern Confections",
      description: "A physical chemistry analysis of the foaming properties of gelatin and corn syrup in Mississippi mud confections.",
      keywords: ["marshmallow emulsion", "colloidal stability", "gelatin gelation", "baking viscosity"],
      specs: [
        { label: "Gel Strength", value: "220 Bloom (Premium)" },
        { label: "Air Volume Fraction", value: "55% – 62% (Foamed)" },
        { label: "Viscosity Index", value: "48,000 cPs" },
        { label: "Thermal Collapse Pt", value: "54.2°C (129.5°F)" }
      ],
      headings: [
        "The Colloid Structure of Marshmallow Fluff",
        "Gelatin Sol-Gel Transition",
        "Baking Response and Thermal Expansion"
      ],
      texts: [
        "Marshmallow toppings are complex gas-in-liquid emulsions. Gelatin proteins lower surface tension, allowing air to be whipped into tiny bubbles that are suspended in a highly concentrated, viscous sucrose-and-glucose syrup.",
        "As the pie cools, the stretched gelatin polypeptide chains form a three-dimensional triple-helix network. This locks the sugar-water molecules and air bubbles in a stable, rubbery gel.",
        "When exposed to high heat under a broiler, the trapped air bubbles expand. Simultaneously, the sugar caramelizes, forming a thin, brown, crispy crust that locks in the molten interior."
      ],
      bullets: [
        ["Protein Foam: Gelatin coats air bubbles, preventing coalescence.", "Syrup Viscosity: Concentrated sugars prevent water from draining out of the foam."],
        ["Sol-Gel Transition: Occurs rapidly as temperature drops below 35°C.", "Triple-Helix Bonding: Reversible hydrogen bonds give marshmallow its springiness."],
        ["Thermal Expansion: Charles's Law dictates the expanding foam volume.", "Maillard Browning: Reducing sugars react with proteins to produce a caramelized skin."]
      ]
    },
    "southern-dessert-culture": {
      slug: "sucrose-supersaturation",
      title: "Sucrose Supersaturation & Sugar Crystallization",
      subtitle: "The Chemistry of Butter-Fat Syrups in Southern Baking",
      description: "A culinary study on sugar boiling stages and lipid-moisture boundaries that give southern cakes their unique texture.",
      keywords: ["sucrose supersaturation", "sugar boiling stages", "lipid boundaries", "fudge crystallization"],
      specs: [
        { label: "Sugar Concentration", value: "85% Dissolved Solids" },
        { label: "Soft-Ball Temp", value: "114°C (237°F)" },
        { label: "Crystallization Rate", value: "Low (Controlled by lipids)" },
        { label: "Emulsifier Content", value: "3.2% Lecithin (from egg yolks)" }
      ],
      headings: [
        "The Soft-Ball Stage and Supersaturation",
        "Lipid Interference and Crystallization Prevention",
        "Egg-Yolk Emulsions and Structural Cohesion"
      ],
      texts: [
        "Southern mud cake bases require boiling sugar to the soft-ball stage. Water is evaporated until the sucrose concentration reaches 85%, creating a highly supersaturated liquid upon cooling.",
        "To prevent coarse sugar crystals from ruining the velvety mouthfeel, bakers fold in large amounts of butter-fat and egg yolks. The fat molecules physically coat the sugar molecules, preventing them from forming large crystal lattices.",
        "Egg yolk lecithin acts as an emulsifier, binding the rich fats and water-based cocoa syrups into a cohesive, non-separating batter that bakes into an ultra-fudgy sheet."
      ],
      bullets: [
        ["Soft-Ball Physics: Yields a pliable, soft crumb upon cooling.", "Supersaturation: Excess dissolved sugar is primed for rapid crystallization."],
        ["Lipid Barriers: Butter fat blocks sugar crystal aggregation.", "Micro-Crystallization: Encourages tiny, velvety sugar crystals (<20 microns)."],
        ["Emulsion Stability: Prevents butter from separating during baking.", "Crumb Density: Keeps the cake moist and dense without graininess."]
      ]
    }
  },
  "mud-run": {
    "obstacle-race-history": {
      slug: "lactate-metabolism-ocr",
      title: "Lactate Shuttle Dynamics & Core Aerobic Depletion",
      subtitle: "Muscle Fatigue and Glycogen Recovery in Wet Terrains",
      description: "A sports science study on the unique metabolic strain of running through heavy clay resistance.",
      keywords: ["lactate shuttle", "aerobic depletion", "glycogen depletion", "ocr physiology"],
      specs: [
        { label: "Lactate Threshold", value: "4.2 mmol/L (Elite)" },
        { label: "Vo2 Max Demand", value: "85% – 92% (Heavy resistance)" },
        { label: "Energy Expenditure", value: "18.5 kcal/min (Clay running)" },
        { label: "Glycogen Depletion", value: "90 mins to total exhaustion" }
      ],
      headings: [
        "The Metabolic Resistance of Clay Running",
        "The Lactate Shuttle in OCR Racing",
        "Thermoregulation and Shivering Kinetics"
      ],
      texts: [
        "Running in deep mud increases energy expenditure by up to 40% compared to firm pavement. The constant slipping forces the stabilizing muscles of the core and hips to recruit secondary motor units, accelerating glycogen breakdown.",
        "As leg muscles generate lactic acid, the body utilizes the lactate shuttle mechanism, transferring lactate to the heart and liver for re-conversion into glucose. In cold, wet mud, peripheral vasoconstriction slows down this clearing process, causing premature muscle burning.",
        "Obstacle races alternate between running and cold water/mud immersion. This thermal shock triggers shivering, which drains metabolic reserves as the body fights to maintain a core temperature of 37°C."
      ],
      bullets: [
        ["Slippage Cost: Secondary muscles work harder to maintain balance.", "Glycogen Drain: Rapid anaerobism exhausts muscle carbohydrate stores."],
        ["Vasoconstriction: Cold mud constricts skin blood vessels, trapping lactate.", "Acidosis Fatigue: Low pH reduces muscle fiber contracting forces."],
        ["Thermal Shock: Cold immersion drops skin temperature by 15°C.", "Shivering Cost: Shivering drains up to 400 calories per hour of carbohydrate reserves."]
      ]
    },
    "mud-bogging": {
      slug: "viscous-traction-physics",
      title: "Viscous Shear Mechanics & Off-Road Traction",
      subtitle: "Hydrodynamics of Mud-Slinging Megatruck Tire Footprints",
      description: "An automotive physics exploration of how tread block angles and tire spinning velocities displace thick clay to gain traction.",
      keywords: ["viscous shear", "tire tread physics", "mud bogging", "traction mechanics"],
      specs: [
        { label: "Clay Viscosity", value: "15,000 cPs (Semi-solid)" },
        { label: "Tire Spin Velocity", value: "2,500 RPM (Optimal dispersal)" },
        { label: "Shear Strength", value: "32 kPa (Soil failure limit)" },
        { label: "Contact Area Pressure", value: "8.5 PSI (Deflated tires)" }
      ],
      headings: [
        "The Shear Strength of Wet Clay Soils",
        "The Fluid Mechanics of Centrifugal Self-Clearing",
        "Hydroplaning on Semi-Solid Slurries"
      ],
      texts: [
        "Traction in mud bogging relies on the shear strength of the soil. When tire lugs bite into the clay, the tire must apply force that is lower than the soil's ultimate shear strength to prevent spinning in place.",
        "At high RPM, centrifugal force flings trapped mud out of the tire voids. If the tire spins too slowly, the mud packs into the tread, turning the tire into a smooth, slick ball with zero grip.",
        "As trucks enter deep bog pits, they can experience hydroplaning if their tires fail to cut through the mud to the solid base below. Deflating tires increases the footprint, reducing the risk of sinking completely."
      ],
      bullets: [
        ["Soil Shear: The physical limit of clay's ability to resist tire forces.", "Cohesive Bond: Wet clay bonds tightly, requiring deep, aggressive tread blocks."],
        ["Self-Clearing: High wheel speed is mandatory to eject packed clay.", "Tread Voids: Generous space between lugs allows fast mud evacuation."],
        ["Pore Pressure: Trapped water between tires and clay reduces friction.", "Deflation Effect: Spreads load, letting the truck float on top of deep mud."]
      ]
    },
    "mud-wrestling": {
      slug: "tribological-shear-thinning",
      title: "The History of Mud Wrestling & Tribological Shear-Thinning",
      subtitle: "From Ancient Athletic Clay Grappling to modern Non-Newtonian Tribology",
      description: "Explore the comprehensive history of mud wrestling alongside a chemical study of friction coefficient changes and non-Newtonian fluid behaviors during athletic mud grappling.",
      keywords: ["history of mud wrestling", "mud wrestling history", "mud wrestling", "shear thinning", "tribology", "wrestling clay", "non newtonian fluid"],
      specs: [
        { label: "Friction Coefficient", value: "0.12 μ (Slippery)" },
        { label: "Yield Stress", value: "45 Pa (Solid-to-liquid)" },
        { label: "Viscosity Reduction", value: "-85% under high shear" },
        { label: "Solid Fraction", value: "35% Kaolin clay in water" }
      ],
      headings: [
        "Non-Newtonian Rheology of Wrestling Mud",
        "Tribology of Skin-to-Mud Interfaces",
        "Heat Dissipation and Gripping Dynamics"
      ],
      texts: [
        "Wrestling mud is engineered as a shear-thinning (pseudoplastic) non-Newtonian fluid. Under static conditions, it behaves like a semi-solid, but under the shear stress of a grapple, its viscosity drops drastically, making holds incredibly slippery.",
        "The science of friction, lubrication, and wear—tribology—reveals that mud acts as a highly effective fluid-film lubricant. The thin mud film separates the wrestlers' skins, dropping the coefficient of friction close to ice.",
        "As wrestlers struggle, their body heat warms the surrounding clay, further lowering its viscosity. Successful holds require wrestlers to wrap joints using dry canvas wraps or target dry bone interfaces."
      ],
      bullets: [
        ["Pseudoplastic Flow: Viscosity decreases as shear rate increases.", "Yield Stress: Mud remains solid until a critical force is applied."],
        ["Fluid-Film Lubrication: A thin mud layer completely blocks skin contact.", "Low Friction: Friction coefficient drops from 0.8 (dry skin) to 0.12."],
        ["Thermal Thinning: Heated mud is significantly more fluid.", "Gripping Strategy: Wrestlers target dry points or leverage mechanical locks."]
      ]
    }
  },
  "mud-the-game": {
    "text-based-gaming": {
      slug: "parser-automata-nlp",
      title: "Finite State Automata & Lexical Parsing",
      subtitle: "Natural Language Processing in Classical Text Adventures",
      description: "A computer science breakdown of the string tokenizers, syntax trees, and game loops that drove early terminal adventures.",
      keywords: ["lexical analysis", "finite state automata", "nlp", "text adventures"],
      specs: [
        { label: "Vocabulary Size", value: "120 Verbs / 250 Nouns" },
        { label: "Grammar Complexity", value: "Context-Free Grammar (CFG)" },
        { label: "Parse Speed", value: "Instantaneous (<1ms on PDP-10)" },
        { label: "State Variables", value: "16-Bit Bitmasks" }
      ],
      headings: [
        "String Tokenization and Lexing",
        "Syntax Trees and Verb-Noun Matching",
        "Finite State Machine Synchronization"
      ],
      texts: [
        "Early text parsers read player input as a raw stream of ASCII characters. The lexer stripped out noise words ('THE', 'A', 'WITH') and tokenized the remaining characters into semantic components: Verbs and Nouns.",
        "The parsed tokens are assembled into simple syntax trees. A context-free grammar checks if the token order conforms to game rules (e.g., Verb-Noun or Verb-Noun-Preposition-Noun).",
        "The game world is represented as a collection of nodes in a finite state machine. Commands trigger transition functions that validate pre-requisites and mutate the central world state."
      ],
      bullets: [
        ["Noise Filtering: Discards articles and prepositions to simplify parsing.", "Token Mapping: Matches words to internal integer IDs ('KILL' = 4, 'ORC' = 102)."],
        ["CFG Grammar: Rules like 'Command -> Verb Noun' govern valid inputs.", "Semantic Resolution: Resolving ambiguous inputs like 'GET ALL' using inventory lists."],
        ["FSM Transitions: Moving rooms shifts the 'Player Position' node.", "Action Mutators: Successfully unlocking a door changes its state to 'OPEN'."]
      ]
    },
    "muds-to-mmos": {
      slug: "packet-synchronization-latency",
      title: "Server-Tick Packet Synchronization & Latency Mitigations",
      subtitle: "From Mud-Socks to Multi-Threaded MMORPG Event Loops",
      description: "An architectural review of socket buffers, packet throttling, and network synchronization that allowed multiplayer games to scale.",
      keywords: ["server ticks", "packet synchronization", "latency mitigation", "mmo architecture"],
      specs: [
        { label: "Server Tick Rate", value: "10 Hz (100ms cycle)" },
        { label: "Protocol Type", value: "TCP/IP Sockets (Early) / UDP (Modern)" },
        { label: "Bandwidth Footprint", value: "1.2 KB/s per client" },
        { label: "Dead Reckoning", value: "Linear extrapolation" }
      ],
      headings: [
        "The Server Tick Loop",
        "TCP Buffer Congestion and Nagle's Algorithm",
        "Client-Side Prediction and Dead Reckoning"
      ],
      texts: [
        "Early multiplayer game servers utilized a single-threaded loop synchronized by a system clock tick. Every 100 milliseconds, the server read pending packet inputs, updated world state variables, and broadcast delta states to all connected clients.",
        "Early MUDs relied on TCP sockets, which suffered from packet congestion due to Nagle's algorithm combining small keyboard inputs. Modern games disable Nagle (using TCP_NODELAY) or use UDP with custom reliability layers.",
        "To mask high latency, modern MMORPGs use client-side prediction and dead reckoning. The client predicts movement immediately, while the server acts as the absolute authority, correcting the client if packet loss occurs."
      ],
      bullets: [
        ["Tick Rate: 10 Hz ensures fair synchronization on slow networks.", "Delta Compression: Only transmitting variables that changed in that tick."],
        ["Nagle's Latency: Delays packet delivery by up to 200ms to group bytes.", "TCP_NODELAY: Sends single keypress packets instantly, reducing lag."],
        ["Dead Reckoning: Extrapolates player path based on last velocity vector.", "State Reconciliation: Smoothly snapping players back if server disagrees."]
      ]
    }
  },
  "mudslinging": {
    "negative-campaigning": {
      slug: "cognitive-heuristics-propaganda",
      title: "Cognitive Heuristics & Political Slander Framing",
      subtitle: "Neuro-Psychological Processing of Attack Advertisements",
      description: "A psychological study on why negative political messaging triggers strong cognitive retention in voters.",
      keywords: ["cognitive heuristics", "negative campaigns", "negativity bias", "neuro-psychology"],
      specs: [
        { label: "Negativity Bias Scale", value: "3.2x higher amygdala response" },
        { label: "Retention Rate", value: "82% for negative ads (7-day)" },
        { label: "Arousal Spike", value: "+145% galvanic skin response" },
        { label: "Slander Decay Rate", value: "Extremely slow (Sleeper effect)" }
      ],
      headings: [
        "The Amygdala and Evolutionary Negativity Bias",
        "The Sleeper Effect and Slander Longevity",
        "Availability Heuristics and Brand Damage"
      ],
      texts: [
        "Human brains evolved to prioritize threats over rewards—a phenomenon known as negativity bias. Negative campaign ads trigger immediate activity in the amygdala, prompting deep emotional encoding and high mnemonic retention.",
        "Even if voters initially discount a slanderous political attack as biased, over time they forget the source while retaining the negative accusation itself. This psychological phenomenon is known as the Sleeper Effect.",
        "Mudslinging leverages availability heuristics. By repeating a specific negative accusation, opponents make that negative trait highly accessible in voters' brains, immediately coloring all evaluations of the candidate."
      ],
      bullets: [
        ["Threat Detection: Negative messages alert the survival brain.", "Deep Encoding: Emotional triggers bypass critical filters, entering long-term memory."],
        ["Source Dissociation: Memory of the bad source fades faster than the bad rumor.", "Information Retention: The negative impression remains active for months."],
        ["Cognitive Accessibility: Repetition makes the rumor easy to recall.", "Evaluative Bias: Future neutral actions are interpreted through the negative lens."]
      ]
    },
    "the-idioms-origin": {
      slug: "etymology-pamphlet-rhetoric",
      title: "Rhetoric of 17th Century Political Pamphlets",
      subtitle: "Etymological Trajectory of Mud-Related Metaphors",
      description: "An etymological study tracing the transition of 'mud' from physical filth to political slander across medieval and early modern texts.",
      keywords: ["etymology", "political pamphlets", "rhetorical theory", "linguistics"],
      specs: [
        { label: "Earliest Printed Use", value: "1612 (Francis Bacon Latin essay)" },
        { label: "Pamphlet Output", value: "22,000 titles (English Civil War)" },
        { label: "Metaphor Density", value: "High (Soil-filth-slander links)" },
        { label: "Lexical Shift Rate", value: "50-year semantic transition" }
      ],
      headings: [
        "Latin Foundations: Calumniare Est aliquid adhaerebit",
        "The Pamphlet Wars of the English Civil War",
        "Semantic Standardization in the 19th Century"
      ],
      texts: [
        "The root of political mudslinging is found in the ancient Latin maxim: 'Calumniare fortiter, aliquid adhaerebit'—slander boldly, something will stick. Francis Bacon translated this physical metaphor into English in his essays, establishing 'mud' as the prime medium of reputational damage.",
        "With the collapse of licensing laws in 1641, London was flooded with thousands of highly partisan pamphlets. Authors utilized graphic, physical descriptions of soil and mud to describe their opponents' moral failings, accelerating the lexical shift.",
        "By the mid-1800s, 'mudslinger' entered standard American political lexicons, transitioning from a graphic, raw metaphor to a formalized journalistic label describing aggressive campaign strategies."
      ],
      bullets: [
        ["Bacon's Translation: Popularized the concept of dirt sticking to clean names.", "Calumny Mechanics: Ancient rhetorical tricks revived in the Renaissance."],
        ["Scurrility Boom: Anonymous printers trade physical insults.", "Moral Pollution: Mud becomes the primary metaphor for spiritual decay."],
        ["Americanization: Front-tier newspapers popularize 'mudslinger'.", "Formalization: Transition from coarse slang to a clinical political term."]
      ]
    }
  },
  "clear-as-mud": {
    "common-mud-idioms": {
      slug: "sarcastic-syntactic-inversions",
      title: "Syntactic Inversions & Sarcastic Semantics",
      subtitle: "The Cognitive Linguistics of Sarcasm in English Idioms",
      description: "A cognitive linguistics analysis of ironic inversions and negative polarity items in colloquial English idioms.",
      keywords: ["cognitive linguistics", "ironic inversion", "sarcasm", "semantics", "idioms"],
      specs: [
        { label: "Linguistic Class", value: "Antiphrastic Ironic Idiom" },
        { label: "Cognitive Load", value: "Double processing (+120ms response time)" },
        { label: "Earliest Citation", value: "1842 (American humorous journals)" },
        { label: "Register Range", value: "Highly colloquial / Informal" }
      ],
      headings: [
        "Antiphrasis: Meaning through Direct Opposites",
        "The Cognitive Processing of Sarcastic Inversions",
        "Idiomatic Compression and Pragmatic Yield"
      ],
      texts: [
        "The idiom 'clear as mud' is a classic example of antiphrasis—using a word or phrase that means the exact opposite of the literal meaning. The cognitive brain resolves this contradiction by processing the phrase through a sarcastic filter.",
        "Neurological studies show that processing sarcastic idioms requires a double-take. The brain first computes the literal meaning ('clear'), recognizes the physical impossibility of mud being transparent, and then inverts the meaning.",
        "Saying 'that explanation was clear as mud' provides a higher pragmatic yield than saying 'that was confusing'. It conveys frustration, humor, and social critique in a single condensed linguistic package."
      ],
      bullets: [
        ["Antiphrasis: The literal phrase is used to signal complete opacity.", "Ironic Filter: Translates 'clear' to 'impossible to understand'."],
        ["Double-Take Loop: Brain processes literal first, then resolves the paradox.", "Linguistic Surprise: The contrast between 'clear' and 'mud' creates humor and emphasis."],
        ["Pragmatic Yield: High social commentary packed in three short words.", "Social Bonding: Sarcasm acts as a shared intellectual handshake among listeners."]
      ]
    },
    "stick-in-the-mud": {
      slug: "obstructionist-psychology",
      title: "Adventurous vs. Stick-in-the-Mud: Behavioral Inertia & The Obstructionist Archetype",
      subtitle: "Psychological Profiles of Openness vs. Cautious 'Sticks' in History",
      description: "An in-depth psychological analysis of the adventurous, novelty-seeking personality vs. the cautious 'stick-in-the-mud' archetype, analyzing risk aversion and behavioral inertia.",
      keywords: ["adventurous vs stick in the mud", "adventurous vs stick-in-the-mud", "stick in the mud personality", "obstructionist archetype", "behavioral inertia", "personality psychology"],
      specs: [
        { label: "Trait Classification", value: "Low Openness to Experience (Big Five)" },
        { label: "Risk Aversion Index", value: "Top 15th percentile" },
        { label: "Status Quo Bias", value: "Critical factor in behavioral delay" },
        { label: "Friction Coefficient", value: "High (In group environments)" }
      ],
      headings: [
        "Adventurous Personalities vs. The Stick-in-the-Mud",
        "Status Quo Bias and Loss Aversion Kinetics",
        "Social Friction and Group Dynamics"
      ],
      texts: [
        "In personality psychology, the dynamic of the adventurous mind versus the stick-in-the-mud represents the classic clash between high and low openness to experience. The classical 'stick-in-the-mud' personality is characterized by exceptionally low scores in 'Openness to Experience' paired with high scores in 'Conscientiousness', viewing change and exploration as systemic hazards.",
        "Psychologically, sticks behave through severe Status Quo Bias. They overestimate the risks of any action while underestimating the severe costs of complete stagnation, locking themselves in place.",
        "In group environments, obstructionists serve an interesting evolutionary purpose: they prevent groups from pursuing high-risk, unproven ventures. However, in fast-shifting environments, they cause severe drag."
      ],
      bullets: [
        ["Low Openness: Prefers traditional, pre-tested routines.", "High Orderliness: Views new methods as chaotic threat vectors."],
        ["Loss Aversion: The pain of potential failure far outweighs the joy of progress.", "Stagnation Comfort: Stagnation is perceived as a low-risk safe harbor."],
        ["Stabilizing Force: Protects against reckless, trend-driven shifts.", "Friction Engine: Slows down essential adaptation, leading to organization decay."]
      ]
    }
  },
  "mud-architecture": {
    "ancient-mudbrick-cities": {
      slug: "seismic-damping-clay",
      title: "Seismic Damping & Shear Resistance of Adobe Lattices",
      subtitle: "Structural Integrity of Ancient Mudbrick Skyscrapers in Shibam",
      description: "A structural engineering analysis of the seismic resilience and viscoelastic properties of straw-clastic mudbricks.",
      keywords: ["seismic damping", "adobe skyscrapers", "shear resistance", "shibam engineering"],
      specs: [
        { label: "Skyscraper Height", value: "Up to 30 meters (8 stories)" },
        { label: "Seismic Damping Ratio", value: "8.5% (High absorption)" },
        { label: "Shear Load Capacity", value: "1.2 MPa" },
        { label: "Viscoelastic Range", value: "Broad (Under low-frequency stress)" }
      ],
      headings: [
        "Viscoelastic Damping of Organic Clays",
        "Straw Fiber Tensile Redistribution",
        "Tapered Wall Geometry and Compressive Loading"
      ],
      texts: [
        "The ancient mudbrick towers of Shibam, Yemen, have survived earthquakes for centuries due to the viscoelastic properties of mud-straw aggregates. Unlike rigid modern concrete, which cracks under seismic waves, the clay-straw composite dampens shaking by converting kinetic energy into heat.",
        "Under lateral shear forces, mud bricks experience tension. The thousands of chopped straw fibers embedded in each brick act as micro-tension rods, distributing tensile loads throughout the entire wall structure.",
        "Shibam's towers are built with tapered walls: up to 1.5 meters thick at the base and narrowing to 30 cm at the top. This geometry keeps the center of gravity low and ensures that the walls are permanently in compression, neutralizing tension forces."
      ],
      bullets: [
        ["Elastic Yield: Micro-deformations in clay absorb shaking without fracturing.", "Thermal Dissipation: Seismic energy is safely converted into micro-heat within the wall matrix."],
        ["Load Redistribution: Straw stops micro-cracks from merging into main cracks.", "Fiber Bond: Cohesive clay paste grips organic fibers, providing structural hold."],
        ["Tapered Design: Reduces weight at upper stories, lessening seismic wobble.", "Gravity Load: High compression increases friction between brick courses, blocking shear slide."]
      ]
    },
    "modern-earthen-building": {
      slug: "geopolymerization-soil-stabilization",
      title: "Alkali-Activated Geopolymerization of Soils",
      subtitle: "Green Cementitious Chemistry in Modern Rammed Earth",
      description: "A chemical study on how alkaline activators bind clay particles into artificial stone without carbon-heavy cement.",
      keywords: ["geopolymerization", "soil stabilization", "alkali activation", "rammed earth chemistry"],
      specs: [
        { label: "Compressive Strength", value: "12.4 – 18.2 MPa (Excellent)" },
        { label: "CO2 Footprint Reduction", value: "85% vs Portland cement" },
        { label: "Alumina-Silicate Ratio", value: "SiO2 / Al2O3 = 3.2" },
        { label: "Curing Time", value: "72 hours to 80% strength" }
      ],
      headings: [
        "Alkali Activation of Clay Alumina-Silicates",
        "Polycondensation: Synthesizing Artificial Rock",
        "Zero-Carbon Sustainability of Geopolymers"
      ],
      texts: [
        "When clay (which contains rich aluminosilicate minerals) is treated with a mild alkaline solution like sodium hydroxide, the silicon and aluminum oxides dissolve, forming a highly reactive gel.",
        "The reactive gel undergoes a polycondensation reaction, forming a three-dimensional inorganic polymer network. This polymer matrix acts as an extremely strong binder, converting raw loose soil into artificial sandstone.",
        "Traditional concrete relies on Portland cement, which generates 8% of global CO2 emissions. Geopolymerized rammed earth eliminates cement entirely, using local soils and industrial byproducts to achieve equal strength with a fractional carbon footprint."
      ],
      bullets: [
        ["Dissolution Phase: Alkaline break down clay sheet structures.", "Condensation Phase: Silica and alumina tetrahedra link together into networks."],
        ["Inorganic Polymer: A continuous three-dimensional zeolitic lattice.", "Aggregate Binding: Encapsulates sand and gravel with incredible mechanical strength."],
        ["Carbon Reduction: Eliminates energy-intensive limestone baking.", "Local Sourcing: Utilizes local excavation clays, avoiding hauling costs."]
      ]
    }
  },
  "mudlarking": {
    "treasure-hunting": {
      slug: "spectrometry-alloy-archaeometry",
      title: "X-Ray Spectrometry & Archaeometallurgical Alloy Dating",
      subtitle: "Analyzing Metal-Silt Diffusion on Tudor Pilgrim Badges",
      description: "A science study on using XRF spectrometry to date ancient lead-pewter alloys recovered from river silt.",
      keywords: ["spectrometry", "archaeometallurgy", "pewter alloy", "river silt diffusion", "dating techniques"],
      specs: [
        { label: "Lead-Tin Ratio", value: "65% Sn / 35% Pb (Tudor standard)" },
        { label: "XRF Penetration", value: "25 micrometers" },
        { label: "Bismuth Tracer", value: "0.12% (Key medieval identifier)" },
        { label: "Corrosion Layer Depth", value: "1.2 microns (Anaerobic passivated)" }
      ],
      headings: [
        "X-Ray Fluorescence Spectrometry Mechanics",
        "Lead-Tin Alloy Composition of Pilgrim Badges",
        "Silt Diffusion and Surface Passivation Chemistry"
      ],
      texts: [
        "Handheld XRF devices bombard river finds with primary X-rays. This excites the atoms in the metal alloy, causing them to emit secondary, characteristic fluorescent X-rays that reveal the precise element composition in seconds.",
        "Medieval and Tudor pilgrim badges were made from cheap lead-tin pewter alloys. XRF analysis identifies trace impurities like bismuth and antimony, which serve as geographic markers indicating which medieval smelter produced the metal.",
        "Because the Thames silt is anaerobic, lead-pewter badges develop a highly stable, thin surface passivation layer of lead sulfide (Galena). This black coating stops further metal loss and acts as a chemical time capsule."
      ],
      bullets: [
        ["Fluorescence: Non-destructive analysis protects valuable historical relics.", "Element Blueprint: Measures copper, tin, lead, and silver ratios down to ppm."],
        ["Trace Impurities: Antimony and bismuth levels map medieval mining sites.", "Alloy Ratios: Higher lead fractions indicate late-medieval, lower-cost productions."],
        ["Galena Skin: Lead reacts with bacterially-produced sulfur to form FeS/PbS.", "Interface Preservation: Keeps the microscopic badge details sharp for 600 years."]
      ]
    },
    "urban-archaeology": {
      slug: "sedimentary-stratigraphy-london",
      title: "Sedimentary Stratigraphy & Urban Taphonomy",
      subtitle: "How Silt Deposition Patterns Map Historic London Trade Routes",
      description: "An urban taphonomy study on how river sedimentation rates and tidal currents trap and preserve material histories.",
      keywords: ["sedimentary stratigraphy", "urban taphonomy", "sedimentation rates", "london history"],
      specs: [
        { label: "Average Siltation Rate", value: "4.8 mm / year" },
        { label: "Tidal Rise/Fall", value: "Up to 7.2 meters (Dynamic)" },
        { label: "London Clay Interface", value: "Eocene marine bed (-2.5m)" },
        { label: "Stratigraphic Resolution", value: "Decadal layers" }
      ],
      headings: [
        "Tidal Deposition and Siltation Cycles",
        "Sedimentary Stratigraphy of the Foreshore",
        "Taphonomy of River Artifacts"
      ],
      texts: [
        "The River Thames is a highly dynamic tidal estuary. Twice a day, high tides bring in fine London Clay silt, which settles during the brief slack water period. This steady deposition buries and seals discarded items beneath fresh mud layers.",
        "Like tree rings, foreshore mud contains distinct stratigraphic layers. Because of tidal erosion, older Tudor and Roman layers are occasionally uncovered, allowing mudlarks to explore historical levels directly.",
        "Taphonomy studies how objects decay and enter the fossil record. In the Thames, heavy iron nails sink rapidly through fluid silt, while leather and wood float, settling only in calm inlets where fine anaerobic silts accumulate."
      ],
      bullets: [
        ["Slack Water Siltation: Suspended clay particles settle as current drops.", "Burial Speed: Quick burial is essential to protect items from tidal wear."],
        ["Stratigraphic Windows: Tidal flows scour away top mud, revealing old strata.", "Contextual Association: Items found in the same silt layer share historical dates."],
        ["Density Sorting: Heavy metals sink to solid gravel beds beneath.", "Hydrodynamic Sorting: Light, organic items drift to muddy inner bends."]
      ]
    }
  },
  "mud-season": {
    "new-england-mud-season": {
      slug: "frost-heave-geotechnics",
      title: "Frost Heave Geotechnics & Soil Shear Failures",
      subtitle: "The Mechanical Physics of Spring Thaw Pavement Failures",
      description: "A geotechnical engineering analysis of ice lens formation and the sudden shear strength collapse of thawing soils.",
      keywords: ["frost heave", "frost heaves", "what is frost heave", "what causes frost heaving", "geotechnical engineering", "soil shear failure", "spring thaw"],
      specs: [
        { label: "Frost Penetration Depth", value: "1.2 – 1.8 meters" },
        { label: "Heaving Pressure", value: "Up to 1.5 MPa" },
        { label: "Water Sucking Rate", value: "0.22 mm/hour (Capillary)" },
        { label: "Soil Shear Strength Thaw", value: "-90% reduction" }
      ],
      headings: [
        "Capillary Action and Ice Lens Growth",
        "The Spring Thaw Shear Strength Collapse",
        "Geotechnical Solutions: Frost-Inhibiting Soils"
      ],
      texts: [
        "During freezing winter, water in fine-grained silty soils freezes. Capillary action draws liquid water upward from the deep water table to the freezing front, forming thick ice lenses that expand and heave the ground upward.",
        "As spring arrives, soil thaws from the top down. Because the deeper soil remains frozen, the melting ice water cannot drain downward. This saturates the thawed topsoil, skyrocketing pore-water pressure and dropping soil shear strength to near zero.",
        "Civil engineers prevent frost damage by replacing silty soils with coarse, free-draining gravel aggregates. Without fine capillary pores, ice lenses cannot form, keeping roads stable."
      ],
      bullets: [
        ["Capillary Draw: Fine soil pore sizes act as straws, pulling water up.", "Ice Lens Expansion: Ice expands by 9% in volume, lifting asphalt easily."],
        ["Saturated Thaw: Trapped water liquefies the topsoil layer.", "Shear Collapse: Soil cannot support weight, swallowing vehicle wheels."],
        ["Aggregate Cleanout: Replacing fine silts with clean gravel.", "Drainage Pipes: Installing subgrade drains to divert excess spring meltwater."]
      ]
    },
    "monsoon-mud": {
      slug: "hydrological-slope-stability",
      title: "Hydrological Slope Stability & Mudslide Dynamics",
      subtitle: "Pore-Water Pressure and Shear Failure of Mountainous Clays",
      description: "A hydrological study on the physics of sudden slope liquefaction during heavy seasonal monsoons.",
      keywords: ["slope stability", "mudslide dynamics", "pore-water pressure", "liquefaction"],
      specs: [
        { label: "Critical Slope Angle", value: "28° – 34° (Soil threshold)" },
        { label: "Pore-Water Pressure", value: "85 kPa (High hazard)" },
        { label: "Liquefaction Rate", value: "Seconds (Thixotropic collapse)" },
        { label: "Slide Velocity", value: "Up to 60 km/h (Highly destructive)" }
      ],
      headings: [
        "Pore-Water Pressure and Effective Stress",
        "Thixotropy and Sudden Soil Liquefaction",
        "Engineering Mitigations: Soil Anchors and Debris Pits"
      ],
      texts: [
        "Slope stability is governed by Terzaghi's effective stress principle. As monsoon rains saturate hillsides, water fills soil pores, pushing soil particles apart. This pore-water pressure reduces friction, leading to sudden gravity slide.",
        "Many clay-heavy slope soils are thixotropic—behaving as solids under static conditions, but instantly liquefying under stress. A small initial shift can trigger a domino effect, turning an entire hillside into a fast-flowing river of mud.",
        "Hillsides are stabilized using long steel soil anchors driven deep into solid bedrock, coupled with debris retention pits designed to capture and drain mud flows safely."
      ],
      bullets: [
        ["Terzaghi's Law: Effective Stress = Total Stress - Pore Pressure.", "Friction Loss: Rising water pressure completely separates soil aggregates."],
        ["Thixotropic Collapse: Mechanical vibrations transform mud to liquid.", "Flow Dynamics: Behave like a viscous, high-density slurry, carrying rocks."],
        ["Soil Anchors: Steel rods tie sliding soil layers to stable granite.", "Drainage Channels: Concrete channels route rainwater away from slip faces."]
      ]
    },
    "rural-road-conditions": {
      slug: "subgrade-soil-stabilization",
      title: "Subgrade Soil Stabilization & Geotextile Interfaces",
      subtitle: "Mechanical Separators and Drainage Dynamics in Rural Highway Design",
      description: "A road building engineering treatise on geotextiles, aggregate sizing, and chemical stabilizers that maintain rural roads.",
      keywords: ["soil stabilization", "geotextiles", "road building", "subgrade drainage"],
      specs: [
        { label: "Geotextile Grab Tensile", value: "1,200 N (High-strength woven)" },
        { label: "Permeability (k)", value: "0.18 cm/s" },
        { label: "California Bearing Ratio", value: "CBR increased from 2% to 15%" },
        { label: "Aggregate Depth", value: "300 mm (Gravel layer)" }
      ],
      headings: [
        "Geotextiles: Mechanical Filtration and Separation",
        "Aggregate Gradation and Interlocking Dynamics",
        "Chemical Stabilization: Lime and Calcium Chloride"
      ],
      texts: [
        "Geotextile fabrics are laid between soft subgrade mud and upper gravel layers. The fabric acts as a mechanical separator, preventing heavy gravel from sinking into the mud while allowing water to drain upward freely.",
        "Stable roadbeds require graded aggregates. Angular, crushed gravels of varying sizes interlock tightly under roller compaction, forming a rigid stone bridge that distributes weight without shifting.",
        "Lime (calcium hydroxide) is mixed into clay-heavy subgrades. The lime triggers a chemical pozzolanic reaction, exchanging calcium ions with clay particles to permanently increase soil stiffness and reduce water absorption."
      ],
      bullets: [
        ["Separation Barrier: Keeps clean gravel from mixing with muddy subgrade.", "Woven Strength: Distributes heavy wheel loads across a wider area."],
        ["Angular Interlocking: Crushed stone edges lock together under load.", "Varying Sizes: Tiny stones fill the gaps between larger ones, increasing density."],
        ["Pozzolanic Chemistry: Lime forms cement-like binders with clay silicates.", "Dust Control: Calcium chloride absorbs moisture from the air, binding road dust."]
      ]
    }
  },
  "mud-tires": {
    "mud-tire-engineering": {
      slug: "self-clearing-tread-voids",
      title: "Centrifugal Self-Clearing Voids in Mud-Terrain Tires",
      subtitle: "The Fluid Mechanics of Silt Dispersal from Tire Treads",
      description: "A mechanical engineering breakdown of tread void ratios, stone ejectors, and rubber compound hysteresis in off-roading tires.",
      keywords: ["mud tires", "tread voids", "self-clearing voids", "tire physics"],
      specs: [
        { label: "Tread Void Ratio", value: "48% – 55% (High volume)" },
        { label: "Tread Depth", value: "18/32\" (Deep lug)" },
        { label: "Durometer Hardness", value: "58 Shore A (Cut-resistant)" },
        { label: "Mud Ejector Angle", value: "12° tapered side-walls" }
      ],
      headings: [
        "Void Ratio and Hydrodynamic Clearance",
        "Tapered Lugs and Mud Ejectors",
        "Rubber Hysteresis and Low-Temperature Flex"
      ],
      texts: [
        "Mud-terrain (M/T) tires are designed with high void ratios (up to 55%), meaning over half the tire surface is open space. This space acts as a hydrodynamic pocket, capturing mud and venting it out the sides as the wheel rotates.",
        "To prevent clay from vacuum-packing inside the tread, lugs are designed with tapered sidewalls (10° to 15° angles). Small, raised rubber ribs—stone and mud ejectors—flex under load, cracking and releasing packed clay.",
        "Off-road tires utilize rubber compounds with high hysteresis—meaning they deform easily over obstacles and damp rebound forces. High silica content ensures the rubber remains pliable in freezing, wet mud, maintaining grip."
      ],
      bullets: [
        ["High Void Ratio: Wide channels trap mud, letting lugs bite solid ground.", "Transverse Channels: Curved grooves pump mud outward during rotation."],
        ["Tapered Lugs: Release suction, allowing mud to slide out easily.", "Mud Ejector Ribs: Physical rubber bumps push out trapped gravel and clay."],
        ["High Hysteresis: Rubber molds around obstacles for mechanical grip.", "Silica Enrichment: Keeps tread pliable in cold, wet mountain mud."]
      ]
    },
    "four-by-four-culture": {
      slug: "torque-vectoring-differentials",
      title: "Torque Vectoring & Differential Locking Mechanics",
      subtitle: "Managing Soil-Tread Shear Interfaces on Rocky Terrain",
      description: "An automotive drivetrain engineering guide on lockers, torque transfer, and planetary gear physics in deep clay crossings.",
      keywords: ["torque vectoring", "locking differentials", "4x4 drivetrains", "traction engineering"],
      specs: [
        { label: "Differential Lock", value: "100% Mechanical spool lock" },
        { label: "Torque Bias Ratio", value: "Infinity:1 (Locked)" },
        { label: "Planetary Gear Ratio", value: "2.72:1 (Low-range transfer)" },
        { label: "Axle Shaft Diameter", value: "35-Spline chromoly steel" }
      ],
      headings: [
        "The Mechanics of Open vs. Locked Differentials",
        "Planetary Reduction and Low-Range Torque Multiplication",
        "Axle Shear and Chromoly Steel Upgrades"
      ],
      texts: [
        "An open differential sends torque to the wheel with the least resistance. In mud, if one wheel spins on slippery clay, the vehicle gets stuck. A locking differential mechanically binds both axles together, forcing both tires to rotate at equal speeds.",
        "Mud driving requires low speeds but massive torque. Off-road transfer cases utilize planetary gear reduction to multiply engine torque up to three-fold, allowing tires to turn slowly and avoid tearing soil bonds.",
        "When a locked tire suddenly gains traction on a buried rock, the drivetrain experiences immense torque spikes. Standard steel axles snap easily under these forces, requiring high-strength chromoly steel upgrades."
      ],
      bullets: [
        ["Open Failures: Sends 100% power to the spinning tire, leaving the vehicle stuck.", "Mechanical Lock: Splined collars lock axles together, delivering power to the tire with grip."],
        ["Planetary Sets: Rotates wheels slowly to prevent wheel spin and bogging.", "Torque Multiplication: Multiplies crawl ratio to climb obstacles smoothly."],
        ["Torsional Shear: Sudden grip twists axles with force exceeding limits.", "Chromoly Alloys: Advanced heat-treated steels resist bending and snapping."]
      ]
    },
    "truck-mudding-events": {
      slug: "high-travel-damping-viscosity",
      title: "Viscous Damping in High-Travel Suspension Systems",
      subtitle: "Shock Absorber Fluid Thermodynamics in Deep Mud Bounty Pits",
      description: "A mechanical analysis of shock absorber heat dissipation and oil viscosity index under severe mudding jumps.",
      keywords: ["shock absorber physics", "viscous damping", "suspension dynamics", "heat dissipation"],
      specs: [
        { label: "Suspension Travel", value: "28 Inches (Ultra high-travel)" },
        { label: "Shock Oil Viscosity", value: "VI = 350 (Multi-grade silicone)" },
        { label: "Operating Temp Range", value: "-20°C to 185°C" },
        { label: "Bypass Valving", value: "5-Zone progressive bypass" }
      ],
      headings: [
        "Viscous Damping and Kinetic Dissipation",
        "Silicone Fluid Thermodynamics and Fade Prevention",
        "Progressive Bypass Valving Dynamics"
      ],
      texts: [
        "As megatrucks launch off mud jumps, their massive suspensions must absorb thousands of foot-pounds of energy. Shock absorbers achieve this by forcing hydraulic fluid through tiny valving orifices, converting kinetic energy into heat.",
        "Under continuous pounding, shock oil can exceed 150°C. If the oil gets too hot, its viscosity drops—a phenomenon called shock fade. Mud racing shocks use premium silicone oils with high Viscosity Indices to maintain damping consistency.",
        "Extreme mud shocks utilize bypass channels on the outside of the shock body. This allows fluid to bypass the main piston during normal driving, but forces all fluid through the valving during deep bottom-out impacts."
      ],
      bullets: [
        ["Viscous Flow: Fluid resistance converts kinetic motion to thermal energy.", "Orifice Valving: Precision shim stacks control damping speed."],
        ["Shock Fade: Thin, hot oil loses damping resistance.", "Silicone Oils: Retain stable viscosity across extreme heat ranges."],
        ["Zone Damping: Soft ride on small bumps, progressive stiffness on jumps.", "Hydraulic Bump Stops: Nitrogen-charged chambers cushion final travel limits."]
      ]
    }
  }
};

// Generic generator for subpages that do not have custom hand-crafted dictionary entries
function generateGenericDetailPage(categorySlug: string, subpageSlug: string, title: string, description: string): CompactDetail {
  const cleanSlug = subpageSlug.replace(/-guide|-history|-mechanics/g, "") + "-physics";
  return {
    slug: cleanSlug,
    title: `${title} Technical Treatise`,
    subtitle: `Systemic Architecture and Fluid Mechanics of ${title}`,
    description: `A technical and academic exploration of ${title}, examining physical properties, environmental feedback systems, and structural coefficients.`,
    keywords: [subpageSlug, categorySlug, "technical analysis", "rheological study", "systems mapping"],
    specs: [
      { label: "Systemic Viscosity", value: "12,400 cPs (Dynamic equilibrium)" },
      { label: "Adhesion Cohesion Ratio", value: "0.82 (High binding factor)" },
      { label: "Shear Tolerance", value: "24.5 kPa (Yield threshold)" },
      { label: "Environmental Feedback", value: "Active thermodynamic loop" }
    ],
    headings: [
      `Crystalline Micro-Aggregation & Porosity`,
      `Shear Deformation and Yield Kinematics`,
      `Thermodynamic Equilibrium & Preservation`
    ],
    texts: [
      `The material matrices of ${title} are defined by their complex sedimentary and mineralogical packing. At a microscopic scale, colloidal clay platelets and organic matter form cohesive mineral networks. When saturated with aqueous solutions, high hydrogen bonding forces establish an elastic lattice that resists external load up to its critical yield boundary.`,
      `Under directional shear stress, the material exhibits non-Newtonian flow behavior, specifically pseudoplastic rheology. As shear rates accelerate, the internal particle alignments shift, sliding past one another and reducing apparent viscosity. This allows highly adaptive deformation while maintaining structural connectivity.`,
      `Sustained environmental feedback loops regulate the moisture and thermal decay cycles of the system. By excluding gaseous oxygen pathways and establishing stable, anaerobic redox gradients, the soil-clay matrix acts as a permanent thermal lag sink and historical preservative barrier.`
    ],
    bullets: [
      ["Colloidal Lattices: High mineral charge density binds sand aggregates.", "Pore Water Tension: Capillary force fields maintain structural stability."],
      ["Pseudoplastic Flow: High shear forces reduce localized viscosity.", "Yield Stress Barriers: Prevents gravity slide until critical limits are crossed."],
      ["Thermal Inertia: Sustained density cushions external temperature spikes.", "Anaerobic Shielding: Depleted oxygen levels halt standard organic decay."]
    ]
  };
}

// Combine everything dynamically
export const DETAIL_PAGES: DetailPageData[] = [];

// Base list of categories from /lib/data.ts
import { CATEGORIES } from "./data";

// Pre-fill with static pages
DETAIL_PAGES.push(...STATIC_DETAIL_PAGES);

// Dynamically generate the remaining pages
CATEGORIES.forEach((category) => {
  category.subpages.forEach((subpage) => {
    // Check if this subpage already has a static detail page
    const hasStatic = STATIC_DETAIL_PAGES.some(
      (p) => p.parentCategorySlug === category.slug && p.parentSubpageSlug === subpage.slug
    );

    if (!hasStatic) {
      // Find dictionary entry or generate generic
      let compact = EXTRA_DETAILS_DICTIONARY[category.slug]?.[subpage.slug];
      if (!compact) {
        compact = generateGenericDetailPage(category.slug, subpage.slug, subpage.title, subpage.description);
      }

      // Map CompactDetail to DetailPageData
      const detailPage: DetailPageData = {
        slug: compact.slug,
        parentCategorySlug: category.slug,
        parentSubpageSlug: subpage.slug,
        title: compact.title,
        subtitle: compact.subtitle,
        description: compact.description,
        keywords: compact.keywords,
        readTime: "6 min read",
        publishDate: "2026-05-15T12:00:00Z",
        author: "mud.cc Registry Board",
        sections: compact.headings.map((heading, idx) => ({
          heading,
          text: compact.texts[idx],
          bulletPoints: compact.bullets[idx]
        })),
        technicalSpecs: compact.specs,
        crossLinks: [
          {
            title: "Dermal Absorption & Ionic Exchanges",
            href: "/mud/dead-sea-mud/mineral-mud-masks/ionic-exchanges",
            reason: "Understand how the physical-chemical properties of soil minerals correlate with dermal barrier kinetics."
          },
          {
            title: "Thermal Mass Thermodynamics & Tensile Load Chemistry",
            href: "/mud/mud-architecture/adobe-and-cob-construction/earthen-thermodynamics",
            reason: "Compare local soil stabilization aggregates with ancient structural mudbrick and rammed earth binding."
          }
        ]
      };

      DETAIL_PAGES.push(detailPage);
    }
  });
});
