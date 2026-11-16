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
  const [hasReachedTop, setHasReachedTop] = useState(false);
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

    // Leaf ascends all the way to the top of the poster (850ms)
    setTimeout(() => {
      setHasReachedTop(true);
    }, 850);

    // As it reaches the top, open the story page
    setTimeout(() => {
      router.push("/story");
    }, 1050);
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
        className="absolute cursor-pointer select-none rounded-full flex items-center justify-center"
        role="button"
        tabIndex={0}
        aria-label="Click the leaf to send it to the top"
      >
        {/* Soft Ambient White Halo on Hover */}
        <motion.div
          animate={{
            opacity: isHovered && !isLeafMoving ? 0.75 : 0,
            scale: isHovered && !isLeafMoving ? 1.15 : 0.85,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-radial from-white/40 via-white/10 to-transparent blur-md pointer-events-none"
        />
      </div>

      {/* Subtle dimensional fade as the leaf reaches the top */}
      <AnimatePresence>
        {hasReachedTop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.95] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[120] pointer-events-none bg-radial from-fuchsia-600/40 via-purple-950/90 to-[#06040d]"
          />
        )}
      </AnimatePresence>
    </>
  );
}
