import type { NextConfig } from "next";

/**
 * Next.js configuration for ETA Travel Adventures
 * - output: "export" for static site generation
 * - images.unoptimized: true to allow static export compatibility with next/image
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export compatibility
  },
};

export default nextConfig;
