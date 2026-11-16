"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      {/* Sticky Presentation Header with Navigation Tabs & Student Name */}
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
    </div>
  );
}
