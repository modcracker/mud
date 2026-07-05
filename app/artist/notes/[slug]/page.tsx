import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, BookOpen, Calendar, Compass, Cpu, Hash, Heart, Tag, Terminal } from "lucide-react";
import { generatePageMetadata, getBaseUrl } from "@/lib/metadata";
import { DRAFTING_POSTS } from "@/lib/artist-posts";
import TableOfContents from "@/components/table-of-contents";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DRAFTING_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = DRAFTING_POSTS.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};

  return generatePageMetadata({
    title: `${post.title} — Julian's Drafting Notes`,
    description: post.excerpt,
    path: `/artist/notes/${post.slug}`,
    keywords: [
      post.title,
      post.category,
      post.metaphor,
      ...post.tags,
      "Julian Vance",
      "Drafting Notes from the Basin",
      "vector schematics",
      "earthen craft",
      "silt and silicon"
    ],
    type: "article",
    publishedTime: "2026-07-05T03:00:00Z", // Simulation local time
    author: "Julian Vance"
  });
}

export default async function DraftingPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = DRAFTING_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Find other posts for SEO cross-linking and user discovery
  const otherPosts = DRAFTING_POSTS.filter((p) => p.slug !== post.slug).slice(0, 4);
  const baseUrl = getBaseUrl();

  // Create Table of Contents items
  const tocItems = post.headings.map((heading, idx) => ({
    id: `section-${idx + 1}`,
    text: heading,
  }));

  return (
    <div className="w-full min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Article schema for supreme SEO crawlability & E-E-A-T indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${baseUrl}/artist/notes/${post.slug}/#article`,
            "url": `${baseUrl}/artist/notes/${post.slug}`,
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": "2026-07-05T03:00:00Z",
            "author": {
              "@type": "Person",
              "name": "Julian Vance",
              "jobTitle": "Technical Illustrator & Ceramicist",
              "url": `${baseUrl}/artist`,
              "knowsAbout": [
                "Soil Mechanics",
                "Vernacular Architecture",
                "Computational Art",
                "Earthen Preservation",
                "Scalable Vector Graphics"
              ],
              "sameAs": [
                `${baseUrl}/artist`
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "mud.cc Registry",
              "url": baseUrl,
              "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/images/logo.png`
              },
              "publishingPrinciples": `${baseUrl}/artist`,
              "sameAs": [
                baseUrl
              ]
            }
          }),
        }}
      />

      {/* Technical Command Header bar */}
      <header className="border-b border-stone-200 bg-stone-900 text-stone-300 py-3 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-amber-500 animate-pulse" />
            <span className="text-stone-400">JULIAN_VANCE_SHELL &gt;_</span>
            <span className="text-stone-200 font-bold uppercase tracking-wider">{post.metaphor}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[10px] text-stone-500">
            <span>STATUS: COMPILED_INTEGRITY</span>
            <span>FREQ: 75HZ</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 md:mb-12">
          <Link
            href="/artist#drafting-feed"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-800 hover:text-amber-950 transition-all group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Return to Julian&apos;s Basin Workshop Feed
          </Link>
        </div>

        {/* Grid Layout: Main reading column and metadata sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left/Main Column - The Content */}
          <article className="lg:col-span-8 space-y-8">
            
            <header className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-50 border border-amber-200/50 text-amber-800 shadow-sm">
                  <BookOpen size={10} /> {post.category}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-stone-100 border border-stone-200 text-stone-600">
                  <Calendar size={10} /> {post.date}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-stone-950 leading-tight tracking-tight">
                {post.title}
              </h1>

              <p className="text-base md:text-lg text-stone-500 italic font-sans border-l-2 border-amber-500/60 pl-4 py-1 leading-relaxed">
                &ldquo;{post.excerpt}&rdquo;
              </p>
            </header>

            {/* Render Log Content Paragraphs with headings */}
            <div className="prose prose-stone max-w-none space-y-10 text-stone-700 leading-relaxed font-sans text-sm md:text-base">
              {post.content.map((paragraph, idx) => {
                const heading = post.headings?.[idx];
                return (
                  <div key={idx} className="space-y-3">
                    {heading && (
                      <h2 id={`section-${idx + 1}`} className="text-xl md:text-2xl font-bold font-display text-stone-950 tracking-tight pt-4 scroll-mt-24">
                        {heading}
                      </h2>
                    )}
                    <p className={idx === 0 && !heading ? "font-medium text-stone-800" : ""}>
                      {paragraph}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Poetic separator */}
            <div className="py-8 flex items-center justify-center">
              <div className="h-px bg-stone-200 w-1/3" />
              <div className="font-mono text-[9px] text-stone-400 mx-4 tracking-widest">| | | | END_OF_LOG</div>
              <div className="h-px bg-stone-200 w-1/3" />
            </div>

            {/* Back to index link */}
            <div className="pt-4">
              <Link
                href="/artist"
                className="inline-flex items-center gap-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                ← Return to Workshop Directory
              </Link>
            </div>
          </article>

          {/* Right/Sidebar Column - Metadata and Interlinking Stack */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-8">
            
            {/* Table of Contents floating panel */}
            <TableOfContents items={tocItems} />

            {/* Calibration Stack Info Panel */}
            <div className="bg-stone-100 rounded-3xl p-6 border border-stone-200 space-y-6 shadow-sm">
              <div className="space-y-1">
                <h2 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Cpu size={12} className="text-amber-600" /> CALIBRATION_STACK
                </h2>
                <p className="text-[10px] text-stone-500 font-mono">Telemetry metrics for physical-digital translation</p>
              </div>

              <div className="border-t border-stone-200/60 pt-4 space-y-4 text-xs font-mono">
                <div className="flex justify-between items-center py-1 border-b border-stone-200/40">
                  <span className="text-stone-500">SYSTEM_METAPHOR:</span>
                  <span className="text-stone-900 font-bold uppercase">{post.metaphor}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-stone-200/40">
                  <span className="text-stone-500">CHASSIS_DENSITY:</span>
                  <span className="text-stone-900 font-bold">1.35 g/cm³</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-stone-200/40">
                  <span className="text-stone-500">EST_READ_TIME:</span>
                  <span className="text-stone-900 font-bold">{post.readTime}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-stone-200/40">
                  <span className="text-stone-500">MAPPED_VERSION:</span>
                  <span className="text-stone-950 font-bold">v2.6.7-stable</span>
                </div>
              </div>

              {/* Tags Tagging Cloud */}
              <div className="space-y-3">
                <h3 className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                  <Tag size={10} /> Indexed Keywords
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 bg-white border border-stone-200/70 text-stone-600 px-2.5 py-1 rounded-md text-[9px] font-mono hover:bg-stone-50 cursor-pointer transition-colors"
                    >
                      <Hash size={8} /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interlinked Logs List (Crucial for SEO juice!) */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 space-y-6 shadow-sm">
              <div className="space-y-1">
                <h3 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-widest flex items-center gap-1.5">
                  <Terminal size={12} className="text-stone-400" /> Related Logs
                </h3>
                <p className="text-[10px] text-stone-400 font-mono">Explore other aspects of the digital-earthen loop</p>
              </div>

              <div className="space-y-4 border-t border-stone-100 pt-4">
                {otherPosts.map((otherPost) => (
                  <div key={otherPost.slug} className="group space-y-1">
                    <span className="text-[9px] font-mono text-stone-400 uppercase">{otherPost.date}</span>
                    <h4 className="text-xs font-bold text-stone-800 group-hover:text-amber-800 transition-colors leading-snug">
                      <Link href={`/artist/notes/${otherPost.slug}`}>
                        {otherPost.title}
                      </Link>
                    </h4>
                    <p className="text-[11px] text-stone-500 line-clamp-1 group-hover:text-stone-600 transition-colors font-sans">
                      {otherPost.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </aside>

        </div>

        {/* Back link to general portal directory */}
        <section className="mt-16 pt-10 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
            <span>Designed with</span>
            <Heart size={12} className="text-red-500 fill-current animate-pulse" />
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
