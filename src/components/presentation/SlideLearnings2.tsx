"use client";

export function SlideLearnings2() {
  const reflections = [
    {
      number: "01",
      category: "Intentionality",
      title: "Human Emotion vs. Generative Speed",
      highlight: "AI illustrates concepts, but humans provide soul",
      takeaway:
        "AI generates cosmic palettes in seconds, but cannot invent personal meaning. The emotional core—a father's bond with his twin sons—relies strictly on lived human experience.",
    },
    {
      number: "02",
      category: "Technical Architecture",
      title: "Flat 2D Limitations vs. 2.5D Web Parallax",
      highlight: "Interactive web depth requires discrete layer masks",
      takeaway:
        "AI models produce flat monolithic images. Building reactive depth, gyro-tilt parallax, and 3D exploded views strictly requires hand-isolated layers in Photoshop.",
    },
    {
      number: "03",
      category: "Prompt Engineering",
      title: "Overcoming Cliché Generative Biases",
      highlight: "Guiding AI beyond standard sci-fi tropes",
      takeaway:
        "Default AI models constantly defaulted to generic spaceships and neon helmets. Strict prompt engineering was needed to enforce the sunless cryo-ocean and light-wave communication lore.",
    },
    {
      number: "04",
      category: "Creative Acceleration",
      title: "Rapid Ideation & Latent Motion Divergence",
      highlight: "Instant exploration of vortex forms & dynamics",
      takeaway:
        "AI proved exceptionally powerful as a visual sparring partner—generating dozens of energy vortex geometries and animated motion sequences in seconds to inspire manual art.",
    },
    {
      number: "05",
      category: "The Future Pipeline",
      title: "The True Symbiosis: Hybrid Human + AI Workflow",
      highlight: "AI for rapid divergence, human for emotional craft",
      takeaway:
        "The ideal creative process is symbiotic: AI expands the boundaries of possibility through rapid exploration, while the human designer commands emotional intent, layer architecture, and interactive craft.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 pb-16">
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
          Critical synthesis of generative AI vs. manual craft: speed, layer control, prompt engineering, and hybrid workflow.
        </p>
      </div>

      {/* Minimalist Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reflections.map((item, index) => {
          const isFeatured = index === 4;

          return (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-pink-500/30 transition-all flex flex-col gap-2.5 ${
                isFeatured
                  ? "md:col-span-2 border-pink-500/20 bg-gradient-to-br from-zinc-950/80 via-pink-950/15 to-zinc-950/80"
                  : ""
              }`}
            >
              {/* Category & Index */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="uppercase tracking-wider text-pink-300/80 font-medium">
                  {item.category}
                </span>
                <span className="text-zinc-500 font-semibold">{item.number}</span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {item.title}
              </h3>

              {/* Highlight */}
              <div className="text-xs sm:text-sm font-medium text-pink-200">
                {item.highlight}
              </div>

              {/* Takeaway */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1 border-t border-zinc-900">
                {item.takeaway}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
