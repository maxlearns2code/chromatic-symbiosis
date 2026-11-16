"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface LeafPortalTransitionProps {
  onFlyThroughChange: (isFlying: boolean) => void;
}

export function LeafPortalTransition({ onFlyThroughChange }: LeafPortalTransitionProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [stage, setStage] = useState<"idle" | "ignite" | "beam" | "vortex" | "fly">("idle");
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Play a celestial crystal chime using Web Audio API
  const playChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(880, ctx.currentTime); // A5 note
      osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.35); // Swell up to A6

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.3);
    } catch {
      // Audio fallback silent
    }
  };

  const handleLeafClick = () => {
    if (stage !== "idle") return;

    playChime();
    setStage("ignite");

    // Stage 1 -> 2: Beam shoots up to tree vortex
    setTimeout(() => {
      setStage("beam");
    }, 380);

    // Stage 2 -> 3: Tree vortex surges with violet light
    setTimeout(() => {
      setStage("vortex");
    }, 850);

    // Stage 3 -> 4: Camera fly-through zoom into the tree vortex
    setTimeout(() => {
      setStage("fly");
      onFlyThroughChange(true);
    }, 1250);

    // Navigate to /story
    setTimeout(() => {
      router.push("/story");
    }, 2100);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      {/* Interactive Leaf Hotspot positioned precisely over the autumn leaves (Z-Index 75) */}
      <div
        ref={containerRef}
        style={{
          zIndex: 75,
          top: "44%",
          left: "54%",
          width: "23%",
          height: "23%",
        }}
        className="absolute cursor-none select-none rounded-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={handleLeafClick}
        role="button"
        tabIndex={0}
        aria-label="Click the autumn leaf to awaken the portal of light"
      >
        {/* Subtle pulsating beacon hinting that the leaf is alive */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-radial from-amber-400/25 via-rose-500/15 to-transparent pointer-events-none"
        />

        {/* CUSTOM SPECIAL CURSOR: Floating Bioluminescent Orb & Energy Spark */}
        {isHovered && stage === "idle" && (
          <motion.div
            style={{
              left: mousePos.x,
              top: mousePos.y,
              transform: "translate(-50%, -50%)",
            }}
            className="pointer-events-none absolute z-80 flex flex-col items-center"
          >
            {/* Glowing Light Orb */}
            <div className="relative flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-300 via-rose-400 to-fuchsia-400 shadow-[0_0_20px_rgba(251,191,36,1),0_0_40px_rgba(244,63,94,0.8)] animate-pulse" />
              <div className="absolute w-8 h-8 rounded-full border border-amber-300/80 animate-ping opacity-75" />
              <Sparkles className="absolute w-3.5 h-3.5 text-white animate-spin" style={{ animationDuration: "3s" }} />
            </div>

            {/* Floating Tooltip Hint */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 12 }}
              className="mt-1 whitespace-nowrap bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/60 shadow-[0_0_15px_rgba(251,191,36,0.5)] flex items-center gap-1 text-[10px] font-mono font-bold text-amber-200 tracking-wide uppercase"
            >
              <span>Touch the light</span>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* SVG Light Compass Beam & Energy Particle Path */}
      <svg
        style={{ zIndex: 78 }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="1" />
          </linearGradient>
          <filter id="beamGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* The trajectory from Leaf (65, 55) to Tree Vortex (71, 19) */}
        {(stage === "beam" || stage === "vortex" || stage === "fly") && (
          <>
            {/* Trajectory Guide Aura */}
            <motion.path
              d="M 64.5 54.5 Q 60 34 71 19"
              fill="none"
              stroke="url(#beamGradient)"
              strokeWidth="1.2"
              filter="url(#beamGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0.8] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* Glowing Traveling Energy Core */}
            <motion.circle
              r="2"
              fill="#ffffff"
              filter="url(#beamGlow)"
              initial={{ cx: 64.5, cy: 54.5 }}
              animate={{ cx: [64.5, 60, 71], cy: [54.5, 34, 19] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </>
        )}
      </svg>

      {/* Tree Vortex Energy Surge when struck by the beam */}
      <AnimatePresence>
        {(stage === "vortex" || stage === "fly") && (
          <motion.div
            style={{
              zIndex: 79,
              top: "19%",
              left: "71%",
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: [0.8, 1.8, 1.4],
              opacity: [0, 1, 0.9],
              rotate: 360,
            }}
            transition={{
              scale: { duration: 0.6, ease: "easeOut" },
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            }}
            className="pointer-events-none absolute w-24 h-24 rounded-full border-[3px] border-fuchsia-300 shadow-[0_0_60px_rgba(217,70,239,1),inset_0_0_30px_rgba(168,85,247,0.9)] flex items-center justify-center"
          >
            <div className="w-14 h-14 rounded-full border border-cyan-300 animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interdimensional Fly-Through Warp Flare */}
      <AnimatePresence>
        {stage === "fly" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 1] }}
            transition={{ duration: 0.85, ease: "easeIn" }}
            className="fixed inset-0 z-[120] pointer-events-none bg-radial from-fuchsia-500/70 via-purple-950/95 to-[#06040d]"
          />
        )}
      </AnimatePresence>
    </>
  );
}
