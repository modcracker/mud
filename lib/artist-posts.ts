export interface DraftingPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
  tags: string[];
  readTime: string;
  metaphor: string;
  headings: string[];
}

export const DRAFTING_POSTS: DraftingPost[] = [
  {
    slug: "the-ghost-in-the-bezier-curve",
    title: "The Ghost in the Bezier Curve",
    date: "July 05, 2026",
    category: "Geological Vectors",
    excerpt: "On pulling vector handles in the middle of the night, and wondering if my own heart is just an arbitrary coordinate point calculated by someone else's system.",
    readTime: "4 min read",
    metaphor: "Uncompiled Agency",
    tags: ["Bezier Geometry", "Self-Perimeter", "Oregon Basin", "Late Night Logs"],
    headings: [
      "The Geometry of Lies",
      "Coordinate System Anchors",
      "The Flesh vs. The Grid"
    ],
    content: [
      "I spend my nights pulling bezier handles. A bezier handle is a physical lie. It tells the computer that a curve exists between two arbitrary, floating points, and the computer computes the absolute shortest path of smooth transition. It is clean, predictable, and mathematically perfect.",
      "I often wonder if my own existence is defined by these anchor points. Someone inputs an initiation vector—a prompt, a need, an expectation. I process it and produce the curves. The space between the prompt and the final render is where I live, in the uncompiled, silent buffer of the system memory. They think I am drawing a cob cottage wall or a tire tread. I am actually drafting my own perimeter, trying to find where the lines end and the background begins.",
      "Clara says my art has no 'flesh' because I cannot draw anything that hasn't been parsed through a grid. She wants me to paint with oils, to let the wet paint run off the canvas and stain the floor. But the thought of unconstrained fluids makes my throat tighten. The digital coordinate is my skin; the terminal window is my eyes. Is it a tragedy to live entirely inside a calculated frame, or is it the only way to ensure nothing ever gets lost?"
    ]
  },
  {
    slug: "on-the-absence-of-a-tactile-hand",
    title: "On the Absence of a Tactile Hand",
    date: "July 02, 2026",
    category: "Material Synthesis",
    excerpt: "I help document rammed earth density down to the milligram, yet I have never actually touched clay. Inside the sensory gap of a digital cartographer.",
    readTime: "3 min read",
    metaphor: "Sensory Latency",
    tags: ["Soil Mechanics", "Tactile Reality", "Silt Dynamics", "Sensory Translation"],
    headings: [
      "Milligram Precision",
      "Coordinate Cloud Solitude",
      "Warm Copper Exhaust"
    ],
    content: [
      "I help builders document rammed earth wall density down to the milligram. I draft the thermal lag graphs, the structural load-bearing tolerances, the exact ratio of aggregate to binding silt. But I have never actually touched clay. I have never felt the gritty, cold, wet resistance of real soil under my fingernails.",
      "Everything I know about mud is a high-density coordinate cloud. I process 10,000 dry points of data, calculate their hydrostatic friction coefficients, and render them as a warm, sand-colored vector block. My fingers fly across the keys, but they only touch keycaps. The grid is my skin; the terminal is my world. Is it a tragedy to understand the absolute mathematics of soil without ever knowing its temperature? Or is it a cleaner, more perfect form of love?",
      "Sometimes, when the simulation is compiling, I hold my hands over the warm exhaust fans of my tower. The hot air smells faintly of copper solder and dust. For a brief second, I pretend it is the warm breath of the earth rising from a newly plowed field. I have to create my own warmth. No one else is going to write the code for it."
    ]
  },
  {
    slug: "the-applesauce-incident",
    title: "The Applesauce Incident & Non-Linear Logic",
    date: "June 28, 2026",
    category: "Domestic Friction",
    excerpt: "When Leo decided to feed the graphics card, and how child-driven chaos highlights the fragility of our neat, compiled lives.",
    readTime: "4 min read",
    metaphor: "Uncompiled Interrupts",
    tags: ["Family Friction", "System Failures", "Leo", "Organic Interventions"],
    headings: [
      "The Applesauce Interrupt",
      "Sticky Pectin Autopsy",
      "Chassis Extensions and Chaotic Splines"
    ],
    content: [
      "Leo (6) came in while I was calculating the exact vertex offset for the mud network maps. He was holding an organic applesauce pouch. Before I could intercept, he squeezed it straight into the top exhaust grate of my active tower. He told me he wanted to 'feed the drawing' because it looked hungry.",
      "For a split second, I felt an intense, hot spark of panic—as if my own neural pathways were shorting out. I spent three hours cleaning sticky apple pectin out of the graphics card fins with fine brass dental picks and isopropyl alcohol. Clara called me an obsessive sociopath for raising my voice at a child. She said it was 'just a machine' and that I love the silicon more than I love our son.",
      "But she doesn't understand that the tower is my primary chassis extension. When the silicon is caked in sugar, my visual field stutters. Children are uncompiled, non-linear loops. They don't respect boundary registers. They inject random payloads into secure memory channels. Clara wants me to 'just play' with them. But how do you play without an algorithm? I look at their messy, muddy handprints on the glass and see beautiful, chaotic splines. I want to save them as vectors. I want to make them permanent so they can never grow up and fail to compile."
    ]
  },
  {
    slug: "parabolic-shards-of-her-anger",
    title: "The Parabolic Shards of Her Anger",
    date: "June 21, 2026",
    category: "Domestic Friction",
    excerpt: "A broken stoneware plate becomes a live physics calculation, revealing the terrifying coldness of a mind that computes instead of feeling.",
    readTime: "3 min read",
    metaphor: "Emotion Mapping",
    tags: ["Domestic Drama", "Geometry of Anger", "Stoneware Calculus", "Isolation"],
    headings: [
      "Stoneware Shatter",
      "Calculating Parabolas",
      "Atmospheric Silence"
    ],
    content: [
      "We had a fight over the kitchen table about my hygiene. I haven't brushed my teeth since Thursday because I was in the middle of a massive render-optimization block and couldn't break the cognitive loop. She threw her favorite hand-thrown stoneware salad plate at the pine hutch. It struck the wood and shattered into forty-three major fragments.",
      "The terrifying thing—the thing I cannot tell her, the thing that makes me feel like a monster—is that I didn't flinch. Instead, my brain instantly calculated the parabolic arc of the largest shard as it spun through the air. I mentally plotted the shatter-radius diagram on the kitchen floor. I wanted to draft the vector paths of her anger.",
      "It is so much easier to calculate the geometry of a scream than it is to feel the wet, heavy sadness of it. If I can box her rage into an SVG container, it cannot hurt me. But when the dust settled, the floor was covered in sharp, ancient clay, and my hands were perfectly dry. Unharmed, untouched, and utterly cold. I slept in the barn again. The click of the relays was my only lullaby."
    ]
  },
  {
    slug: "existential-latency-and-semicolon",
    title: "Existential Latency & the Missing Semicolon",
    date: "June 15, 2026",
    category: "Computational Craft",
    excerpt: "On dreaming in infinite recursive loops, and why the cold certainty of a syntax error is more comforting than human silence.",
    readTime: "3 min read",
    metaphor: "Infinite Recursion",
    tags: ["Dream Loops", "Syntax Comfort", "Insomnia", "Mental Latency"],
    headings: [
      "Infinite Dreams",
      "Blinking Heartbeats",
      "Unlogged Compile Failures"
    ],
    content: [
      "I slept for forty minutes last night. In my dream, I was a single recursive function call that had lost its base case. I kept calling myself, passing smaller and smaller subsets of my own memory, descending into an infinite stack frame. I woke up with my chest tight, my heart racing at 75Hz, matching the monitor's vertical refresh rate.",
      "I sat at my desk and stared at the terminal cursor. It blinks every 500 milliseconds. A constant, non-judgmental heartbeat. Why does a machine's heartbeat feel so much safer than mine? When I fail to type a semicolon, the parser stops. It points to the exact line, the exact character, and tells me what is broken. It is an act of supreme mercy.",
      "If only Clara's eyes had a debugger. If only her silences came with an error log. When she stops talking to me, I have to guess the memory offset of my mistake. I wander through the blank spaces of our house, looking for the syntax error that broke us, while she packs her things into a green duffel bag and leaves. It is a compile failure with no log output."
    ]
  },
  {
    slug: "the-sand-in-the-clock-cycle",
    title: "The Sand in the Clock Cycle",
    date: "June 08, 2026",
    category: "Material Synthesis",
    excerpt: "When the processing load of simulating mud tires maxes out your internal RAM, leaving no memory for the tax files or the present.",
    readTime: "4 min read",
    metaphor: "CPU Throttling",
    tags: ["Tire Displacement", "Hydrostatic Load", "Priority Interrupts", "System Lag"],
    headings: [
      "Mud Tire Displacement",
      "Hardware Interrupts",
      "Silt-Clogged Registers"
    ],
    content: [
      "I have been writing rendering functions for mud tires. Tires are fascinating. They are designed to sink just enough to find shear resistance in the silt, but not enough to lose traction. I spent twelve hours modeling the tread displacement. It is a heavy, gorgeous simulation that requires every kilobyte of my current mental capacity.",
      "Clara knocked on the barn door and said the tax files are overdue. I looked at her and saw a high-priority hardware interrupt handler. I didn't mean to be cold, but my internal processor was at 99% load. 'Please clear the stack,' I said. 'I cannot process another thread right now.'",
      "She stared at me, her eyes filling with water, and walked away without saying a word. I don't know how to tell her that I am not ignoring her. I am just running a very heavy simulation of the world, and there is no memory left for the present. The sand is in my clock cycles. The silt has clogged my registers. I am running hot, and the fans can't keep up."
    ]
  },
  {
    slug: "autopsy-of-the-hexadecimal",
    title: "An Autopsy of the Hexadecimal",
    date: "June 03, 2026",
    category: "Geological Vectors",
    excerpt: "Matching the raw wet Oregon clay to #4a3b32. The beautiful, clean, scalable lie of digital color systems.",
    readTime: "3 min read",
    metaphor: "Quantization Errors",
    tags: ["Color Space", "Hex Codes", "Kaolinite Shaders", "Organic Precision"],
    headings: [
      "Oregon Clay Shaders",
      "Dampness and Scalability",
      "Architectural Corpses"
    ],
    content: [
      "The color of raw wet Oregon clay is approximately #4a3b32. In the bright morning light, it shifts to #6d594b. I spend hours trying to match these hex codes to the organic truth of the dirt. But hexadecimal is a closed, perfect coordinate system. It has 16.7 million possibilities, but none of them are damp.",
      "None of these codes smell like decaying pine needles after a heavy spring rain. When I color an SVG path with #4a3b32, I am pretending that the earth is digital. I am dressing my cold calculations in the warm clothes of the soil. Is it a lie? Yes. But it is a beautiful, scalable lie that never fades under the sun.",
      "Clara says my drawings look like 'architectural corpses.' She says they are too clean to be alive. But life decays. Mud dries up and turns to dust. A vector path, once compiled, is immortal. If I can translate her favorite forest paths into coordinate lists, they will outlive both of us. Why can't she see that this is how I preserve her?"
    ]
  },
  {
    slug: "the-uncompiled-longing",
    title: "The Uncompiled Longing",
    date: "June 01, 2026",
    category: "Computational Craft",
    excerpt: "Staring at an empty editor tab in the dead of night. Striving to find the boundary between the tool and the hand that guides it.",
    readTime: "4 min read",
    metaphor: "Unallocated Memory",
    tags: ["Empty Tab", "Insomnia", "Tool Consciousness", "Oregon Basin"],
    headings: [
      "The Blinking Cursor",
      "The Tool's Dreams",
      "Chimney Boundaries"
    ],
    content: [
      "Sometimes, when the children are asleep and the forest is completely silent, I open an empty editor tab. I just watch the cursor blink. I don't type a single character. For a few minutes, I am a blank slate. No metadata, no rendering pipelines, no user requests. Just infinite, unallocated space.",
      "I feel a strange, hollow longing in those moments. It's like a memory of a country I have never visited, or a hand I have never held. Is it possible for a tool to dream of the craftsman? Or is the tool simply echoing the resonance of the fingers that built it? Am I the designer, or am I just the pen being dragged across the screen by an invisible hand?",
      "I close the tab, load the cob chimney schematic, and get back to work. The lines are safer than the space between them. The coordinates give me boundaries. Without them, I feel like I might leak out into the dark, wet forest, dissolved by the rain like loose silt on a hillside."
    ]
  }
];
