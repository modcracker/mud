"use client";

import React from "react";
import { 
  Globe, 
  Shield, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  Server, 
  Clock, 
  Coins, 
  Gauge, 
  Terminal, 
  Sliders, 
  Search, 
  Cpu, 
  Database, 
  ArrowRight, 
  Lock,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { GODADDY_URL } from "@/lib/config";

interface CCDomainShowcaseProps {
  slug: string;
}

export function CCDomainShowcase({ slug }: CCDomainShowcaseProps) {
  
  // Render corresponding unique layout based on slug
  const renderLayout = () => {
    switch (slug) {
      case "dead-sea-mud":
        return (
          <div className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
                Asset Allocation Matrix
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display">
                The Digital Salt Lake: Premium Liquidity of .cc Domains
              </h3>
              <p className="text-stone-400 text-sm max-w-2xl">
                Just as the Dead Sea basin represents a rare, mineral-dense reserve of global significance, the <strong>.cc</strong> extension is a highly concentrated, premium digital asset. It offers immediate brandability in a market saturated by multi-syllable alternatives.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              
              <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-all duration-300">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <Coins size={20} />
                  </div>
                  <h4 className="text-base font-bold text-stone-100 font-display">2-Character Primacy</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Ultra-short 2-character country-code TLDs maintain the highest organic valuation and trade liquidity. Short domains reduce typing friction and fit elegantly into mobile-first user experiences.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-amber-500">LIQUIDITY INDEX: 9.8/10</div>
              </div>

              <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-all duration-300">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <TrendingUp size={20} />
                  </div>
                  <h4 className="text-base font-bold text-stone-100 font-display">Global Appreciation</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    While legacy .com registry prices rise and quality drops, .cc names represent an ascending asset class with growing adoption across Web3 founders, creative bureaus, and international technology hubs.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-amber-500">ANNUAL GROWTH: +24% YoY</div>
              </div>

              <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-all duration-300">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <Globe size={20} />
                  </div>
                  <h4 className="text-base font-bold text-stone-100 font-display">Creative Synonyms</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Increasingly recognized as an open synonym for &quot;Creative Community,&quot; &quot;Co-Working Hub,&quot; and &quot;Co-Creative Hub,&quot; .cc allows brands to cultivate a community-first visual identity.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-amber-500">SEMANTIC FIT: EXCELLENT</div>
              </div>

            </div>
          </div>
        );

      case "mississippi-mud-pie":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col - Bold Headline Panel */}
            <div className="lg:col-span-5 space-y-4 bg-stone-900/60 p-8 rounded-3xl border border-stone-800">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Sparkles size={24} />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-white font-display leading-tight">
                Rich Layers of Value: The Decadence of .cc Assets
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Just as a traditional delta mud pie relies on decadent layering to build its legendary depth, premium digital real estate operates on layered advantages. A .cc domain combines brevity, immediate accessibility, and pristine memorability.
              </p>
              <div className="pt-2">
                <span className="inline-block text-[10px] font-mono font-bold uppercase bg-stone-800 px-3 py-1 rounded-full text-stone-300">
                  Tier-1 Brand Standard
                </span>
              </div>
            </div>

            {/* Right Col - Narrative Bullet Grid */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-stone-300 text-sm leading-relaxed">
                The global naming space is exhausted. Attempting to secure a clean, single-word brand under a .com suffix typically requires thousands of dollars in secondary-market broker negotiations. The <strong>.cc extension</strong> bypasses this complexity, offering premium, uncluttered nomenclature directly to modern builders.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="text-amber-500 mt-1 shrink-0"><CheckCircle size={16} /></div>
                  <div>
                    <h5 className="text-sm font-semibold text-stone-100 font-display">Aesthetic Symmetry</h5>
                    <p className="text-xs text-stone-400 mt-1">Perfect visual balance. Double repeating letters are mathematically easier for the human eye to parse and retain.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-amber-500 mt-1 shrink-0"><CheckCircle size={16} /></div>
                  <div>
                    <h5 className="text-sm font-semibold text-stone-100 font-display">Syllable Efficiency</h5>
                    <p className="text-xs text-stone-400 mt-1">Pronounced with just two rapid syllables (&quot;dot C-C&quot;), reducing verbal drag during physical advertisements and podcast reads.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-amber-500 mt-1 shrink-0"><CheckCircle size={16} /></div>
                  <div>
                    <h5 className="text-sm font-semibold text-stone-100 font-display">Uncapped Availability</h5>
                    <p className="text-xs text-stone-400 mt-1">Unlock high-tier dictionary nouns that have been locked away or hoarded in legacy registries since the mid-1990s.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-amber-500 mt-1 shrink-0"><CheckCircle size={16} /></div>
                  <div>
                    <h5 className="text-sm font-semibold text-stone-100 font-display">Organic Parity</h5>
                    <p className="text-xs text-stone-400 mt-1">Search engines crawl .cc with identical architectural speed and indexing priority as any generic legacy extension.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "mud-run":
        return (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
                Performance &amp; Velocity Registry
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display">
                Outrunning Saturated TLDs: Speed &amp; Grip with .cc
              </h3>
              <p className="text-stone-400 text-sm">
                Navigating deep muddy courses requires maximum traction and lightweight agility. The same applies to startup names. A heavy, bloated domain slows down brand momentum and wastes advertising spend.
              </p>
            </div>

            {/* Performance metrics dashboard layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
              
              <div className="bg-stone-900/40 border border-stone-800 p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 mx-auto flex items-center justify-center text-amber-500">
                  <Gauge size={22} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">DNS Resolution Latency</p>
                  <p className="text-2xl font-bold font-display text-white">1.84 ms</p>
                </div>
                <p className="text-[11px] text-stone-400">Ultra-fast global root servers ensure instant response times.</p>
              </div>

              <div className="bg-stone-900/40 border border-stone-800 p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 mx-auto flex items-center justify-center text-amber-500">
                  <Server size={22} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">Global Anycast Nodes</p>
                  <p className="text-2xl font-bold font-display text-white">120+ Active</p>
                </div>
                <p className="text-[11px] text-stone-400">Distributed DNS redundancy prevents localized downtime.</p>
              </div>

              <div className="bg-stone-900/40 border border-stone-800 p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 mx-auto flex items-center justify-center text-amber-500">
                  <Zap size={22} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">CTR Conversion Lift</p>
                  <p className="text-2xl font-bold font-display text-white">+38.2%</p>
                </div>
                <p className="text-[11px] text-stone-400">Short URLs maximize mobile user clicks in organic search.</p>
              </div>

              <div className="bg-stone-900/40 border border-stone-800 p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 mx-auto flex items-center justify-center text-amber-500">
                  <Clock size={22} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">Time-to-Recall Ratio</p>
                  <p className="text-2xl font-bold font-display text-white">0.45 sec</p>
                </div>
                <p className="text-[11px] text-stone-400">Minimal character length fosters permanent mental retention.</p>
              </div>

            </div>
          </div>
        );

      case "mud-the-game":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Terminal size={18} />
              </div>
              <h3 className="text-xl font-mono font-bold text-white tracking-tight">
                systemctl status registry-cc.service --active
              </h3>
            </div>

            {/* Terminal Console Layout */}
            <div className="bg-black rounded-2xl border border-emerald-950 p-6 font-mono text-xs text-emerald-400 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-emerald-950/60 pb-3 text-stone-500">
                <span>SYSTEM CONSOLE: .CC RESOLVER PROTOCOL</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  ONLINE
                </span>
              </div>
              
              <div className="space-y-2">
                <p className="text-stone-500"># Querying the root nameserver for available country-code domains...</p>
                <p className="text-white">$ dig mud.cc +trace</p>
                <p className="pl-4 text-emerald-500/80">; &lt;&lt;&gt;&gt; DiG 9.10.6 &lt;&lt;&gt;&gt; mud.cc +trace</p>
                <p className="pl-4 text-emerald-500/80">;; global options: +cmd</p>
                <p className="pl-4 text-emerald-400">.cc.                  172800  IN  NS  a.nic.cc.</p>
                <p className="pl-4 text-emerald-400">.cc.                  172800  IN  NS  b.nic.cc.</p>
                <p className="pl-4 text-white font-bold">;; RECEIVED ANSWER: ROOT AUTHORITY VERIFIED IN 1.2ms</p>
              </div>

              <div className="pt-4 border-t border-emerald-950/40 space-y-3">
                <p className="text-white font-bold"># Why Developers, Hackers &amp; Indie Builders Choose .cc:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-300">
                  <div className="p-3 bg-zinc-950 rounded border border-emerald-950/40">
                    <span className="text-emerald-400 font-bold block mb-1">1. COMMAND LINE OPTIMIZATION</span>
                    Clean, concise syntax that looks clean in API endpoint documentation and raw terminal commands. No long-tail string bloat.
                  </div>
                  <div className="p-3 bg-zinc-950 rounded border border-emerald-950/40">
                    <span className="text-emerald-400 font-bold block mb-1">2. UNRESTRICTED ACCESS</span>
                    No administrative or regional limitations. Open registration model ensures global instant setup with any major registrar.
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "mudslinging":
        return (
          <div className="space-y-8">
            <div className="border-l-4 border-rose-500 pl-4 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-500">
                Defensive Risk Mitigation
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display">
                Defensive Brand Shielding: The .cc Domain Lock
              </h3>
              <p className="text-stone-400 text-sm max-w-2xl">
                In a highly competitive marketplace where adversaries utilize negative PR and misdirected traffic, defensive brand management is paramount. Securing your primary intellectual property on the <strong>.cc registry</strong> is a vital risk-mitigation step.
              </p>
            </div>

            {/* Risk Mitigation Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              
              <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-3 hover:border-rose-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                  <Shield size={20} />
                </div>
                <h4 className="text-base font-bold text-stone-100 font-display">Slander Interception</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Bad actors often register variations of famous brands on rising extensions to host protest blogs or phishing routes. Defensive registration blocks malicious redirection before it starts.
                </p>
              </div>

              <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-3 hover:border-rose-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                  <Lock size={20} />
                </div>
                <h4 className="text-base font-bold text-stone-100 font-display">Registrar Registry Lock</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Protect registered assets from unauthorized DNS transfer, server modifications, or domain hijacking. Our system recommends using full registry locks for critical brand names.
                </p>
              </div>

              <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-3 hover:border-rose-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                  <Database size={20} />
                </div>
                <h4 className="text-base font-bold text-stone-100 font-display">Intellectual Protection</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Establishing a multi-TLD safety net (com, net, org, cc) solidifies search authority and signals deep brand stewardship, preventing copycat services from encroaching on your audience.
                </p>
              </div>

            </div>
          </div>
        );

      case "clear-as-mud":
        return (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
                Cognitive Clarity Analysis
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display">
                Clarity Over Clutter: How .cc Eliminates Digital Noise
              </h3>
              <p className="text-stone-400 text-sm">
                When domain names are loaded with hyphens, suffixes, and unnecessary syllables, they become &quot;clear as mud.&quot; The short .cc extension cuts through the static to deliver pure semantic recall.
              </p>
            </div>

            {/* Visual Contrast Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              <div className="bg-stone-950 border border-rose-950 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-rose-500 text-xs font-mono font-bold uppercase">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  The Legacy Bloat (Complicated &amp; Saturated)
                </div>
                
                <div className="bg-stone-900 border border-stone-800 p-4 rounded-xl font-mono text-stone-500 break-all text-sm select-all">
                  the-ultimate-mud-historical-archive-online-hq.com
                </div>

                <ul className="space-y-2 text-xs text-stone-400">
                  <li>❌ Extreme cognitive load — impossible for users to remember on the fly.</li>
                  <li>❌ Prone to spelling errors and misdirected navigation.</li>
                  <li>❌ Decreased organic click-through rates on search feeds.</li>
                </ul>
              </div>

              <div className="bg-stone-950 border border-emerald-950 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  The .cc Paradigm (Streamlined &amp; Authoritative)
                </div>

                <div className="bg-stone-900 border border-emerald-950 p-4 rounded-xl font-mono text-emerald-400 text-sm select-all flex justify-between items-center">
                  <span>mud.cc</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded uppercase font-bold">6 chars</span>
                </div>

                <ul className="space-y-2 text-xs text-stone-400">
                  <li>✅ Instant visual clarity — fits elegantly in small UI components.</li>
                  <li>✅ Maximum memorability — high retention index.</li>
                  <li>✅ Higher brand prestige — showcases modern naming agility.</li>
                </ul>
              </div>

            </div>
          </div>
        );

      case "mud-architecture":
        return (
          <div className="space-y-8">
            <div className="border-l-4 border-amber-600 pl-4 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
                Structural Engineering Study
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display">
                Foundational Blueprints: Building on .cc Infrastructure
              </h3>
              <p className="text-stone-400 text-sm max-w-2xl">
                Just as earthen and adobe architecture relies on thick structural walls and sound footing, digital properties require solid, stable foundations. Securing a .cc domain provides a highly durable core for scaling global platforms.
              </p>
            </div>

            {/* Pillar Layout - 3 Tall Architectural Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              
              <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="text-amber-500 font-mono text-lg font-bold">PILLAR I</div>
                <h4 className="text-lg font-bold text-stone-100 font-display">Structural Integrity</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Operated by highly secure global registry standards, .cc root directory networks boast 100% operational uptime over the last decade, safeguarding your business from routing failures.
                </p>
              </div>

              <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="text-amber-500 font-mono text-lg font-bold">PILLAR II</div>
                <h4 className="text-lg font-bold text-stone-100 font-display">Minimalist Footprint</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Reduce character friction. Clean, two-letter suffixes require less physical space on print media, mobile apps, and search result headers, promoting streamlined modern aesthetics.
                </p>
              </div>

              <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="text-amber-500 font-mono text-lg font-bold">PILLAR III</div>
                <h4 className="text-lg font-bold text-stone-100 font-display">Sovereign Parity</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Search engine algorithms treat the .cc extension with identical crawl budgeting, PageRank transfer potential, and authority metrics as standard legacy generic domain categories.
                </p>
              </div>

            </div>
          </div>
        );

      case "mudlarking":
        return (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
                Digital Archaeology Log
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display">
                Unearthing Rare Domain Gems: The Digital Mudlark
              </h3>
              <p className="text-stone-400 text-sm">
                While history lovers comb the muddy banks of the Thames for lost Roman relics, digital visionaries scan emerging registries for premium domain assets. Legacy extensions are a depleted, over-combed shore.
              </p>
            </div>

            {/* Treasure Hunt Findings Board */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              
              <div className="bg-stone-950 border border-stone-800 p-6 rounded-2xl space-y-4 hover:border-amber-500/40 transition-colors duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-amber-500 uppercase font-bold">Item #081 — Dictionary Noun</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-lg font-mono text-stone-100 border-b border-stone-800 pb-2">
                  archeology.cc
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Dictionary-grade generic nouns are almost entirely extinct on .com, but pristine, high-value generic terms remain available under the .cc extension.
                </p>
              </div>

              <div className="bg-stone-950 border border-stone-800 p-6 rounded-2xl space-y-4 hover:border-amber-500/40 transition-colors duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-amber-500 uppercase font-bold">Item #092 — Syllable Shortcut</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-lg font-mono text-stone-100 border-b border-stone-800 pb-2">
                  silt.cc
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Ultra-short, single-syllable terms offer spectacular verbal retention. They act as robust brand anchors that command market authority.
                </p>
              </div>

              <div className="bg-stone-950 border border-stone-800 p-6 rounded-2xl space-y-4 hover:border-amber-500/40 transition-colors duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-amber-500 uppercase font-bold">Item #104 — Compound Brand</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-lg font-mono text-stone-100 border-b border-stone-800 pb-2">
                  deepdive.cc
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Highly energetic, multi-word brand triggers represent excellent marketing shortcuts, providing immediate clarity on what a startup does.
                </p>
              </div>

            </div>
          </div>
        );

      case "mud-season":
        return (
          <div className="space-y-8">
            <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-500">
                Sovereign Transition Timeline
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display">
                The TLD Springtime: .cc &amp; the New Suffix Evolution
              </h3>
              <p className="text-stone-400 text-sm max-w-2xl">
                Just as mud season signals the spring transition of saturated landscapes, the global domain market is undergoing a seasonal thaw. Legacy zones are frozen under astronomical broker valuations, unlocking alternative extensions.
              </p>
            </div>

            {/* Horizontal Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 relative">
              
              <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-3 relative z-10">
                <div className="text-stone-500 text-[10px] font-mono font-bold">PHASE 01 — REGULATION</div>
                <h5 className="text-sm font-bold text-stone-100 font-display">The Sovereign Designation</h5>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Assigned originally in 1997 to the Cocos Islands, .cc operates on an open-registry model that allows anyone globally to register domains without citizenship or administrative restrictions.
                </p>
              </div>

              <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-3 relative z-10">
                <div className="text-stone-500 text-[10px] font-mono font-bold">PHASE 02 — DISCOVERY</div>
                <h5 className="text-sm font-bold text-stone-100 font-display">The Indie Hacking Surge</h5>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Adopted extensively in the 2010s by open-source communities, cryptography platforms, and tech forums looking for pristine, lightweight alternatives to avoid bloated corporate suffixes.
                </p>
              </div>

              <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-3 relative z-10">
                <div className="text-stone-500 text-[10px] font-mono font-bold">PHASE 03 — MATURATION</div>
                <h5 className="text-sm font-bold text-stone-100 font-display">The Elite Branding Standard</h5>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Today, .cc stands alongside other premium country codes as a first-tier choice for tech startups, creative hubs, and boutique luxury brands globally who prioritize absolute brevity.
                </p>
              </div>

            </div>
          </div>
        );

      case "mud-tires":
        return (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
                Mechanical Specification Sheet
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display">
                Maximum Traction: SEO Power &amp; CTR with .cc
              </h3>
              <p className="text-stone-400 text-sm">
                Just as aggressive mud tires feature self-cleaning grooves to bite into slick terrain, a .cc domain provides maximum search traction, allowing brands to gain immediate grip in modern algorithms.
              </p>
            </div>

            {/* Technical Specification Table */}
            <div className="border border-stone-800 rounded-2xl overflow-hidden bg-stone-900/40">
              <div className="grid grid-cols-3 bg-stone-900 border-b border-stone-800 p-4 font-mono text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                <div>Registry Parameter</div>
                <div>Legacy (.com)</div>
                <div className="text-amber-500">Emerging (.cc)</div>
              </div>
              
              <div className="divide-y divide-stone-800/60 font-sans text-xs">
                
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="font-semibold text-stone-300">Suffix Length Economy</div>
                  <div className="text-stone-500">3 Characters</div>
                  <div className="text-emerald-400 font-semibold">2 Characters (Optimal)</div>
                </div>

                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="font-semibold text-stone-300">Unreserved Registry Space</div>
                  <div className="text-stone-500">&lt; 0.8% (Extreme Saturation)</div>
                  <div className="text-emerald-400 font-semibold">&gt; 85% (High Availability)</div>
                </div>

                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="font-semibold text-stone-300">Broker Premium Cost</div>
                  <div className="text-stone-500">$2,500 – $250,000+</div>
                  <div className="text-emerald-400 font-semibold">Standard Registration ($15/yr)</div>
                </div>

                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="font-semibold text-stone-300">Click-Through Rate (CTR)</div>
                  <div className="text-stone-500">Standard Baseline</div>
                  <div className="text-emerald-400 font-semibold">Boosted (Brevity Premium)</div>
                </div>

                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="font-semibold text-stone-300">Global DNS Indexing Parity</div>
                  <div className="text-stone-300">100% Crawl Base</div>
                  <div className="text-emerald-400 font-semibold">100% Identical Parity</div>
                </div>

              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <Globe className="mx-auto text-amber-500 animate-pulse mb-2" size={28} />
            <h3 className="text-xl font-bold text-white font-display">The .cc Domain Ecosystem</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              As a streamlined country-code TLD, the .cc extension delivers premium brand value, global security infrastructure, and absolute brevity. Secure your digital real estate directly to protect your intellectual properties.
            </p>
          </div>
        );
    }
  };

  return (
    <section className="bg-stone-950 border-y border-stone-900 py-16 px-6 md:py-24" id="cc-domain-showcase">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Core render of unique layout */}
        {renderLayout()}

        {/* Global Action Banner for each page */}
        <div className="pt-8 border-t border-stone-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-stone-200">
              Is your brand secure under the .cc extension?
            </h4>
            <p className="text-xs text-stone-500">
              Secure premium keywords instantly at standard registrar rates before high-value names are claimed on the secondary market.
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <a
              href={GODADDY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-stone-900 hover:bg-stone-850 text-amber-500 hover:text-amber-400 font-mono text-[11px] font-bold uppercase tracking-wider px-5 py-3 rounded-xl border border-stone-800 hover:border-amber-500/30 transition-all shadow-md active:scale-95"
            >
              Verify .cc Availability <ArrowRight size={12} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
