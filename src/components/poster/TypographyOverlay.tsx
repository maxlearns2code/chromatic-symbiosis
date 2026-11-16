"use client";

import { motion } from "framer-motion";

export function TypographyOverlay() {
  return (
    <div className="absolute top-[3.5%] left-[3.5%] w-[57%] z-60 pointer-events-none select-none">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full flex flex-col"
      >
        {/* SVG Title for 100% Pixel-Accurate Condensed Movie Poster Typography */}
        <svg
          viewBox="0 0 570 250"
          className="w-full h-auto overflow-visible"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.85))" }}
        >
          {/* CHROMATIC */}
          <text
            x="0"
            y="98"
            fontFamily="'Impact', 'Arial Narrow Bold', 'Bebas Neue', sans-serif"
            fontSize="112"
            fontWeight="900"
            textLength="565"
            lengthAdjust="spacingAndGlyphs"
            fill="#ffffff"
          >
            CHROMATIC
          </text>

          {/* SYMBIOSIS */}
          <text
            x="0"
            y="200"
            fontFamily="'Impact', 'Arial Narrow Bold', 'Bebas Neue', sans-serif"
            fontSize="112"
            fontWeight="900"
            textLength="545"
            lengthAdjust="spacingAndGlyphs"
            fill="#ffffff"
          >
            SYMBIOSIS
          </text>
        </svg>

        {/* Cinematic Tagline strictly constrained beneath the title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-1 text-white/95 font-sans font-bold tracking-[-0.01em] uppercase text-[1.4cqi] sm:text-[1.35cqi] leading-[1.1] max-w-[98%] drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]"
        >
          To unlock the portal to a new world, a father must guide his sons through the mystery of light.
        </motion.p>
      </motion.div>
    </div>
  );
}
