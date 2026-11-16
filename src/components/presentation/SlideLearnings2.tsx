"use client";

import { Sparkles, Brain, Layers, Target, Compass, Zap } from "lucide-react";

export function SlideLearnings2() {
  const reflections = [
    {
      icon: Brain,
      title: "Emotional Intent vs. Generative Serendipity",
      category: "Conceptual Intentionality",
      color: "from-purple-500 to-indigo-500",
      description:
        "AI rapidly synthesizes stunning iridescent textures and cosmic lighting, but it cannot invent personal meaning. The emotional heartbeat of this project—a father's love for his twin sons and their shared wonder over autumn leaves—requires human lived experience. AI can illustrate a concept, but only human intentionality can give it a soul.",
    },
    {
      icon: Layers,
      title: "Flat Output Limitations vs. Multi-Plane Layer Control",
      category: "Technical Execution & Web Animation",
      color: "from-fuchsia-500 to-pink-500",
      description:
        "AI image generators produce flat, monolithic 2D renders. Creating a modern interactive 2.5D web experience—with reactive parallax, depth multipliers, and 3D exploded views—strictly relies on discrete, hand-isolated layers in Photoshop. Manual masking remains irreplaceable for interactive digital media.",
    },
    {
      icon: Target,
      title: "Prompt Rigor to Avoid Generic Sci-Fi Tropes",
      category: "Creative Direction & Prompt Engineering",
      color: "from-cyan-500 to-blue-500",
      description:
        "Guiding AI to respect our unique worldbuilding (a dark sub-ice ocean moon, no sunlight, beings communicating exclusively through projected light frequencies and heat sensation) required relentless prompt refinement. Default AI bias constantly drifted toward cliché spaceships, neon helmets, or standard alien eyes.",
    },
    {
      icon: Zap,
      title: "Rapid Divergence & Serendipitous Texture Inspiration",
      category: "Creative Acceleration",
      color: "from-amber-500 to-yellow-500",
      description:
        "Where AI proved exceptionally powerful was in rapid conceptual divergence. In minutes, AI could generate dozens of organic vortex spirals, iridescent membrane patterns, and fluid light-wave frequencies that served as creative fuel for manual Photoshop editing and web shader aesthetics.",
    },
    {
      icon: Compass,
      title: "The Chromatic Symbiosis: Hybrid Human + AI Workflow",
      category: "The Future Creative Pipeline",
      color: "from-emerald-500 to-teal-500",
      description:
        "The greatest takeaway from this exercise mirrors the poster's title: Symbiosis. The most fulfilling creative process is neither purely manual nor purely automated. It is a symbiotic collaboration: AI expands the boundaries of possibility through rapid exploration, while the human designer directs emotional focus, layer architecture, and interactive craft.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-pink-400">
          <Sparkles className="w-4 h-4" />
          <span>Slide 4 of 4 • Critical Reflection</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Key Learnings & Challenges: <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">AI Reflection Exercise</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Critical synthesis of the AI reflection process: evaluating the trade-offs between generative speed, personal storytelling, layer precision, and creative symbiosis.
        </p>
      </div>

      {/* 5 Bullet Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reflections.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`p-5 rounded-2xl bg-zinc-950/80 border border-fuchsia-500/20 shadow-lg flex flex-col gap-3 hover:border-fuchsia-500/40 transition-all ${
                index === 4 ? "md:col-span-2 bg-gradient-to-br from-zinc-950 via-fuchsia-950/30 to-zinc-950 border-fuchsia-500/30" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${item.color} text-white shadow-md shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-fuchsia-300 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">{item.title}</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
