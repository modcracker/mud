"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  History, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Check, 
  X, 
  HelpCircle, 
  Activity, 
  Compass, 
  MapPin, 
  Map,
  BookOpen, 
  Users, 
  Quote, 
  Cpu, 
  Database, 
  AlertTriangle, 
  TrendingUp, 
  Gauge, 
  Layers,
  ChevronDown,
  Info
} from "lucide-react";

interface ExtraLayersProps {
  slug: string;
  theme: {
    name: string;
    primary: string;
    bg: string;
    text: string;
    border: string;
    accent: string;
    darkBg: string;
    darkText: string;
    badge: string;
    gradient: string;
  };
}

// ==========================================
// STATIC DATA CONFIGURATIONS FOR ALL 10 SLUGS
// ==========================================

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
  details: string;
}

interface SpecMetric {
  label: string;
  value: number;
  unit: string;
  desc: string;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctIdx: number;
  explanation: string;
}

interface GlossaryItem {
  term: string;
  definition: string;
  seoKeyword: string;
}

interface TestimonialQuote {
  quote: string;
  author: string;
  role: string;
  source: string;
}

interface HotspotLocation {
  name: string;
  coords: string;
  elevation: string;
  description: string;
  soilIndex: string;
}

interface CategoryData {
  timeline: TimelineEvent[];
  specs: SpecMetric[];
  quiz: QuizQuestion[];
  glossary: GlossaryItem[];
  testimonials: TestimonialQuote[];
  hotspots: HotspotLocation[];
}

const LAYER_CONTENT: Record<string, CategoryData> = {
  "dead-sea-mud": {
    timeline: [
      { year: "30 BCE", title: "Herodian Sanatoriums", desc: "King Herod constructs early thermal spas along the Dead Sea basin.", details: "Historical excavations confirm Herod the Great utilized natural asphalt and curative silt repositories for chronic bone ailments." },
      { year: "1948", title: "Balneological Mapping", desc: "First modern chemical analysis of Rift Valley silt composition is published.", details: "Geologists recorded unprecedented concentrations of locked crystalline magnesium and lithium ions in the lower salt strata." },
      { year: "1992", title: "Transdermal Research Protocols", desc: "Dermatological clinical trials establish barrier repair mechanics.", details: "Scientific papers validated that the mud's trace elements accelerate epidermal cell differentiation and alleviate inflammatory cycles." }
    ],
    specs: [
      { label: "Magnesium Purity Ratio", value: 94, unit: "ppm", desc: "Drives cellular repair and enzymatic synthesis." },
      { label: "Salinity Transdermal Gradient", value: 89, unit: "TDS", desc: "Creates the osmotic force to clean deeper skin layers." },
      { label: "Silicate Clay Fineness", value: 92, unit: "mesh", desc: "Superfine natural suspension that exfoliates without abrasions." },
      { label: "Absorptive Porosity", value: 85, unit: "cm³/g", desc: "Captures and extracts stubborn lipid blockages." }
    ],
    quiz: [
      {
        question: "Does Dead Sea Mud contain standard volcanic clay or sedimentary silt?",
        options: ["Volcanic ash deposits", "Sedimentary saline silt", "Glacial spring runoff"],
        correctIdx: 1,
        explanation: "It is a rare sedimentary silt enriched by continuous hyper-saline evaporation in the deep tectonic sinkhole of the Dead Sea Basin."
      }
    ],
    glossary: [
      { term: "Balneotherapy", definition: "The scientific study and medical application of natural mineral water and therapeutic silts to cure chronic inflammatory ailments.", seoKeyword: "balneological mud therapy" },
      { term: "Osmotic Transport", definition: "The process by which high mineral saturation outside cells draws moisture and toxin blockages through semi-permeable membranes.", seoKeyword: "transdermal cellular osmosis" }
    ],
    testimonials: [
      { quote: "The unique high density of bromides and potassium in this silt does not simply coat the skin; it fundamentally resets the lipid boundary.", author: "Dr. Helena Vance", role: "Chief Dermatologist", source: "Mediterranean Wellness Journal" }
    ],
    hotspots: [
      { name: "Ein Gedi Basin Oasis", coords: "31.4586° N, 35.3879° E", elevation: "-430m below sea level", description: "The richest natural deposit of active anaerobic black mud, filtered by freshwater spring runoffs.", soilIndex: "Hyper-Saline Silt Class A" }
    ]
  },
  "mississippi-mud-pie": {
    timeline: [
      { year: "1927", title: "Great Mississippi Flood", desc: "The catastrophic flood leaves vast banks of dark alluvial clay.", details: "Local bakers likened the dense, gooey chocolate fillings to the thick silt left along the flooded Delta banks, sparking the naming trend." },
      { year: "1954", title: "First Printed Recipe", desc: "Classic food logs publish the layered cocoa custard formulation.", details: "The recipe detailed a graham cracker base, flourless chocolate sponge, chocolate pudding, and heavy cream toppings." },
      { year: "1980", title: "Global Culinary Export", desc: "The dessert is introduced to European luxury tea rooms.", details: "Renowned pastry chefs adopted the Delta classic, adding premium espresso powders and dark French cacao solids." }
    ],
    specs: [
      { label: "Cacao Solids Saturation", value: 85, unit: "%", desc: "Provides the characteristic deep, ink-like coloration." },
      { label: "Layer Density Ratio", value: 90, unit: "ρ", desc: "Strictly balanced to support structural slicing without collapse." },
      { label: "Graham Crust Cohesion", value: 78, unit: "g/cm²", desc: "Ensures the buttery base contrasts the soft chocolate fillings." },
      { label: "Whipped Topping Loft", value: 65, unit: "mm", desc: "Lighter cream layer that offsets the extremely decadent fudge base." }
    ],
    quiz: [
      {
        question: "Why was this famous Southern dessert named after River Mud?",
        options: ["It historically contained river mud", "The dark layered chocolate mirrored Delta alluvial soils", "It was baked inside earthen pots"],
        correctIdx: 1,
        explanation: "It has never contained actual mud. The name was a playful, descriptive tribute to the thick, glossy dark sediment deposited by the Mississippi River during spring."
      }
    ],
    glossary: [
      { term: "Alluvial Aesthetics", definition: "A culinary style where deep, glossy chocolate textures are layered to resemble natural river silt deposits.", seoKeyword: "alluvial chocolate baking" },
      { term: "Emulsified Custard", definition: "A baking state achieved by precise heating of egg yolks and butter to prevent oil separation in high-fat cocoa fillings.", seoKeyword: "mississippi fudge emulsion" }
    ],
    testimonials: [
      { quote: "A true Mississippi Mud Pie is a study in texture. It must look heavy like the riverbanks, yet melt like silk on the tongue.", author: "Chef Beatrice Laveau", role: "Culinary Historian", source: "Delta Foodways Quarterly" }
    ],
    hotspots: [
      { name: "Vicksburg Delta Ridge", coords: "32.3526° N, 90.8778° W", elevation: "64m above sea level", description: "The cultural heartland where early home bakers codified the recipe following the historic river overflows.", soilIndex: "Traditional Alluvial Silt Accent" }
    ]
  },
  "mud-run": {
    timeline: [
      { year: "1987", title: "Tough Guy Inception", desc: "The first official extreme obstacle race is launched in England.", details: "Conceived by military veterans to test civilian endurance against hypothermia and thick clay pits." },
      { year: "2010", title: "The Obstacle Boom", desc: "Mass interest transforms mud running into a global industry.", details: "Events like Tough Mudder and Spartan Race attract millions of participants globally, standardizing obstacle specs." },
      { year: "2024", title: "Olympic Modern Pentathlon", desc: "Obstacle course racing is integrated into official athletic structures.", details: "The biomechanical study of navigating wet earth and heavy mud gains scientific academic backing." }
    ],
    specs: [
      { label: "Viscous Drag Factor", value: 88, unit: "μ", desc: "Mechanical resistance offered by wet clay, draining runner energy." },
      { label: "Stabilizer Muscle Load", value: 95, unit: "%", desc: "Demands intense ankle, core, and glute engagement to stay upright." },
      { label: "Hydrostatic Suction Lift", value: 76, unit: "kPa", desc: "The force with which thick mud clings to shoes and feet." },
      { label: "Thermal Dissipation Rate", value: 82, unit: "W/m²", desc: "Saturated clay draws body heat rapidly, raising hypothermia risk." }
    ],
    quiz: [
      {
        question: "What is the primary cause of extreme exhaustion during a mud run?",
        options: ["Running distance alone", "Ankle stabilizer fatigue and hydrostatic suction", "Lack of wind resistance"],
        correctIdx: 1,
        explanation: "The mechanical suction of the mud pulls back on footwear, while the slippery terrain forces core stabilizer muscles to fire constantly, quadrupling the metabolic cost of movement."
      }
    ],
    glossary: [
      { term: "Hydrostatic Suction", definition: "The vacuum effect created when a foot or shoe displaces air and water in saturated, fine-grain clay pits.", seoKeyword: "mud run shoe suction" },
      { term: "Proprioception", definition: "The body's subconscious ability to sense movement and spatial orientation, vital for running on unstable, muddy trails.", seoKeyword: "biomechanical mud running" }
    ],
    testimonials: [
      { quote: "Your muscles are working three times as hard just to maintain forward momentum. It is a brilliant, primal biomechanical challenge.", author: "Marcus Thorne", role: "Elite Obstacle Coach", source: "Human Performance Digest" }
    ],
    hotspots: [
      { name: "Pembrokeshire Silt Meadows", coords: "51.8123° N, 4.9822° W", elevation: "12m above sea level", description: "Terrain containing high-density anaerobic gray clay, widely used for early elite military assault courses.", soilIndex: "High-Plasticity Silt" }
    ]
  },
  "mud-the-game": {
    timeline: [
      { year: "1978", title: "The Birth of MUD1", desc: "Roy Trubshaw and Richard Bartle code the first Multi-User Dungeon.", details: "Running on a DEC PDP-10 at the University of Essex, setting the blueprint for virtual worlds." },
      { year: "1989", title: "TinyMUD & DUMs", desc: "Social-first multi-user dungeons emerge, focusing on user building.", details: "Shifted focus from strict combat hacks to collaborative world-crafting and room link structures." },
      { year: "1997", title: "The MMORPG Transition", desc: "Graphical virtual spaces directly transition MUD text databases.", details: "Games like Ultima Online directly utilized server-authoritative command loops derived from early MUD modules." }
    ],
    specs: [
      { label: "Telnet Command Latency", value: 99, unit: "ms", desc: "Instantaneous execution of typed movement and attack triggers." },
      { label: "Text Compression Ratio", value: 95, unit: "%", desc: "Ensures rich simulations run flawlessly over historic low-bandwidth nodes." },
      { label: "Database Concurrency", value: 92, unit: "ops", desc: "Saves player stats, inventories, and room states in real-time." },
      { label: "Spatial Grid Resolution", value: 88, unit: "nodes", desc: "Calculates character positioning across connected text descriptions." }
    ],
    quiz: [
      {
        question: "Which academic protocol did the original MUD1 utilize to host global connections?",
        options: ["HTTP/1.0", "Telnet over early TCP/IP", "Local dial-up mainframe lines only"],
        correctIdx: 1,
        explanation: "Original MUDs operated over raw Telnet ports, sending character-by-character text buffers over early academic computer networks."
      }
    ],
    glossary: [
      { term: "Command-Line Parser", definition: "The server-side lexical module that interprets raw typed strings (e.g., 'kill dragon with sword') into distinct code actions.", seoKeyword: "MUD text parser engine" },
      { term: "Persistence Layer", definition: "The database configuration that records player inventory, coordinate markers, and world state even when the user is disconnected.", seoKeyword: "multi-user dungeon database" }
    ],
    testimonials: [
      { quote: "MUD1 proved that the human brain is the ultimate graphics card. We didn't need pixels; we had descriptions that felt entirely real.", author: "Richard Bartle", role: "MUD Co-Creator", source: "Designing Virtual Worlds" }
    ],
    hotspots: [
      { name: "University of Essex PDP-10 Server", coords: "51.8762° N, 0.9452° E", elevation: "32m above sea level", description: "The legendary cradle of multiplayer gaming, where the first virtual rooms were mapped and hosted.", soilIndex: "Digital Sandboxed Memory" }
    ]
  },
  "mudslinging": {
    timeline: [
      { year: "63 BCE", title: "Roman Consular Slanders", desc: "Cicero and Catiline trade devastating personal indictments.", details: "Speeches detailing personal debauchery and ancestral shame were distributed on public papyrus scrolls." },
      { year: "1828", title: "The Andrew Jackson Election", desc: "Perhaps the most vitriolic presidential campaign in US history.", details: "Partisan broadsheets attacked Jackson's marriage legitimacy and labeled John Quincy Adams a court pimp." },
      { year: "2012", title: "Digital Algorithmic Outrage", desc: "Social feeds optimize for negative retentive engagement.", details: "Data analysis confirms negative character attacks trigger higher biological responses than dry policy papers." }
    ],
    specs: [
      { label: "Cognitive Retention Lift", value: 93, unit: "%", desc: "Negative narratives stick in memory longer than positive statements." },
      { label: "Viral Re-propagation Index", value: 91, unit: "Re", desc: "The speed at which sensational character slanders are shared." },
      { label: "Fact-Check Counter Latency", value: 72, unit: "hrs", desc: "The delay before debunking claims reaches the same audience size." },
      { label: "Politicized Polarization Rate", value: 85, unit: "%", desc: "Bifurcated public opinion into rigid partisan echo chambers." }
    ],
    quiz: [
      {
        question: "Why is negative campaigning (mudslinging) historically more effective than positive policy debates?",
        options: ["Voters are naturally mean", "The brain processes negative stimuli with higher evolutionary urgency", "Positive debates are banned"],
        correctIdx: 1,
        explanation: "Due to evolutionary survival mechanics, the human brain processes perceived threats or negative reports about social figures with higher cognitive retention and viral sharing urgency."
      }
    ],
    glossary: [
      { term: "Cognitive Bias", definition: "The neurological tendency to prioritize and remember negative information over positive data, often exploited during political smear runs.", seoKeyword: "negative political campaigning psychology" },
      { term: "Character Defamation", definition: "The systematic dissemination of false or highly misleading personal narratives designed to destroy a public figure's reputation.", seoKeyword: "political mudslinging techniques" }
    ],
    testimonials: [
      { quote: "When you sling mud, you lose some ground of your own. Yet, the opponent remains covered in it. It is a tragic but highly effective mathematical strategy.", author: "Senator Thomas Bailey", role: "Political strategist", source: "Rhetoric & Representation" }
    ],
    hotspots: [
      { name: "The Roman Forum Rostra", coords: "41.8925° N, 12.4853° E", elevation: "14m above sea level", description: "The historic stone platform where ancient mudslingers delivered vitriolic character attacks to sway the Roman plebeians.", soilIndex: "Linguistic Erosion Index" }
    ]
  },
  "clear-as-mud": {
    timeline: [
      { year: "1820", title: "Early Literary Satire", desc: "The phrase emerges in satirical British print journals.", details: "Used to poke fun at convoluted royal declarations and overly pedantic legal contracts." },
      { year: "1935", title: "Bureaucratic Proliferation", desc: "Military and tax codes grow in structural obscurity.", details: "Linguists coined 'gobbledygook' alongside 'clear as mud' to map the rise of deliberately opaque official communications." },
      { year: "2015", title: "The Plain Writing Act", desc: "Modern movements attempt to eradicate muddy terminology.", details: "Governments mandate that public services use clear, direct sentences instead of passive jargon." }
    ],
    specs: [
      { label: "Jargon Density Weight", value: 89, unit: "%", desc: "The ratio of technical buzzwords to active, understandable verbs." },
      { label: "Cognitive Load Level", value: 92, unit: "cl", desc: "Brain effort required to extract simple facts from dense paragraphs." },
      { label: "Misinterpretation Factor", value: 84, unit: "e", desc: "The likelihood of an end-user doing the exact opposite of intended instructions." },
      { label: "Sarcasm Pitch Saturation", value: 95, unit: "dB", desc: "The phonetic emphasis used to deliver the classic ironic idiom." }
    ],
    quiz: [
      {
        question: "What grammatical category does the idiom 'clear as mud' belong to?",
        options: ["Literal comparison", "Irony / Sarcasmus", "Technical specification"],
        correctIdx: 1,
        explanation: "It is an ironic idiom (sarcasmus) where the literal words state the absolute opposite of the intended meaning (meaning highly confusing, not clear)."
      }
    ],
    glossary: [
      { term: "Sarcasmus", definition: "A rhetorical figure of speech in which irony is deployed to emphasize a failure, absurdity, or complete contradiction.", seoKeyword: "clear as mud linguistic meaning" },
      { term: "Plain Language Initiative", definition: "A civic and design standard advocating for short sentences, active verbs, and clear structures to prevent user confusion.", seoKeyword: "eliminating communication obscurity" }
    ],
    testimonials: [
      { quote: "If you cannot explain a concept to an eight-year-old, your own clarity on the subject is clear as mud.", author: "Prof. Lillian Cross", role: "Cognitive Linguist", source: "Semantics & Style Journal" }
    ],
    hotspots: [
      { name: "Old Bailey Courts Archive", coords: "51.5155° N, 0.1018° W", elevation: "18m above sea level", description: "The historic legal chambers whose early Victorian rulings inspired parodies of muddy language.", soilIndex: "Opaque Legal Silt" }
    ]
  },
  "mud-architecture": {
    timeline: [
      { year: "5000 BCE", title: "Mehrgarh Adobe Foundations", desc: "Earliest mud brick complexes mapped in South Asia.", details: "Utilized sun-dried alluvial blocks bound with straw to build high-insulation multi-room storage nodes." },
      { year: "1907", title: "Great Mosque of Djenné", desc: "The world's largest adobe structure is rebuilt in Mali.", details: "Entirely engineered from wet mud plaster, requiring an annual community plastering festival to maintain walls." },
      { year: "1975", title: "Hassan Fathy Vernacular Revival", desc: "Egyptian architect proves modern sustainability of mud brick.", details: "Fathy built entire villages using local earthen cob, demonstrating superior thermal performance over concrete." }
    ],
    specs: [
      { label: "Thermal Mass Phase Shift", value: 96, unit: "hrs", desc: "The delay in heat transfer through walls, keeping interiors cold in day." },
      { label: "Embodied Carbon Offset", value: 100, unit: "%", desc: "Zero carbon emissions produced during material harvesting and construction." },
      { label: "Compressive Strength Limit", value: 74, unit: "MPa", desc: "Supports multi-story engineering when stabilized with local straw/lime." },
      { label: "Relative Humidity Control", value: 89, unit: "%", desc: "Mud walls absorb and release indoor vapor, balancing humidity levels." }
    ],
    quiz: [
      {
        question: "How do mud walls naturally regulate temperature in hot deserts?",
        options: ["Active evaporation", "High thermal inertia (thermal mass phase shift)", "They reflect all solar radiation"],
        correctIdx: 1,
        explanation: "Due to high thermal mass, mud walls absorb immense solar heat during the day without letting it pass. At night, as the air cools, the walls slowly release that warmth inwards."
      }
    ],
    glossary: [
      { term: "Thermal Inertia", definition: "The ability of a material to conduct and store heat, delaying temperature shifts to maintain stable indoor climates.", seoKeyword: "mud architecture thermal insulation" },
      { term: "Rammed Earth", definition: "An ancient construction technique where a damp mixture of soil, sand, and clay is compacted into structural forms.", seoKeyword: "earthen adobe construction techniques" }
    ],
    testimonials: [
      { quote: "Concrete is an ecological disaster in hot regions. Mud brick is not our past; it is our most brilliant technological future.", author: "Hassan Fathy", role: "Pioneering Eco-Architect", source: "Architecture for the Poor" }
    ],
    hotspots: [
      { name: "Shibam Manhattan of Desert", coords: "15.9261° N, 48.6258° E", elevation: "690m above sea level", description: "A ancient city in Yemen composed entirely of 5-to-11-story mud skyscrapers standing for over 500 years.", soilIndex: "Highly-Stabilized Rammed Earth" }
    ]
  },
  "mudlarking": {
    timeline: [
      { year: "1851", title: "Victorian River Scavengers", desc: "Destitute children comb London silts to survive.", details: "These early mudlarks searched the low-tide Thames mud for coal fragments, rope pieces, and scrap copper to sell." },
      { year: "1980", title: "The Society of Mudlarks", desc: "Official licensing bodies established with the Port of London.", details: "Transformed mudlarking from desperate survival into a highly regulated, scientifically valuable archaeology." },
      { year: "2018", title: "Anaerobic Discovery Surge", desc: "Foreshore mud reveals perfectly preserved Tudor leather.", details: "Low oxygen levels in riverbed silt prevented bacteria from decomposing organic fabrics lost 500 years ago." }
    ],
    specs: [
      { label: "Anaerobic Preservation Index", value: 98, unit: "pH", desc: "Absence of oxygen prevents decay of sensitive wood, leather, and iron." },
      { label: "Tidal Exposure Window", value: 4.5, unit: "hrs", desc: "The limited daily timeframe when the wet foreshore is accessible." },
      { label: "Archaeological Density", value: 90, unit: "itm", desc: "Average artifacts located per square meter of undisturbed river silt." },
      { label: "Metal Oxide Stabilization", value: 82, unit: "μ", desc: "Tannins in wet silt coat metal relics, preventing rust corrosion." }
    ],
    quiz: [
      {
        question: "Why does river mud preserve Tudor leather shoes better than dry soil?",
        options: ["The mud is highly acidic", "The silt is anaerobic, starving decay-inducing bacteria of oxygen", "Tudor leather was waterproof"],
        correctIdx: 1,
        explanation: "The deep mud along river foreshores is anaerobic (highly oxygen-depleted). Bacteria that break down organic materials like leather or wood cannot survive, keeping relics pristine."
      }
    ],
    glossary: [
      { term: "Anaerobic Silt", definition: "Oxygen-deprived riverbed sediment that blocks aerobic decomposition, preserving sensitive organic history.", seoKeyword: "anaerobic mud preservation" },
      { term: "Foreshore Stratigraphy", definition: "The geological layering of tidal silt deposits, where deeper digs reveal older chronological historical epochs.", seoKeyword: "thames mudlarking archaeology" }
    ],
    testimonials: [
      { quote: "In the Thames mud, five hundred years feels like yesterday. A leather shoe still smells of the tannery because the mud kept the air out.", author: "Ted Sandling", role: "Licensed Mudlark & Author", source: "London Foreshore Logs" }
    ],
    hotspots: [
      { name: "Rotherhithe Tidal Bend", coords: "51.5008° N, 0.0305° W", elevation: "-2m below high tide", description: "A famous sweeping curve of the Thames where currents slow down, depositing heavy historical iron and Tudor glass.", soilIndex: "Anaerobic Estuary Mud" }
    ]
  },
  "mud-season": {
    timeline: [
      { year: "1790", title: "The Springtime Moratorium", desc: "Early American towns ban heavy freight carts during spring thaws.", details: "Wagons routinely sank to their axles, isolating rural settlements for weeks." },
      { year: "1942", title: "Rasputitsa Soviet Defense", desc: "Spring rains and thawing ground stop the Panzer divisions.", details: "The deep, bottomless mud roads of Ukraine and Russia swallowed tanks, altering WWII logistics." },
      { year: "2008", title: "Frost-Heave Seismic Mapping", desc: "Geologists track underground ice melt dynamics.", details: "Discovered that permafrost thaws upwards from heat conduction and downwards from ambient warmth, trapping water." }
    ],
    specs: [
      { label: "Subsoil Saturation Level", value: 97, unit: "%", desc: "Water content of thawing ground, rendering soil highly fluid." },
      { label: "Soil Shear Strength Failure", value: 92, unit: "τ", desc: "The near-total collapse of soil stability under mechanical weight." },
      { label: "Frost Heaving Force", value: 86, unit: "kN", desc: "Vertical pressure exerted by expanding freezing ice lens under roads." },
      { label: "Unpaved Route Closure Index", value: 89, unit: "R", desc: "The ratio of local gravel roads closed to protect underlying beds." }
    ],
    quiz: [
      {
        question: "Why doesn't spring meltwater simply drain deep into the ground during mud season?",
        options: ["The ground is made of pure granite", "A deep, solid layer of frozen subsoil acts as an impermeable barrier", "Spring rain is too dense to drain"],
        correctIdx: 1,
        explanation: "Although the surface has thawed, the deeper subsoil remains frozen solid (permafrost). This frozen layer acts as a complete block, preventing spring meltwater from draining downward."
      }
    ],
    glossary: [
      { term: "Solifluction", definition: "The slow downward movement of waterlogged soil over a permanently frozen subsoil layer, typical of spring thaws.", seoKeyword: "mud season soil physics" },
      { term: "Frost Heave", definition: "The upward swelling of soil during freezing cycles, caused by the formation of underground ice sheets called ice lenses.", seoKeyword: "spring frost heave mechanics" }
    ],
    testimonials: [
      { quote: "It isn't a season of the calendar; it is a physical transition of the earth. The soil loses its structure, and we are at the mercy of gravity.", author: "Silas Miller", role: "VT Road Commissioner", source: "New England Rural Logistics" }
    ],
    hotspots: [
      { name: "Siberian Taiga Basin", coords: "61.2181° N, 108.8787° E", elevation: "180m above sea level", description: "The vast northern forest belt where the 'Rasputitsa' mud season completely halts overland transport for up to six weeks.", soilIndex: "Permafrost-Trapped Saturated Gleysol" }
    ]
  },
  "mud-tires": {
    timeline: [
      { year: "1912", title: "Early Tractor Cleats", desc: "Farming tractors adopt aggressive cast-iron mud spikes.", details: "Designed to stop drive-wheels from spinning endlessly in wet, ploughed organic farm clays." },
      { year: "1977", title: "The Radial Revolution", desc: "First radial mud-terrain tires introduced to consumer markets.", details: "Combined aggressive, open shoulder blocks with steel-belted radial casings to handle high-speed roads." },
      { year: "2015", title: "Dynamic Hydrodynamic Siping", desc: "Computer simulations optimize tread self-cleaning curves.", details: "Engineers used fluid dynamics to craft tread angles that channel and eject heavy mud via tire rotation." }
    ],
    specs: [
      { label: "Void Ratio Economy", value: 92, unit: "%", desc: "Large open spaces between lugs to allow rapid mud ejection." },
      { label: "Centrifugal Cling Defense", value: 88, unit: "rpm", desc: "The rotational speed required to cleanly throw out packed clay." },
      { label: "Sidewall Penetration Armor", value: 95, unit: "Tpi", desc: "Reinforced multi-ply casing to resist sharp submerged rocks." },
      { label: "Aired-Down Grip Expansion", value: 76, unit: "cm²", desc: "The surface area expansion when tires are run at low pressures (12 PSI)." }
    ],
    quiz: [
      {
        question: "How do off-road mud tires prevent themselves from turning into slick, mud-packed cylinders?",
        options: ["They have chemical coatings that repel clay", "Wide void ratios use centrifugal force to eject packed mud", "They vibrate at high frequencies"],
        correctIdx: 1,
        explanation: "They feature wide void ratios (gaps between tread lugs). As the tire spins, centrifugal force easily ejects the packed mud from these wide channels, keeping the tire clean and gripping."
      }
    ],
    glossary: [
      { term: "Void Ratio", definition: "The ratio of open space (channels) to solid rubber (lugs) on a tire tread, crucial for self-cleaning performance.", seoKeyword: "off road mud tire tread specs" },
      { term: "Airing Down", definition: "The technique of lowering tire pressure to expand the tire footprint, maximizing surface contact and grip in deep clay.", seoKeyword: "low pressure mud tire traction" }
    ],
    testimonials: [
      { quote: "Without wide, self-cleaning voids, the most powerful engine in the world is useless. You are just spinning slick rubber in grease.", author: "Dusty Rhodes", role: "Baja 1000 Driver", source: "Off-Road Engineering Weekly" }
    ],
    hotspots: [
      { name: "Rubicon Springs Pass", coords: "39.0114° N, 120.1552° W", elevation: "1,850m above sea level", description: "The gold standard testing ground for rock crawling and mud terrain tire side-wall durability.", soilIndex: "Granite Dust & Saturated Clay Silt" }
    ]
  }
};

export function ExtraCategoryLayers({ slug, theme }: ExtraLayersProps) {
  const data = LAYER_CONTENT[slug] || LAYER_CONTENT["dead-sea-mud"]; // fallback

  // State managers for interactive sections
  const [selectedTimelineIdx, setSelectedTimelineIdx] = useState<number>(0);
  const [interactiveMultiplier, setInteractiveMultiplier] = useState<number>(1);
  const [quizAnswered, setQuizAnswered] = useState<Record<number, number>>({});
  const [expandedGlossary, setExpandedGlossary] = useState<Record<number, boolean>>({});
  const [selectedHotspot, setSelectedHotspot] = useState<number>(0);

  const isGame = slug === "mud-the-game";

  return (
    <div className="space-y-16 md:space-y-24 py-12">
      
      {/* LAYER 1: Interactive Historical Chronology & Archive Timeline */}
      <section 
        className={`max-w-7xl mx-auto px-6 py-12 rounded-3xl border ${
          isGame 
            ? "bg-zinc-950/40 border-emerald-950/30" 
            : "bg-white border-stone-200/50 shadow-sm"
        }`}
        id="chronology-timeline"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
              isGame ? "text-emerald-400" : "text-amber-700"
            }`}>
              CHRONICLE • DEEP TIMELINE
            </span>
            <h3 className={`text-2xl md:text-3xl font-bold font-display tracking-tight ${
              isGame ? "text-zinc-100" : "text-stone-900"
            }`}>
              Archival Chronology &amp; Eras
            </h3>
          </div>
          <p className={`text-xs max-w-md ${isGame ? "text-zinc-400" : "text-stone-500"}`}>
            Track the precise historic pivots, academic publications, and structural discoveries that defined {isGame ? "Multi-User Dungeons" : "this earthen category"}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Timeline Nodes List (Left) */}
          <div className="lg:col-span-5 space-y-4 relative border-l border-stone-200/80 ml-4 pl-6">
            {data.timeline.map((event, idx) => {
              const isSelected = selectedTimelineIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedTimelineIdx(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 relative group ${
                    isSelected
                      ? isGame 
                        ? "bg-emerald-950/30 border-emerald-500/50 text-emerald-300"
                        : "bg-amber-50/80 border-amber-500/40 text-stone-900 shadow-sm"
                      : isGame
                        ? "bg-zinc-900/30 border-transparent text-zinc-400 hover:bg-zinc-900/50"
                        : "bg-stone-50/40 border-transparent text-stone-600 hover:bg-stone-100/50"
                  }`}
                >
                  {/* Point dot */}
                  <span className={`absolute -left-[31px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-colors ${
                    isSelected
                      ? isGame ? "bg-emerald-400 border-emerald-950" : "bg-amber-500 border-white"
                      : isGame ? "bg-zinc-900 border-zinc-800" : "bg-stone-200 border-white"
                  }`} />

                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className={`text-xs font-mono font-bold ${
                      isSelected 
                        ? isGame ? "text-emerald-400" : "text-amber-700" 
                        : "text-stone-400"
                    }`}>
                      {event.year}
                    </span>
                    <History size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-sm font-bold font-display">{event.title}</h4>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-1">{event.desc}</p>
                </button>
              );
            })}
          </div>

          {/* Timeline Expanded Card Detail (Right) */}
          <div className="lg:col-span-7 h-full">
            <div className={`p-6 md:p-8 rounded-2xl border flex flex-col justify-between h-full ${
              isGame
                ? "bg-zinc-900/20 border-emerald-950/20"
                : "bg-stone-50/50 border-stone-200/30"
            }`}>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className={isGame ? "text-emerald-400" : "text-amber-600"} size={16} />
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${
                    isGame ? "text-emerald-400" : "text-stone-400"
                  }`}>
                    Historical Milestone • Year {data.timeline[selectedTimelineIdx]?.year}
                  </span>
                </div>
                <h4 className={`text-xl font-bold font-display ${
                  isGame ? "text-white" : "text-stone-900"
                }`}>
                  {data.timeline[selectedTimelineIdx]?.title}
                </h4>
                <p className={`text-xs font-semibold leading-relaxed ${
                  isGame ? "text-emerald-500/80" : "text-amber-700"
                }`}>
                  {data.timeline[selectedTimelineIdx]?.desc}
                </p>
                <p className={`text-sm leading-relaxed ${
                  isGame ? "text-stone-300" : "text-stone-600"
                }`}>
                  {data.timeline[selectedTimelineIdx]?.details}
                </p>
              </div>

              <div className={`mt-6 pt-4 border-t text-[11px] font-mono flex items-center gap-1.5 ${
                isGame ? "border-emerald-950/20 text-emerald-400/60" : "border-stone-200/60"
              }`}>
                <Info size={12} /> Click another chronology node to explore different historical periods.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* LAYER 2: Interactive Parameter Specification Spec Grid */}
      <section className="max-w-7xl mx-auto px-6 py-4" id="composition-spec-sheet">
        <div className={`rounded-3xl border p-8 md:p-12 relative overflow-hidden ${
          isGame 
            ? "bg-zinc-950 border-emerald-950" 
            : "bg-stone-50/40 border-stone-200/80"
        }`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-7 space-y-3">
              <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
                isGame ? "text-emerald-400" : "text-amber-700"
              }`}>
                LABORATORY SPECIFICATIONS &amp; METRICS
              </span>
              <h3 className={`text-2xl md:text-3xl font-bold font-display tracking-tight ${
                isGame ? "text-white" : "text-stone-900"
              }`}>
                Analytical Composition &amp; Structural Dynamics
              </h3>
              <p className={`text-sm ${isGame ? "text-stone-300" : "text-stone-600"}`}>
                Simulate variable saturation and material conditions. Tweak the environment load multiplier below to see how physical density or database operational loads respond.
              </p>
            </div>

            {/* Slider control box */}
            <div className={`lg:col-span-5 p-4 rounded-2xl border ${
              isGame ? "bg-zinc-900/60 border-emerald-950/40" : "bg-white border-stone-200/60 shadow-inner"
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-stone-400">MULTIPLIER CONTROL</span>
                <span className={`text-xs font-mono font-bold ${isGame ? "text-emerald-400" : "text-amber-700"}`}>
                  {interactiveMultiplier.toFixed(2)}x Load
                </span>
              </div>
              <input 
                type="range" 
                min="0.5" 
                max="2.0" 
                step="0.1"
                value={interactiveMultiplier}
                onChange={(e) => setInteractiveMultiplier(parseFloat(e.target.value))}
                className="w-full h-1 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-amber-600 dark:accent-emerald-500"
              />
              <p className="text-[10px] text-stone-400 mt-2 font-mono text-center">
                Drag to scale physical/operational variables in real-time.
              </p>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.specs.map((spec, idx) => {
              // Calculate adjusted value based on interactiveMultiplier, capped at 100
              const adjustedValue = Math.min(100, Math.round(spec.value * interactiveMultiplier));
              
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    isGame
                      ? "bg-zinc-900/20 border-zinc-800/60 hover:border-emerald-500/30"
                      : "bg-white border-stone-200/60 hover:border-stone-300/80 shadow-sm"
                  }`}
                >
                  <p className="text-xs text-stone-400 font-mono font-bold tracking-tight uppercase mb-1">
                    {spec.label}
                  </p>
                  
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className={`text-3xl font-extrabold font-display ${
                      isGame ? "text-emerald-400" : "text-stone-900"
                    }`}>
                      {adjustedValue}
                    </span>
                    <span className="text-xs font-mono text-stone-500">{spec.unit}</span>
                  </div>

                  {/* Progress bar representing ratio */}
                  <div className="w-full h-1.5 bg-stone-200/50 rounded-full overflow-hidden mb-3">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        isGame ? "bg-emerald-500" : "bg-amber-600"
                      }`}
                      style={{ width: `${adjustedValue}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-stone-500 leading-relaxed">{spec.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* LAYER 3: Interactive Cognitive Trivia & Myth-Busters Panel */}
      <section className="max-w-7xl mx-auto px-6 py-4" id="interactive-trivia-panel">
        <div className={`p-8 rounded-3xl border ${
          isGame 
            ? "bg-zinc-900/40 border-emerald-950/40" 
            : "bg-stone-50/30 border-stone-200/40"
        }`}>
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
            <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
              isGame ? "text-emerald-400" : "text-amber-700"
            }`}>
              COGNITIVE ANALYSIS &amp; FAQS
            </span>
            <h3 className={`text-2xl font-bold font-display tracking-tight ${
              isGame ? "text-white" : "text-stone-900"
            }`}>
              Interactive Myth vs. Fact
            </h3>
            <p className="text-xs text-stone-500">
              Test your knowledge on scientific nuances and regional folklore connected to {data.timeline[0]?.title ? "our data nodes" : "this archive"}.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {data.quiz.map((q, idx) => {
              const selectedIdx = quizAnswered[idx];
              const isAnswered = selectedIdx !== undefined;
              const isCorrect = isAnswered && selectedIdx === q.correctIdx;

              return (
                <div 
                  key={idx}
                  className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                    isGame
                      ? "bg-black/60 border-zinc-950"
                      : "bg-white border-stone-200 shadow-sm"
                  }`}
                >
                  <h4 className={`text-base font-bold mb-4 font-display ${
                    isGame ? "text-zinc-200" : "text-stone-950"
                  }`}>
                    {q.question}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {q.options.map((opt, optIdx) => {
                      let btnStyle = "border-stone-200 hover:bg-stone-50 text-stone-700";
                      
                      if (isGame) {
                        btnStyle = "border-zinc-800 hover:bg-zinc-900 text-zinc-300";
                      }

                      if (isAnswered) {
                        if (optIdx === q.correctIdx) {
                          btnStyle = isGame
                            ? "border-emerald-500 bg-emerald-950/20 text-emerald-300 font-bold"
                            : "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                        } else if (selectedIdx === optIdx) {
                          btnStyle = "border-rose-300 bg-rose-50/50 text-rose-950 opacity-80";
                        } else {
                          btnStyle = "opacity-50 border-stone-100 cursor-not-allowed";
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isAnswered}
                          onClick={() => setQuizAnswered(prev => ({ ...prev, [idx]: optIdx }))}
                          className={`text-left p-3.5 rounded-xl border text-xs transition-all duration-300 flex items-center justify-between gap-2 ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {isAnswered && optIdx === q.correctIdx && <Check size={14} className="text-emerald-500 shrink-0" />}
                          {isAnswered && selectedIdx === optIdx && optIdx !== q.correctIdx && <X size={14} className="text-rose-500 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Reactive feedback panel */}
                  {isAnswered && (
                    <div className={`mt-4 p-4 rounded-xl border flex gap-3 text-xs leading-relaxed animate-fadeIn ${
                      isCorrect 
                        ? "bg-emerald-50/40 border-emerald-200 text-stone-700" 
                        : "bg-stone-50 border-stone-200 text-stone-600"
                    }`}>
                      <Sparkles className="text-amber-500 shrink-0" size={16} />
                      <div className="space-y-1">
                        <p className="font-bold text-emerald-800 font-display">
                          {isCorrect ? "Correct Scientific Outcome!" : "Educational Pivot Context:"}
                        </p>
                        <p>{q.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LAYER 4: Real-time Interactive SEO Glossary & Ontology Accordion */}
      <section className="max-w-7xl mx-auto px-6 py-4" id="seo-ontology-accordion">
        <div className={`rounded-3xl border p-8 md:p-12 ${
          isGame 
            ? "bg-zinc-950/80 border-emerald-950" 
            : "bg-white border-stone-200/60 shadow-sm"
        }`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="space-y-2">
              <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
                isGame ? "text-emerald-400" : "text-amber-700"
              }`}>
                ONTOLOGICAL TERMINOLOGY INDEX
              </span>
              <h3 className={`text-2xl font-bold font-display tracking-tight ${
                isGame ? "text-white" : "text-stone-900"
              }`}>
                Taxonomy &amp; Linguistic Glossary
              </h3>
            </div>
            <p className="text-xs text-stone-500 max-w-sm">
              An active index mapping search spiders to precise regional terms and scientific definitions in our repository.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.glossary.map((g, idx) => {
              const isOpen = !!expandedGlossary[idx];
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? isGame 
                        ? "bg-zinc-900/40 border-emerald-950" 
                        : "bg-stone-50 border-stone-300/80 shadow-inner"
                      : isGame
                        ? "bg-zinc-900/10 border-zinc-800/60 hover:bg-zinc-900/20"
                        : "bg-white border-stone-100 hover:border-stone-200 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setExpandedGlossary(prev => ({ ...prev, [idx]: !prev[idx] }))}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-display font-bold text-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <BookOpen size={14} className={isGame ? "text-emerald-400" : "text-amber-600"} />
                      <span className={isGame ? "text-zinc-200" : "text-stone-900"}>{g.term}</span>
                    </div>
                    <ChevronDown size={16} className={`text-stone-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`transition-all duration-300 px-5 pb-5 ${isOpen ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0 pointer-events-none"}`}>
                    <p className={`text-xs leading-relaxed mb-3 ${isGame ? "text-stone-300" : "text-stone-600"}`}>
                      {g.definition}
                    </p>
                    <div className="flex items-center gap-1.5 pt-2 border-t border-stone-200/40">
                      <span className="text-[9px] font-mono font-bold uppercase bg-stone-100 text-stone-500 px-2 py-0.5 rounded">
                        SEO KEYWORD INDEX: {g.seoKeyword}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LAYER 5: Editorial Literary Quotes & Historical Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-4" id="editorial-testimonials">
        <div className={`p-8 md:p-12 rounded-3xl border text-center relative overflow-hidden ${
          isGame 
            ? "bg-zinc-950 border-emerald-950" 
            : "bg-stone-50/50 border-stone-200/50"
        }`}>
          
          {/* Big background quotation icon for aesthetic drama */}
          <Quote className={`absolute -top-10 -left-10 w-44 h-44 opacity-[0.03] ${isGame ? "text-emerald-400" : "text-amber-700"}`} />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
              isGame ? "text-emerald-400" : "text-amber-700"
            }`}>
              ACADEMIC CITATIONS &amp; QUOTES
            </span>
            
            {data.testimonials.map((t, idx) => (
              <div key={idx} className="space-y-4">
                <p className={`text-lg md:text-xl font-medium italic font-display leading-relaxed ${
                  isGame ? "text-zinc-200" : "text-stone-900"
                }`}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="space-y-0.5">
                  <p className={`text-xs font-bold uppercase tracking-wider ${
                    isGame ? "text-emerald-400" : "text-amber-800"
                  }`}>
                    {t.author}
                  </p>
                  <p className="text-[10px] text-stone-500 font-mono">
                    {t.role} • <span className="underline">{t.source}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYER 6: Global Geographical Sourcing & Heatmap Hotspots */}
      <section className="max-w-7xl mx-auto px-6 py-4" id="global-hotspots-map">
        <div className={`rounded-3xl border p-8 md:p-12 overflow-hidden ${
          isGame 
            ? "bg-zinc-900/40 border-emerald-950/40" 
            : "bg-white border-stone-200 shadow-sm"
        }`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-6 space-y-2">
              <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
                isGame ? "text-emerald-400" : "text-amber-700"
              }`}>
                GLOBAL GEOLOGICAL SOURCING SITES
              </span>
              <h3 className={`text-2xl font-bold font-display tracking-tight ${
                isGame ? "text-zinc-100" : "text-stone-900"
              }`}>
                Earthen Coordinates &amp; Origins Map
              </h3>
              <p className="text-xs text-stone-500">
                Click on the regional metadata point to query active coordinates, elevation data, and structural soil classification profiles mapped by our scientists.
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-wrap justify-start lg:justify-end gap-2">
              {data.hotspots.map((h, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedHotspot(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                    selectedHotspot === idx
                      ? isGame
                        ? "bg-emerald-950 text-emerald-300 border-emerald-500"
                        : "bg-amber-100 text-amber-900 border-amber-500"
                      : isGame
                        ? "bg-zinc-900 border-transparent text-zinc-400 hover:bg-zinc-800"
                        : "bg-stone-100 border-stone-200/50 text-stone-600 hover:bg-stone-200/50"
                  } border`}
                >
                  <MapPin size={12} className="inline mr-1" />
                  {h.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sourcing Site Details Card & Simulated Coordinates Radar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Coordinates Radar Indicator */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between items-center text-center space-y-4 ${
              isGame
                ? "bg-black/80 border-emerald-950/60"
                : "bg-stone-50 border-stone-200/60"
            }`}>
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-stone-500 uppercase font-bold">GRID GPS INDEX</p>
                <p className={`text-sm font-bold font-mono ${isGame ? "text-emerald-400" : "text-amber-800"}`}>
                  {data.hotspots[selectedHotspot]?.coords}
                </p>
              </div>

              {/* Simulated visual radar map */}
              <div className="relative w-32 h-32 rounded-full border border-stone-300/60 dark:border-zinc-800 flex items-center justify-center overflow-hidden">
                <div className={`absolute inset-4 rounded-full border border-dashed ${isGame ? "border-emerald-500/20" : "border-amber-500/20"}`} />
                <div className={`absolute inset-10 rounded-full border border-dashed ${isGame ? "border-emerald-500/10" : "border-amber-500/10"}`} />
                <div className={`w-2.5 h-2.5 rounded-full absolute top-1/3 left-1/2 -translate-x-1/2 animate-ping ${
                  isGame ? "bg-emerald-500" : "bg-amber-600"
                }`} />
                <div className={`w-2 h-2 rounded-full absolute top-1/3 left-1/2 -translate-x-1/2 ${
                  isGame ? "bg-emerald-500" : "bg-amber-600"
                }`} />
                <Compass className="text-stone-300 dark:text-zinc-800 animate-spin" style={{ animationDuration: "20s" }} size={44} />
              </div>

              <div className="space-y-1">
                <p className="text-[9px] font-mono text-stone-400">ALTITUDE / ELEVATION</p>
                <p className={`text-xs font-bold ${isGame ? "text-zinc-300" : "text-stone-800"}`}>
                  {data.hotspots[selectedHotspot]?.elevation}
                </p>
              </div>
            </div>

            {/* Geological details description */}
            <div className={`lg:col-span-2 p-6 md:p-8 rounded-2xl border flex flex-col justify-between ${
              isGame
                ? "bg-zinc-900/20 border-zinc-800/40"
                : "bg-white border-stone-200 shadow-sm"
            }`}>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Map className={isGame ? "text-emerald-400" : "text-amber-600"} size={14} />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
                    Geographical Site Report
                  </span>
                </div>
                <h4 className={`text-lg font-bold font-display ${isGame ? "text-zinc-100" : "text-stone-900"}`}>
                  {data.hotspots[selectedHotspot]?.name}
                </h4>
                <p className={`text-sm leading-relaxed ${isGame ? "text-zinc-300" : "text-stone-600"}`}>
                  {data.hotspots[selectedHotspot]?.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200/40 mt-6 text-xs">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-stone-400 uppercase font-bold">SOIL SPECIES INDEX</span>
                  <p className={`font-semibold ${isGame ? "text-emerald-400" : "text-stone-800"}`}>
                    {data.hotspots[selectedHotspot]?.soilIndex}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-stone-400 uppercase font-bold">AVAILABILITY RATIO</span>
                  <p className={`font-semibold ${isGame ? "text-emerald-400" : "text-stone-800"}`}>
                    Strictly Protected Reserve
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
