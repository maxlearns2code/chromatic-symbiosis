"use client";

export function SlideLearnings1() {
  const learnings = [
    {
      number: "01",
      category: "Narrative & Intent",
      title: "From Technical Diagram to Emotional Journey",
      highlight: "Personal inspiration over cold diagrams",
      takeaway:
        "Shifted from a sterile astronomical cross-section of Saturn's ice moon to an intimate father-son adventure, inspired by conversations about autumn leaves with my young twin boys.",
    },
    {
      number: "02",
      category: "Worldbuilding",
      title: "Bioluminescent Light-Wave Language",
      highlight: "Communication without sunlight",
      takeaway:
        "In a dark sub-ice ocean cavern, characters project colored light frequencies and thermal pulses to communicate and navigate instead of spoken words.",
    },
    {
      number: "03",
      category: "Photoshop Craft",
      title: "Non-Destructive Precision Compositing",
      highlight: "Complex multi-element masking",
      takeaway:
        "Composited intricate organic silhouettes against dark cosmic space using soft layer masks, gradient feathering, and subtle ambient color spill.",
    },
    {
      number: "04",
      category: "Character Design",
      title: "Twin Silhouette Differentiation",
      highlight: "Harmony without mirror duplication",
      takeaway:
        "Hand-sculpted distinct limb poses, head crests, and color accents so the twin brothers convey harmonic unity while remaining distinctly recognizable individuals.",
    },
    {
      number: "05",
      category: "Mixed-Media Integration",
      title: "Macro Leaf Photography into Alien Lore",
      highlight: "Anchoring sci-fi in earthly biology",
      takeaway:
        "Digitized real autumn leaf photographs and isolated their veins of light to visually connect terrestrial memories with the bioluminescent physiology of the twins.",
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
          Five core takeaways covering Photoshop craftsmanship, photo compositing, and narrative worldbuilding.
        </p>
      </div>

      {/* Minimalist Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {learnings.map((item, index) => {
          const isFeatured = index === 0;

          return (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-purple-500/30 transition-all flex flex-col gap-2.5 ${
                isFeatured
                  ? "md:col-span-2 border-purple-500/20 bg-gradient-to-br from-zinc-950/80 via-purple-950/15 to-zinc-950/80"
                  : ""
              }`}
            >
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
