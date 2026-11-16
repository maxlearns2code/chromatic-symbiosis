import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Perfect for static export or maximum Vercel rendering fidelity without image transformations
  },
};

export default nextConfig;
