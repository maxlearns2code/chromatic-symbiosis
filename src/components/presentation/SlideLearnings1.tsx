"use client";

import { Lightbulb, Wrench, Compass, Heart, Eye } from "lucide-react";

export function SlideLearnings1() {
  const learnings = [
    {
      icon: Heart,
      title: "From Cold Technical Diagram to Emotional Family Adventure",
      category: "Conceptual Development",
      color: "from-pink-500 to-rose-500",
      description:
        "My initial concept was a technical cross-section map of Saturn's ice moon layers, but it felt emotionally cold and detached. As a father of young twin boys, a conversation with my son about the colors of fallen autumn leaves inspired a much warmer vision: transforming real family curiosity into a cinematic alien adventure starring a guiding father and his twin sons.",
    },
    {
      icon: Eye,
      title: "Designing Bioluminescent Communication Without Sunlight",
      category: "Worldbuilding & Conceptual Development",
      color: "from-purple-500 to-fuchsia-500",
      description:
        "Because zero sunlight penetrates the thick ice ceiling of the moon, plants cannot photosynthesize. I developed an intelligent species that generates internal light and heat. Instead of spoken words or human eyesight, they communicate, navigate, and solve problems by projecting colored light wave frequencies and feeling thermal currents.",
    },
    {
      icon: Wrench,
      title: "Precision Manual Masking & Compositing in Photoshop",
      category: "Technical Skill",
      color: "from-blue-500 to-cyan-500",
      description:
        "Compositing complex organic silhouettes against a cosmic dark background required mastering soft layer masks, gradient feathering, and non-destructive adjustments. Merging disparate elements into a cohesive underwater mountain cavern required subtle atmospheric lighting and ambient color spill.",
    },
    {
      icon: Compass,
      title: "Twin Differentiation & Silhouette Balancing",
      category: "Technical Skill & Character Design",
      color: "from-amber-500 to-orange-500",
      description:
        "To avoid the twin brothers feeling like a lazy mirrored duplication, I manually adjusted individual limbs, head crests, body scales, and color accents. This ensured they conveyed harmonic twin unity while clearly reading as two distinct individuals with unique expressions and body language.",
    },
    {
      icon: Lightbulb,
      title: "Integrating Real-World Macro Leaf Photography",
      category: "Technical & Conceptual Synthesis",
      color: "from-emerald-500 to-teal-500",
      description:
        "The focal emotional mystery—the floating autumn leaves—was created using photographs of real fallen leaves. Seamlessly blending biological terrestrial textures into surreal alien energy streams required isolating veins of light to echo the internal bioluminescent conduits running through the boys' own bodies.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400">
          <Lightbulb className="w-4 h-4" />
          <span>Slide 2 of 4 • Handcrafted Evolution</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Key Learnings & Challenges: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">Technical & Conceptual</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Reflections on the manual craft, photo compositing challenges, and narrative breakthroughs during the creation of the Chromatic Symbiosis poster.
        </p>
      </div>

      {/* 5 Bullet Points in Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {learnings.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`p-5 rounded-2xl bg-zinc-950/80 border border-purple-500/20 shadow-lg flex flex-col gap-3 hover:border-purple-500/40 transition-all ${
                index === 0 ? "md:col-span-2 bg-gradient-to-br from-zinc-950 via-purple-950/30 to-zinc-950" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${item.color} text-white shadow-md shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">{item.title}</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
