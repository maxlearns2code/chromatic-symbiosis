"use client";

import { motion } from "framer-motion";

export function TypographyOverlay() {
  return (
    <div className="absolute top-[4%] left-[4.5%] right-[25%] z-50 pointer-events-none select-none">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col"
      >
        {/* Main Title: CHROMATIC */}
        <h1 className="text-white font-impact tracking-[-0.03em] uppercase leading-[0.88] text-[11cqi] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Chromatic
        </h1>

        {/* Main Title: SYMBIOSIS */}
        <h1 className="text-white font-impact tracking-[-0.03em] uppercase leading-[0.88] text-[11cqi] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Symbiosis
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="mt-[2.2%] text-white/95 font-sans font-extrabold tracking-[-0.01em] uppercase text-[1.75cqi] leading-[1.15] max-w-[92%] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          To unlock the portal to a new world, a father must guide his sons through the mystery of light.
        </motion.p>
      </motion.div>
    </div>
  );
}
