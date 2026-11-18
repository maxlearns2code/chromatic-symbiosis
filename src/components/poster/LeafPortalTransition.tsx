"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface LeafPortalTransitionProps {
  onLeafMovingChange: (moving: boolean) => void;
  onHoverChange: (hovered: boolean) => void;
}

export function LeafPortalTransition({
  onLeafMovingChange,
  onHoverChange,
}: LeafPortalTransitionProps) {
  const router = useRouter();
  const [isLeafMoving, setIsLeafMoving] = useState(false);
  const [hasReachedTreeCenter, setHasReachedTreeCenter] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange(false);
  };

  const handleLeafClick = () => {
    if (isLeafMoving) return;
    setIsLeafMoving(true);
    onLeafMovingChange(true);

    // Leaf moves to the tree in one single fluid 750ms step
    setTimeout(() => {
      setHasReachedTreeCenter(true);
    }, 700);

    // Open the story page smoothly as it arrives
    setTimeout(() => {
      router.push("/story");
    }, 850);
  };

  return (
    <>
      {/* Clickable Leaf Hotspot (Standard pointer cursor) */}
      <div
        style={{
          zIndex: 75,
          top: "44%",
          left: "54%",
          width: "23%",
          height: "23%",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleLeafClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleLeafClick();
          }
        }}
        className="absolute cursor-pointer select-none rounded-full flex items-center justify-center focus:outline-none"
        role="button"
        tabIndex={0}
        aria-label="Click the leaf to send it into the center of the tree"
      >
        {/* Idle Bioluminescent Ripple Pulse Hint (fades out on hover or click) */}
        <motion.div
          animate={{
            opacity: !isHovered && !isLeafMoving ? 1 : 0,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {/* Soft Breathing Ambient Core */}
          <motion.div
            animate={{
              scale: [0.72, 0.96, 0.72],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[62%] h-[62%] rounded-full bg-radial from-amber-200/35 via-rose-300/15 to-transparent blur-md"
          />

          {/* Primary Bioluminescent Ripple Ring */}
          <motion.div
            animate={{
              scale: [0.35, 1.15],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3.2,
              times: [0, 0.25, 1],
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: "easeOut",
            }}
            className="absolute w-[82%] aspect-square rounded-full border border-amber-100/60 shadow-[0_0_14px_rgba(255,220,185,0.45)]"
          />

          {/* Secondary Echo Ripple Ring */}
          <motion.div
            animate={{
              scale: [0.35, 1.05],
              opacity: [0, 0.38, 0],
            }}
            transition={{
              duration: 3.2,
              times: [0, 0.25, 1],
              delay: 0.85,
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: "easeOut",
            }}
            className="absolute w-[82%] aspect-square rounded-full border border-white/45 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          />
        </motion.div>

        {/* Soft Ambient White Halo on Hover */}
        <motion.div
          animate={{
            opacity: isHovered && !isLeafMoving ? 0.75 : 0,
            scale: isHovered && !isLeafMoving ? 1.15 : 0.85,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-radial from-white/40 via-white/10 to-transparent blur-md pointer-events-none"
        />
      </div>

      {/* Subtle dimensional fade as the leaf touches the tree center */}
      <AnimatePresence>
        {hasReachedTreeCenter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.95] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] pointer-events-none bg-radial from-fuchsia-600/40 via-purple-950/90 to-[#06040d]"
          />
        )}
      </AnimatePresence>
    </>
  );
}
