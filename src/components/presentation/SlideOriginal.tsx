"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { POSTER_LAYERS } from "@/data/layersConfig";
import { TypographyOverlay } from "@/components/poster/TypographyOverlay";
import { Sparkles } from "lucide-react";

export function SlideOriginal() {
  const rightColRef = useRef<HTMLDivElement>(null);
  const [targetHeight, setTargetHeight] = useState<number | undefined>(undefined);
  const [targetWidth, setTargetWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const updateSize = () => {
      if (rightColRef.current && window.innerWidth >= 1024) {
        const h = rightColRef.current.offsetHeight;
        if (h > 0) {
          setTargetHeight(h);
          setTargetWidth(Math.round(h * (1043 / 1477)));
        }
      } else {
        setTargetHeight(undefined);
        setTargetWidth(undefined);
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
          Built completely by hand in Adobe Photoshop without generative AI. Inspired by a conversation with my young twin boys about the colors of fallen autumn leaves. Reimagined as a sci-fi family adventure in an underwater cavern beneath the frozen crust of Saturn&apos;s moon.
        </p>
      </div>

      {/* Main Collage Layout: Flex row on desktop for pixel-perfect top & bottom alignment */}
      <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
        {/* Left Column: Full Master Movie Poster */}
        <div
          style={{
            height: targetHeight ? `${targetHeight}px` : undefined,
            width: targetWidth ? `${targetWidth}px` : undefined,
          }}
          className="relative aspect-[1043/1477] w-full max-w-[390px] mx-auto lg:mx-0 shrink-0 rounded-xl overflow-hidden border border-purple-500/30 shadow-2xl bg-[#06040d]"
        >
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
                    sizes="400px"
                  />
                </div>
              </div>
            );
          })}

          {/* Title and Subtitle Overlay */}
          <TypographyOverlay />
        </div>

        {/* Right Column: 8 Static Layer Cards */}
        <div ref={rightColRef} className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
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
                  sizes="(max-width: 640px) 50vw, 180px"
                />
              </div>
              <div className="p-2 bg-zinc-950/50">
                <span className="text-xs font-semibold text-zinc-200 truncate block text-center">
                  {layer.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
