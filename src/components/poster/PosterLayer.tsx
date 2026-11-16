"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { LayerConfig } from "@/data/layersConfig";

interface PosterLayerProps {
  layer: LayerConfig;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  isLeafMoving?: boolean;
}

export function PosterLayer({
  layer,
  springX,
  springY,
  isLeafMoving = false,
}: PosterLayerProps) {
  // Static layers (like smoke) have zero depth/shift
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
      {/* If this is the leaf layer, animate it flying directly into the tree vortex on click */}
      <motion.div
        animate={
          isLeaf && isLeafMoving
            ? {
                x: ["0%", "3%", "6%"],
                y: ["0%", "-18%", "-36%"], // Glides up directly into the swirling tree vortex
                scale: [1, 0.75, 0.25],    // Shrinks as it enters the depth of the vortex
                rotate: [0, 120, 260],     // Gentle organic spiral
                opacity: [1, 1, 0],        // Fades into the center of the vortex
              }
            : {}
        }
        transition={{
          duration: 0.85,
          ease: [0.34, 1.15, 0.64, 1],
        }}
        className={`relative w-full h-full ${isLeaf && !isLeafMoving ? "animate-float-leaves" : ""}`}
      >
        <Image
          src={layer.src}
          alt={layer.name}
          fill
          priority={layer.zIndex <= 30}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 850px"
          className="object-cover w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
}
