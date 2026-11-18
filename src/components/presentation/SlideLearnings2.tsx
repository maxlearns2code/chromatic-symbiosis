"use client";

export function SlideLearnings2() {
  const reflections = [
    {
      category: "One-Prompt Limitations",
      title: "Generating Everything at Once Leads to Frustration",
      highlight: "Interesting results, but never quite perfect",
      takeaway:
        "I tested AI to generate posters, an animated GIF, and even the entire world. Seeing how the model interpreted the concept was interesting, yet generating a complete image from a single prompt is rarely enough to achieve your exact vision and often creates frustration.",
    },
    {
      category: "Going Deeper with Code",
      title: "Full Control Through AI-Assisted Development",
      highlight: "Modifying every detail instead of settling for a flat render",
      takeaway:
        "Using AI with specific technical tools like coding is far more useful because you can go deep and adjust every detail. This allowed me to build this presentation website and recreate my handcrafted poster as an interactive 2.5D web experience.",
    },
    {
      category: "Integrated Creative Tools",
      title: "AI Inside Photoshop, Illustrator, and Blender",
      highlight: "Building what we truly want, faster and deeper",
      takeaway:
        "The real strength of AI is not one-click image generation, but working alongside specialized creative software like Photoshop, Illustrator, or Blender. Embedded inside these workflows, AI helps us execute our exact creative intent faster and with greater depth.",
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
          Why one-prompt generation falls short, and how pairing AI with code and specialized creative tools unlocks deeper control.
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
