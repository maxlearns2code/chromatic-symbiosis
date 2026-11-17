"use client";

export function SlideLearnings1() {
  const learnings = [
    {
      number: "01",
      category: "Conceptual Scope",
      title: "Narrowing Down an Overwhelming World",
      highlight: "Focusing on intimate family story over massive worldbuilding",
      takeaway:
        "Building an entire planetary world proved too vast and overwhelming. I chose to narrow the scope down to an intimate, emotional core: a father guiding his young twin sons through the mystery of light.",
    },
    {
      number: "02",
      category: "Photomontage Craft",
      title: "Managing Complex Multi-Picture Compositing",
      highlight: "Harmonizing too many disparate photo sources",
      takeaway:
        "My greatest technical hurdle was building a photomontage with so many separate pictures. Blending them into a single cohesive cavern required relentless masking, edge feathering, and matching ambient light spill.",
    },
    {
      number: "03",
      category: "Visual & Lore Synthesis",
      title: "Real Macro Leaves & Character Biology",
      highlight: "Anchoring sci-fi worldbuilding in earthly biology",
      takeaway:
        "Digitized real autumn leaf photographs and isolated light veins to mirror the twins' bioluminescent conduits, while hand-sculpting distinct poses so the brothers convey unity without mirror duplication.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 pb-16">
      {/* Minimalist Header */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
          Slide 02 • Handcrafted Evolution
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Key Learnings & Challenges:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">
            Technical & Conceptual
          </span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Three core reflections on narrowing down an overwhelming world into a focused story, photomontage craft, and visual synthesis.
        </p>
      </div>

      {/* 3-Column Minimalist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {learnings.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-purple-500/30 transition-all flex flex-col justify-between gap-4"
          >
            <div className="flex flex-col gap-2.5">
              {/* Category & Index */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="uppercase tracking-wider text-purple-300/80 font-medium">
                  {item.category}
                </span>
                <span className="text-zinc-500 font-semibold">{item.number}</span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {item.title}
              </h3>

              {/* Highlight */}
              <div className="text-xs sm:text-sm font-medium text-purple-200">
                {item.highlight}
              </div>
            </div>

            {/* Takeaway */}
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-3 border-t border-zinc-900">
              {item.takeaway}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
