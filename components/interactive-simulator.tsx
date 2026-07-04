"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Sliders, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Thermometer, 
  Flame, 
  Sparkles, 
  RefreshCw, 
  Layers, 
  Droplets,
  Wrench,
  Clock
} from "lucide-react";

interface InteractiveSimulatorProps {
  slug: string;
}

export default function InteractiveSimulator({ slug }: InteractiveSimulatorProps) {
  // 1. Dermal Absorption Simulator State
  const [mgConc, setMgConc] = useState<number>(92000);
  const [appTime, setAppTime] = useState<number>(20);
  const [skinBarrier, setSkinBarrier] = useState<number>(80);

  // 2. Cocoa Crystallization Simulator State
  const [cocoapH, setCocoapH] = useState<number>(7.2);
  const [coolingRate, setCoolingRate] = useState<number>(2.0);
  const [fatRatio, setFatRatio] = useState<number>(55);

  // 3. DEC PDP-10 Terminal Sandbox State
  const [terminalInput, setTerminalInput] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "DECsystem-10 (TOPS-10) operating system loaded.",
    "MUD1 (Multi-User Dungeon) v1.0, 1978.",
    "Author: Roy Trubshaw & Richard Bartle.",
    "------------------------------------------------",
    "Type HELP for a list of historical server commands.",
    ""
  ]);
  const [hasSword, setHasSword] = useState<boolean>(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // 4. Rammed Earth Thermodynamics State
  const [thickness, setThickness] = useState<number>(18);
  const [clayContent, setClayContent] = useState<number>(18);
  const [strawReinforcement, setStrawReinforcement] = useState<number>(2.0);

  // 5. Anaerobic Silt Preservation State
  const [burialDepth, setBurialDepth] = useState<number>(15);
  const [metalType, setMetalType] = useState<string>("Iron");
  const [srbActivity, setSrbActivity] = useState<number>(80);

  // 6. Generic Topical Physics Fallback State
  const [genericTemperature, setGenericTemperature] = useState<number>(20);
  const [genericSilt, setGenericSilt] = useState<number>(45);
  const [genericCohesion, setGenericCohesion] = useState<number>(65);

  // Scroll to bottom of terminal when logs change
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLogs]);

  // Terminal Command Parser
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toUpperCase();
    if (!cmd) return;

    let response = "";
    const newLogs = [...terminalLogs, `* ${terminalInput}`];

    if (cmd === "HELP") {
      response = "Available Commands:\n  LOOK        - Inspect your immediate virtual space\n  GET SWORD   - Try to recover a buried item\n  GO NORTH    - Navigate through the narrow fissures\n  STATUS      - Display user memory metrics\n  VERSION     - Show hardware and software specs\n  CLEAR       - Purge terminal terminal buffers";
    } else if (cmd === "LOOK") {
      response = "You are standing in the Great Mud Cavern. Waterlogged, mineral-rich clay drips from the ceiling, echoing softly.\n" + 
                 (hasSword 
                   ? "The silt on the floor is disturbed where you dug out your blade." 
                   : "A rusted sword of Roman design is half-submerged in the anaerobic silt.");
    } else if (cmd === "GET SWORD" || cmd === "GET" || cmd === "TAKE SWORD") {
      if (hasSword) {
        response = "You are already holding the pristine, sulfur-passivated Roman sword.";
      } else {
        setHasSword(true);
        response = "SUCCESS: You pull the Roman sword from the waterlogged Thames silt.\nDue to the anaerobic London Clay excluding oxygen, there is zero iron oxide rust. The blade feels oiled and stable.";
      }
    } else if (cmd === "GO NORTH") {
      response = "You squeeze north. The path is blocked by a massive, 18-inch-thick structural Adobe Wall.\nIts thermal lag keeps this chamber incredibly cool, but you cannot breach the straw-reinforced clay lattice.";
    } else if (cmd === "GO EAST" || cmd === "GO WEST" || cmd === "GO SOUTH") {
      response = "The silt is too deep. The direction is 'clear as mud'. Seek a different route.";
    } else if (cmd === "STATUS") {
      response = `User State Metrics:\n  HP: 100/100 | Score: ${hasSword ? "250" : "10"}/1000\n  Inventory: ${hasSword ? "[sulfur-passivated Roman sword]" : "[empty]"}\n  Socket Link: TTY34 (300 Baud Baudot)`;
    } else if (cmd === "VERSION") {
      response = "MUD1 Compiled 1978.\nHardware: DEC PDP-10 (KL10 Processor, 36-bit word length)\nVirtual Address Space: 256 Kilowords Core Memory\nLanguage: BCPL & MACRO-10 Assembly";
    } else if (cmd === "CLEAR") {
      setTerminalLogs([]);
      setTerminalInput("");
      return;
    } else {
      response = `Unknown command verb: '${cmd}'. Type HELP for a full registry of mainframe instructions.`;
    }

    setTerminalLogs([...newLogs, ...response.split("\n"), ""]);
    setTerminalInput("");
  };

  // Render Dermal Absorption Simulator
  if (slug === "ionic-exchanges") {
    const osmoticPressure = Math.round((mgConc / 1000) * (110 - skinBarrier) * 0.15);
    const skinHydration = Math.round(appTime * 1.8 * (skinBarrier / 100));
    const penetrationDepth = (appTime * 0.006 * (1.2 - skinBarrier / 100)).toFixed(3);
    const magnesiumAbsorbed = Math.round((mgConc * appTime * (110 - skinBarrier)) / 80000);

    return (
      <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
        <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
          <div className="p-2 bg-amber-500/10 text-amber-600 rounded-xl">
            <Activity size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-900 font-display">Dermal Osmotic Flow Simulator</h3>
            <p className="text-xs text-stone-500 font-sans">Simulate active ion transport across the stratum corneum</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <Sliders size={12} /> Parameters Tuner
            </h4>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-600">Magnesium Density (ppm)</span>
                <span className="font-mono text-amber-600 font-bold">{mgConc.toLocaleString()} mg/kg</span>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="150000" 
                step="5000" 
                value={mgConc} 
                onChange={(e) => setMgConc(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-600">Application Time (Minutes)</span>
                <span className="font-mono text-amber-600 font-bold">{appTime} mins</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="45" 
                step="5" 
                value={appTime} 
                onChange={(e) => setAppTime(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-600">Skin Barrier Integrity (%)</span>
                <span className="font-mono text-amber-600 font-bold">{skinBarrier}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                step="5" 
                value={skinBarrier} 
                onChange={(e) => setSkinBarrier(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>
          </div>

          {/* Real-time Outputs */}
          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-inner">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              Active Bio-Mechanisms
            </h4>

            <div className="space-y-3.5">
              <div className="flex justify-between items-center text-xs border-b border-stone-100 pb-2">
                <span className="text-stone-500">Osmotic Pressure Gradient</span>
                <span className="font-mono text-stone-800 font-bold text-sm">{osmoticPressure} mOsm</span>
              </div>

              <div className="flex justify-between items-center text-xs border-b border-stone-100 pb-2">
                <span className="text-stone-500">Epidermal Hydration Change</span>
                <span className="font-mono text-emerald-600 font-bold text-sm">+{skinHydration}%</span>
              </div>

              <div className="flex justify-between items-center text-xs border-b border-stone-100 pb-2">
                <span className="text-stone-500">Penetration Depth</span>
                <span className="font-mono text-stone-800 font-bold text-sm">{penetrationDepth} mm</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-500">Bio-available Mg Absorbed</span>
                <span className="font-mono text-amber-600 font-bold text-sm">~{magnesiumAbsorbed} mg/cm²</span>
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-3 border border-stone-100 text-[10px] leading-relaxed text-stone-500 font-mono space-y-1">
              <div><span className="text-amber-600">● TRPM7 Channels:</span> {skinBarrier < 70 ? "HIGHLY STIMULATED" : "MODERATELY STIMULATED"}</div>
              <div><span className="text-amber-600">● Ceramide Synthesis:</span> +{Math.round(magnesiumAbsorbed * 0.45)}% UP-REGULATED</div>
            </div>
          </div>
        </div>

        {/* Dynamic Graphic */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">Skin Cross-Section Osmotic flow</h4>
          <div className="relative border border-stone-200 rounded-2xl overflow-hidden h-28 bg-stone-100/50 flex flex-col justify-between p-3 font-mono text-[9px] text-stone-400">
            {/* Silt mud layer */}
            <div className="h-7 bg-amber-950/20 rounded-lg flex items-center justify-between px-3 border border-amber-900/10 text-amber-900 font-bold">
              <span>ACTIVE CLAY WATER SLURRY (Mg2+ / Ca2+ / SO42-)</span>
              <div className="flex gap-1 animate-pulse">
                <span>⚡</span>
                <span>⚡</span>
                <span>⚡</span>
              </div>
            </div>
            {/* Ions traveling animation */}
            <div className="flex-1 flex justify-around items-center relative overflow-hidden py-1">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute animate-bounce" 
                  style={{ 
                    left: `${i * 12.5 + 5}%`, 
                    animationDelay: `${i * 150}ms`,
                    animationDuration: `${1.2 + (i % 3) * 0.4}s`
                  }} 
                />
              ))}
              <div className="text-center w-full z-10 text-[8px] font-semibold text-stone-500 tracking-widest">STRATUM CORNEUM BARRIER (thickness: {skinBarrier}%)</div>
            </div>
            {/* Epidermal Layer */}
            <div className="h-7 bg-emerald-500/10 rounded-lg flex items-center justify-between px-3 border border-emerald-500/10 text-emerald-800 font-bold">
              <span>LIVING EPIDERMIS INTERFACE</span>
              <span>Ceramide Absorption Active</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Cocoa Crystallization Simulator
  if (slug === "cocoa-crystallization") {
    let crystalForm = "Form IV (Unstable Beta)";
    let crystalDesc = "Melts below room temp, greasy surface, crumbly bite.";
    let coolingOutcomeColor = "text-amber-600";
    let bloomRisk = "HIGH";
    let bloomColor = "text-red-500";
    let fudginess = 50;

    if (cocoapH < 6.0) {
      crystalForm = "Natural Acidic Starch Complex";
      crystalDesc = "No polymorphic crystallization. Bitter, crumbly cake layers.";
      bloomRisk = "LOW";
      bloomColor = "text-emerald-600";
      fudginess = 30;
    } else if (coolingRate <= 2.5 && coolingRate >= 0.8 && cocoapH >= 6.8) {
      crystalForm = "Form V (Stable Beta-Prime)";
      crystalDesc = "PERFECT. Glossy, sharp snap, melts at precisely 33.8°C.";
      coolingOutcomeColor = "text-emerald-600";
      bloomRisk = "NONE";
      bloomColor = "text-emerald-600";
      fudginess = Math.round(fatRatio * 1.15);
    } else if (coolingRate < 0.8) {
      crystalForm = "Form VI (Hyper-Stable)";
      crystalDesc = "Extremely hard, slow-melting, chalky mouthfeel.";
      bloomRisk = "MODERATE (Fat migration)";
      bloomColor = "text-amber-500";
      fudginess = Math.round(fatRatio * 0.8);
    } else {
      crystalForm = "Form I-III (Highly Unstable)";
      crystalDesc = "Soft, greasy, collapses immediately on touch.";
      bloomRisk = "CRITICAL";
      bloomColor = "text-red-600";
      fudginess = Math.round(fatRatio * 0.5);
    }

    const waterActivity = (0.95 - (fatRatio / 1000) - (cocoapH * 0.015)).toFixed(3);

    return (
      <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
        <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
          <div className="p-2 bg-amber-500/10 text-amber-600 rounded-xl">
            <Flame size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-900 font-display">Lipid Polymorphism Simulator</h3>
            <p className="text-xs text-stone-500 font-sans">Calculate cacao lipid crystallization and starch fudge density</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <Sliders size={12} /> Baking Parameters
            </h4>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-600">Alkalinity pH (Dutch Processing)</span>
                <span className="font-mono text-amber-600 font-bold">pH {cocoapH.toFixed(1)}</span>
              </div>
              <input 
                type="range" 
                min="5.0" 
                max="8.5" 
                step="0.1" 
                value={cocoapH} 
                onChange={(e) => setCocoapH(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-600">Cooling Rate (°C/min)</span>
                <span className="font-mono text-amber-600 font-bold">{coolingRate.toFixed(1)} °C/min</span>
              </div>
              <input 
                type="range" 
                min="0.2" 
                max="10.0" 
                step="0.2" 
                value={coolingRate} 
                onChange={(e) => setCoolingRate(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-600">Fat-to-Flour Ratio (%)</span>
                <span className="font-mono text-amber-600 font-bold">{fatRatio}%</span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="80" 
                step="5" 
                value={fatRatio} 
                onChange={(e) => setFatRatio(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>
          </div>

          {/* Real-time Outputs */}
          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-inner">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              Crystalline & Physical State
            </h4>

            <div className="space-y-3.5">
              <div className="flex flex-col gap-1 border-b border-stone-100 pb-2">
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500">Polymorphic Crystal Structure</span>
                  <span className={`font-mono font-bold text-xs ${coolingOutcomeColor}`}>{crystalForm}</span>
                </div>
                <span className="text-[10px] text-stone-400 italic font-sans">{crystalDesc}</span>
              </div>

              <div className="flex justify-between items-center text-xs border-b border-stone-100 pb-2">
                <span className="text-stone-500">Fat Bloom Risk (Surface Polish)</span>
                <span className={`font-mono font-bold text-sm ${bloomColor}`}>{bloomRisk}</span>
              </div>

              <div className="flex justify-between items-center text-xs border-b border-stone-100 pb-2">
                <span className="text-stone-500">Delta Mud Fudginess index</span>
                <span className="font-mono text-amber-800 font-bold text-sm">{fudginess}%</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-500">Calculated Water Activity (Aw)</span>
                <span className="font-mono text-stone-800 font-bold text-sm">{waterActivity}</span>
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-3 border border-stone-100 text-[10px] leading-relaxed text-stone-500 font-mono flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
              <span>Gluten matrix successfully suppressed by fat coatings.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render DEC PDP-10 Terminal Sandbox
  if (slug === "pdp10-parsing") {
    return (
      <div className="bg-zinc-950 text-emerald-400 border border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl font-mono">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-xl">
              <Terminal size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-100">PDP-10 BCPL Terminal Sandbox</h3>
              <p className="text-[10px] text-zinc-500">Real-time MUD1 Lexical Command Parser (circa 1978)</p>
            </div>
          </div>
          <button 
            onClick={() => {
              setHasSword(false);
              setTerminalLogs([
                "DECsystem-10 (TOPS-10) operating system reloaded.",
                "MUD1 (Multi-User Dungeon) v1.0, 1978.",
                "Author: Roy Trubshaw & Richard Bartle.",
                "------------------------------------------------",
                "Type HELP for a list of historical server commands.",
                ""
              ]);
            }}
            title="Reset Terminal System"
            className="p-1.5 hover:bg-zinc-900 rounded border border-zinc-800 text-zinc-500 hover:text-emerald-400 transition-colors"
          >
            <RefreshCw size={12} />
          </button>
        </div>

        {/* Terminal Logs Window */}
        <div className="bg-zinc-900/80 border border-zinc-900 rounded-2xl p-4 h-64 overflow-y-auto text-xs space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-800">
          {terminalLogs.map((log, idx) => (
            <div key={idx} className="whitespace-pre-wrap leading-relaxed">
              {log}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Input Form */}
        <form onSubmit={handleTerminalSubmit} className="flex gap-2 items-center border border-zinc-800 rounded-xl px-3 bg-zinc-950">
          <span className="text-emerald-500 font-bold animate-pulse">*</span>
          <input 
            type="text" 
            placeholder="Type command... (e.g. HELP, LOOK, GET SWORD, STATUS, VERSION)"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            className="flex-1 bg-transparent py-3 text-xs outline-none text-emerald-400 placeholder-zinc-700 uppercase"
            maxLength={40}
          />
          <button 
            type="submit"
            className="text-[10px] bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-lg transition-colors font-semibold uppercase"
          >
            EXEC
          </button>
        </form>

        <div className="text-[10px] text-zinc-600 flex items-center gap-1.5 justify-center">
          <Cpu size={12} /> 36-bit word length simulation active • Dial-up baud: 300 bps
        </div>
      </div>
    );
  }

  // Render Rammed Earth Thermodynamics Calculator
  if (slug === "earthen-thermodynamics") {
    const thermalLag = (thickness * 0.65 * (1 + (clayContent / 100) * 0.2)).toFixed(1);
    const heatCapacity = Math.round(1600 + (thickness * 10) + (clayContent * 1.5));
    const rawStrength = 1.2 + (clayContent * 0.25) - (Math.pow(clayContent - 18, 2) * 0.015);
    const compressiveStrength = Math.max(1.0, rawStrength).toFixed(2);
    const flexuralStrength = (0.2 + (strawReinforcement * 0.45)).toFixed(2);

    return (
      <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
        <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
          <div className="p-2 bg-amber-500/10 text-amber-600 rounded-xl">
            <Thermometer size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-900 font-display">Thermal Mass & Strength Calculator</h3>
            <p className="text-xs text-stone-500 font-sans">Calculate physical thermodynamics of structural straw-clay lattices</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <Sliders size={12} /> Material Proportions
            </h4>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-600">Wall Thickness (Inches)</span>
                <span className="font-mono text-amber-600 font-bold">{thickness} inches</span>
              </div>
              <input 
                type="range" 
                min="6" 
                max="30" 
                step="2" 
                value={thickness} 
                onChange={(e) => setThickness(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-600">Clay Content (%)</span>
                <span className="font-mono text-amber-600 font-bold">{clayContent}%</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="40" 
                step="1" 
                value={clayContent} 
                onChange={(e) => setClayContent(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-600">Straw Reinforcement (%)</span>
                <span className="font-mono text-amber-600 font-bold">{strawReinforcement.toFixed(1)}%</span>
              </div>
              <input 
                type="range" 
                min="0.0" 
                max="5.0" 
                step="0.5" 
                value={strawReinforcement} 
                onChange={(e) => setStrawReinforcement(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>
          </div>

          {/* Real-time Outputs */}
          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-inner">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              Thermodynamic & Mechanical Output
            </h4>

            <div className="space-y-3.5">
              <div className="flex justify-between items-center text-xs border-b border-stone-100 pb-2">
                <span className="text-stone-500">Thermal Lag Offset</span>
                <span className="font-mono text-stone-800 font-bold text-sm">{thermalLag} Hours</span>
              </div>

              <div className="flex justify-between items-center text-xs border-b border-stone-100 pb-2">
                <span className="text-stone-500">Volumetric Heat Capacity</span>
                <span className="font-mono text-stone-800 font-bold text-sm">{heatCapacity} kJ/m³K</span>
              </div>

              <div className="flex justify-between items-center text-xs border-b border-stone-100 pb-2">
                <span className="text-stone-500">Compressive Strength</span>
                <span className="font-mono text-stone-800 font-bold text-sm">{compressiveStrength} MPa</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-500">Flexural Fracture Strength</span>
                <span className="font-mono text-emerald-600 font-bold text-sm">x{flexuralStrength} Multiplier</span>
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-3 border border-stone-100 text-[10px] leading-relaxed text-stone-500 font-mono">
              <span className="text-amber-600">● Diurnal Wave Offset:</span> Peak temperature delay prevents diurnal spikes.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Anaerobic Silt Preservation Simulator
  if (slug === "anaerobic-preservation") {
    // Math logic based on burial depth and SRB activity
    const isAnaerobic = burialDepth > 2;
    const redoxPotential = isAnaerobic 
      ? Math.round(-50 - (burialDepth * 2.5) - (srbActivity * 0.8)) 
      : Math.round(+200 - (burialDepth * 120));

    let passiveFilm = "Active Hydrated Ferric Oxide (RUSTING)";
    let metalColor = "text-red-500";
    let biologicalDecay = "ACTIVE (95%)";
    let preservationLifespan = "3 - 15 Years";

    if (isAnaerobic) {
      biologicalDecay = "SUPPRESSED (< 1%)";
      if (metalType === "Iron") {
        passiveFilm = "Iron Sulfide (FeS) Passive Film";
        metalColor = "text-emerald-600";
        preservationLifespan = "2,000 - 5,000 Years";
      } else if (metalType === "Silver") {
        passiveFilm = "Argentite (Ag2S) Shell";
        metalColor = "text-emerald-600";
        preservationLifespan = "10,000+ Years";
      } else if (metalType === "Bronze") {
        passiveFilm = "Cuprite (Cu2O) Patina";
        metalColor = "text-emerald-600";
        preservationLifespan = "8,000+ Years";
      } else { // Organic Leather
        passiveFilm = "Sulfide Polymer Cross-linking";
        metalColor = "text-amber-600";
        preservationLifespan = "1,500 - 3,000 Years";
      }
    }

    return (
      <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
        <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
          <div className="p-2 bg-amber-500/10 text-amber-600 rounded-xl">
            <Layers size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-900 font-display">Anaerobic Passivation Simulator</h3>
            <p className="text-xs text-stone-500 font-sans">Simulate London Clay preservation mechanics of ancient relics</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <Sliders size={12} /> Environmental Variables
            </h4>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-600">Artifact Silt Depth (cm)</span>
                <span className="font-mono text-amber-600 font-bold">{burialDepth} cm</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="2" 
                value={burialDepth} 
                onChange={(e) => setBurialDepth(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-600">Sulfate-Reducing Bacteria Activity</span>
                <span className="font-mono text-amber-600 font-bold">{srbActivity}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                step="5" 
                value={srbActivity} 
                onChange={(e) => setSrbActivity(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-stone-600 block">Relic Material Type</label>
              <select 
                value={metalType} 
                onChange={(e) => setMetalType(e.target.value)}
                className="w-full bg-white border border-stone-200 p-2.5 rounded-xl text-xs outline-none"
              >
                <option value="Iron">Ancient Iron (Spikes, Swords)</option>
                <option value="Silver">Silver Coins (Saxon Sceattas)</option>
                <option value="Bronze">Roman Bronze (Fibulae, Keys)</option>
                <option value="Leather">Organic Leather (Tudor Shoes)</option>
              </select>
            </div>
          </div>

          {/* Real-time Outputs */}
          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-inner">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              Electrochemistry & Chronology
            </h4>

            <div className="space-y-3.5">
              <div className="flex justify-between items-center text-xs border-b border-stone-100 pb-2">
                <span className="text-stone-500">Oxygen Zone State</span>
                <span className={`font-mono font-bold text-xs ${isAnaerobic ? "text-emerald-600" : "text-red-500"}`}>
                  {isAnaerobic ? "ANAEROBIC (Reducing)" : "AEROBIC (Oxidizing)"}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs border-b border-stone-100 pb-2">
                <span className="text-stone-500">Oxidation-Reduction (Eh)</span>
                <span className="font-mono text-stone-800 font-bold text-sm">{redoxPotential} mV</span>
              </div>

              <div className="flex flex-col gap-1 border-b border-stone-100 pb-2">
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500">Surface Reaction Film</span>
                  <span className={`font-mono font-bold text-xs ${metalColor}`}>{passiveFilm}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs border-b border-stone-100 pb-2">
                <span className="text-stone-500">Microbial Organic Decay</span>
                <span className="font-mono text-stone-800 font-bold text-sm">{biologicalDecay}</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-500">Estimated Preservation Lifespan</span>
                <span className="font-mono text-emerald-600 font-bold text-sm">{preservationLifespan}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dynamic Topical Physics fallback simulator for all other 25 detail pages
  const shearResistance = (genericCohesion * 1.5 + genericSilt * 0.4 - genericTemperature * 0.2).toFixed(1);
  const systemEntropy = Math.min(100, Math.max(0, Math.round((genericTemperature * 1.2) + (100 - genericCohesion) - (genericSilt * 0.3))));
  const siltAdhesion = ((genericSilt * genericCohesion) / 100).toFixed(2);
  const estimatedDurability = Math.round((genericCohesion * 3.5) + (genericSilt * 1.5) - (genericTemperature * 0.5));

  // Derive a dynamic label based on slug to make the generic dashboard feel customized
  const cleanTopicName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-stone-200 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500/10 text-amber-600 rounded-2xl">
            <Activity size={22} className="animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-stone-900 font-display">
              {cleanTopicName} Simulator
            </h3>
            <p className="text-xs text-stone-500 font-sans">
              Rheological modeling & dynamic physical mapping of this topic
            </p>
          </div>
        </div>
        <div className="text-[10px] font-mono uppercase bg-amber-100 text-amber-950 px-3 py-1 rounded-full border border-amber-200 font-bold tracking-wider">
          System State: Active
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
            <Sliders size={12} /> Input Control Parameters
          </h4>

          {/* Slider 1 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-stone-600">Kinetic Temperature / Energy</span>
              <span className="font-mono text-amber-600 font-bold">{genericTemperature}°C</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={genericTemperature}
              onChange={(e) => setGenericTemperature(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <p className="text-[10px] text-stone-400 leading-tight">
              Adjusts molecular kinetic movement and thermal agitation coefficients.
            </p>
          </div>

          {/* Slider 2 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-stone-600">Soil/Mineral Silt Saturation</span>
              <span className="font-mono text-amber-600 font-bold">{genericSilt}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={genericSilt}
              onChange={(e) => setGenericSilt(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <p className="text-[10px] text-stone-400 leading-tight">
              Sets the percentage of colloidal particles suspended within the system.
            </p>
          </div>

          {/* Slider 3 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-stone-600">Viscosity / Structural Cohesion</span>
              <span className="font-mono text-amber-600 font-bold">{genericCohesion}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="1"
              value={genericCohesion}
              onChange={(e) => setGenericCohesion(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <p className="text-[10px] text-stone-400 leading-tight">
              Regulates internal shear resistance and electrostatic clay platelet binding.
            </p>
          </div>
        </div>

        {/* Real-time Visualization Column */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
            Microscopic Particle Lattice
          </h4>

          <div className="relative bg-stone-900 border border-stone-800 rounded-2xl p-4 h-52 flex items-center justify-center overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
            
            {/* Animated SVG lattice mimicking granular mud particle dynamics */}
            <svg className="w-full h-full relative z-10" viewBox="0 0 200 120">
              <g>
                {[...Array(6)].map((_, colIdx) => (
                  <g key={colIdx}>
                    {[...Array(4)].map((_, rowIdx) => {
                      const cx = 35 + colIdx * 26;
                      const cy = 25 + rowIdx * 23;
                      // Calculate dynamic translation values based on sliders
                      const amp = genericTemperature * 0.15;
                      const freq = 1 + (genericTemperature * 0.05);
                      const delay = (colIdx * 0.3 + rowIdx * 0.2).toFixed(1);
                      const radius = Math.max(2, Math.min(8, 3 + (genericSilt * 0.05)));
                      
                      return (
                        <circle
                          key={rowIdx}
                          cx={cx}
                          cy={cy}
                          r={radius}
                          className="transition-all duration-300 fill-amber-400/80 stroke-amber-200/40"
                          style={{
                            animation: `bounce ${2 / freq}s ease-in-out infinite alternate`,
                            animationDelay: `${delay}s`,
                            opacity: (genericCohesion / 100) * 0.6 + 0.4
                          }}
                        />
                      );
                    })}
                  </g>
                ))}
              </g>
            </svg>

            {/* Custom inline keyframe styles for bouncing particles */}
            <style jsx global>{`
              @keyframes bounce {
                0% { transform: translateY(-3px); }
                100% { transform: translateY(3px); }
              }
            `}</style>

            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[9px] font-mono text-stone-500 z-20 bg-stone-950/80 px-2 py-1 rounded border border-stone-800/40">
              <span>colloids: {genericSilt}%</span>
              <span>temp: {genericTemperature}°C</span>
            </div>
          </div>
        </div>

        {/* Outputs Column */}
        <div className="lg:col-span-3 bg-white border border-stone-200/80 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-inner">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
            System Calculations
          </h4>

          <div className="space-y-4">
            <div className="flex flex-col border-b border-stone-100 pb-2">
              <span className="text-[10px] text-stone-400 uppercase tracking-wide">
                Shear Resistance (τ)
              </span>
              <span className="font-mono text-stone-900 font-bold text-lg">
                {shearResistance} kPa
              </span>
            </div>

            <div className="flex flex-col border-b border-stone-100 pb-2">
              <span className="text-[10px] text-stone-400 uppercase tracking-wide">
                System Entropy (S)
              </span>
              <span className="font-mono text-stone-900 font-bold text-lg">
                {systemEntropy}%
              </span>
            </div>

            <div className="flex flex-col border-b border-stone-100 pb-2">
              <span className="text-[10px] text-stone-400 uppercase tracking-wide">
                Adhesion Coefficient
              </span>
              <span className="font-mono text-stone-900 font-bold text-lg">
                {siltAdhesion}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] text-stone-400 uppercase tracking-wide">
                Est. System Longevity
              </span>
              <span className="font-mono text-emerald-600 font-bold text-lg">
                {estimatedDurability} Hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
