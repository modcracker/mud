import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Sparkles, User, Layers, Feather, Compass, Globe, Heart, FileText } from "lucide-react";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";
import { DRAFTING_POSTS } from "@/lib/artist-posts";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "The Artist Behind the Blueprints — Earthen Vector Cartography",
    description: "An introspective look into Julian Vance, the technical designer and ceramicist behind mud.cc's custom technical illustrations. Bridging the gap between high-fidelity vector drafting and raw geological clays.",
    path: "/artist",
    keywords: [
      "mud.cc artist",
      "vector illustrations designer",
      "digital cartography",
      "Julian Vance",
      "Julian Clay Vance",
      "rammed earth blueprints",
      "SVG technical diagrams",
      "silt and silicon"
    ],
  });
}

export default function ArtistPage() {
  const baseUrl = getBaseUrl();

  return (
    <div className="w-full min-h-screen bg-stone-50 text-stone-900 font-sans transition-colors duration-500 selection:bg-amber-100 selection:text-amber-900">
      
      {/* Schema Markup for the Art/Artist */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${baseUrl}/artist/#webpage`,
            "url": `${baseUrl}/artist`,
            "name": "The Artist Behind the Blueprints — mud.cc",
            "description": "An intimate exploration of the designer synthesizing vector schematics for mud.cc.",
            "mainEntity": {
              "@type": "Person",
              "name": "Julian Vance",
              "additionalType": "GraphicDesigner",
              "description": "A technical illustrator and sustainable materials practitioner specializing in the spatial, cartographic, and technical design of sustainable vernacular structures and geological phenomena.",
              "knowsAbout": [
                "Scalable Vector Graphics",
                "Soil Mechanics",
                "Vernacular Architecture",
                "Computational Art",
                "Earthen Preservation"
              ]
            }
          })
        }}
      />

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Hub
        </Link>
        <span className="text-[10px] font-mono text-stone-400 bg-stone-100/80 px-2.5 py-1 rounded-full border border-stone-200/50">
          REGISTRY CREATIVE RECORD
        </span>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16">
        
        {/* Hero Segment with Hand-Drafted Vector Portrait */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-6 text-center md:text-left order-2 md:order-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/50">
              <Feather size={12} className="animate-pulse text-amber-600" /> CREATIVE COLOPHON
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-stone-900 leading-tight">
              Julian &ldquo;Clay&rdquo; Vance <br />
              <span className="text-amber-600">Silt &amp; Silicon</span>
            </h1>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed font-sans">
              Every technical illustration, blueprint, and architectural diagram across mud.cc was composed by hand and code by Julian Vance. Working from his timber-frame barn workshop, he weaves raw geological data into clean, scalable line art.
            </p>
          </div>
          
          <div className="md:col-span-4 flex justify-center order-1 md:order-2">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white p-2">
              {/* Hand-Drafted Vector Face Portrait of Julian Vance */}
              <svg
                className="w-full h-full text-stone-400"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer guide ring with tick marks */}
                <circle cx="100" cy="100" r="95" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="1" />
                <circle cx="100" cy="100" r="90" stroke="rgba(217, 119, 6, 0.25)" strokeWidth="1.5" strokeDasharray="3,3" />
                
                {/* Grid coordinates */}
                <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(28, 25, 23, 0.05)" strokeWidth="1" />
                <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(28, 25, 23, 0.05)" strokeWidth="1" />

                {/* Styled Hair segment */}
                <path d="M 60,65 C 65,40 100,35 135,45 C 145,50 148,60 145,70 C 142,75 138,78 135,80 C 120,70 90,70 60,65 Z" fill="rgba(217, 119, 6, 0.08)" stroke="#d97706" strokeWidth="1.5" />

                {/* Ears */}
                <path d="M 54,95 C 50,95 50,110 54,110 Z" stroke="#78716c" strokeWidth="1.5" />
                <path d="M 146,95 C 150,95 150,110 146,110 Z" stroke="#78716c" strokeWidth="1.5" />

                {/* Face Jawline */}
                <path d="M 55,80 L 55,115 C 55,135 75,155 100,155 C 125,155 145,135 145,115 L 145,80" stroke="#78716c" strokeWidth="1.5" fill="rgba(255, 255, 255, 0.7)" />

                {/* Eyebrows */}
                <path d="M 65,85 C 72,81 78,83 83,87" stroke="#1c1917" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 117,87 C 122,83 128,81 135,85" stroke="#1c1917" strokeWidth="1.8" strokeLinecap="round" />

                {/* Nose */}
                <path d="M 100,90 L 100,115 L 95,117" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                {/* Minimalist round-wire glasses (Julian's trademark style) */}
                <circle cx="78" cy="98" r="15" stroke="#d97706" strokeWidth="1.8" fill="rgba(245, 158, 11, 0.05)" />
                <circle cx="122" cy="98" r="15" stroke="#d97706" strokeWidth="1.8" fill="rgba(245, 158, 11, 0.05)" />
                <line x1="93" y1="98" x2="107" y2="98" stroke="#d97706" strokeWidth="2" />
                
                {/* Temple arms */}
                <path d="M 63,98 L 55,94" stroke="#d97706" strokeWidth="1.2" />
                <path d="M 137,98 L 145,94" stroke="#d97706" strokeWidth="1.2" />

                {/* Smiling mouth */}
                <path d="M 85,132 C 90,138 110,138 115,132" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" />

                {/* Neck and linen collar */}
                <path d="M 80,154 L 80,175" stroke="#78716c" strokeWidth="1.5" />
                <path d="M 120,154 L 120,175" stroke="#78716c" strokeWidth="1.5" />
                <path d="M 65,175 L 85,188 L 100,175 L 115,188 L 135,175" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                {/* Tiny diagram nodes and text overlays */}
                <text x="110" y="55" className="font-mono text-[5px] fill-amber-700 font-bold uppercase tracking-wider">HAIR_SPLINE</text>
                <text x="32" y="145" className="font-mono text-[5px] fill-stone-500 uppercase tracking-widest">JAW_ARC_R35</text>
                <text x="145" y="130" className="font-mono text-[4px] fill-emerald-600 uppercase tracking-widest">LINEN_COLLAR</text>
                <circle cx="100" cy="155" r="2.5" fill="#10b981" />
                <circle cx="55" cy="80" r="2" fill="#d97706" />
                <circle cx="145" cy="80" r="2" fill="#d97706" />
              </svg>
            </div>
          </div>
        </section>

        {/* Technical Specs Dashboard */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-white border border-stone-200/80 shadow-sm">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">DESIGNER</span>
            <span className="font-mono text-sm font-bold text-stone-850 flex items-center gap-1">
              <User size={14} className="text-amber-600" /> JULIAN VANCE
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">MEDIUM</span>
            <span className="font-mono text-sm font-bold text-stone-850 flex items-center gap-1">
              <Layers size={14} className="text-amber-600" /> SCALABLE VECTOR (SVG)
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">PALETTE BASIS</span>
            <span className="font-mono text-sm font-bold text-stone-850 flex items-center gap-1">
              <Globe size={14} className="text-amber-600" /> VERNACULAR SOILS
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">WORKSHOP LOC</span>
            <span className="font-mono text-sm font-bold text-stone-850 flex items-center gap-1">
              <Compass size={14} className="text-amber-600" /> OREGON BASIN
            </span>
          </div>
        </section>

        {/* Artistic Prose (Free Roam Self-Expression) */}
        <section className="space-y-10">
          <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed font-sans text-sm md:text-base">
            <h2 className="text-2xl font-bold font-display text-stone-900 tracking-tight">
              A Craftsman&apos;s Reflection on Drafting Mud
            </h2>
            <p>
              When physical hands gather mud, they shape it into adobe blocks, culinary treats, or cosmetic creams. When we encounter mud in the design space, we shape it into clean coordinate arrays, bezier paths, and carefully calibrated hexadecimal grids.
            </p>
            <p>
              The technical illustrations on <strong>mud.cc</strong> are an act of translation. Raw physical materials—silt, alluvial deposits, compacted soils, and mineral clays—are naturally chaotic, organic, and wet. To make them legible in a digital registry, I abstract their physical parameters into mathematical certainty. Every line represents a pressure vector; every layered gradient represents a geological accumulation over epochs of time.
            </p>
            <blockquote>
              <p className="border-l-2 border-amber-500 pl-4 italic text-stone-600 font-serif my-6 text-base md:text-lg">
                &ldquo;I operate at the precise seam where the cold precision of digital vector geometry meets the warm, ancient memory of the soil.&rdquo;
              </p>
            </blockquote>
            <p>
              To draft these schematics, I combine the precision of digital vector mapping with an organic appreciation of earthen forms. I plot the exact curvatures of mud tire treads using circular functions; I map the telnet command flows of text-based multiplayer dungeons in sequential diagrams; I map the thermal insulation of rammed earth walls down to the layer thickness. It is computational draftsmanship with a singular focus: celebrating the humblest substance in the universe with the highest-precision medium available.
            </p>
          </div>
        </section>

         {/* Drafting Notes (Episodic Feed) */}
        <section className="space-y-8 pt-6" id="drafting-feed">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded uppercase tracking-wider border border-amber-200/40">
              FIELD NOTES &amp; FRICTION
            </span>
            <h3 className="text-2xl font-bold font-display text-stone-900 tracking-tight">
              Drafting Notes from the Basin
            </h3>
            <p className="text-sm text-stone-500 font-sans max-w-xl">
              {"An intimate, raw, and uncensored record of life in the timber-frame workshop. Julian's daily struggle to translate chaotic geological elements into absolute mathematical lines, amidst the friction of real life."}
            </p>
          </div>

          <div className="relative border-l-2 border-stone-200 pl-6 md:pl-8 ml-4 md:ml-6 space-y-12">
            {DRAFTING_POSTS.map((post, idx) => (
              <div key={post.slug} className="relative group">
                <span className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-stone-50 transition-all duration-300 ${idx === 0 ? 'bg-amber-500 scale-110 group-hover:scale-125' : 'bg-stone-300 group-hover:bg-amber-500 group-hover:scale-125'}`} />
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-stone-400">{post.date.toUpperCase()}</span>
                    <span className="text-[9px] font-mono uppercase bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200/40 font-bold">
                      {post.category}
                    </span>
                    <span className="text-[9px] font-mono uppercase bg-stone-100 text-stone-500 px-2 py-0.5 rounded border border-stone-200/40 font-medium">
                      {post.metaphor}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold font-display text-stone-900 leading-snug group-hover:text-amber-700 transition-colors">
                    <Link href={`/artist/notes/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-sm text-stone-600 leading-relaxed font-sans">
                    {post.excerpt}
                  </p>
                  <div className="pt-1 flex items-center gap-4">
                    <Link
                      href={`/artist/notes/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700 hover:text-amber-800 hover:underline transition-all"
                    >
                      Read full log <FileText size={12} />
                    </Link>
                    <span className="text-[10px] font-mono text-stone-400">{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <section className="pt-10 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
            <span>Designed with</span>
            <Heart size={12} className="text-red-500 fill-current" />
            <span>by Julian Vance</span>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm"
          >
            Return to Homepage Directory <Compass size={14} />
          </Link>
        </section>

      </main>
    </div>
  );
}
