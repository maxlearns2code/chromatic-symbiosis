"use client";

import { Sparkles, Bot, Wand2, Compass } from "lucide-react";

export function SlideAICollage() {
  const aiExplorations = [
    {
      title: "Exploration 01: The Subterranean Cryo-Ocean",
      prompt: "Cinematic sci-fi scene of an underwater mountain cave beneath kilometers of solid Saturn moon ice. Zero sunlight, bioluminescent alien ecosystem with glowing hydrothermal vents and cosmic violet flora.",
      aspect: "aspect-[16/9]",
      gradient: "from-blue-900 via-indigo-950 to-purple-950",
      accent: "text-cyan-400",
      notes: "AI excelled at rendering turbulent atmospheric water volume and subtle caustic refraction.",
    },
    {
      title: "Exploration 02: Chromocommunicative Father & Twins",
      prompt: "Evolved intelligent alien beings, tall celestial father and two young twin sons holding hands. Crystalline bodies with internal chromatic organs and glowing optic cores projecting colored light frequencies.",
      aspect: "aspect-[4/5]",
      gradient: "from-purple-900 via-fuchsia-950 to-black",
      accent: "text-fuchsia-400",
      notes: "Generated complex organic fractal patterns across skin surfaces, inspiring new texture directions.",
    },
    {
      title: "Exploration 03: The Dimensional Vortex Tree",
      prompt: "A massive ancient living tree-like organism with a swirling purple vortex at its core. Emitting dimensional compass light rays, mystical portal in a rocky frozen cavern, high contrast.",
      aspect: "aspect-[4/5]",
      gradient: "from-violet-950 via-purple-900 to-slate-950",
      accent: "text-purple-300",
      notes: "Generated mesmerizing spiral vortex geometries that informed the interactive web portal button.",
    },
    {
      title: "Exploration 04: The Warm Impossible Leaf",
      prompt: "Close up macro of three terrestrial autumn leaves floating in deep ocean dark, veins pulsing with golden and crimson heat energy, glowing warmth in an icy world.",
      aspect: "aspect-[16/9]",
      gradient: "from-rose-950 via-amber-950 to-zinc-950",
      accent: "text-amber-400",
      notes: "Explored how terrestrial organic cellular structures could interface with alien energy fields.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
          <Bot className="w-4 h-4" />
          <span>Slide 3 of 4 • AI-Assisted Divergence</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Collage of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400">AI Assisted Designs</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Reimagining the world of Chromatic Symbiosis through generative AI prompts—exploring alternative atmospheres, alien morphology, and chromatic energy signatures.
        </p>
      </div>

      {/* AI Concept Gallery Collage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aiExplorations.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-2xl overflow-hidden border border-cyan-500/20 bg-zinc-950/80 shadow-xl group hover:border-cyan-400/50 transition-all"
          >
            {/* Visual Canvas / Frame */}
            <div
              className={`relative ${item.aspect} w-full bg-gradient-to-tr ${item.gradient} p-6 flex flex-col justify-between overflow-hidden border-b border-white/10`}
            >
              {/* Subtle background cosmic grid / aura */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${item.accent} flex items-center gap-1.5`}>
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>{item.title}</span>
                </span>
                <span className="text-[10px] font-mono bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-zinc-400 border border-white/10">
                  AI Generated Concept
                </span>
              </div>

              {/* Central Abstract Visual Representation */}
              <div className="relative z-10 my-auto py-8 text-center flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                  <Compass className="w-8 h-8 text-white/90 animate-pulse" />
                </div>
                <span className="text-xs text-white/80 font-mono tracking-widest uppercase">
                  Generative Latent Space Variant
                </span>
              </div>

              {/* Bottom Prompt Snippet */}
              <div className="relative z-10 bg-black/75 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <span className="text-[10px] text-cyan-300 font-mono block mb-1 uppercase tracking-wider">Prompt Engineering:</span>
                <p className="text-xs text-zinc-300 italic leading-relaxed line-clamp-2">
                  &ldquo;{item.prompt}&rdquo;
                </p>
              </div>
            </div>

            {/* Reflection Note */}
            <div className="p-4 bg-zinc-900/60 flex items-center justify-between gap-4">
              <p className="text-xs text-zinc-300 leading-normal">
                <span className="font-semibold text-white">Insight: </span>
                {item.notes}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Directory Drop Banner */}
      <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
          <span className="text-xs sm:text-sm text-zinc-300">
            Have additional AI rendered files? Drop PNGs into <code className="text-cyan-300 bg-black/40 px-1.5 py-0.5 rounded font-mono text-xs">public/ai-designs/</code> to display your exported renders directly!
          </span>
        </div>
      </div>
    </div>
  );
}
