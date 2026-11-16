"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Volume2, VolumeX, Compass, Maximize2, Minimize2 } from "lucide-react";

export function ControlsBar() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Ambient synthesized deep cosmic drone using Web Audio API
  const toggleAudio = () => {
    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(55, ctx.currentTime);

      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(82.4, ctx.currentTime);

      const osc3 = ctx.createOscillator();
      osc3.type = "sine";
      osc3.frequency.setValueAtTime(110, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(260, ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
      osc3.connect(filter);
      filter.connect(masterGain);

      osc1.start();
      osc2.start();
      osc3.start();
    }

    if (isPlayingAudio) {
      gainNodeRef.current?.gain.exponentialRampToValueAtTime(0.0001, audioContextRef.current.currentTime + 1);
      setIsPlayingAudio(false);
    } else {
      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }
      gainNodeRef.current?.gain.exponentialRampToValueAtTime(0.18, audioContextRef.current.currentTime + 1.2);
      setIsPlayingAudio(true);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-80 flex items-center gap-2 p-1.5 rounded-full bg-zinc-950/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-zinc-300">
      {/* Audio Ambient Drone Toggle */}
      <button
        onClick={toggleAudio}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          isPlayingAudio
            ? "bg-fuchsia-600/80 text-white shadow-[0_0_12px_rgba(217,70,239,0.7)]"
            : "hover:bg-white/10 text-zinc-400 hover:text-white"
        }`}
        title={isPlayingAudio ? "Mute Cosmic Drone" : "Play Ambient Cosmic Drone"}
      >
        {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        <span className="text-[11px] hidden sm:inline">{isPlayingAudio ? "Mute" : "Sound"}</span>
      </button>

      {/* Fullscreen Toggle */}
      <button
        onClick={toggleFullscreen}
        className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all hidden sm:flex"
        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      >
        {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
      </button>

      <div className="w-[1px] h-4 bg-white/15 my-auto" />

      {/* Direct Link to Story & Slides */}
      <Link
        href="/story"
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-400 hover:to-fuchsia-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all"
      >
        <Compass className="w-3.5 h-3.5" />
        <span>The Story & Slides</span>
      </Link>
    </div>
  );
}
