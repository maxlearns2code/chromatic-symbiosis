"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, ArrowRight } from "lucide-react";

interface LeafPortalTransitionProps {
  onLeafMovingChange: (moving: boolean) => void;
}

export function LeafPortalTransition({ onLeafMovingChange }: LeafPortalTransitionProps) {
  const router = useRouter();
  const [isLeafMoving, setIsLeafMoving] = useState(false);
  const [isButtonImpacted, setIsButtonImpacted] = useState(false);

  const triggerOpenPage = () => {
    if (isLeafMoving) return;
    setIsLeafMoving(true);
    onLeafMovingChange(true);

    // The leaf travels UP (takes 800ms) and touches the button
    setTimeout(() => {
      setIsButtonImpacted(true);
    }, 800);

    // When the leaf touches the button, the other page opens
    setTimeout(() => {
      router.push("/story");
    }, 950);
  };

  const handleDirectButtonClick = () => {
    router.push("/story");
  };

  return (
    <>
      {/* 1. BUTTON AT THE TOP OF THE POSTER */}
      <div
        style={{ zIndex: 75 }}
        className="absolute top-[4.2%] right-[4%] select-none"
      >
        <motion.button
          onClick={handleDirectButtonClick}
          animate={
            isButtonImpacted
              ? {
                  scale: [1, 1.25, 1.1],
                  boxShadow: [
                    "0 0 15px rgba(168,85,247,0.4)",
                    "0 0 45px rgba(236,72,153,1)",
                    "0 0 25px rgba(168,85,247,0.8)",
                  ],
                }
              : { scale: 1 }
          }
          transition={{ duration: 0.3 }}
          className="group relative flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-950/85 hover:bg-purple-950/90 border border-fuchsia-500/50 hover:border-fuchsia-400 shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-md transition-all duration-300 cursor-pointer text-white"
          aria-label="The Story and Slides"
        >
          <div className="relative flex items-center justify-center">
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fuchsia-300 group-hover:rotate-45 transition-transform duration-500" />
            {isButtonImpacted && (
              <span className="absolute -inset-2 rounded-full border border-fuchsia-400 animate-ping" />
            )}
          </div>

          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-fuchsia-100 group-hover:text-white">
            The Story & Slides
          </span>

          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-300 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>

      {/* 2. CLICKABLE LEAF HOTSPOT (Simple native pointer cursor, no leaf shape cursor) */}
      <div
        style={{
          zIndex: 75,
          top: "44%",
          left: "54%",
          width: "23%",
          height: "23%",
        }}
        onClick={triggerOpenPage}
        className="absolute cursor-pointer select-none rounded-full"
        role="button"
        tabIndex={0}
        aria-label="Click the leaf to send it up to the button"
      />

      {/* Subtle impact flash when the leaf touches the button */}
      <AnimatePresence>
        {isButtonImpacted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.9] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[120] pointer-events-none bg-radial from-fuchsia-600/40 via-purple-950/90 to-[#06040d]"
          />
        )}
      </AnimatePresence>
    </>
  );
}
