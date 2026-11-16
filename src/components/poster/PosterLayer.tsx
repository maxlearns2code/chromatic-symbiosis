"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { LayerConfig } from "@/data/layersConfig";

interface PosterLayerProps {
  layer: LayerConfig;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}

export function PosterLayer({
  layer,
  springX,
  springY,
}: PosterLayerProps) {
  // If layer depth is 0 (like smoke), it remains completely static!
  const maxShift = 24;
  const translateX = useTransform(springX, (val) => (layer.depth === 0 ? 0 : val * layer.depth * maxShift));
  const translateY = useTransform(springY, (val) => (layer.depth === 0 ? 0 : val * layer.depth * maxShift));

  // The leaves float gently in place
  const isLeaf = layer.id === "leaf";

  // Optional horizontal offset (e.g. for tree to align to right)
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
      <div className={`relative w-full h-full ${isLeaf ? "animate-float-leaves" : ""}`}>
        <Image
          src={layer.src}
          alt={layer.name}
          fill
          priority={layer.zIndex <= 30}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 850px"
          className="object-cover w-full h-full"
        />
      </div>
    </motion.div>
  );
}
