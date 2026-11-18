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
      {/* If leaf: floating idle, white glow on hover/blink, and one single smooth continuous motion into the tree */}
      <motion.div
        animate={
          isLeaf
            ? isLeafMoving
              ? {
                  x: "26%",
                  y: "-35%",
                  scale: 0.25,
                  rotate: 25,
                  opacity: 0,
                }
              : {
                  x: "0%",
                  y: "0%",
                  scale: 1,
                  rotate: 0,
                  opacity: 1,
                }
            : {}
        }
        transition={{
          x: { duration: 0.75, ease: "easeInOut" },
          y: { duration: 0.75, ease: "easeInOut" },
          scale: { duration: 0.75, ease: "easeInOut" },
          rotate: { duration: 0.75, ease: "easeInOut" },
          opacity: { duration: 0.75, ease: "easeInOut" },
        }}
        className={`relative w-full h-full ${isLeaf && !isLeafMoving ? "animate-float-leaves" : ""}`}
      >
        <Image
          src={layer.src}
          alt={layer.name}
          fill
          priority={layer.zIndex <= 30}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 850px"
          style={
            isLeaf
              ? {
                  filter:
                    isLeafHovered && !isLeafMoving
                      ? "drop-shadow(0 0 18px rgba(255, 255, 255, 1)) drop-shadow(0 0 36px rgba(255, 255, 255, 0.85)) brightness(1.6)"
                      : "drop-shadow(0 0 0px rgba(255, 255, 255, 0)) drop-shadow(0 0 0px rgba(255, 255, 255, 0)) brightness(1)",
                }
              : undefined
          }
          className="object-cover w-full h-full transition-[filter] duration-300 ease-in-out"
        />
      </motion.div>
    </motion.div>
  );
}
