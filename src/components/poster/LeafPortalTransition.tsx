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
  const [hasReachedTree, setHasReachedTree] = useState(false);
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

    // Leaf travels up into the tree vortex (850ms)
    setTimeout(() => {
      setHasReachedTree(true);
    }, 850);

    // When the leaf touches the tree, the other page opens
    setTimeout(() => {
      router.push("/story");
    }, 1100);
  };

  return (
    <>
      {/* Clickable Leaf Hotspot (Standard pointer cursor, no text, no extra UI) */}
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
        aria-label="Click the leaf to travel into the tree portal"
      >
        {/* Soft Ambient White Halo Aura on Hover */}
        <motion.div
          animate={{
            opacity: isHovered && !isLeafMoving ? 0.75 : 0,
            scale: isHovered && !isLeafMoving ? 1.15 : 0.85,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-radial from-white/40 via-white/10 to-transparent blur-md pointer-events-none"
        />
      </div>

      {/* Subtle dimensional flash when the leaf touches the tree vortex */}
      <AnimatePresence>
        {hasReachedTree && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[120] pointer-events-none bg-radial from-fuchsia-600/50 via-purple-950/95 to-[#06040d]"
          />
        )}
      </AnimatePresence>
    </>
  );
}
