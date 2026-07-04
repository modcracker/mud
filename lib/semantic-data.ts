/**
 * Semantic Knowledge Graph mappings for mud.cc
 * Maps slugs to authority references (Wikipedia, Wikidata, DBpedia)
 * to provide search engines with deep entity disambiguation.
 */

export interface SemanticEntity {
  name: string;
  description: string;
  sameAs: string[];
  specialtyType: string; // e.g. "MedicalWebPage", "TechArticle", "HistoricalArticle"
  targetAudience: string;
  knowsAbout: string[];
}

export const SEMANTIC_MAP: Record<string, SemanticEntity> = {
  "dead-sea-mud": {
    name: "Dead Sea Mud Balneotherapy & Pelotherapy",
    description: "The therapeutic and clinical applications of mineral-rich alluvial clays and silts from the Dead Sea rift valley.",
    sameAs: [
      "https://en.wikipedia.org/wiki/Peloid",
      "https://en.wikipedia.org/wiki/Dead_Sea",
      "https://en.wikipedia.org/wiki/Balneotherapy",
      "https://www.wikidata.org/wiki/Q1668853",
      "https://www.wikidata.org/wiki/Q1205307"
    ],
    specialtyType: "MedicalWebPage",
    targetAudience: "Dermatologists, Skincare Professionals, and Wellness Practitioners",
    knowsAbout: ["Mineralogy", "Epidermal Osmosis", "Keratolysis", "Sulfate-Reducing Bacteria"]
  },
  "mississippi-mud-pie": {
    name: "Mississippi Mud Pie & Culinary Science",
    description: "The historical food chemistry, lipid crystallization, and starch gelatinization of traditional Southern chocolate mud desserts.",
    sameAs: [
      "https://en.wikipedia.org/wiki/Mississippi_mud_pie",
      "https://en.wikipedia.org/wiki/Chocolate_cake",
      "https://en.wikipedia.org/wiki/Dutch_process_cocoa",
      "https://www.wikidata.org/wiki/Q3316972"
    ],
    specialtyType: "Recipe",
    targetAudience: "Professional Pastry Chefs, Home Bakers, and Food Historians",
    knowsAbout: ["Lipid Polymorphism", "Cocoa Alkalization", "Starch Gelatinization", "Beta-prime Crystals"]
  },
  "mud-run": {
    name: "Mud Bogging & Obstacle Course Racing (OCR)",
    description: "The physical mechanics, history of tactical military assault courses, and off-road motorsport engineering of mud events.",
    sameAs: [
      "https://en.wikipedia.org/wiki/Obstacle_course_racing",
      "https://en.wikipedia.org/wiki/Mud_bogging",
      "https://www.wikidata.org/wiki/Q15837267",
      "https://www.wikidata.org/wiki/Q6931505"
    ],
    specialtyType: "AboutPage",
    targetAudience: "Off-Road Racing Enthusiasts, Adventure Athletes, and Physical Trainers",
    knowsAbout: ["Tactical Assault Courses", "Clay-Water Slurries", "Centrifugal Self-cleaning", "Tire Deflation Mechanics"]
  },
  "mud-the-game": {
    name: "Multi-User Dungeon (MUD) & Virtual Systems History",
    description: "The history of MUD1, mainframe command parsing systems, and Richard Bartle's player taxonomy on DEC PDP-10 systems.",
    sameAs: [
      "https://en.wikipedia.org/wiki/MUD",
      "https://en.wikipedia.org/wiki/MUD1",
      "https://en.wikipedia.org/wiki/PDP-10",
      "https://www.wikidata.org/wiki/Q475653"
    ],
    specialtyType: "TechArticle",
    targetAudience: "Computer Scientists, Retro Game Historians, and Database Engineers",
    knowsAbout: ["Mainframe Architecture", "Parser Engines", "Command Schedulers", "Bartle Taxonomy of Player Types"]
  },
  "mudslinging": {
    name: "Mudslinging & Negative Campaigning Epistemology",
    description: "The evolutionary psychology of negativity bias, media rhetoric, and political attack advertising strategies from antiquity to the Gilded Age.",
    sameAs: [
      "https://en.wikipedia.org/wiki/Mudslinging",
      "https://en.wikipedia.org/wiki/Negative_campaigning",
      "https://www.wikidata.org/wiki/Q1313337"
    ],
    specialtyType: "WebPage",
    targetAudience: "Political Scientists, Media Analysts, and Historians",
    knowsAbout: ["Negativity Bias", "Partisan Journalism", "Rhetorical Attack Strategies", "Daisy Ad Campaign Analysis"]
  },
  "clear-as-mud": {
    name: "Socio-linguistic Idiomatic Mud Etymologies",
    description: "Linguistic analyses of mud-based ironies, idioms, and figures of speech derived from agrarian England.",
    sameAs: [
      "https://en.wikipedia.org/wiki/Idiom",
      "https://en.wikipedia.org/wiki/Figure_of_speech",
      "https://www.wikidata.org/wiki/Q38840"
    ],
    specialtyType: "WebPage",
    targetAudience: "Etymologists, Linguists, and English Literature Academics",
    knowsAbout: ["Antiphrasis", "Idiomatic Irony", "Agrarian Etymologies", "Slang Progression"]
  },
  "mud-architecture": {
    name: "Cob, Adobe, & Rammed Earth Sustainable Architecture",
    description: "The physical engineering, thermal mass lag offsets, and structural mechanical traits of compressed earth and clay composite structures.",
    sameAs: [
      "https://en.wikipedia.org/wiki/Mudbrick",
      "https://en.wikipedia.org/wiki/Rammed_earth",
      "https://en.wikipedia.org/wiki/Cob_(material)",
      "https://www.wikidata.org/wiki/Q327249",
      "https://www.wikidata.org/wiki/Q1341885"
    ],
    specialtyType: "TechArticle",
    targetAudience: "Green Architects, Civil Structural Engineers, and Sustainable Builders",
    knowsAbout: ["Thermal Lag", "Compressive Strength", "Soil Gradation Recipes", "Earthen Brick Calcification"]
  },
  "mudlarking": {
    name: "Thames Mudlarking & Anaerobic Archaeological Preservation",
    description: "The archaeological history of scavenging river beds and the chemical preservation of organic matter in waterlogged, oxygen-deprived silt.",
    sameAs: [
      "https://en.wikipedia.org/wiki/Mudlark",
      "https://en.wikipedia.org/wiki/River_Thames",
      "https://en.wikipedia.org/wiki/Portable_Antiquities_Scheme",
      "https://www.wikidata.org/wiki/Q6932578"
    ],
    specialtyType: "HistoricalArticle",
    targetAudience: "Archaeologists, Thames Historians, and Numismatists",
    knowsAbout: ["Anaerobic Clay Preservation", "London Clay Stratigraphy", "Port of London Authority Regulation", "Sulfur Passivation"]
  },
  "mud-season": {
    name: "Mud Season Civil Geotech Engineering",
    description: "The geotech physical dynamics of spring thaw cycles, frost heaves, and the structural design of unpaved gravel roads.",
    sameAs: [
      "https://en.wikipedia.org/wiki/Mud_season",
      "https://en.wikipedia.org/wiki/Frost_heaving",
      "https://www.wikidata.org/wiki/Q6931525"
    ],
    specialtyType: "TechArticle",
    targetAudience: "Geotechnical Engineers, Civil Planners, and Road Maintenance Supervisors",
    knowsAbout: ["Geotextile Engineering", "Frost Thaw Hydrodynamics", "Aggregate Grading", "Soil Saturation Mechanics"]
  },
  "mud-tires": {
    name: "Mud-Terrain (M/T) Tyre Centrifugal Physics",
    description: "The mechanical tread block design, pneumatic pressure adjustments, and centrifugal self-cleaning physics of off-road tires.",
    sameAs: [
      "https://en.wikipedia.org/wiki/Off-road_tire",
      "https://en.wikipedia.org/wiki/Tire",
      "https://www.wikidata.org/wiki/Q3546059"
    ],
    specialtyType: "TechArticle",
    targetAudience: "Off-Road Vehicle Engineers, Tyre Designers, and Automotive Technicians",
    knowsAbout: ["Centrifugal Self-Cleaning", "Pneumatic Pressure Deflation", "Tread Block Void Ratios", "Sidewall Reinforcement"]
  }
};
