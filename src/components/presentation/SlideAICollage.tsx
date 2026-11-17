"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Bot, Wand2 } from "lucide-react";

export function SlideAICollage() {
  const rightColRef = useRef<HTMLDivElement>(null);
  const [rightHeight, setRightHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const updateSize = () => {
      if (rightColRef.current && window.innerWidth >= 1024) {
        const h = rightColRef.current.offsetHeight;
        if (h > 0) {
          setRightHeight(h);
        }
      } else {
        setRightHeight(undefined);
      }
    };

    updateSize();

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && rightColRef.current) {
      observer = new ResizeObserver(updateSize);
      observer.observe(rightColRef.current);
    }

    window.addEventListener("resize", updateSize);
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

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
          I asked AI to redo my original poster and create an animated version of it—exploring how generative models interpret the bioluminescent alien family, the dimensional tree portal, and latent motion within Saturn&apos;s frozen ocean world.
        </p>
      </div>

      {/* AI Designs Showcase Collage */}
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
        {/* Left Column: Full AI-Generated Poster Variant (Aligned to match right column height) */}
        <div
          style={{ height: rightHeight ? `${rightHeight}px` : undefined }}
          className="w-full max-w-[360px] mx-auto lg:mx-0 flex flex-col justify-between shrink-0"
        >
          <div
            style={{
              maxHeight: rightHeight ? `${rightHeight - 74}px` : undefined,
              aspectRatio: "1086 / 1448",
            }}
            className="relative w-full rounded-xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-zinc-950 shrink-0"
          >
            <Image
              src="/ai-designs/ai-poster-01.png"
              alt="AI Recreated Poster"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 360px"
              priority
            />
          </div>
          <div className="flex flex-col gap-1 pt-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Bot className="w-4 h-4 text-cyan-400" />
              <span>AI-Recreated Poster</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              I asked AI to redo my handcrafted movie poster as a complete generative composite with alternative atmospheric depth and lighting.
            </p>
          </div>
        </div>

        {/* Right Column: AI Concept Exploration GIF & Prompt Breakdown */}
        <div ref={rightColRef} className="flex-1 flex flex-col gap-5 w-full">
          {/* Concept Exploration Animation Card */}
          <div className="flex flex-col gap-2">
            <div className="relative aspect-[358/265] w-full max-w-[360px] mx-auto lg:mx-0 rounded-xl overflow-hidden border border-fuchsia-500/30 shadow-2xl bg-zinc-950">
              <Image
                src="/ai-designs/ai-concept-exploration.gif"
                alt="AI Animated Poster Version"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="flex flex-col gap-1 max-w-[360px] pt-1">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-fuchsia-400" />
                <span>AI-Animated Poster Version</span>
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                I asked AI to create an animated version of the poster, exploring latent motion dynamics, swirling portal energy, and fluid character lighting.
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
                AI provided rapid visual divergence and fluid animation ideas, but lacked the emotional nuance and discrete multi-plane layer control of manual Photoshop craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
