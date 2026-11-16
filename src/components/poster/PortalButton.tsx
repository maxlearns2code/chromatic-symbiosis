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
    }, 900);
  };

  return (
    <>
      {/* Interactive Portal Hotspot placed directly on the tree's swirling vortex */}
      <div
        className="absolute z-65 flex items-center justify-center cursor-pointer"
        style={{
          top: "21%",
          right: "22%",
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
        {/* Swirling Portal Energy Ring */}
        <motion.div
          animate={{
            rotate: 360,
            scale: isHovered ? [1.1, 1.25, 1.1] : [1, 1.08, 1],
          }}
          transition={{
            rotate: { duration: isHovered ? 6 : 18, repeat: Infinity, ease: "linear" },
            scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute inset-0 rounded-full border-2 transition-all duration-500 pointer-events-none ${
            isHovered
              ? "border-fuchsia-400/90 shadow-[0_0_35px_rgba(217,70,239,0.9),inset_0_0_20px_rgba(168,85,247,0.8)]"
              : "border-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          }`}
        />

        {/* Concentric Inner Core */}
        <motion.div
          animate={{
            rotate: -360,
            opacity: isHovered ? 1 : 0.6,
          }}
          transition={{
            rotate: { duration: isHovered ? 4 : 12, repeat: Infinity, ease: "linear" },
            opacity: { duration: 0.3 },
          }}
          className="absolute w-2/3 h-2/3 rounded-full border border-cyan-300/60 pointer-events-none"
        />

        {/* Center Pulsing Glyph */}
        <motion.div
          animate={{
            scale: isHovered ? 1.2 : 1,
            filter: isHovered ? "drop-shadow(0 0 12px #e879f9)" : "drop-shadow(0 0 6px #a855f7)",
          }}
          className="relative z-10 text-white/90"
        >
          <Compass className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${isHovered ? "text-fuchsia-200" : "text-purple-200/80"}`} />
        </motion.div>

        {/* Ethereal Floating Tooltip on Hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: -45, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap z-70"
            >
              <div className="bg-zinc-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-fuchsia-500/50 shadow-[0_0_20px_rgba(217,70,239,0.5)] flex items-center gap-1.5 text-xs font-medium text-fuchsia-200 tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "3s" }} />
                <span>Enter The Living Portal</span>
                <span className="text-[10px] text-zinc-400 normal-case ml-1 font-mono">(Story & Slides)</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full-screen Cosmic Warp Overlay when portal is clicked */}
      <AnimatePresence>
        {isWarping && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 3.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-radial from-fuchsia-600/40 via-purple-950/90 to-[#06040d]"
          >
            <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full border-[6px] border-fuchsia-400/80 shadow-[0_0_120px_rgba(217,70,239,1)] animate-ping" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
