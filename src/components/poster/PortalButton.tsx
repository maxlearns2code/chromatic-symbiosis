"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Compass } from "lucide-react";

interface PortalButtonProps {
  onWarpStart?: () => void;
}

export function PortalButton({ onWarpStart }: PortalButtonProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isWarping, setIsWarping] = useState(false);

  const handlePortalClick = () => {
    setIsWarping(true);
    if (onWarpStart) onWarpStart();

    // Trigger warp transition then navigate to story
    setTimeout(() => {
      router.push("/story");
    }, 850);
  };

  return (
    <>
      {/* Interactive Portal Hotspot placed directly on the tree's swirling vortex */}
      <div
        className="absolute z-65 flex items-center justify-center cursor-pointer -translate-x-1/2 -translate-y-1/2"
        style={{
          top: "19%",
          left: "71%",
          width: "14%",
          height: "10%",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handlePortalClick}
        role="button"
        tabIndex={0}
        aria-label="Enter the Living Portal to view the story"
      >
        {/* Outer Swirling Violet Energy Ring */}
        <motion.div
          animate={{
            rotate: 360,
            scale: isHovered ? [1.1, 1.3, 1.1] : [0.95, 1.1, 0.95],
          }}
          transition={{
            rotate: { duration: isHovered ? 5 : 14, repeat: Infinity, ease: "linear" },
            scale: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute inset-0 rounded-full border-2 transition-all duration-300 pointer-events-none ${
            isHovered
              ? "border-fuchsia-400 shadow-[0_0_40px_rgba(217,70,239,1),inset_0_0_25px_rgba(168,85,247,0.9)]"
              : "border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
          }`}
        />

        {/* Counter-rotating Inner Core */}
        <motion.div
          animate={{
            rotate: -360,
            opacity: isHovered ? 1 : 0.7,
          }}
          transition={{
            rotate: { duration: isHovered ? 3 : 9, repeat: Infinity, ease: "linear" },
            opacity: { duration: 0.3 },
          }}
          className="absolute w-3/4 h-3/4 rounded-full border border-cyan-300/80 pointer-events-none"
        />

        {/* Central Glyph */}
        <motion.div
          animate={{
            scale: isHovered ? 1.25 : 1,
            filter: isHovered ? "drop-shadow(0 0 16px #e879f9)" : "drop-shadow(0 0 8px #a855f7)",
          }}
          className="relative z-10 text-white"
        >
          <Compass className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${isHovered ? "text-fuchsia-100" : "text-purple-200"}`} />
        </motion.div>

        {/* Ambient "Click Me" Ripple if not hovered */}
        <div className="absolute inset-0 rounded-full border border-fuchsia-400/40 animate-ping pointer-events-none opacity-60" />

        {/* Floating Tooltip on Hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: -48, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap z-70"
            >
              <div className="bg-zinc-950/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-fuchsia-500/70 shadow-[0_0_25px_rgba(217,70,239,0.7)] flex items-center gap-1.5 text-xs font-semibold text-fuchsia-100 tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" style={{ animationDuration: "2.5s" }} />
                <span>Enter The Living Portal</span>
                <span className="text-[10px] text-zinc-400 normal-case ml-1 font-mono">(Story & Slides)</span>
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
