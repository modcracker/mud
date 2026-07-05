import type { Metadata } from "next";

const DEFAULT_URL = "https://www.mud.cc";

export function getBaseUrl(): string {
  // Always use the canonical production domain for all SEO, sitemaps, robots.txt, 
  // canonical link elements, and JSON-LD schema metadata. This prevents Google Search
  // Console from encountering "Couldn't fetch" or origin-mismatch errors when reading sitemaps.
  return "https://www.mud.cc";
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  image,
  keywords = [],
  type = "website",
  publishedTime,
  author,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
}): Metadata {
  const baseUrl = getBaseUrl();
  const canonicalUrl = `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const ogImage = image || `${baseUrl}/images/og-home.jpg`; // Fallback to our OG image

  const defaultKeywords = [
    "mud.cc",
    "premium domain name",
    "mineral mud skincare",
    "mud runs and obstacle racing",
    "text-based MUD retro games",
    "cob and rammed earth sustainable architecture",
    "Mississippi mud pie comfort dessert",
    "mudlarking river thames history",
    "automotive mud tires",
    "therapeutic clay wellness",
    "mudslinging idiom etymology"
  ];

  // Dynamically generate strategic deep-linking keywords from path structure
  const extraDeepLinkKeywords: string[] = [];
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const segments = cleanPath.split("/").filter(Boolean);

  if (segments[0] === "mud" && segments.length > 1) {
    const categorySlug = segments[1];
    const subpageSlug = segments[2] || "";
    const detailSlug = segments[3] || "";

    const categoryWords = categorySlug.replace(/-/g, " ");
    const subpageWords = subpageSlug.replace(/-/g, " ");
    const detailWords = detailSlug.replace(/-/g, " ");

    extraDeepLinkKeywords.push(
      `mud.cc ${categoryWords}`,
      `${categoryWords} domain asset`,
      `buy ${categorySlug} domain`,
      `${categoryWords} digital real estate`,
      `premium three-letter domain ${categoryWords}`
    );

    if (subpageSlug) {
      extraDeepLinkKeywords.push(
        `mud.cc ${categoryWords} ${subpageWords}`,
        `${subpageWords} guide`,
        `${categoryWords} ${subpageWords} resource`,
        `premium 3 letter domain portfolio ${categoryWords}`,
        `${categorySlug} ${subpageSlug} semantic match`
      );
    }

    if (detailSlug) {
      extraDeepLinkKeywords.push(
        `mud.cc ${categoryWords} ${subpageWords} ${detailWords}`,
        `technical deep dive ${detailWords}`,
        `${categoryWords} ${detailWords} analysis`,
        `${subpageWords} ${detailWords} study`
      );
    }

    // Dynamic category context injections
    if (categorySlug === "dead-sea-mud") {
      extraDeepLinkKeywords.push("magnesium spa therapy", "mineral skin repair", "dermal clay treatment", "dead sea minerals", "balneological therapy");
    } else if (categorySlug === "mississippi-mud-pie") {
      extraDeepLinkKeywords.push("southern baking recipe", "chocolate fudge custard", "gourmet dessert baking", "classic mud pie recipe", "chocolatier chemistry");
    } else if (categorySlug === "mud-run") {
      extraDeepLinkKeywords.push("obstacle course training", "extreme athletic endurance", "mud race techniques", "spartan mud run", "military fitness test");
    } else if (categorySlug === "mud-the-game") {
      extraDeepLinkKeywords.push("multi user dungeon design", "retro text based gaming", "vintage mainframe computer game", "telnet retro virtual world", "classic mud game design");
    } else if (categorySlug === "mudslinging") {
      extraDeepLinkKeywords.push("political campaign rhetoric", "negative media campaigning", "etymology of mudslinging", "smear campaign tactics", "sociological political debate");
    } else if (categorySlug === "clear-as-mud") {
      extraDeepLinkKeywords.push("english idioms and etymology", "sociolinguistic studies", "sarcastic metaphors in literature", "metaphor origin analysis", "complex rhetoric");
    } else if (categorySlug === "mud-architecture") {
      extraDeepLinkKeywords.push("rammed earth sustainable building", "cob construction mechanics", "earthen green architecture", "adobe block materials", "clay soil civil engineering");
    } else if (categorySlug === "mudlarking") {
      extraDeepLinkKeywords.push("thames river foreshore scavenging", "historical archaeological beachcombing", "archaeological preservation anaerobic", "river thames artifacts", "london history archaeology");
    } else if (categorySlug === "mud-season") {
      extraDeepLinkKeywords.push("geotechnical spring thaw", "road maintenance unpaved soil", "frost heave damage", "diurnal meteorological freeze", "mud road stability");
    } else if (categorySlug === "mud-tires") {
      extraDeepLinkKeywords.push("off-road traction mechanics", "automotive terrain tread design", "all-terrain mud tires", "mud terrain tire performance", "suv offroad tread");
    }
  }

  const finalKeywords = Array.from(new Set([...keywords, ...defaultKeywords, ...extraDeepLinkKeywords]));

  const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: `${title} | mud.cc`,
    description,
    keywords: finalKeywords,
    authors: [{ name: author || "mud.cc Registry" }],
    creator: "mud.cc Registry",
    publisher: "mud.cc Registry",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | mud.cc`,
      description,
      url: canonicalUrl,
      siteName: "mud.cc",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | mud.cc`,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  // Inject article metadata if applicable
  if (type === "article" && metadata.openGraph) {
    metadata.openGraph = {
      ...metadata.openGraph,
      // Custom typed properties for Article
      ...({
        type: "article",
        publishedTime: publishedTime,
        authors: [author || "mud.cc Editorial Board"],
      } as any)
    };
  }

  return metadata;
}
