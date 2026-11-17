"use client";

import Image from "next/image";
import { Sparkles, Bot, Wand2, FileText, Film } from "lucide-react";

export function SlideAICollage() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
          <Bot className="w-4 h-4" />
          <span>Slide 3 of 4 • AI-Assisted Divergence</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Collage of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400">AI-Assisted Designs</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          For this exercise, I asked AI to generate designs based on my written letter of intent (which proved remarkably close to my original concept), redo my handcrafted poster, and create an animated version exploring motion in the cryo-ocean world.
        </p>
      </div>

      {/* AI Designs Showcase Collage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: 2 Poster Comparisons (Letter of Intent vs Redone Poster) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Variant A: Generated from Letter of Intent */}
          <div className="flex flex-col rounded-xl overflow-hidden border border-cyan-500/30 bg-zinc-950/80 shadow-xl">
            <div className="relative aspect-[2/3] w-full bg-black/80 overflow-hidden">
              <Image
                src="/ai-designs/ai-poster-from-letter.png"
                alt="AI Poster Generated from Letter of Intent"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 320px"
                priority
              />
            </div>
            <div className="p-3 flex flex-col gap-1.5 flex-1 justify-between bg-zinc-950/90">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  <span>From Letter of Intent</span>
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">
                  Text-Only Prompt Iteration
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Generated purely from the written concept without reference images. Remarkably, AI captured the central energy focus, family silhouettes, and bioluminescent cavern mood very close to my original poster.
                </p>
              </div>
            </div>
          </div>

          {/* Variant B: Redone from Handcrafted Poster */}
          <div className="flex flex-col rounded-xl overflow-hidden border border-purple-500/30 bg-zinc-950/80 shadow-xl">
            <div className="relative aspect-[2/3] w-full bg-black/80 overflow-hidden">
              <Image
                src="/ai-designs/ai-poster-01.png"
                alt="AI Recreated Poster from Original Poster"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 320px"
                priority
              />
            </div>
            <div className="p-3 flex flex-col gap-1.5 flex-1 justify-between bg-zinc-950/90">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-semibold flex items-center gap-1">
                  <Bot className="w-3 h-3" />
                  <span>From Original Poster</span>
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">
                  AI-Recreated Poster Variant
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  I asked AI to redo my handcrafted poster as a full generative composition, exploring alternative cosmic caustic lighting, fluid membrane refractions, and alien anatomy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Animated Sequence & Prompt Engineering */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          {/* Animated GIF Card */}
          <div className="flex flex-col rounded-xl overflow-hidden border border-fuchsia-500/30 bg-zinc-950/80 shadow-xl">
            <div className="relative aspect-[358/265] w-full bg-black overflow-hidden">
              <Image
                src="/ai-designs/ai-concept-exploration.gif"
                alt="AI Animated Poster Version"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
            <div className="p-3 flex flex-col gap-1 bg-zinc-950/90">
              <span className="text-[10px] font-mono text-fuchsia-400 uppercase tracking-wider font-semibold flex items-center gap-1">
                <Film className="w-3 h-3" />
                <span>AI-Animated Version</span>
              </span>
              <h3 className="text-sm font-bold text-white leading-snug">
                Latent Motion Dynamics
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                I asked AI to create an animated sequence of the poster, exploring latent motion dynamics, swirling portal energy, and fluid character lighting.
              </p>
            </div>
          </div>

          {/* Prompt & Synthesis Insights */}
          <div className="flex flex-col gap-3">
            <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-cyan-500/20 flex flex-col gap-1.5 shadow-md">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                <Wand2 className="w-3 h-3" />
                <span>Prompt Exploration</span>
              </div>
              <p className="text-xs text-zinc-300 italic leading-relaxed">
                &ldquo;Cinematic sci-fi scene of an underwater ice cavern beneath Saturn&apos;s moon. Bioluminescent father and twin sons communicating through projected light waves near a swirling portal tree.&rdquo;
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-fuchsia-500/20 flex flex-col gap-1.5 shadow-md">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-fuchsia-400 uppercase tracking-wider font-semibold">
                <Sparkles className="w-3 h-3" />
                <span>Generative Synthesis</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Prompting from the letter of intent proved AI could match the core mood, while manual Photoshop layering remained essential for emotional nuance and interactive web depth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
