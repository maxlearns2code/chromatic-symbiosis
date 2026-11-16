"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface SlideHeaderProps {
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (index: number) => void;
}

export function SlideHeader({ currentSlide, totalSlides, onSelectSlide }: SlideHeaderProps) {
  const slideTitles = [
    "1. Original Designs",
    "2. Manual Learnings",
    "3. AI-Assisted Designs",
    "4. AI Reflection",
  ];

  return (
    <header className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 border-b border-purple-500/20 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
      {/* Left: Back to interactive poster */}
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Living Poster</span>
        </Link>
      </div>

      {/* Center: Slide Progress Tabs */}
      <div className="flex items-center gap-1 bg-zinc-900/90 p-1 rounded-xl border border-white/10">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onSelectSlide(idx)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentSlide === idx
                ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-[0_0_12px_rgba(217,70,239,0.5)] font-semibold"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
            }`}
          >
            {slideTitles[idx] || `Slide ${idx + 1}`}
          </button>
        ))}
      </div>

      {/* Upper Right Corner: Student Name Badge (Clean, name only) */}
      <div className="flex items-center bg-gradient-to-r from-purple-950/60 to-fuchsia-950/60 border border-purple-500/40 px-3.5 py-1.5 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)]">
        <span className="text-xs font-semibold text-white tracking-wide">Maxime Dewynter</span>
      </div>
    </header>
  );
}
