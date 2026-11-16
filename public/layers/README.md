# Chromatic Symbiosis - Poster Layers Manifest

This directory contains the 8 visual layer components exported from Photoshop for the **Chromatic Symbiosis** interactive experience.

All primary layers are aligned to the native **1043 × 1477 px** poster canvas, guaranteeing 1:1 pixel alignment across all depth planes.

---

## Layer Hierarchy & Stacking Order

| Stacking Order | Filename | Dimensions | Blend Mode | Parallax Depth | Role & Description |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **1 (Back)** | `background.png` | 1043 × 1477 | `normal` | `0.02x` | Deep space cosmos, nebula gases, and distant stars. |
| **2** | `smoke.png` | 2085 × 2953 (2×) | `screen` | `0.04x` | Ethereal atmospheric mist with continuous horizontal drift. |
| **3** | `tree.png` | 1043 × 1477 | `normal` | `0.06x` | Mystical portal tree. **Hosts the interactive Portal Button** inside the violet vortex eye (`/story` gateway). |
| **4** | `father.png` | 1043 × 1477 | `normal` | `0.09x` | Cosmic father figure with central ocular chest core and rainbow tendrils. |
| **5** | `left kid.png` | 1043 × 1477 | `normal` | `0.13x` | Left cosmic son holding hands, with glowing head and chest core. |
| **6** | `right kid.png` | 1043 × 1477 | `normal` | `0.13x` | Right cosmic son holding hands, with complementary chromatic energy. |
| **7** | `leaf.png` | 1043 × 1477 | `normal` | `0.18x` | Crimson floating leaves with subtle sine-wave drift and flutter. |
| **8 (Front)** | `soil.png` | 1043 × 1477 | `normal` | `0.05x` | Foreground geometric crystal platform anchoring the scene base. |

---

## Interactive Elements

- **Tree Portal Gateway (`tree.png`):**
  - **Coordinates:** Positioned over the violet vortex eye (approx. `74% X`, `28% Y`).
  - **Interaction:** Hover triggers accelerated vortex rotation and neon flare; clicking initiates a cosmic warp transition to the `/story` page.
- **Atmospheric Smoke (`smoke.png`):**
  - Exported at 2× resolution to enable smooth infinite loop panning without pixelation.
- **Children Energy Link (`left kid.png` + `right kid.png`):**
  - Subtle synchronized glow pulsing at their joined hands.
