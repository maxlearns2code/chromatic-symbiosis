"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Compass } from "lucide-react";
import Link from "next/link";
import { SlideHeader } from "./SlideHeader";
import { SlideOriginal } from "./SlideOriginal";
import { SlideLearnings1 } from "./SlideLearnings1";
import { SlideAICollage } from "./SlideAICollage";
import { SlideLearnings2 } from "./SlideLearnings2";

export function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation support: Left / Right arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="min-h-screen w-full bg-[#06040d] flex flex-col text-zinc-100">
      {/* Sticky Presentation Header with Student Name */}
      <SlideHeader
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onSelectSlide={(idx) => setCurrentSlide(idx)}
      />

      {/* Main Slide Presentation Viewport */}
      <main className="flex-1 w-full px-4 sm:px-8 py-8 flex flex-col items-center justify-start overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full flex justify-center"
          >
            {currentSlide === 0 && <SlideOriginal />}
            {currentSlide === 1 && <SlideLearnings1 />}
            {currentSlide === 2 && <SlideAICollage />}
            {currentSlide === 3 && <SlideLearnings2 />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation Dock (rounded-xl to match cards) */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-5 py-2.5 rounded-xl bg-zinc-950/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-all text-zinc-300"
          title="Previous Slide (←)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="text-xs font-mono font-medium text-purple-200">
          Slide <span className="text-white font-bold">{currentSlide + 1}</span> of {totalSlides}
        </span>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-all text-zinc-300"
          title="Next Slide (→)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="h-4 w-[1px] bg-white/15" />

        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs text-purple-300 hover:text-white transition-colors"
        >
          <Compass className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Living Poster</span>
        </Link>
      </footer>
    </div>
  );
}
