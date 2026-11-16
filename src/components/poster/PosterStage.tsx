"use client";

import { useState } from "react";
import { motion, useTransform } from "framer-motion";
import { POSTER_LAYERS } from "@/data/layersConfig";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { PosterLayer } from "./PosterLayer";
import { StardustCanvas } from "./StardustCanvas";
import { TypographyOverlay } from "./TypographyOverlay";
import { PortalButton } from "./PortalButton";
import { ControlsBar } from "@/components/ui/ControlsBar";

export function PosterStage() {
  const [isExploded, setIsExploded] = useState(false);
  const { springX, springY, containerRef } = useMouseParallax(1);

  // Subtle 3D tilt of the entire poster frame
  const frameRotateY = useTransform(springX, [-1, 1], [-7, 7]);
  const frameRotateX = useTransform(springY, [-1, 1], [7, -7]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center pt-6 pb-24 px-4 sm:px-8 overflow-hidden bg-[#06040d]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/30 via-slate-950/80 to-[#06040d]" />

      {/* Main 2.5D Poster Container (Preserving 1043:1477 Native Aspect Ratio) */}
      <motion.div
        style={{
          rotateY: isExploded ? -15 : frameRotateY,
          rotateX: isExploded ? 10 : frameRotateX,
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative @container w-full max-w-[480px] sm:max-w-[540px] md:max-w-[620px] lg:max-w-[680px] aspect-[1043/1477] rounded-xl overflow-visible shadow-[0_25px_70px_rgba(0,0,0,0.95)] border border-purple-500/20"
      >
        {/* Render each stacked Photoshop layer in calibrated order */}
        {POSTER_LAYERS.map((layer, index) => (
          <PosterLayer
            key={layer.id}
            layer={layer}
            springX={springX}
            springY={springY}
            isExploded={isExploded}
            explodedIndex={index}
          />
        ))}

        {/* Ambient Stardust / Marine Snow Canvas */}
        <StardustCanvas />

        {/* Cinematic Headline & Subtitle Typography (strictly constrained to upper-left 57%) */}
        <TypographyOverlay />

        {/* Interactive Living Portal Button (embedded inside the tree vortex) */}
        <PortalButton />
      </motion.div>

      {/* Interactive Floating Control Bar */}
      <ControlsBar
        isExploded={isExploded}
        onToggleExploded={() => setIsExploded(!isExploded)}
      />
    </div>
  );
}
