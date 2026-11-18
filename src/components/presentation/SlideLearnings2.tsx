"use client";

export function SlideLearnings2() {
  const reflections = [
    {
      category: "Intentionality",
      title: "Human Emotion vs. Generative Speed",
      highlight: "AI illustrates concepts, but humans provide soul",
      takeaway:
        "AI generates cosmic palettes and motion in seconds, but cannot invent personal meaning. The emotional core, a father's bond with his twin sons, relies strictly on lived human experience and intentional prompting beyond generic sci-fi clichés.",
    },
    {
      category: "Technical Architecture",
      title: "Flat 2D Limitations vs. 2.5D Web Parallax",
      highlight: "Interactive web depth requires discrete manual layer masks",
      takeaway:
        "Generative AI produces flat, monolithic images. Building reactive depth, gyro-tilt parallax, and 3D exploded views strictly requires hand-isolated layers in Photoshop.",
    },
    {
      category: "The Future Pipeline",
      title: "The True Symbiosis: Hybrid Human + AI Workflow",
      highlight: "AI for rapid divergence, human for emotional craft",
      takeaway:
        "The ideal creative process mirrors our title: Symbiosis. AI expands the boundaries of possibility through instant visual and motion exploration, while the human designer commands emotional focus, layer architecture, and interactive craft.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 pb-16">
      {/* Minimalist Header */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono uppercase tracking-widest text-pink-400">
          Slide 04 • Critical Reflection
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Key Learnings & Challenges:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
            AI Reflection Exercise
          </span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Three core reflections evaluating generative speed, manual layer control, and the hybrid human + AI creative workflow.
        </p>
      </div>

      {/* Stacked Vertical Cards (Book-Style Reading Flow) */}
      <div className="flex flex-col gap-4">
        {reflections.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-pink-500/30 transition-all flex flex-col gap-2.5"
          >
            {/* Category */}
            <span className="text-xs font-mono uppercase tracking-wider text-pink-300/80 font-medium">
              {item.category}
            </span>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {item.title}
            </h3>

            {/* Highlight */}
            <div className="text-sm font-medium text-pink-200">
              {item.highlight}
            </div>

            {/* Takeaway */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-2 border-t border-zinc-900">
              {item.takeaway}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
