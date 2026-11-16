"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Compass, ArrowRight } from "lucide-react";

interface PortalButtonProps {
  onWarpStart?: () => void;
}

export function PortalButton({ onWarpStart }: PortalButtonProps) {
  const router = useRouter();
  const [isWarping, setIsWarping] = useState(false);
  const [isHoveredVortex, setIsHoveredVortex] = useState(false);

  const handlePortalClick = () => {
    if (isWarping) return;
    setIsWarping(true);
    if (onWarpStart) onWarpStart();

    // Trigger dimensional warp transition then navigate to story
    setTimeout(() => {
      router.push("/story");
    }, 850);
  };

  return (
    <>
      {/* 1. BUTTON AT THE TOP OF THE POSTER (Top-Right Header) */}
      <div
        style={{ zIndex: 75 }}
        className="absolute top-[4.2%] right-[4%] select-none"
      >
        <button
          onClick={handlePortalClick}
          className="group relative flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-950/85 hover:bg-purple-950/90 border border-fuchsia-500/50 hover:border-fuchsia-400 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(217,70,239,0.8)] backdrop-blur-md transition-all duration-300 cursor-pointer text-white"
          aria-label="Enter the Living Portal to view the story and slides"
        >
          {/* Animated Glowing Ring on Icon */}
          <div className="relative flex items-center justify-center">
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fuchsia-300 group-hover:rotate-90 transition-transform duration-700" />
            <span className="absolute -inset-1 rounded-full border border-fuchsia-400/50 animate-ping opacity-60" />
          </div>

          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-fuchsia-100 group-hover:text-white">
              The Story & Slides
            </span>
            <span className="text-[8px] sm:text-[9px] text-zinc-400 font-mono hidden sm:inline -mt-0.5">
              Enter The Living Portal
            </span>
          </div>

          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-300 group-hover:translate-x-1 transition-transform duration-300 ml-0.5" />
        </button>
      </div>

      {/* 2. Interactive Hotspot on the Tree's Swirling Vortex */}
      <div
        className="absolute z-65 flex items-center justify-center cursor-pointer -translate-x-1/2 -translate-y-1/2"
        style={{
          top: "19%",
          left: "71%",
          width: "14%",
          height: "10%",
        }}
        onMouseEnter={() => setIsHoveredVortex(true)}
        onMouseLeave={() => setIsHoveredVortex(false)}
        onClick={handlePortalClick}
        role="button"
        tabIndex={0}
        aria-label="Tree vortex portal"
      >
        {/* Outer Swirling Violet Energy Ring */}
        <motion.div
          animate={{
            rotate: 360,
            scale: isHoveredVortex ? [1.1, 1.3, 1.1] : [0.95, 1.1, 0.95],
          }}
          transition={{
            rotate: { duration: isHoveredVortex ? 5 : 14, repeat: Infinity, ease: "linear" },
            scale: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute inset-0 rounded-full border-2 transition-all duration-300 pointer-events-none ${
            isHoveredVortex
              ? "border-fuchsia-400 shadow-[0_0_40px_rgba(217,70,239,1),inset_0_0_25px_rgba(168,85,247,0.9)]"
              : "border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          }`}
        />

        {/* Counter-rotating Inner Core */}
        <motion.div
          animate={{
            rotate: -360,
            opacity: isHoveredVortex ? 1 : 0.7,
          }}
          transition={{
            rotate: { duration: isHoveredVortex ? 3 : 9, repeat: Infinity, ease: "linear" },
            opacity: { duration: 0.3 },
          }}
          className="absolute w-3/4 h-3/4 rounded-full border border-cyan-300/80 pointer-events-none"
        />

        {/* Central Glyph */}
        <motion.div
          animate={{
            scale: isHoveredVortex ? 1.25 : 1,
            filter: isHoveredVortex ? "drop-shadow(0 0 16px #e879f9)" : "drop-shadow(0 0 8px #a855f7)",
          }}
          className="relative z-10 text-white"
        >
          <Compass className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${isHoveredVortex ? "text-fuchsia-100" : "text-purple-200"}`} />
        </motion.div>

        {/* Floating Tooltip on Hover */}
        <AnimatePresence>
          {isHoveredVortex && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: -45, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap z-70"
            >
              <div className="bg-zinc-950/95 backdrop-blur-md px-3 py-1 rounded-full border border-fuchsia-500/70 shadow-[0_0_20px_rgba(217,70,239,0.7)] flex items-center gap-1.5 text-[11px] font-semibold text-fuchsia-100 tracking-wide uppercase">
                <Sparkles className="w-3 h-3 text-cyan-300 animate-spin" style={{ animationDuration: "2.5s" }} />
                <span>Enter The Living Portal</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full-screen Cosmic Warp Overlay when clicked */}
      <AnimatePresence>
        {isWarping && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-radial from-fuchsia-600/60 via-purple-950/95 to-[#06040d]"
          >
            <div className="w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] rounded-full border-[8px] border-fuchsia-400 shadow-[0_0_150px_rgba(217,70,239,1)] animate-ping" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
