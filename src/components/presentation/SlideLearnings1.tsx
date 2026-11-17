"use client";

import { Lightbulb, Wrench, Compass, Heart, Eye } from "lucide-react";

export function SlideLearnings1() {
  const learnings = [
    {
      icon: Heart,
      title: "From Technical Diagram to Emotional Journey",
      category: "Narrative & Intent",
      color: "from-pink-500 to-rose-500",
      highlight: "Personal inspiration over cold diagrams",
      takeaway:
        "Shifted from a sterile astronomical cross-section of Saturn's ice moon to an intimate father-son adventure, inspired by conversations about autumn leaves with my young twin boys.",
    },
    {
      icon: Eye,
      title: "Bioluminescent Light-Wave Language",
      category: "Worldbuilding",
      color: "from-purple-500 to-fuchsia-500",
      highlight: "Communication without sunlight",
      takeaway:
        "In a dark sub-ice ocean cavern, characters project colored light frequencies and thermal pulses to communicate and navigate instead of spoken words.",
    },
    {
      icon: Wrench,
      title: "Non-Destructive Precision Compositing",
      category: "Photoshop Craft",
      color: "from-blue-500 to-cyan-500",
      highlight: "Complex multi-element masking",
      takeaway:
        "Composited intricate organic silhouettes against dark cosmic space using soft layer masks, gradient feathering, and subtle ambient color spill.",
    },
    {
      icon: Compass,
      title: "Twin Silhouette Differentiation",
      category: "Character Design",
      color: "from-amber-500 to-orange-500",
      highlight: "Harmony without mirror duplication",
      takeaway:
        "Hand-sculpted distinct limb poses, head crests, and color accents so the twin brothers convey harmonic unity while remaining distinctly recognizable individuals.",
    },
    {
      icon: Lightbulb,
      title: "Macro Leaf Photography into Alien Lore",
      category: "Mixed-Media Integration",
      color: "from-emerald-500 to-teal-500",
      highlight: "Anchoring sci-fi in earthly biology",
      takeaway:
        "Digitized real autumn leaf photographs and isolated their veins of light to visually connect terrestrial memories with the bioluminescent physiology of the twins.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400">
          <Lightbulb className="w-4 h-4" />
          <span>Slide 2 of 4 • Handcrafted Evolution</span>
        </div>
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

      {/* 5 Scannable, High-Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {learnings.map((item, index) => {
          const Icon = item.icon;
          const isFeatured = index === 0;

          return (
            <div
              key={index}
              className={`p-5 rounded-2xl bg-zinc-950/80 border border-purple-500/20 shadow-lg flex flex-col gap-2.5 hover:border-purple-500/40 transition-all ${
                isFeatured
                  ? "md:col-span-2 bg-gradient-to-br from-zinc-950 via-purple-950/25 to-zinc-950 border-purple-500/30"
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
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug truncate">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* High-Impact Highlight Line */}
              <div className="flex items-center gap-2 pt-1 text-xs sm:text-sm font-semibold text-purple-200">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                <span>{item.highlight}</span>
              </div>

              {/* Crisp Takeaway */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-3.5 border-l border-purple-500/20">
                {item.takeaway}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
