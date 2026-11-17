"use client";

import { Sparkles, Brain, Layers, Target, Compass, Zap } from "lucide-react";

export function SlideLearnings2() {
  const reflections = [
    {
      icon: Brain,
      title: "Human Emotion vs. Generative Speed",
      category: "Intentionality",
      color: "from-purple-500 to-indigo-500",
      highlight: "AI illustrates concepts, but humans provide soul",
      takeaway:
        "AI generates cosmic palettes in seconds, but cannot invent personal meaning. The emotional core—a father's bond with his twin sons—relies strictly on lived human experience.",
    },
    {
      icon: Layers,
      title: "Flat 2D Limitations vs. 2.5D Web Parallax",
      category: "Technical Architecture",
      color: "from-fuchsia-500 to-pink-500",
      highlight: "Interactive web depth requires discrete layer masks",
      takeaway:
        "AI models produce flat monolithic images. Building reactive depth, gyro-tilt parallax, and 3D exploded views strictly requires hand-isolated layers in Photoshop.",
    },
    {
      icon: Target,
      title: "Overcoming Cliché Generative Biases",
      category: "Prompt Engineering",
      color: "from-cyan-500 to-blue-500",
      highlight: "Guiding AI beyond standard sci-fi tropes",
      takeaway:
        "Default AI models constantly defaulted to generic spaceships and neon helmets. Strict prompt engineering was needed to enforce the sunless cryo-ocean and light-wave communication lore.",
    },
    {
      icon: Zap,
      title: "Rapid Ideation & Latent Motion Divergence",
      category: "Creative Acceleration",
      color: "from-amber-500 to-yellow-500",
      highlight: "Instant exploration of vortex forms & dynamics",
      takeaway:
        "AI proved exceptionally powerful as a visual sparring partner—generating dozens of energy vortex geometries and animated motion sequences in seconds to inspire manual art.",
    },
    {
      icon: Compass,
      title: "The True Symbiosis: Hybrid Human + AI Workflow",
      category: "The Future Pipeline",
      color: "from-emerald-500 to-teal-500",
      highlight: "AI for rapid divergence, human for emotional craft",
      takeaway:
        "The ideal creative process is symbiotic: AI expands the boundaries of possibility through rapid exploration, while the human designer commands emotional intent, layer architecture, and interactive craft.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-pink-400">
          <Sparkles className="w-4 h-4" />
          <span>Slide 4 of 4 • Critical Reflection</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Key Learnings & Challenges:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
            AI Reflection Exercise
          </span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Critical synthesis of generative AI vs. manual craft: speed, layer control, prompt engineering, and hybrid workflow.
        </p>
      </div>

      {/* 5 Scannable, High-Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reflections.map((item, index) => {
          const Icon = item.icon;
          const isFeatured = index === 4;

          return (
            <div
              key={index}
              className={`p-5 rounded-2xl bg-zinc-950/80 border border-fuchsia-500/20 shadow-lg flex flex-col gap-2.5 hover:border-fuchsia-500/40 transition-all ${
                isFeatured
                  ? "md:col-span-2 bg-gradient-to-br from-zinc-950 via-fuchsia-950/25 to-zinc-950 border-fuchsia-500/30"
                  : ""
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-tr ${item.color} text-white shadow-md shrink-0`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-fuchsia-300 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug truncate">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* High-Impact Highlight Line */}
              <div className="flex items-center gap-2 pt-1 text-xs sm:text-sm font-semibold text-fuchsia-200">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shrink-0" />
                <span>{item.highlight}</span>
              </div>

              {/* Crisp Takeaway */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-3.5 border-l border-fuchsia-500/20">
                {item.takeaway}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
