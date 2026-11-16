import { Metadata } from "next";
import { SlideDeck } from "@/components/presentation/SlideDeck";

export const metadata: Metadata = {
  title: "The Story & AI Reflection | Chromatic Symbiosis",
  description:
    "Original designs collage, manual Photoshop craft learnings, AI-assisted variations, and critical reflections by Maxime Dewynter.",
};

export default function StoryPage() {
  return <SlideDeck />;
}
