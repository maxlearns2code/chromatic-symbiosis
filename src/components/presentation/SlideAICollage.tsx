"use client";

import Image from "next/image";
import { Sparkles, Bot, Wand2 } from "lucide-react";

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
          Exploring alternative visual directions with generative AI—testing prompt iterations for alien bioluminescence, cryo-ocean caverns, and living portal dynamics.
        </p>
      </div>

      {/* AI Designs Showcase Collage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Full AI-Generated Poster Variant */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="relative aspect-[1086/1448] w-full max-w-[360px] mx-auto lg:mx-0 rounded-xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-zinc-950">
            <Image
              src="/ai-designs/ai-poster-01.png"
              alt="AI Reimagined Poster Variant"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 360px"
              priority
            />
          </div>
          <div className="flex flex-col gap-1 max-w-[360px] px-1">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Bot className="w-4 h-4 text-cyan-400" />
              <span>AI Reimagined Poster Variant</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Full generative composition exploring alternative atmospheric depth, bioluminescent refraction, and planetary cavern lighting.
            </p>
          </div>
        </div>

        {/* Right Column: AI Concept Exploration GIF & Prompt Breakdown */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Concept Exploration Animation Card */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[358/265] w-full max-w-[360px] mx-auto lg:mx-0 rounded-xl overflow-hidden border border-fuchsia-500/30 shadow-2xl bg-zinc-950">
              <Image
                src="/ai-designs/ai-concept-exploration.gif"
                alt="AI Concept Exploration Animation"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="flex flex-col gap-1 max-w-[360px] px-1">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-fuchsia-400" />
                <span>Generative Latent Space & Motion</span>
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Animated sequence exploring iterative character dynamics, energy vortex forms, and fluid lighting transitions in the latent space.
              </p>
            </div>
          </div>

          {/* Prompt Engineering & Design Synthesis Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-cyan-500/20 flex flex-col gap-2 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                <Wand2 className="w-3.5 h-3.5" />
                <span>Prompt Exploration</span>
              </div>
              <p className="text-xs text-zinc-300 italic leading-relaxed">
                &ldquo;Cinematic sci-fi scene of an underwater ice cavern beneath Saturn&apos;s moon. Bioluminescent father and twin sons communicating through projected light waves near a swirling portal tree.&rdquo;
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/80 border border-fuchsia-500/20 flex flex-col gap-2 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-fuchsia-400 uppercase tracking-wider font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Generative Synthesis</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                AI provided rapid visual divergence and exotic texture possibilities, while manual Photoshop layering was essential to preserve narrative clarity and interactive web depth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
