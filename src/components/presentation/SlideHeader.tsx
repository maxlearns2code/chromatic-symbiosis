"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface SlideHeaderProps {
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (index: number) => void;
}

export function SlideHeader({ currentSlide, totalSlides, onSelectSlide }: SlideHeaderProps) {
  const slides = [
    { short: "1. Original", full: "1. Original Designs" },
    { short: "2. Learnings", full: "2. Manual Learnings" },
    { short: "3. AI Designs", full: "3. AI-Assisted Designs" },
    { short: "4. Reflection", full: "4. AI Reflection" },
  ];

  return (
    <header className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4 px-4 sm:px-6 border-b border-purple-500/20 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
      {/* Top row on mobile: Back button (left) + Name badge (right) */}
      <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 order-1">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all shadow-sm shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Living Poster</span>
        </Link>

        {/* Mobile-only Name Badge (to the right of back button) */}
        <div className="flex sm:hidden items-center bg-gradient-to-r from-purple-950/60 to-fuchsia-950/60 border border-purple-500/40 px-3 py-1.5 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0">
          <span className="text-xs font-semibold text-white tracking-wide">Maxime Dewynter</span>
        </div>
      </div>

      {/* Center: Slide Progress Tabs (Grid on mobile to fit 100% inside container, flex on desktop) */}
      <nav aria-label="Slide Navigation" className="w-full sm:w-auto grid grid-cols-4 sm:flex items-center justify-center gap-1 bg-zinc-900/90 p-1 rounded-xl border border-white/10 order-2">
        {slides.slice(0, totalSlides).map((slide, idx) => (
          <button
            key={idx}
            onClick={() => onSelectSlide(idx)}
            className={`px-1.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all text-center sm:text-left truncate sm:whitespace-nowrap ${
              currentSlide === idx
                ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-[0_0_12px_rgba(217,70,239,0.5)] font-semibold"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
            }`}
          >
            <span className="sm:hidden">{slide.short}</span>
            <span className="hidden sm:inline">{slide.full}</span>
          </button>
        ))}
      </nav>

      {/* Desktop-only Name Badge (upper right corner) */}
      <div className="hidden sm:flex items-center bg-gradient-to-r from-purple-950/60 to-fuchsia-950/60 border border-purple-500/40 px-3.5 py-1.5 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)] order-3">
        <span className="text-xs font-semibold text-white tracking-wide">Maxime Dewynter</span>
      </div>
    </header>
  );
}
