import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chromatic Symbiosis | An Animated Cosmic Tale",
  description:
    "To unlock the portal to a new world, a father must guide his sons through the mystery of light. An interactive 2.5D poster experience by Maxime Dewynter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#06040d]">
      <body className="min-h-screen bg-[#06040d] text-zinc-100 antialiased overflow-x-hidden selection:bg-purple-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
