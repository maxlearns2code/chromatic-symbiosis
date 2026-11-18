"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface LeafPortalTransitionProps {
  onLeafMovingChange: (moving: boolean) => void;
  onHoverChange: (hovered: boolean) => void;
  isLit?: boolean;
}

export function LeafPortalTransition({
  onLeafMovingChange,
  onHoverChange,
  isLit = false,
}: LeafPortalTransitionProps) {
  const router = useRouter();
  const [isLeafMoving, setIsLeafMoving] = useState(false);
  const [hasReachedTreeCenter, setHasReachedTreeCenter] = useState(false);

  const handleMouseEnter = () => {
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
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
        {/* Soft Ambient White Halo (used for both hover and periodic hint blink) */}
        <motion.div
          animate={{
            opacity: isLit && !isLeafMoving ? 0.75 : 0,
            scale: isLit && !isLeafMoving ? 1.15 : 0.85,
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
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
