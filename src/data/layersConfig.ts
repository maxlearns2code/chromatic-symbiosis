export interface LayerConfig {
  id: string;
  name: string;
  src: string;
  zIndex: number;
  depth: number; // Parallax multiplier (0 = static)
  blendMode?: "normal" | "screen" | "lighten" | "overlay";
  opacity?: number;
  description: string;
  is2x?: boolean;
  offsetXPercent?: number; // Horizontal offset percentage to match poster composition
}

export const POSTER_LAYERS: LayerConfig[] = [
  {
    id: "background",
    name: "Cosmic Ocean & Nebula",
    src: "/layers/background.png",
    zIndex: 10,
    depth: 0.015,
    blendMode: "normal",
    description: "Deep space and sub-ice cavern filled with distant bioluminescent celestial nebulae.",
  },
  {
    id: "soil",
    name: "Cavern Rock Base & Stream",
    src: "/layers/soil.png",
    zIndex: 20, // Ground bedrock
    depth: 0.02,
    blendMode: "normal",
    description: "Crystalline cave bedrock and luminous subterranean stream running along the floor.",
  },
  {
    id: "tree",
    name: "The Living Portal Tree",
    src: "/layers/tree.png",
    zIndex: 25, // ON TOP OF THE SOIL!
    depth: 0.03,
    blendMode: "normal",
    offsetXPercent: 15, // Shifted to the right to perfectly align with the original poster composition
    description: "Swirling violet tree structure standing on top of the soil bedrock.",
  },
  {
    id: "father",
    name: "The Guiding Father",
    src: "/layers/father.png",
    zIndex: 30, // Standing on the ground
    depth: 0.04,
    blendMode: "normal",
    description: "Cosmic protector guiding his sons with an ocular chest core and rainbow energy tendrils.",
  },
  {
    id: "right-kid",
    name: "Twin Brother (Left in view)",
    src: "/layers/right kid.png",
    zIndex: 40,
    depth: 0.06,
    blendMode: "normal",
    description: "Twin son holding hands, with glowing head and chest core.",
  },
  {
    id: "left-kid",
    name: "Twin Brother (Right in view)",
    src: "/layers/left kid.png",
    zIndex: 41,
    depth: 0.06,
    blendMode: "normal",
    description: "Twin son projecting light towards the warm leaf organisms.",
  },
  {
    id: "smoke",
    name: "Atmospheric Thermal Mist",
    src: "/layers/smoke.png",
    zIndex: 45, // In front of the kids' hands
    depth: 0, // Static: DOES NOT MOVE
    blendMode: "screen",
    opacity: 0.9,
    is2x: true,
    description: "Ethereal hydrothermal smoke resting statically in front of the kids' hands.",
  },
  {
    id: "leaf",
    name: "Warm Autumn Leaves",
    src: "/layers/leaf.png",
    zIndex: 50, // On top of the smoke
    depth: 0.08,
    blendMode: "normal",
    description: "Three warm, impossible organic forms floating on top of the smoke.",
  },
];
