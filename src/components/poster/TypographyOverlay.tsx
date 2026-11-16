"use client";

import { motion } from "framer-motion";

export function TypographyOverlay() {
  return (
    <div className="absolute top-[4.2%] left-[4%] w-[56%] max-w-[56%] z-60 pointer-events-none select-none">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col"
      >
        {/* Title: CHROMATIC */}
        <h1
          className="text-white uppercase leading-[0.84] text-[10.5cqi] tracking-[0.01em] drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]"
          style={{ fontFamily: "'Bebas Neue', Impact, 'Arial Narrow Bold', sans-serif" }}
        >
          CHROMATIC
        </h1>

        {/* Title: SYMBIOSIS */}
        <h1
          className="text-white uppercase leading-[0.84] text-[10.5cqi] tracking-[0.01em] drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]"
          style={{ fontFamily: "'Bebas Neue', Impact, 'Arial Narrow Bold', sans-serif" }}
        >
          SYMBIOSIS
        </h1>

        {/* Subtitle / Tagline */}
        <p
          className="mt-[2.4%] text-white/95 uppercase text-[1.35cqi] font-black tracking-[-0.01em] leading-[1.12] max-w-[98%] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
          style={{ fontFamily: "'Montserrat', -apple-system, sans-serif" }}
        >
          TO UNLOCK THE PORTAL TO A NEW WORLD, A FATHER MUST GUIDE HIS SONS THROUGH THE MYSTERY OF LIGHT.
        </p>
      </motion.div>
    </div>
  );
}
