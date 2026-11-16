"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { POSTER_LAYERS } from "@/data/layersConfig";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { PosterLayer } from "./PosterLayer";
import { StardustCanvas } from "./StardustCanvas";
import { TypographyOverlay } from "./TypographyOverlay";
import { LeafPortalTransition } from "./LeafPortalTransition";

export function PosterStage() {
  const router = useRouter();
  const { springX, springY, containerRef } = useMouseParallax(0.8);
  const [isLeafMoving, setIsLeafMoving] = useState(false);
  const [isFlyThrough, setIsFlyThrough] = useState(false);

  const handleLeafInteraction = () => {
    if (isLeafMoving) return;
    setIsLeafMoving(true);

    // 1. The leaf moves smoothly into the tree vortex (0.0s -> 0.8s)
    // 2. Camera flies into the tree vortex (0.8s -> 1.7s)
    setTimeout(() => {
      setIsFlyThrough(true);
    }, 800);

    // 3. Navigate into the story page
    setTimeout(() => {
      router.push("/story");
    }, 1700);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center py-6 px-4 sm:px-8 overflow-hidden bg-[#06040d]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/25 via-slate-950/80 to-[#06040d]" />

      {/* Main Poster Container (Centering zoom into the tree vortex at 71% 19%) */}
      <motion.div
        animate={
          isFlyThrough
            ? {
                scale: 5.2,
                opacity: [1, 1, 0],
                filter: ["brightness(1)", "brightness(1.5)", "brightness(3)"],
              }
            : { scale: 1, opacity: 1, filter: "brightness(1)" }
        }
        style={{
          transformOrigin: "71% 19%",
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative @container w-full max-w-[480px] sm:max-w-[540px] md:max-w-[620px] lg:max-w-[680px] aspect-[1043/1477] rounded-xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] border border-purple-500/20"
      >
        {/* Render each stacked Photoshop layer */}
        {POSTER_LAYERS.map((layer) => (
          <PosterLayer
            key={layer.id}
            layer={layer}
            springX={springX}
            springY={springY}
            isLeafMoving={isLeafMoving}
          />
        ))}

        {/* Ambient Stardust Canvas */}
        <StardustCanvas />

        {/* Cinematic Headline & Subtitle Typography */}
        <TypographyOverlay />

        {/* Interactive Leaf Trigger with Custom Leaf Cursor */}
        <LeafPortalTransition
          onLeafClick={handleLeafInteraction}
          isTriggered={isLeafMoving}
        />
      </motion.div>

      {/* Dimensional Warp Fade on fly-through */}
      <AnimatePresence>
        {isFlyThrough && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            className="fixed inset-0 z-[120] pointer-events-none bg-radial from-purple-600/60 via-slate-950/95 to-[#06040d]"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
