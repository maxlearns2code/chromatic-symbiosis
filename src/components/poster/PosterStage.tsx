"use client";

import { useState } from "react";
import { POSTER_LAYERS } from "@/data/layersConfig";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { PosterLayer } from "./PosterLayer";
import { StardustCanvas } from "./StardustCanvas";
import { TypographyOverlay } from "./TypographyOverlay";
import { LeafPortalTransition } from "./LeafPortalTransition";

export function PosterStage() {
  const { springX, springY, containerRef } = useMouseParallax(0.8);
  const [isLeafMoving, setIsLeafMoving] = useState(false);
  const [isLeafHovered, setIsLeafHovered] = useState(false);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center py-6 px-4 sm:px-8 overflow-hidden bg-[#06040d]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/25 via-slate-950/80 to-[#06040d]" />

      {/* Main 2D Poster Container */}
      <div className="relative @container w-full max-w-[480px] sm:max-w-[540px] md:max-w-[620px] lg:max-w-[680px] aspect-[1043/1477] rounded-xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] border border-purple-500/20">
        {/* Render each stacked Photoshop layer */}
        {POSTER_LAYERS.map((layer) => (
          <PosterLayer
            key={layer.id}
            layer={layer}
            springX={springX}
            springY={springY}
            isLeafMoving={isLeafMoving}
            isLeafHovered={layer.id === "leaf" ? isLeafHovered : false}
          />
        ))}

        {/* Ambient Stardust Canvas */}
        <StardustCanvas />

        {/* Cinematic Headline & Subtitle Typography */}
        <TypographyOverlay />

        {/* Interactive Leaf Trigger with White Halo on Hover */}
        <LeafPortalTransition
          onLeafMovingChange={setIsLeafMoving}
          onHoverChange={setIsLeafHovered}
        />
      </div>
    </div>
  );
}
