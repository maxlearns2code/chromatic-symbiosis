"use client";

import Image from "next/image";
import { Sparkles, Wand2 } from "lucide-react";

export function SlideAICollage() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 pb-16">
      {/* Minimalist Header */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          Slide 03 • AI-Assisted Divergence
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Collage of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400">
            AI-Assisted Designs
          </span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Exploring generative AI across four dimensions: text-only intent generation, poster redesign, cinematic world panorama, and latent motion.
        </p>
      </div>

      {/* 3-Column Showcase Collage */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        {/* Column 1: AI Poster from Letter of Intent */}
        <div className="flex flex-col rounded-2xl overflow-hidden border border-cyan-500/30 bg-zinc-950/80 shadow-xl hover:border-cyan-500/50 transition-all">
          <div className="relative aspect-[2/3] w-full bg-black overflow-hidden group">
            <Image
              src="/ai-designs/ai-poster-from-letter.png"
              alt="AI Poster Generated from Letter of Intent"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
              priority
            />
          </div>
          <div className="p-4 flex flex-col gap-2 flex-1 justify-between bg-zinc-950/95 border-t border-cyan-500/20">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-base font-bold text-white leading-snug">
                From Letter of Intent
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Generated purely from my written concept without reference images. Remarkably, AI captured the central family silhouette, bioluminescent cavern, and energy focus very close to my original poster.
              </p>
            </div>
            <div className="pt-2 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-medium text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
              <span>Zero-shot concept fidelity</span>
            </div>
          </div>
        </div>

        {/* Column 2: AI Recreated Poster from Handcrafted Design */}
        <div className="flex flex-col rounded-2xl overflow-hidden border border-purple-500/30 bg-zinc-950/80 shadow-xl hover:border-purple-500/50 transition-all">
          <div className="relative aspect-[2/3] w-full bg-black overflow-hidden group">
            <Image
              src="/ai-designs/ai-poster-01.png"
              alt="AI Recreated Poster from Original Poster"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
              priority
            />
          </div>
          <div className="p-4 flex flex-col gap-2 flex-1 justify-between bg-zinc-950/95 border-t border-purple-500/20">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-base font-bold text-white leading-snug">
                AI Poster Reinterpretation
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                I asked AI to recreate my handcrafted poster as a full generative composition, exploring alternative caustic lighting, fluid membrane anatomy, and saturated energy refractions.
              </p>
            </div>
            <div className="pt-2 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-medium text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
              <span>Full composition reimagining</span>
            </div>
          </div>
        </div>

        {/* Column 3: Cinematic World Panorama & Animated Latent Sequence */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col justify-between gap-4">
          {/* Item 3A: AI World Panorama */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-amber-500/30 bg-zinc-950/80 shadow-xl hover:border-amber-500/50 transition-all flex-1">
            <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
              <Image
                src="/ai-designs/ai-world.png"
                alt="AI Cinematic World Panorama of Saturn's Moon Cavern"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
              />
            </div>
            <div className="p-3.5 flex flex-col gap-1.5 bg-zinc-950/95 border-t border-amber-500/20">
              <h3 className="text-sm font-bold text-white leading-snug">
                Cinematic Sub-Ice Landscape
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Expanded wide-angle view revealing Saturn&apos;s rings through the cracked ice ceiling, winding cryo-river, and the family gazing at the portal tree.
              </p>
            </div>
          </div>

          {/* Item 3B: AI Animated Motion Dynamics */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-fuchsia-500/30 bg-zinc-950/80 shadow-xl hover:border-fuchsia-500/50 transition-all flex-1">
            <div className="relative aspect-[358/265] w-full bg-black overflow-hidden">
              <Image
                src="/ai-designs/ai-concept-exploration.gif"
                alt="AI Animated Poster Sequence"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
              />
            </div>
            <div className="p-3.5 flex flex-col gap-1.5 bg-zinc-950/95 border-t border-fuchsia-500/20">
              <h3 className="text-sm font-bold text-white leading-snug">
                AI-Animated Motion Sequence
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Animated sequence exploring swirling portal vortex energy, character light dynamics, and atmospheric flow in the latent space.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Insights: Scannable Prompt & Synthesis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
        <div className="p-4 rounded-xl bg-zinc-950/80 border border-cyan-500/20 flex flex-col gap-1.5 shadow-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            <Wand2 className="w-3.5 h-3.5" />
            <span>Prompt Exploration</span>
          </div>
          <p className="text-xs text-zinc-300 italic leading-relaxed">
            &ldquo;Cinematic sci-fi scene of an underwater ice cavern beneath Saturn&apos;s moon. Bioluminescent father and twin sons communicating through projected light waves near a swirling portal tree.&rdquo;
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/80 border border-fuchsia-500/20 flex flex-col gap-1.5 shadow-md">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-fuchsia-400 uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Generative Synthesis</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Prompting from the letter of intent proved AI could capture mood and scale rapidly, while manual Photoshop layering remained essential for emotional storytelling and 2.5D interactive depth.
          </p>
        </div>
      </div>
    </div>
  );
}
