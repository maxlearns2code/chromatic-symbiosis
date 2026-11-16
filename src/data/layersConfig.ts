export interface LayerConfig {
  id: string;
  name: string;
  src: string;
  zIndex: number;
  depth: number; // Parallax multiplier (higher = more movement)
  blendMode?: "normal" | "screen" | "lighten" | "overlay";
  opacity?: number;
  description: string;
  is2x?: boolean;
}

export const POSTER_LAYERS: LayerConfig[] = [
  {
    id: "background",
    name: "Cosmic Ocean & Nebula",
    src: "/layers/background.png",
    zIndex: 10,
    depth: 0.02,
    blendMode: "normal",
    description: "Deep space and sub-ice cavern filled with distant bioluminescent celestial nebulae.",
  },
  {
    id: "smoke",
    name: "Atmospheric Thermal Mist",
    src: "/layers/smoke.png",
    zIndex: 15,
    depth: 0.04,
    blendMode: "screen",
    opacity: 0.85,
    is2x: true,
    description: "Ethereal hydrothermal smoke drifting gently across the subterranean cave.",
  },
  {
    id: "tree",
    name: "The Living Portal Tree",
    src: "/layers/tree.png",
    zIndex: 20,
    depth: 0.06,
    blendMode: "normal",
    description: "Swirling violet tree structure functioning as an interdimensional living portal.",
  },
  {
    id: "father",
    name: "The Guiding Father",
    src: "/layers/father.png",
    zIndex: 30,
    depth: 0.09,
    blendMode: "normal",
    description: "Cosmic protector guiding his sons with an ocular chest core and rainbow energy tendrils.",
  },
  {
    id: "left-kid",
    name: "Twin Brother (Left)",
    src: "/layers/left kid.png",
    zIndex: 40,
    depth: 0.13,
    blendMode: "normal",
    description: "First twin son, reaching out with glowing bioluminescent curiosity.",
  },
  {
    id: "right-kid",
    name: "Twin Brother (Right)",
    src: "/layers/right kid.png",
    zIndex: 41,
    depth: 0.13,
    blendMode: "normal",
    description: "Second twin son, holding hands to harmonize their light energy.",
  },
  {
    id: "leaves",
    name: "Warm Autumn Leaves",
    src: "/layers/leaf.png",
    zIndex: 50,
    depth: 0.18,
    blendMode: "normal",
    description: "Three warm, impossible organic forms floating in the dark ocean cave.",
  },
  {
    id: "soil",
    name: "Cavern Rock Base",
    src: "/layers/soil.png",
    zIndex: 60,
    depth: 0.04,
    blendMode: "normal",
    description: "Foreground crystalline bedrock anchoring the bottom of the scene.",
  },
];
