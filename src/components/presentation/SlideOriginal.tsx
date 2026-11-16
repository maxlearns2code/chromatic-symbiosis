"use client";

import Image from "next/image";
import { POSTER_LAYERS } from "@/data/layersConfig";
import { TypographyOverlay } from "@/components/poster/TypographyOverlay";
import { Layers, Sparkles } from "lucide-react";

export function SlideOriginal() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 pb-16">
      {/* Slide Title & Concept Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-fuchsia-400">
          <Sparkles className="w-4 h-4" />
          <span>Slide 1 of 4 • Handcrafted Human Artistry</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Collage of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">Original Designs</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Built completely by hand in Adobe Photoshop without generative AI. Inspired by a conversation with my young twin boys about the colors of fallen autumn leaves, reimagined as a sci-fi family adventure in an underwater cavern beneath the frozen crust of Saturn&apos;s moon.
        </p>
      </div>

      {/* Main Collage Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Full Master Movie Poster */}
        <div className="lg:col-span-5 flex flex-col gap-3 bg-zinc-950/80 p-4 rounded-2xl border border-purple-500/20 shadow-xl">
          {/* Exact Poster Replica matching the Main Page */}
          <div className="relative aspect-[1043/1477] w-full rounded-xl overflow-hidden border border-purple-500/30 shadow-2xl bg-[#06040d]">
            {POSTER_LAYERS.map((layer) => {
              const leftPosition = layer.offsetXPercent ? `${layer.offsetXPercent}%` : "0%";
              const isLeaf = layer.id === "leaf";

              return (
                <div
                  key={layer.id}
                  style={{
                    zIndex: layer.zIndex,
                    left: leftPosition,
                    mixBlendMode: layer.blendMode || "normal",
                    opacity: layer.opacity ?? 1,
                  }}
                  className="absolute top-0 w-full h-full pointer-events-none select-none"
                >
                  <div className={`relative w-full h-full ${isLeaf ? "animate-float-leaves" : ""}`}>
                    <Image
                      src={layer.src}
                      alt={layer.name}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 1024px) 100vw, 450px"
                    />
                  </div>
                </div>
              );
            })}

            {/* Title and Subtitle Overlay */}
            <TypographyOverlay />
          </div>
        </div>

        {/* Right Column: Static Showcase of the Layers & Elements Used */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-fuchsia-400" />
              <span>Photoshop Layers & Elements Used</span>
            </h3>
            <span className="text-xs text-zinc-500 font-mono">8 Individual Components</span>
          </div>

          {/* Static Layer Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {POSTER_LAYERS.map((layer) => (
              <div
                key={layer.id}
                className="flex flex-col rounded-xl overflow-hidden border border-white/10 bg-zinc-900/60 shadow-md"
              >
                <div className="relative aspect-[1043/1477] w-full bg-black/60 overflow-hidden">
                  <Image
                    src={layer.src}
                    alt={layer.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 200px"
                  />
                  <div className="absolute top-1.5 right-1.5 bg-black/70 backdrop-blur-xs px-1.5 py-0.5 rounded text-[10px] font-mono text-purple-300">
                    z:{layer.zIndex}
                  </div>
                </div>
                <div className="p-2 flex flex-col bg-zinc-950/50">
                  <span className="text-xs font-semibold text-zinc-200 truncate">
                    {layer.name}
                  </span>
                  <span className="text-[10px] text-zinc-400 truncate">
                    {layer.blendMode === "screen" ? "Screen blend" : "Normal"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
