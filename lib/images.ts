/**
 * mud.cc Premium Image Registry
 * Central utility to serve high-contrast, topic-specific Unsplash photos 
 * in place of random placeholder images.
 */

import geochemicalArchiveHeader from "@/src/assets/images/geochemical_archive_header_1783237929421.jpg";

// Mapping of categories to specific Unsplash image IDs
export const CATEGORY_IMAGES: Record<string, {
  wide: string;
  tall: string;
  layered1: string;
  layered2: string;
}> = {
  "dead-sea-mud": {
    wide: "photo-1515377905703-c4788e51af15", // mineral mud face mask
    tall: "photo-1512290923902-8a9f81dc236c", // spa relaxation clay
    layered1: "photo-1519751138087-5bf79df62d5b", // spa oil & stones
    layered2: "photo-1556228578-0d85b1a4d571", // natural clay bowls
  },
  "mississippi-mud-pie": {
    wide: "photo-1606313564200-e75d5e30476c", // chocolate sauce dripping on dessert
    tall: "photo-1578985545062-69928b1d9587", // tall chocolate cake
    layered1: "photo-1587314168485-3236d6710814", // baking cocoa / chocolate
    layered2: "photo-1541795795328-f073b763494e", // slice of mud pie
  },
  "mud-run": {
    wide: "photo-1517649763962-0c623066013b", // muddy boots in mud run
    tall: "photo-1461896836934-ffe607ba8211", // athlete crawling in mud
    layered1: "photo-1506015391300-4802dc74de2e", // offroad trail
    layered2: "photo-1552674605-db6ffd4facb5", // active dirty marathon
  },
  "mud-the-game": {
    wide: "photo-1550751827-4bd374c3f58b", // green screen matrix terminal
    tall: "photo-1515879218367-8466d910aaa4", // cascading computer code
    layered1: "photo-1562813733-b31f71025d54", // vintage computer motherboard
    layered2: "photo-1542831371-29b0f74f9713", // retro clicky keyboard
  },
  "mudslinging": {
    wide: "photo-1540910419892-4a36d2c3266c", // political podium microphones
    tall: "photo-1541872703-74c5e44368f9", // speaker shadow at debate
    layered1: "photo-1529107386315-e1a2fc48a084", // vintage newspapers / media
    layered2: "photo-1508962914676-134849a727f0", // abstract splash of dark ink/mud
  },
  "clear-as-mud": {
    wide: "photo-1505118380757-91f5f5632de0", // swirling silt estuary water
    tall: "photo-1508962914676-134849a727f0", // mud paint stroke
    layered1: "photo-1518531933037-91b2f5f229cc", // water ripples
    layered2: "photo-1451187580459-43490279c0fa", // complex data network
  },
  "mud-architecture": {
    wide: "photo-1590725121839-892b458a74fe", // modern rammed earth wall
    tall: "photo-1505691938895-1758d7feb511", // sun-dried adobe pueblo
    layered1: "photo-1518005020951-eccb494ad742", // clean clay surface
    layered2: "photo-1486406146926-c627a92ad1ab", // structural grid lines
  },
  "mudlarking": {
    wide: "photo-1464822759023-fed622ff2c3b", // low tide muddy thames shoreline (moody river stones at twilight)
    tall: "photo-1447069387593-a5de0862481e", // vintage watch and copper artifacts
    layered1: "photo-1464822759023-fed622ff2c3b", // misty riverbank rocks
    layered2: "photo-1501503069356-3c6b82a17d89", // ancient history archive book
  },
  "mud-season": {
    wide: "photo-1513836279014-a89f7a76ae86", // deep muddy forest car tracks
    tall: "photo-1542601906990-b4d3fb778b09", // melting dirty snow slush
    layered1: "photo-1448375240586-882707db888b", // foggy wet pine trees
    layered2: "photo-1518495973542-4542c06a5843", // wet soil and leaves
  },
  "mud-tires": {
    wide: "photo-1533473359331-0135ef1b58bf", // dirty offroad 4x4 tire
    tall: "photo-1618843479313-40f8afb4b4d8", // offroad truck wheel in swamp
    layered1: "photo-1506015391300-4802dc74de2e", // dirt path offroad adventure
    layered2: "photo-1511919884226-fd3cad34687c", // heavy duty suspension vehicle
  },
};

// Precise mapping of specific subpages to custom Unsplash image IDs
export const SUBPAGE_IMAGES: Record<string, string> = {
  // Dead Sea Mud subpages
  "mineral-mud-masks": "photo-1515377905703-c4788e51af15", // Purifying clay mask
  "dead-sea-mud-history": "photo-1445633814773-e687a5e08618", // Ancient parchment / history
  "mud-spa-treatments": "photo-1512290923902-8a9f81dc236c", // Spa bath wellness
  
  // Mississippi Mud Pie subpages
  "classic-recipe-lore": "photo-1606313564200-e75d5e30476c", // Decadent melting chocolate cake
  "mud-cake-vs-mud-pie": "photo-1578985545062-69928b1d9587", // Southern chocolate cake
  "southern-dessert-culture": "photo-1541795795328-f073b763494e", // Sliced baking dessert
  
  // Mud Run subpages
  "obstacle-race-history": "photo-1461896836934-ffe607ba8211", // Mud run racers crawling
  "mud-bogging": "photo-1533473359331-0135ef1b58bf", // Mega truck mud pit action
  "mud-wrestling": "photo-1461896836934-ffe607ba8211", // Primal dirty wrestling style match
  
  // MUD - The Game subpages
  "mud-origins": "photo-1550751827-4bd374c3f58b", // Green terminal coding
  "text-based-gaming": "photo-1542831371-29b0f74f9713", // Retro clicky terminal keyboard
  "muds-to-mmos": "photo-1515879218367-8466d910aaa4", // Scrolling lines of code
  
  // Mudslinging subpages
  "negative-campaigning": "photo-1540910419892-4a36d2c3266c", // Podium press mics
  "the-idioms-origin": "photo-1529107386315-e1a2fc48a084", // Vintage printing press papers
  
  // Clear as Mud subpages
  "common-mud-idioms": "photo-1505118380757-91f5f5632de0", // Abstract estuary sediment swirls
  "stick-in-the-mud": "photo-1508962914676-134849a727f0", // Opaque mud splatters on canvas
  
  // Mud Architecture subpages
  "adobe-and-cob-construction": "photo-1505691938895-1758d7feb511", // Sun-baked clay adobe walls
  "ancient-mudbrick-cities": "photo-1590725121839-892b458a74fe", // Tall Shibam mudbrick buildings
  "modern-earthen-building": "photo-1518005020951-eccb494ad742", // High end rammed earth luxury home
  
  // Mudlarking subpages
  "thames-mudlarking": "photo-1464822759023-fed622ff2c3b", // Low tide riverbed Thames (moody river stones at twilight)
  "treasure-hunting": "photo-1447069387593-a5de0862481e", // Dirty historic pocketwatch
  "urban-archaeology": "photo-1464822759023-fed622ff2c3b", // Old river banks and stones
  
  // Mud Season subpages
  "new-england-mud-season": "photo-1513836279014-a89f7a76ae86", // Deep rutted muddy track in Vermont forest
  "monsoon-mud": "photo-1542601906990-b4d3fb778b09", // Swelling river mud and slush
  "rural-road-conditions": "photo-1448375240586-882707db888b", // Misty dirt forestry track
  
  // Mud Tires subpages
  "mud-tire-engineering": "photo-1533473359331-0135ef1b58bf", // Self-cleaning tread in deep swamp mud
  "four-by-four-culture": "photo-1618843479313-40f8afb4b4d8", // Jeep splashing mud trail
  "truck-mudding-events": "photo-1511919884226-fd3cad34687c", // Monster truck offroad mud bogging
};

// Mapping of custom hardcoded picsum names to realistic alternatives
export const PICSUM_FALLBACK_MAP: Record<string, string> = {
  "mud_spa_1": "photo-1556228578-0d85b1a4d571", // Clay bowls
  "mud_spa_2": "photo-1512290923902-8a9f81dc236c", // Spa bath
  "sugar_cane": "photo-1587314168485-3236d6710814", // Cocoa / Sweet
  "icebox_pie": "photo-1541795795328-f073b763494e", // Chocolate plate
  "retro_gaming": "photo-1550751827-4bd374c3f58b", // Retro console code
  "vintage_pc": "photo-1542831371-29b0f74f9713", // Vintage keyboard
  "river_thames": "photo-1464822759023-fed622ff2c3b", // River bed thames (moody river stones at twilight)
  "old_coins": "photo-1447069387593-a5de0862481e", // Vintage keys / watch
  "muddy_road": "photo-1513836279014-a89f7a76ae86", // Saturated forest road
  "gravel_road": "photo-1448375240586-882707db888b", // Forest track path
  "mud_truck_1": "photo-1618843479313-40f8afb4b4d8", // Splash bogging
  "mud_truck_2": "photo-1533473359331-0135ef1b58bf", // Bounty hole wheel
  "mud_wrestle_1": "photo-1461896836934-ffe607ba8211", // Athletic mud run / crawling
  "mud_wrestle_2": "photo-1552674605-db6ffd4facb5", // Active dirty marathon
  "rammed_earth_1": "photo-1590725121839-892b458a74fe", // Rammed earth structure
  "modern_house": "photo-1505691938895-1758d7feb511", // Sun-dried adobe building
};

// Direct raw backup mud/clay textures in case of unresolved keys
export const DEFAULT_MUD_PHOTOS = [
  "photo-1513836279014-a89f7a76ae86", // Mud ruts
  "photo-1505118380757-91f5f5632de0", // Mud silt swirl
  "photo-1515377905703-c4788e51af15", // Clay mask
  "photo-1590725121839-892b458a74fe", // Earthen wall
];

/**
 * Returns a gorgeous, high-contrast Unsplash URL corresponding to the requested mud seed/slug.
 * 
 * @param seed The unique identifier (e.g., category slug, subpage slug, or custom key)
 * @param format The desired visual layout: 'wide' (800x533), 'tall' (600x800), 'layered1', 'layered2', or 'magazine' (1200x800)
 */
export function getPremiumMudImage(seed: string, format: "wide" | "tall" | "layered1" | "layered2" | "magazine" = "wide"): string {
  // Clean the seed key to find matching mapping
  const cleanSeed = seed.trim().toLowerCase().replace(/^https?:\/\/picsum\.photos\/seed\/([^\/]+)\/.*$/, "$1");

  // 0. Check explicit geochemical-archive or general placeholder requests
  if (cleanSeed === "geochemical-archive" || cleanSeed === "geochemical_archive_header" || cleanSeed === "placeholder" || cleanSeed === "default-placeholder") {
    return geochemicalArchiveHeader.src;
  }

  // 1. Check direct subpage images
  if (SUBPAGE_IMAGES[cleanSeed]) {
    return `https://images.unsplash.com/${SUBPAGE_IMAGES[cleanSeed]}?auto=format&fit=crop&w=${format === "magazine" ? "1200" : "800"}&q=80`;
  }

  // 2. Check direct category images
  if (CATEGORY_IMAGES[cleanSeed]) {
    const imgObj = CATEGORY_IMAGES[cleanSeed];
    let photoId = imgObj.wide;
    if (format === "tall") photoId = imgObj.tall;
    if (format === "layered1") photoId = imgObj.layered1;
    if (format === "layered2") photoId = imgObj.layered2;
    if (format === "magazine") photoId = imgObj.wide;
    return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${format === "magazine" ? "1200" : "800"}&q=80`;
  }

  // 3. Check custom hardcoded picsum mapping
  for (const [key, val] of Object.entries(PICSUM_FALLBACK_MAP)) {
    if (cleanSeed.includes(key)) {
      return `https://images.unsplash.com/${val}?auto=format&fit=crop&w=800&q=80`;
    }
  }

  // 4. General fallback using our premium geochemical archive header or the index hash of the seed
  if (format === "wide" || format === "magazine") {
    return geochemicalArchiveHeader.src;
  }

  let hash = 0;
  for (let i = 0; i < cleanSeed.length; i++) {
    hash = cleanSeed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const idx = Math.abs(hash) % DEFAULT_MUD_PHOTOS.length;
  const chosenFallback = DEFAULT_MUD_PHOTOS[idx];

  return `https://images.unsplash.com/${chosenFallback}?auto=format&fit=crop&w=800&q=80`;
}
