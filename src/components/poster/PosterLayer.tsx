"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { LayerConfig } from "@/data/layersConfig";

interface PosterLayerProps {
  layer: LayerConfig;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  isExploded?: boolean;
  explodedIndex?: number;
}

export function PosterLayer({
  layer,
  springX,
  springY,
  isExploded = false,
  explodedIndex = 0,
}: PosterLayerProps) {
  // Calibrated parallax travel distance (e.g. up to 45px depending on depth)
  const maxShift = 42;
  const translateX = useTransform(springX, (val) => val * layer.depth * maxShift);
  const translateY = useTransform(springY, (val) => val * layer.depth * maxShift);

  // If 3D exploded view is enabled, space layers apart in Z
  const zOffset = isExploded ? (explodedIndex - 3.5) * 65 : 0;
  const explodedRotateY = isExploded ? -18 : 0;

  // Specific micro-animation classes based on layer role
  let animationClass = "";
  if (layer.id === "smoke") {
    animationClass = "animate-mist-drift";
  } else if (layer.id === "leaves") {
    animationClass = "animate-float-leaf";
  }

  return (
    <motion.div
      style={{
        zIndex: layer.zIndex,
        x: translateX,
        y: translateY,
        z: zOffset,
        rotateY: explodedRotateY,
        mixBlendMode: layer.blendMode || "normal",
        opacity: layer.opacity ?? 1,
      }}
      transition={{
        z: { duration: 0.6, ease: "easeInOut" },
        rotateY: { duration: 0.6, ease: "easeInOut" },
      }}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none transition-transform will-change-transform ${
        isExploded ? "border border-purple-500/20 rounded-lg shadow-2xl" : ""
      }`}
    >
      <div className={`relative w-full h-full ${animationClass}`}>
        <Image
          src={layer.src}
          alt={layer.name}
          fill
          priority={layer.zIndex <= 30}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 850px"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Exploded View Label */}
      {isExploded && (
        <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-purple-200 border border-purple-500/30">
          {layer.name} ({layer.depth * 100}% Depth)
        </div>
      )}
    </motion.div>
  );
}
