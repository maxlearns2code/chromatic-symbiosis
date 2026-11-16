"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { LayerConfig } from "@/data/layersConfig";

interface PosterLayerProps {
  layer: LayerConfig;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  isLeafMoving?: boolean;
  isLeafHovered?: boolean;
}

export function PosterLayer({
  layer,
  springX,
  springY,
  isLeafMoving = false,
  isLeafHovered = false,
}: PosterLayerProps) {
  const maxShift = 24;
  const translateX = useTransform(springX, (val) => (layer.depth === 0 ? 0 : val * layer.depth * maxShift));
  const translateY = useTransform(springY, (val) => (layer.depth === 0 ? 0 : val * layer.depth * maxShift));

  const isLeaf = layer.id === "leaf";
  const leftPosition = layer.offsetXPercent ? `${layer.offsetXPercent}%` : "0%";

  return (
    <motion.div
      style={{
        zIndex: layer.zIndex,
        left: leftPosition,
        x: translateX,
        y: translateY,
        mixBlendMode: layer.blendMode || "normal",
        opacity: layer.opacity ?? 1,
      }}
      className="absolute top-0 w-full h-full pointer-events-none select-none will-change-transform"
    >
      {/* If leaf: floating idle, white halo on hover, and ascends all the way to the top on click */}
      <motion.div
        animate={
          isLeaf
            ? {
                // Pure white halo contour around the exact leaf silhouettes on hover
                filter: isLeafHovered
                  ? "drop-shadow(0 0 16px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 32px rgba(255, 255, 255, 0.75)) brightness(1.2)"
                  : "drop-shadow(0 0 0px rgba(255, 255, 255, 0)) brightness(1)",
                ...(isLeafMoving
                  ? {
                      x: ["0%", "1%", "2%"],
                      y: ["0%", "-35%", "-70%"], // Glides all the way up to the very top of the poster!
                      scale: [1, 0.85, 0.6],
                      opacity: [1, 1, 0],
                    }
                  : {}),
              }
            : {}
        }
        transition={{
          filter: { duration: 0.25, ease: "easeOut" },
          x: { duration: 0.85, ease: "easeInOut" },
          y: { duration: 0.85, ease: "easeInOut" },
          scale: { duration: 0.85, ease: "easeInOut" },
          opacity: { duration: 0.85, ease: "easeInOut" },
        }}
        className={`relative w-full h-full ${isLeaf && !isLeafMoving ? "animate-float-leaves" : ""}`}
      >
        <Image
          src={layer.src}
          alt={layer.name}
          fill
          priority={layer.zIndex <= 30}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 850px"
          className="object-cover w-full h-full transition-all"
        />
      </motion.div>
    </motion.div>
  );
}
