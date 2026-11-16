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
    id: "tree",
    name: "The Living Portal Tree",
    src: "/layers/tree.png",
    zIndex: 15,
    depth: 0.04,
    blendMode: "normal",
    description: "Swirling violet tree structure functioning as an interdimensional living portal.",
  },
  {
    id: "soil",
    name: "Cavern Rock Base & Stream",
    src: "/layers/soil.png",
    zIndex: 20, // Must be behind father and kids so their bodies are visible!
    depth: 0.03,
    blendMode: "normal",
    description: "Crystalline cave bedrock and luminous subterranean stream running along the floor.",
  },
  {
    id: "smoke",
    name: "Atmospheric Thermal Mist",
    src: "/layers/smoke.png",
    zIndex: 25,
    depth: 0.04,
    blendMode: "screen",
    opacity: 0.85,
    is2x: true,
    description: "Ethereal hydrothermal smoke drifting gently across the subterranean cave.",
  },
  {
    id: "father",
    name: "The Guiding Father",
    src: "/layers/father.png",
    zIndex: 30, // Standing on the ground in front of the rock base
    depth: 0.06,
    blendMode: "normal",
    description: "Cosmic protector guiding his sons with an ocular chest core and rainbow energy tendrils.",
  },
  {
    id: "leaf",
    name: "Warm Autumn Leaves",
    src: "/layers/leaf.png",
    zIndex: 35,
    depth: 0.12,
    blendMode: "normal",
    description: "Three warm, impossible organic forms floating in the dark ocean cave.",
  },
  {
    id: "right-kid",
    name: "Twin Brother (Left Silhouette)",
    src: "/layers/right kid.png",
    zIndex: 40, // In front of the soil bed
    depth: 0.09,
    blendMode: "normal",
    description: "First twin son, holding hands to harmonize bioluminescent light energy.",
  },
  {
    id: "left-kid",
    name: "Twin Brother (Right Silhouette)",
    src: "/layers/left kid.png",
    zIndex: 41, // In front of the soil bed
    depth: 0.09,
    blendMode: "normal",
    description: "Second twin son, projecting light towards the warm leaf organisms.",
  },
];
